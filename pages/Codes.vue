<script setup lang="ts">
import { useGetUserEggs } from '~/composables/gateway/egg';
import { parseLinkFromEgg } from '~/composables/parseLinkFromEgg';
import QrcodeVue from 'qrcode.vue';
import { randomTailwindBackgroundColor } from '~/composables/colors/randomPastelColors';
import type { Level, RenderAs } from 'qrcode.vue';

const [eggs, error] = useGetUserEggs();
const level = ref<Level>('M');
const renderAs = ref<RenderAs>('svg');
const color = randomTailwindBackgroundColor();
const handlePrint = () => {
  window.print();
};
</script>

<template>
  <button
    @click="handlePrint"
    id="printer"
    :class="`w-16 h-16 p-2 border border-black shadow-xl aspect-square rounded-full fixed top-24 right-6 active:opacity-80 ${color}`"
  >
    <vPrinter />
  </button>
  <section id="item-pane" class="h-fit flex flex-wrap gap-4 my-24 items-center justify-center">
    <div v-for="egg in eggs" :key="egg.id" id="item" class="w-64 flex flex-col items-center justify-center gap-4">
      <vSubtitle class="w-32">{{ egg.title }}</vSubtitle>
      <span
        class="m-4 mt-0 p-4 border-black border-2 shadow-xl flex flex-col items-center justify-center"
        :style="`background-color: ${egg.color ?? '#ffffff'}`"
      >
        <span class="border border-black bg-white p-4">
          <qrcode-vue :value="parseLinkFromEgg(egg.id)" :level="level" :render-as="renderAs" />
        </span>
      </span>
    </div>
  </section>
</template>

<style>
@media print {
  #printer {
    display: none;
  }
  #item-pane {
    padding: 0;
    gap: 0;
    margin: 0;
    break-inside: avoid-page;
    height: fit-content;
    padding-bottom: 100px;
  }
  #item {
    break-inside: avoid-page !important;
    break-before: always;
    print-color-adjust: exact;
    box-shadow: none;
  }
}
</style>
