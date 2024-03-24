<script setup lang="ts">
import { GoogleMap, Marker, CustomMarker } from 'vue3-google-map';
import { $getEggs } from '~/composables/gateway/egg';
import { useGeolocation } from '@vueuse/core';

const { coords, locatedAt, resume, pause } = useGeolocation();
const location = (c) => ({ lat: c.latitude, lng: c.longitude });
const eggs = ref();
const config = useRuntimeConfig();
const center = ref();

watch(locatedAt, async (newVal, oldVal) => {
  if (oldVal === null || oldVal === undefined) {
    const [response, error] = await $getEggs({ coords: location(coords) });
    if (response && !error) {
      eggs.value = response.data.value;
    }
  } else {
    center.value = location(coords);
  }
});
</script>

<template>
  <GoogleMap class="h-full w-full" :apiKey="config.public.mapsApiKey" :center="location(coords)" :zoom="17">
    <CustomMarker key="current-user" :options="{ position: location(coords), anchorPoint: 'CENTER' }">
      <span key="current-user-marker" class="flex items-center justify-center flex-col">
        <vUser :dimensions="{ width: 25 }" />
      </span>
    </CustomMarker>
    <CustomMarker
      v-for="egg in eggs"
      :key="egg.id"
      :options="{
        position: { lat: parseFloat(egg.coords.lat), lng: parseFloat(egg.coords.lng) },
        anchorPoint: 'CENTER',
      }"
    >
      <span :key="egg.id" class="flex items-center justify-center flex-col">
        <EggImage :color="egg.color" :dimensions="{ width: 25 }" />
      </span>
    </CustomMarker>
  </GoogleMap>
</template>
