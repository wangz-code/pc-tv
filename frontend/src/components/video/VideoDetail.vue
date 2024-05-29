<script setup>
import DPlayer from "dplayer";
import { onMounted } from "vue";
const emit = defineEmits(["back"]);
onMounted(() => {
	const dp = new DPlayer({
		container: document.getElementById("dplayer"),
		video: {
			url: "hls_videos/白兔糖_one/01.m3u8",
			type: "hls",
		},
	});
});

const toBack = () => {
	emit("back", 123);
};
</script>

<template>
	<h1>Details</h1>
	<div class="container">
		<div id="dplayer"></div>
	</div>
	<button @click="toBack">back</button>
</template>

<style scoped>
.container {
	width: 100%;
	display: flex;
	justify-content: center;
}
#dplayer {
	width: 60%;
}
</style>
