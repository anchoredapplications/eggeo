<script setup lang="ts">
const foundEggs = useState('foundEggs');
</script>

<template>
  <NuxtLink to="/">
    <span class="flex items-center justify-center gap-1">
      <EggImage class="block h-8 w-auto" :strokeWidth="10" :dimensions="{ width: 25 }" />
      <vSubtitle class="text-3xl">
        {{ foundEggs }}
      </vSubtitle>
    </span>
  </NuxtLink>
</template>
