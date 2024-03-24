<script setup>
import { randomTailwindBackgroundColor } from '~/composables/colors/randomTailwindColors';
</script>
<template>
  <button
    :class="`font-comic-sans text-lg tracking-tighter font-semibold text-center p-2 shadow-xl border border-black -mx-[1px] ${randomTailwindBackgroundColor()}`"
  >
    <slot></slot>
  </button>
</template>
