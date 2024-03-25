<script setup>
import { useGetEggs } from '~/composables/gateway/egg';

const eggs = ref([]);
const [response, error] = await useGetEggs();
eggs.value = response.data.value;
</script>

<template>
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-4">Egg Finder</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <EggCard v-for="egg of eggs" :key="egg.id" :egg="egg" />
    </div>
  </div>
</template>
