<script setup lang="ts">
import { useGetFoundEggs } from '~/composables/gateway/egg';
const foundEggs = useState<number>('foundEggs');
</script>

<template>
  <vSubtitle>Jeremiah's</vSubtitle>
  <vTitle>Egg Finder</vTitle>
  <div class="relative max-w-screen-sm w-4/5 sm:w-1/3">
    <EggImage />
    <div class="absolute top-0 flex flex-col justify-center items-center w-full h-full mt-8">
      <div class="rounded-full shadow-xl aspect-square bg-white border-2 border-black p-4 pb-6 text-center">
        <h1 class="text-8xl leading-none pb-0 mb-0">
          {{ foundEggs }}
        </h1>
        <h5 class="text-xl font-semibold tracking-tighter pt-0 mt-0 leading-3">eggs found</h5>
      </div>
    </div>
  </div>
</template>
