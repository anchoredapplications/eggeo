<template>
<div class="flex flex-wrap gap-8 my-16 items-center justify-center">
    <div v-for="egg in eggs" :key="egg.id" class="w-1/3 flex flex-col items-center justify-center gap-8">
        <h1>{{ egg.id }}</h1>
        <span class="relative flex align-center justify-center">
            <EggImage class="w-52" :id="egg.id" />
            <qrcode-vue class="absolute top-28 bg-white -m-2 p-2 border-2 border-black" :value="getEggUrl(egg.id)" :level="level" :render-as="renderAs" />
        </span>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'
import type { Level, RenderAs } from 'qrcode.vue'

const eggs = ref([]);
const { data } = await useFetch('/api/getEggs')
eggs.value = data.value

const level = ref<Level>('M')
const renderAs = ref<RenderAs>('svg')
const config = useRuntimeConfig()
function getEggUrl(uuid: String) {
    return `${config.public.url}/egg/${uuid}`;
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
