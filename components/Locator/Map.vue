<script setup lang="ts">
import { GoogleMap, CustomMarker } from 'vue3-google-map';
import { $getEggs } from '~/composables/gateway/egg';
import { useGeolocation } from '@vueuse/core';

const { coords, locatedAt } = useGeolocation();
const validate = (c: unknown) => {
  const coords = checkIsFloat(parseLatLng(c));
  return coords;
};
const parseLatLng = (c) => {
  return c.value
    ? {
        lat: c.value.lat ?? c.value.latitude,
        lng: c.value.lng ?? c.value.longitude,
      }
    : {
        lat: c.lat ?? c.latitude,
        lng: c.lng ?? c.longitude,
      };
};
const checkIsFloat = (coords: { lat: number | string; lnt: number | string }) => {
  return {
    lat: parseFloat(coords.lat),
    lng: parseFloat(coords.lng),
  };
};

const eggs = ref([]);
const config = useRuntimeConfig();
const center = ref({ lat: 0, lng: 0 });
const searchedCoords = ref();
const searchedTime = ref();

const loadEggs = async () => {
  const [response, error] = await $getEggs({ coords: validate(coords) });
  if (response && !error) {
    eggs.value = response.value;
    searchedCoords.value = validate(coords);
    searchedTime.value = locatedAt;
  }
};

const surpassedDistanceThreshold = (searched: any, current: any) => {
  if (!searched || !searched.value) return true;
  if (!current || !current.value) return true;

  const s = searched.value;
  const c = current.value;

  return Math.abs(s.lat - c.lat) > 0.1 || Math.abs(s.lng - c.lng) > 0.1;
};

const surpassedTimeThreshold = (searched: any, current: any) => {
  if (!searched || !searched.value) return true;
  if (!current || !current.value) return true;

  const s = searched.value;
  const c = current.value;

  return Math.abs(s - c) > 60000;
};

watch(locatedAt, async (newValue) => {
  center.value = validate(coords);
  if (
    !eggs.value.length ||
    surpassedDistanceThreshold(searchedCoords, center) ||
    surpassedTimeThreshold(searchedTime, newValue)
  ) {
    loadEggs();
  }
});
</script>

<template>
  <GoogleMap class="h-full w-full" :apiKey="config.public.mapsApiKey" :center="center" :zoom="17">
    <CustomMarker key="current-user" :options="{ position: center, anchorPoint: 'CENTER' }">
      <span key="current-user-marker" class="flex items-center justify-center flex-col">
        <vUser :dimensions="{ width: 25 }" />
      </span>
    </CustomMarker>
    <CustomMarker
      v-for="egg in eggs"
      :key="egg.id"
      :options="{
        position: validate(egg.coords),
        anchorPoint: 'CENTER',
      }"
    >
      <span :key="egg.id" class="flex items-center justify-center flex-col">
        <EggImage :color="egg.color" :dimensions="{ width: 25 }" />
      </span>
    </CustomMarker>
  </GoogleMap>
</template>
