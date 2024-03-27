<script setup lang="ts">
import { $findEgg, $collectEgg } from '~/composables/gateway/egg';
const props = defineProps<{
  uuid?: string;
  hide?: () => void;
}>();
const wasHidden = ref<boolean>(false);
const refError = ref<string>();

onMounted(async () => {
  const [response, error] = await $findEgg({ username: user.email, id: uuid });
  if (response && !error) {
    wasFound.value = true;
  } else if (error) {
    refError.value = error;
  }
});

const deleteEgg = () => {
  const [response, error] = $collectEgg({ id: uuid });
};
</script>

<template>
  <vModal @close="hide">
    <vSubtitle v-if="wasHidden">Egg found!</vSubtitle>
    <vSubtitle v-else>Finding egg...</vSubtitle>
    <EggImage id="findpopup" :dimensions="{ width: 200, height: 200 }" />
    <span class="w-full flex justify-around pt-2">
      <vButton @click="collectEgg" label="Collect Egg Now" />
      <vButton @click="hide" label="Leave Egg Hidden" />
    </span>
  </vModal>
</template>
