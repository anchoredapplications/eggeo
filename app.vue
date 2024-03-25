<script setup lang="ts">
import { useGetFoundEggs } from '~/composables/gateway/egg';
const foundEggs = useState<number>('foundEggs');

await callOnce(async () => {
  const [response, error] = await useGetFoundEggs();
  foundEggs.value = response.data.value;
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
