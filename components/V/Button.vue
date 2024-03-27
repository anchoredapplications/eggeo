<script setup lang="ts">
import { randomTailwindBackgroundColor } from '~/composables/colors/randomPastelColors';
defineProps<{ label?: string; a11y?: string }>();
</script>
<template>
  <button
    :class="`font-comic-sans text-lg tracking-tighter font-semibold text-center p-2 shadow-xl border border-black -mx-[1px] ${randomTailwindBackgroundColor()}`"
    :ariaLabel="a11y ?? label"
  >
    {{ label }}
  </button>
</template>
