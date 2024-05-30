<script setup lang="ts">
  import { onMounted, reactive, toRaw } from "vue";
  import { VStore } from "/@/utils/store.ts";

  const emit = defineEmits(["detail"]);
  const state = reactive({
    keyCode: "" as KM,
    press: "",
    videoList: [] as any[],
  });
  const videoList = state.videoList;

  for (let i = 0; i < 100; i++) {
    videoList.push({
      focus: i == 0,
      name: "白兔塘" + i,
      path: "",
      list: [],
      thumb: i % 2 ? "https://img2.imgtp.com/2024/05/28/iOGYn0id.webp" : "https://img2.imgtp.com/2024/05/28/cl6D1cqW.jpg",
      history: [1, 101001],
    });
  }
  const key = "VideoId_Key";
  let preIdx = VStore.initValue(key, 0); // 当前焦点

  const setFocus = () =>
    setTimeout(() => {
      document.getElementById("v" + preIdx)?.focus();
    }, 0);

  // 光标移动
  const moveItem = (params: { offset: number; nextOffset: number }) => {
    return () => {
      const nextIdx = preIdx + params.offset;
      if (!videoList[nextIdx]) return;

      videoList[preIdx].focus = false;
      videoList[nextIdx].focus = true;

      preIdx = nextIdx;
      if (videoList[preIdx + params.nextOffset]) {
        videoList[preIdx + params.nextOffset].focus = false;
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
    Enter: () => emit("detail", toRaw(videoList[preIdx])),
  };

  onMounted(() => {
    setFocus();
    document.getElementById("v" + preIdx)?.scrollIntoView();
    document.addEventListener("keydown", (event) => {
      state.keyCode = event.code as KM;
      keyMap[state.keyCode] && keyMap[state.keyCode]();
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
    <div v-for="(item, idx) in videoList" :id="'v' + idx" :key="idx" :tabindex="idx" class="video" :class="{ mvfoucs: item.focus }">
      <div class="img">
        <img :src="item.thumb" alt="图片" style="width: 100%" />
      </div>
      <div class="tittle">{{ item.name }} {{ "v" + idx }}</div>
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
