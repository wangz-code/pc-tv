<script setup lang="ts">
    import { fk } from "@/a";
    import HelloWorld from "./components/HelloWorld.vue";
    import { Fuck } from "@wailsjs/go/main/App";

    const msg = ref("");
    const onFuck = async () => {
        try {
            console.log("Fuck log==>", Fuck);
            console.log("fk log==>", fk);
            const res = await Fuck("");
            msg.value = "info";
        } catch (error) {}
    };
</script>

<template>
    <h1>{{ msg }}</h1>
    <n-space>
        <n-button>Default</n-button>
        <n-button type="tertiary"> Tertiary </n-button>
        <n-button type="primary"> Primary </n-button>
        <n-button type="info"> Info </n-button>
        <n-button type="success"> Success </n-button>
        <n-button type="warning"> Warning </n-button>
        <n-button type="error" @click="onFuck"> Error </n-button>
    </n-space>
</template>

<style scoped></style>
