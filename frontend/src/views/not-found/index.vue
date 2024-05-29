<template>
	<div class="content">
		<a-result class="result" status="404" subtitle="页面未找到"> </a-result>
		<div class="operation-row">
			<a-button key="back" type="primary" @click="back"> 返回 </a-button>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const back = () => {
	router.push({ path: "/" });
};
</script>

<style scoped>
.content {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -95px;
	margin-top: -121px;
	text-align: center;
}
</style>
