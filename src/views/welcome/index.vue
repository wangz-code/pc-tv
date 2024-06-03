<script setup lang="ts">
  import { VideoList } from "/@/components/video/index";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const showDetail = (name: string) => {
    router.push({ path: `/detail/${name}` });
  };
</script>
<template>
  <VideoList @detail="showDetail"></VideoList>
</template>
