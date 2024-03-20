<script setup lang="ts">
import { Egg as EggType } from '~/types/global.d.ts'

const props = defineProps({
  egg: EggType
});
</script>

<template>
  <div class="flex flex-col items-center justify-center border shadow-xl p-4 m-4 md:max-w-md text-center">
    <h2 class="text-lg font-semibold">{{ egg.title }}</h2>
    <span class="w-1/3">
      <img v-if="egg.image" :src="egg.image" :alt="egg.title" class="w-full h-auto my-2" />
      <EggImage :id="egg.id" v-else :color="egg.color"/>
    </span>
    <p>{{ egg.description }}</p>
  </div>
</template>

