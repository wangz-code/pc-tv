<script setup lang="ts">
  import { VideoDetail } from "/@/components/video/index";
  import { useRoute,useRouter } from "vue-router";

  const {name} = useRoute().params as {name:string};
  const router = useRouter()
  const showList = () => {
    router.back()
  };
  
</script>
<template>
  <VideoDetail :vname="name" @back="showList"></VideoDetail>
</template>
