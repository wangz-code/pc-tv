<script setup lang="ts">
  import Hls from "hls.js";
  import DPlayer from "dplayer";
  import { onBeforeUnmount, onMounted } from "vue";
  const emit = defineEmits(["back"]);

  let dp: DPlayer;
  let timeId: NodeJS.Timeout;
  let count = 0;
  const state = {
    fullScreen: false,
    pause: true,
  };
  const moveItem = (opt: any) => {
    console.log("opt log==>", opt);
  };
  const keyMap = {
    ArrowLeft: moveItem({ offset: -1, nextOffset: 1 }), // 快退
    ArrowRight: moveItem({ offset: 1, nextOffset: -1 }), // 快进
    ArrowUp: moveItem({ offset: -8, nextOffset: 8 }), // 上一集
    ArrowDown: moveItem({ offset: 8, nextOffset: -8 }), // 下一集
    Unidentified: () => emit("back"),
    ContextMenu: () => emit("back"),
    Enter: () => {
      // 单击是暂停/播放
      // 双击是全屏
      count++;
      dp.toggle();
      console.log("state.count log==>", count);
      if (count >= 2) {
        state.fullScreen = !state.fullScreen;
        state.fullScreen ? dp.fullScreen.cancel("web") : dp.fullScreen.request("web");
        count = 0; // 重置计数

        setTimeout(() => {
          const con = document.getElementById("dplayer");
          // 添加点击事件监听器
          con?.addEventListener("click", function () {
            console.log("con被点击了！");
          });
          // 在运行时主动触发按钮点击事件
          con?.click();
          console.log("聚焦 log==>");
        }, 2000);
      }
      timeId && clearTimeout(timeId);
      timeId = setTimeout(() => (count = 0), 1500); // 2秒内双击则全屏, 否则重置
    },
  };

  type KM = keyof typeof keyMap;
  const keyDownFn = (event: { code: string }) => {
    const call = keyMap[event.code as KM];
    call && call();
  };

  onMounted(() => {
    const dpDom = document.getElementById("dplayer");
    dp = new DPlayer({
      container: dpDom,
      volume: 0.9,
      video: {
        url: "hls_videos/白兔糖_one/01.m3u8",
        type: "customHls",
        customType: {
          customHls: function (video: any) {
            const hls = new Hls();
            hls.loadSource(video.src);
            hls.attachMedia(video);
          },
        },
      },
    });
    dp.play();
    document.addEventListener("keydown", keyDownFn);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("keydown", keyDownFn);
  });
</script>

<template>
  <div class="container">
    <div id="dplayer" tabindex="0"></div>
    <img src="/img/contro.jpg" alt="" style="width: 25%" />
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10%;
  }
  #dplayer {
    width: 60%;
  }
</style>
