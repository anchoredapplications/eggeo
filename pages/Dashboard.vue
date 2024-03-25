<script setup lang="ts">
import { useGetFoundEggs } from '~/composables/gateway/egg';
const foundEggs = useState<number>('foundEggs');

await callOnce(async () => {
  const [response, error] = await useGetFoundEggs();

  if (response.data.value?.status === 'unauthenticated') {
    foundEggs.value = null;
  } else {
    foundEggs.value = response.data.value;
  }
});
</script>

<template>
  <Home />
</template>
