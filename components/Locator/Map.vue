<script setup lang="ts">
import { GoogleMap, Marker, CustomMarker } from 'vue3-google-map';
import { $getEggs } from '~/composables/gateway/egg';
const eggs = ref([]);
const config = useRuntimeConfig();
const center = ref({ lat: 1, lng: 1 });

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const coords = { lat: position.coords.latitude, lng: position.coords.longitude };
      center.value = coords;
      const [response, error] = await $getEggs({ coords: coords });
      if (response && !error) eggs.value = response.data.value;
    });
  }
});
</script>

<template>
  <GoogleMap class="h-full w-full" :apiKey="config.public.mapsApiKey" :center="center" :zoom="17">
    <Marker :options="{ position: center }" />
    <CustomMarker
      v-for="egg in eggs"
      :key="egg.id"
      :options="{
        position: { lat: parseFloat(egg.coords.lat), lng: parseFloat(egg.coords.lng) },
        anchorPoint: 'CENTER',
      }"
    >
      <span>
        <EggImage :color="egg.color" class="w-6 h-6" />
      </span>
    </CustomMarker>
  </GoogleMap>
</template>
