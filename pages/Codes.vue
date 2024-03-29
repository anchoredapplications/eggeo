<script setup lang="ts">
import { useGetUserEggs } from '~/composables/gateway/egg';
import { parseLinkFromEgg } from '~/composables/parseLinkFromEgg';
import QrcodeVue from 'qrcode.vue';
import type { Level, RenderAs } from 'qrcode.vue';

const [eggs, error] = useGetUserEggs();
const level = ref<Level>('M');
const renderAs = ref<RenderAs>('svg');
</script>

<template>
  <div class="h-fit flex flex-wrap gap-4 my-24 items-center justify-center">
    <div v-for="egg in eggs" :key="egg.id" class="w-64 flex flex-col items-center justify-center gap-4">
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
  </div>
</template>
