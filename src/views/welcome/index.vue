<script setup lang="ts">
  import { ref } from "vue";
  import { VideoDetail, VideoList } from "/@/components/video/index";
  const show = ref<"list" | "detail">("list");
  const vname = ref("");
  const showDetail = (name: string) => {
    show.value = "detail";
    vname.value = name;
  };

  const showList = () => {
    show.value = "list";
  };
</script>
<template>
  <VideoList v-if="show == 'list'" @detail="showDetail"></VideoList>
  <VideoDetail v-if="show == 'detail'" :vname="vname" @back="showList"></VideoDetail>
</template>
