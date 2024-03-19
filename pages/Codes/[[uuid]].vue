<template>
<div class="flex flex-wrap gap-8 items-center justify-center">
    <div v-for="egg in eggs" :key="egg.uuid" class="w-1/3 flex flex-col items-center justify-center gap-8">
        <h1>{{ egg.uuid }}</h1>
        <qrcode-vue :value="getEggUrl(eggs.uuid)" :level="level" :render-as="renderAs" />
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import eggs from '~/eggs.json'; // Import the eggs.json file
import config from '~/config.json'
import QrcodeVue, { Level, RenderAs } from 'qrcode.vue'
  
const level = ref<Level>('M')
const renderAs = ref<RenderAs>('svg')

function getEggUrl(uuid: String) {
    return `${config.url}/egg/${uuid}`;
}
</script>


<style scoped>
.qr-codes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.qr-code {
    margin: 10px;
}
</style>
