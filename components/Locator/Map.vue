<script setup lang="ts">
import { GoogleMap, CustomMarker } from 'vue3-google-map';
import { useGetEggsNearLocation } from '~/composables/gateway/egg';
import { useGeolocation } from '@vueuse/core';

const config = useRuntimeConfig();
const center = ref({ lat: 0, lng: 0 });
const searchedCoords = ref();
const searchedTime = ref();

const validate = (c: unknown) => {
  const coords = checkIsFloat(parseLatLng(c));
  return coords;
};
const parseLatLng = (c: any) => {
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
const surpassedDistanceThreshold = (searched: any, current: any) => {
  if (!searched || !searched?.value) return true;
  if (!current || !current?.value) return true;

  const s = searched?.value;
  const c = current?.value;

  return Math.abs(s.lat - c.lat) > 0.1 || Math.abs(s.lng - c.lng) > 0.1;
};
const surpassedTimeThreshold = (searched: any, current: any) => {
  if (!searched || !searched.value) return true;
  if (!current || !current.value) return true;

  const s = searched.value;
  const c = current.value;

  return Math.abs(s - c) > 60000;
};

const { coords, locatedAt } = useGeolocation();
const [eggs, errors, refresh] = useGetEggsNearLocation({ coords: coords });

const filtered = (listOfEggs: any) => {
  if (!listOfEggs || !Array.isArray(listOfEggs)) return [];

  return listOfEggs.filter((egg: any) => !!egg.coords && !!egg.coords.lat && !!egg.coords.lng);
};
watch(locatedAt, async (newValue, oldValue) => {
  center.value = validate(coords);
  if (
    !oldValue ||
    surpassedDistanceThreshold(searchedCoords, coords) ||
    surpassedTimeThreshold(searchedTime, newValue)
  ) {
    refresh();
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
      v-for="egg in filtered(eggs)"
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
