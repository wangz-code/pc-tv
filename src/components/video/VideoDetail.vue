<script setup lang="ts">
  import { onBeforeUnmount, onMounted } from "vue";
  import { queryVideoDetail, videoUrl } from "/@/api/hlsvideo";
  import { getNginxHref } from "/@/utils";
  import { reactive } from "vue";
  import { ref } from "vue";
  import { disKey, dpHls, dpNormal } from "./index";
  import { LocalStore } from "/@/utils/localstore.ts";
  const emit = defineEmits<{
    back: [];
  }>();
  const props = defineProps<{
    vname: string;
  }>();
  type videoItem = {
    focus: boolean;
    name: string;
    url: string;
  };

  let dp: any;
  let timeId: NodeJS.Timeout;
  let count = 0;
  let historyValue = LocalStore.getValue(props.vname) || { history: [0, 0], 0: 0 }; //  {历史:[剧集,时间],剧集01:时间,剧集02:时间}

  console.log(historyValue);

  const M3U8 = ".m3u8";
  const videoIdx = ref(historyValue.history[0]); // 剧集
  const setFocus = () => setTimeout(() => document.getElementById("d" + videoIdx.value)?.focus(), 50);
  const dpRef = ref(null);
  const state = reactive({
    fullScreen: false,
    pause: true,
    videoItem: [] as videoItem[],
  });

  const getVideoDetail = async () => {
    try {
      const { status, data } = await queryVideoDetail(props.vname);
      if (status == 200) {
        let videoList = getNginxHref(data).filter((item) => item.includes(M3U8));

        console.log(videoList);
        
        let isM3u8 = true
        const otherList = getNginxHref(data).filter((item) => item.includes(".mp4"));
        if(!videoList.length){
          videoList = otherList
          isM3u8 = false
        }
        const list = [] as videoItem[];
        videoList.forEach((item, idx) => {
          list.push({
            focus: idx == 0,
            name: item.replace(M3U8, ""),
            url: videoUrl([props.vname, item]),
          });
        });
       
        const his = historyValue.history; // 检查是否存在历史记录
        if(isM3u8) dp = dpHls(dpRef, list[Number(his[0])].url);
        if(!isM3u8)  dp = dpNormal(dpRef, list[Number(his[0])].url);
        state.videoItem = list;
        dp.seek(Number(his[1])); // 跳转到特定时间
        dp.play();
      }
    } catch (error) {
      console.log("报错 log==>", error);
    }
  };
  let delayPlay: NodeJS.Timeout;
  const moveItem = (params: { offset: number; nextOffset: number }) => {
    return () => {
      const preIdx = videoIdx.value;
      const nextIdx = preIdx + params.offset;
      if (!state.videoItem[nextIdx]) return;

      state.videoItem[preIdx].focus = false;
      state.videoItem[nextIdx].focus = true;

      videoIdx.value = nextIdx;
      historyValue[0] = videoIdx.value;

      if (state.videoItem[preIdx + params.nextOffset]) {
        state.videoItem[preIdx + params.nextOffset].focus = false;
      }
      setFocus();

      // 3秒后自动开始播放
      delayPlay && clearTimeout(delayPlay);
      delayPlay = setTimeout(() => {
        // 检查有没有历史记录
        const his = historyValue[videoIdx.value];
        const vData = state.videoItem[videoIdx.value];
        dp.destroy();
        dp = dpHls(dpRef, vData.url);
        if (his) dp.seek(Number(his[videoIdx.value]));
        dp.play();
      }, 1500);
    };
  };
  const toBack = (event: any) => {
    event.preventDefault();
    document.fullscreenElement ? dp.fullScreen.cancel("browser") : emit("back");
  };

  const toHome = (event: any) => {
    event.preventDefault();
    if (document.fullscreenElement) dp.fullScreen.cancel("browser");
    emit("back");
  };
  // 上下左右非全屏是选集, 全屏时快进和音量
  const keyMap = {
    ArrowLeft: moveItem({ offset: -1, nextOffset: 1 }), // 选集
    ArrowRight: moveItem({ offset: 1, nextOffset: -1 }),
    ArrowUp: moveItem({ offset: -8, nextOffset: 8 }),
    ArrowDown: moveItem({ offset: 8, nextOffset: -8 }),
    ContextMenu: disKey,
    BrowserHome: toHome,
    Escape: toBack,
    BrowserBack: toBack,
    Enter: () => {
      // 单击是暂停/播放
      // 双击是全屏
      count++;
      dp.toggle();
      if (count >= 2) {
        document.fullscreenElement ? dp.fullScreen.cancel("browser") : dp.fullScreen.request("browser"); // browser
        count = 0; // 重置计数
        setTimeout(() => {
          const con = document.getElementById("dplayer");
          con?.click(); // 需要触发click 不然无法使用dplayer中的hotkey快进
        }, 1500);
      }
      timeId && clearTimeout(timeId);
      timeId = setTimeout(() => (count = 0), 1500); // 2秒内双击则全屏, 否则重置
    },
  };

  type KM = keyof typeof keyMap;
  const keyDownFn = (event: { code: string }) => {
    const call = keyMap[event.code as KM];
    call && call(event);

    // 保存视频进度
    if (dp) {
      console.log("videoIdx.value", videoIdx.value);

      historyValue.history = [videoIdx.value, dp.video.currentTime];
      historyValue[videoIdx.value] = dp.video.currentTime;
      LocalStore.setValue(props.vname, historyValue);
      console.log("缓存 log==>", LocalStore);
    }
  };

  onMounted(() => {
    getVideoDetail();
    document.addEventListener("keydown", keyDownFn);
    setFocus();
  });

  onBeforeUnmount(() => {
    document.removeEventListener("keydown", keyDownFn);
  });
</script>

<template>
  <div class="container">
    <a-card :style="{ width: '80%' }" :title="vname" :bordered="false">
      <div id="dplayer" ref="dpRef" tabindex="0"></div>
      <a-card title="剧集" hoverable :bordered="false">
        <a-space>
          <a-button :id="'d' + idx" :type="videoIdx == idx ? 'primary' : 'outline'" v-for="(item, idx) in state.videoItem">{{ `第${item.name}集` }}</a-button>
        </a-space>
      </a-card>
    </a-card>
    <a-card :style="{ width: '20%', marginLeft: '24px' }" title="说明" hoverable :bordered="false">
      <div>
        <h3>全屏状态: 左右对应快退/快进</h3>
        <h3>全屏状态: 双击上下切换剧集</h3>
        <h3>默认状态: 左右选择剧集 </h3>
        <h3>确认键: 单击暂停, 双击切换全屏 </h3>
      </div>
      <div> <img src="/img/contro.jpg" alt="" style="width: 100%" /> </div>
    </a-card>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 3vh 10vh 1vh 10vh;
    box-sizing: border-box;
    background-color: var(--color-fill-2);
  }
</style>
