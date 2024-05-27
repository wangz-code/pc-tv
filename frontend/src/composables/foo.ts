export const count = ref(0);
export const doubled = computed(() => count.value * 2);
