<script setup lang="ts">
const foundEggs = useState<number>('foundEggs');
</script>

<template>
  <NuxtLink to="/">
    <span class="flex items-center justify-center gap-1">
      <EggImage :strokeWidth="10" :dimensions="{ width: 25 }" />
      <span v-if="!!foundEggs || foundEggs === 0" class="flex">
        <vLabel v-if="foundEggs < 99" box="0 -10 80 60" styles="w-8">{{ foundEggs }}</vLabel>
        <vLabel v-else box="0 -10 120 60" styles="w-8">99+</vLabel>
      </span>
      <NavLabel v-else>Egg Finder</NavLabel>
    </span>
  </NuxtLink>
</template>
