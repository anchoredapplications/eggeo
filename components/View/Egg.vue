<script setup>
import { useGetEggs } from '~/composables/gateway/egg';

const props = defineProps(['uuid']);
const eggs = ref([]);
const [response, error] = await useGetEggs({ id: props.uuid });
eggs.value = response.data.value;
</script>

<template>
  <EggCard v-if="egg" :egg="egg" />
</template>
