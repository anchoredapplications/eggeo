<script setup lang="ts">
import { $hideEgg } from '~/composables/gateway/egg';
const props = defineProps<{
  uuid?: string;
  hide?: () => void;
}>();
const wasHidden = ref<boolean>(false);
const refError = ref<string>();

onMounted(async () => {
  navigator?.geolocation.getCurrentPosition(async (position) => {
    const coords = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    const [response, error] = await $hideEgg({ coords: coords, id: props.uuid });

    if (response && !error) {
      wasHidden.value = true;
    } else if (error) {
      refError.value = error;
    }
  });
});
</script>
<template>
  <vModal @close="hide">
    <vSubtitle v-if="wasHidden">Egg Hidden!</vSubtitle>
    <vSubtitle v-else>Hidding egg...!</vSubtitle>
    <EggImage id="hidepopup" :dimensions="{ width: 200 }" />
  </vModal>
</template>
