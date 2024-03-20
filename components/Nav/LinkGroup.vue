<script setup>
  const baseStyle = "text-sm text-center border-t border-slate-500 py-4 px-8 md:border-none"
</script>
<template>
    <div class="flex flex-col md:flex-row">
      <div :class="['hover:text-cyan-600',baseStyle]">
        <NuxtLink to="/scanner" >Scanner</NuxtLink>
      </div>
      <div :class="['hover:text-pink-600',baseStyle]">
        <NuxtLink to="/locator">Map</NuxtLink>
      </div>
    </div>
</template>