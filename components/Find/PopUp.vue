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
      <vButton @click="collectEgg">Collect Egg Now</vButton>
      <vButton @click="hide">Leave Egg Hidden</vButton>
    </span>
  </vModal>
</template>
