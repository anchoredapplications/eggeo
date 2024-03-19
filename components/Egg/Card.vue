<script setup>
defineProps({
  title: String,
  image: String,
  description: String
});
</script>

<template>
  <div class="flex flex-col items-center justify-center border shadow-xl p-4 m-4 md:max-w-md text-center">
    <h2 class="text-lg font-semibold">{{ title }}</h2>
    <span class="w-1/3">
      <img v-if="image" :src="image" :alt="title" class="w-full h-auto my-2" />
      <EggImage v-else/>
    </span>
    <p>{{ description }}</p>
  </div>
</template>

