<script lang="ts" setup>
import { ref, reactive } from "vue";

interface Video {
	name: string;
	path: string;
	list: string[]; // 列表, 子目录的 .m3u8文件 , 有几个便是几集
	thumb: string; // 缩略图
	history: number[]; // 历史记录, [0]:剧集 [1]:时分秒
	focus: boolean; // 历史记录, [0]:剧集 [1]:时分秒
}

const keyDown = reactive({
	code: "",
});
const videoList = ref<Video[]>([]);
for (let i = 0; i < 100; i++) {
	videoList.value.push({
		focus: i == 0,
		name: "白兔塘" + i,
		path: "",
		list: [],
		thumb: i % 2 ? "https://img2.imgtp.com/2024/05/28/iOGYn0id.webp" : "https://img2.imgtp.com/2024/05/28/cl6D1cqW.jpg",
		history: [1, 101001],
	});
}

// 获取焦点
let preIdx = 0;
const onMvFocus = (idx: number) => {
	if (preIdx != idx) {
		videoList.value[preIdx].focus = false;
		preIdx = idx;
	}
	videoList.value[idx].focus = true;
};

function debounce(func: Function, delay: number) {
	let timer: number;
	return (...args: any[]) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
}

const setFocus = () => {
	setTimeout(() => {
		const element = document.getElementById("v" + preIdx);
		element?.focus();
	}, 0);
};

document.addEventListener("keydown", (event) => {
	keyDown.code = event.code;
	switch (keyDown.code) {
		case "ArrowRight":
			if (!videoList.value[preIdx + 1]) return;
			preIdx += 1;
			videoList.value[preIdx].focus = true;
			videoList.value[preIdx - 1].focus = false;

			break;
		case "ArrowUp":
			if (!videoList.value[preIdx - 8]) return;
			preIdx -= 8;
			videoList.value[preIdx].focus = true;
			videoList.value[preIdx + 8].focus = false;
			break;
		case "ArrowLeft":
			if (!videoList.value[preIdx - 1]) return;
			preIdx -= 1;
			videoList.value[preIdx].focus = true;
			videoList.value[preIdx + 1].focus = false;
			break;
		case "ArrowDown":
			if (!videoList.value[preIdx + 8]) return;
			preIdx += 8;
			videoList.value[preIdx].focus = true;
			videoList.value[preIdx - 8].focus = false;
			break;
	}
	setFocus();
});
</script>

<template>
	<div class="box">
		<h1 class="mr-10">动画片</h1>
		<h1 class="mr-10">按键: {{ keyDown.code }}</h1>
		<h1 class="mr-10">动画片</h1>
	</div>
	<div class="container">
		<div v-for="(item, idx) in videoList" :id="'v' + idx" :key="idx" :tabindex="idx" class="video" :class="{ mvfoucs: item.focus }" @focus="onMvFocus(idx)">
			<div class="img">
				<img :src="item.thumb" alt="" srcset="" width="100%" />
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
}
.mr-10 {
	margin-right: 10px;
}
</style>
