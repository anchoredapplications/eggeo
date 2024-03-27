<template>
  <div class="flex flex-wrap gap-8 my-16 items-center justify-center">
    <div v-for="egg in eggs" :key="egg.id" class="w-1/3 flex flex-col items-center justify-center gap-4">
      <vSubtitle class="w-32">{{ egg.title }}</vSubtitle>
      <span
        class="m-4 mt-0 p-4 border-black border-2 shadow-xl flex flex-col items-center justify-center"
        :style="`background-color: ${egg.color ?? '#ffffff'}`"
      >
        <qrcode-vue :class="`border-2 border-black`" :value="egg.id" :level="level" :render-as="renderAs" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetEggs } from '~/composables/gateway/egg';
import QrcodeVue from 'qrcode.vue';
import type { Level, RenderAs } from 'qrcode.vue';

const [eggs, error] = useGetEggs();
const level = ref<Level>('M');
const renderAs = ref<RenderAs>('svg');
</script>
