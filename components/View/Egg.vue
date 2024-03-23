<script setup>
const props = defineProps(['uuid']);
const egg = ref(null);
const { data } = await useFetch(`/api/getEggs?uuid=${props.uuid}`, { method: 'post' });
egg.value = data.value;
</script>

<template>
  <EggCard v-if="egg" :egg="egg" />
</template>
