<script setup lang="ts">
import { randomTailwindFillColor } from '~/composables/colors/randomPastelColors';
const props = defineProps<{
  to?: string;
  onClick?: () => void;
}>();
</script>
<template>
  <NuxtLink v-if="to" :to="to" class="p-2 border-black border-b border-l w-full h-full md:border-none md:p-0">
    <NavLabel>
      <slot></slot>
    </NavLabel>
  </NuxtLink>
  <button @click="onClick" v-else class="p-2 border-black border-b border-l w-full h-full md:border-none md:p-0">
    <NavLabel>
      <slot></slot>
    </NavLabel>
  </button>
</template>
