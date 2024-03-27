<script setup lang="ts">
import { useHideEgg } from '~/composables/gateway/egg';
const props = defineProps<{
  uuid?: string;
  hide?: () => void;
  location: any;
}>();
const [hiddenEgg, errorHidding] = useHideEgg({ coords: props.location, id: props.uuid });
</script>
<template>
  <vModal @close="hide">
    <vLabel box="0 0 550 100" styles="w-32">
      <template v-if="!!errorHidding">Error: {{ errorHidding }}</template>
      <template v-else-if="!!hiddenEgg">Egg Hidden!</template>
      <template v-else>Hidding egg...</template>
    </vLabel>
    <EggImage id="hidepopup" :dimensions="{ width: 200 }" />
  </vModal>
</template>
