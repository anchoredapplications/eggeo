<script setup lang="ts">
import { useFindEgg, $findEgg, $collectEgg } from '~/composables/gateway/egg';
const props = defineProps<{
  uuid?: string;
  hide?: () => void;
}>();
const [foundEgg, errorFinding] = useFindEgg({ id: props.uuid });

const wasCollected = ref<boolean>();
const isCollecting = ref<boolean>();
const error = ref<string>();

const collectEgg = async () => {
  isCollecting.value = true;
  const [data, errorCollecting] = await $collectEgg({ id: props.uuid });
  if (data && !errorCollecting) wasCollected.value = true;
  else error.value = errorCollecting;
};

const disabled = computed(() => errorFinding || wasCollected.value || !foundEgg.value || isCollecting.value);
</script>

<template>
  <vModal @close="hide">
    <vLabel box="0 0 550 100" styles="w-32">
      <template v-if="!!error">Error: {{ error }}</template>
      <template v-else-if="!!wasCollected">Egg Collected!</template>
      <template v-else-if="!!isCollecting">Collecting egg...</template>
      <template v-else-if="!!foundEgg">Egg found!</template>
      <template v-else>Finding egg...</template>
    </vLabel>
    <span class="flex flex-col items-center justify-center">
      <p v-if="foundEgg">
        {{ foundEgg.Egg.title }}
      </p>
      <p>
        {{ foundEgg.Egg.description }}
      </p>
    </span>
    <EggImage id="findpopup" :dimensions="{ width: 200, height: 200 }" :color="foundEgg?.Egg?.color" />
    <span class="w-full flex justify-around pt-2">
      <vButton :disabled="disabled" @click="collectEgg" label="Collect Egg Now" />
      <vButton :disabled="disabled" @click="hide" label="Leave Egg Hidden" />
    </span>
  </vModal>
</template>
