<script setup lang="ts">
const foundEggs = useState('foundEggs');
</script>

<template>
  <main class="flex flex-col items-center justify-center w-full h-full py-32">
    <vLabel class="w-2/3 sm:w-1/3 md:w-1/4 lg:w-1/5">Jeremiah's</vLabel>
    <vDigitsLabel label="Egg Finder" />
    <div class="relative max-w-screen-sm w-2/3 sm:w-1/3 md:w-1/4 lg:w-1/5">
      <EggImage />
      <div
        v-if="!!foundEggs || foundEggs === 0"
        class="absolute top-0 flex flex-col justify-center items-center w-full h-full mt-8"
      >
        <vLabel class="w-full h-fit" color="fill-white" box="0 0 120 120">{{ foundEggs }}</vLabel>
      </div>
    </div>

    <vCloud v-for="n in 10" :key="`cloud-${n}`" />
  </main>
</template>
