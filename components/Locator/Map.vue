<script setup>
import { GoogleMap, Marker, CustomMarker } from 'vue3-google-map'

const eggs = ref([]);
const response = await useFetch('/api/getEggs')
eggs.value = response.data.value

const config = useRuntimeConfig()
const center = ref({ lat: 1, lng: 1})

onMounted(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            center.value = { lat: position.coords.latitude, lng: position.coords.longitude}
        });
    }
})
</script>

<template>
    <GoogleMap
        class="h-screen w-full"
        :apiKey="config.public.mapsApiKey"
        :center="center"
        :zoom="17"
    >
        <Marker :options="{ position: center }" />
        <CustomMarker v-for="egg in eggs" :key="egg.id" :options="{ position: {lat: parseFloat(egg.coords.lat), lng: parseFloat(egg.coords.lng)}, anchorPoint: 'CENTER' }" >
            <span>
                <EggImage class="w-6 h-6"/>
            </span>
        </CustomMarker>
    </GoogleMap>
</template>
