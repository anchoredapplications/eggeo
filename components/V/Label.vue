<script setup lang="ts">
import { randomTailwindFillColor } from '~/composables/colors/randomPastelColors';
defineProps<{ styles?: string; box?: string; color: string }>();
</script>
<template>
  <svg :viewBox="box ?? '0 0 380 100'" preserveAspectRatio="xMinYMin meet" :class="[styles, 'bubble-svg']">
    <text
      x="50%"
      y="51%"
      dominant-baseline="middle"
      text-anchor="middle"
      :class="[color ?? randomTailwindFillColor(), 'bubble-text']"
    >
      <slot></slot>
    </text>
  </svg>
</template>
