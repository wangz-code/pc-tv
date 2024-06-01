<script setup lang="ts">
  import { onMounted, reactive } from "vue";
  import { queryVideoList, videoUrl } from "/@/api/hlsvideo";
  import { getNginxHref } from "/@/utils";
  import { VStore } from "/@/utils/store.ts";
  import mousetrap from "mousetrap"


  mousetrap.bind('alt+left', function() {
    console.log('Alt + 向左箭头 被按下了！🔠🔙');
    alert(123)
    // 在这里放置你要执行的自定义操作
});
  
  const emit = defineEmits<{
    detail: [value: string];
  }>();
  const key = "VideoId_Key";
  const state = reactive({
    keyCode: "" as KM,
    press: "",
    videoList: [] as any[],
  });

  let preIdx = VStore.initValue(key, 0); // 当前焦点
  const setFocus = () => setTimeout(() => document.getElementById("v" + preIdx)?.focus(), 50);

  const getVideoList = async () => {
    try {
      const { status, data } = await queryVideoList();
      if (status == 200) {
        getNginxHref(data).forEach((name, idx) => {
          state.videoList.push({
            focus: idx == 0,
            name,
            path: "",
            list: [],
            thumb: videoUrl([name,name+'.webp']),
            history: [1, 101001],
          });
        });
      }
    } catch (error) {}
  };

  getVideoList();

  // 光标移动
  const moveItem = (params: { offset: number; nextOffset: number }) => {
    return () => {
      const nextIdx = preIdx + params.offset;
      if (!state.videoList[nextIdx]) return;

      state.videoList[preIdx].focus = false;
      state.videoList[nextIdx].focus = true;

      preIdx = nextIdx;
      if (state.videoList[preIdx + params.nextOffset]) {
        state.videoList[preIdx + params.nextOffset].focus = false;
      }
      VStore.setValue(key, preIdx);
      setFocus();
    };
  };

  type KM = keyof typeof keyMap;
  const keyMap = {
    ArrowLeft: moveItem({ offset: -1, nextOffset: 1 }),
    ArrowRight: moveItem({ offset: 1, nextOffset: -1 }),
    ArrowUp: moveItem({ offset: -8, nextOffset: 8 }),
    ArrowDown: moveItem({ offset: 8, nextOffset: -8 }),
    Enter: () => emit("detail", state.videoList[preIdx].name),
    BrowserBack: () => {

      console.log("后退按钮");
      return false
      
    },
    ContextMenu:(event:any)=>{
      event.preventDefault();
      console.log("menu");
      return false
    }
  };

  onMounted(() => {
    setFocus();
    document.getElementById("v" + preIdx)?.scrollIntoView();
    document.addEventListener("keydown", (event) => {
      state.keyCode = event.code as KM;
      keyMap[state.keyCode] && keyMap[state.keyCode](event);
    });
  });
</script>

<template>
  <div class="box">
    <h1 class="mr-10">动画片</h1>
    <h1 class="mr-10">按键: {{ state.keyCode }}</h1>
    <h1 class="mr-10">动画片</h1>
  </div>
  <div class="container">
    <div v-for="(item, idx) in state.videoList" :id="`v${idx}`" :key="idx" :tabindex="idx" class="video" :class="{ mvfoucs: item.focus }">
      <div class="img" :style="{ 'background-image': 'url(' + item.thumb+ ')' }">
        <!-- <img :src="item.thumb" alt="图片" style="width: 100%" /> -->
      </div>
      <div class="tittle">{{ item.name }}</div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: repeat(8, 350px);
    max-height: calc(100vh - 60px);
    overflow: auto;
  }

  .container .video {
    border: 1px rgb(221, 221, 221) solid;
    margin: 10px;
    border-radius: 3px;
    box-shadow: 1px 2px 3px #c9c9c9;
    overflow: hidden;
  }

  .container .video:focus:not(.focus-visible) {
    outline: 6px solid red;
  }

  .container .video .img {
    height: 300px;
    width: 100%;
    background-size: 100% 100%;
    overflow: hidden;
  }

  .container .video .tittle {
    overflow: hidden;
  }

  .mvfoucs .img {
    scale: 1.1;
  }
  .box {
    display: flex;
    height: 50px;
  }
  .mr-10 {
    margin-right: 10px;
  }
</style>
