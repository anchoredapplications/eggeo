<script setup>
const baseStyle = 'text-sm text-center border-t border-slate-500 py-4 px-8 md:border-none';
defineProps(['style']);
</script>
<template>
  <div :class="[baseStyle, style]">
    <slot></slot>
  </div>
</template>
