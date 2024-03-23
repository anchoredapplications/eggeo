<script setup lang="ts">
import { $hideEgg } from '~/composables/gateway/egg';
const props = defineProps(['uuid', 'show']);
const wasHidden = ref<boolean>(false);
const refError = ref<string>();

const hide = () => {
  props.show(false);
};

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
  <vModal>
    <button @click="hide" class="absolute top-1 right-1 z-50">Close</button>
    <vSubtitle v-if="wasHidden">Egg Hidden!</vSubtitle>
    <vSubtitle v-else>Hidding egg...!</vSubtitle>
    <EggImage id="hidepopup" :dimensions="{ width: 200 }" />
  </vModal>
</template>
