<script lang="ts" setup>
import DPlayer from "dplayer";
import { onMounted } from "vue";
onMounted(() => {
	const dp = new DPlayer({
		container: document.getElementById("dplayer"),
		video: {
			url: "hls_videos/白兔糖_one/01.m3u8",
			type: "hls",
		},
	});
	console.log("dp log==>", dp);
});
</script>

<template>
	<h1>Details</h1>
</template>

<style scoped></style>
