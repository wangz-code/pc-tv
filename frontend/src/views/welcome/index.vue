<script setup>
import { ref } from "vue";
import { VideoDetail, VideoList } from "@/components/video/index";
const show = ref("list");

const showDetail = () => {
	show.value = "detail";
	console.log("showDetail log==>");
};

const showList = () => {
	show.value = "list";
};
</script>
<template>
	<h1>welcome {{ show }}</h1>
	<VideoList v-if="show == 'list'" @detail="showDetail"></VideoList>
	<VideoDetail v-if="show == 'detail'" @back="showList"></VideoDetail>
</template>
