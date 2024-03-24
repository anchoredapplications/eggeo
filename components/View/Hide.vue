<script setup lang="ts">
const uuid = ref<string>();
const isShown = ref<boolean>();
const onDetect = (val: string) => {
  uuid.value = val;
  isShown.value = true;
};
const hide = () => {
  uuid.value = undefined;
  isShown.value = false;
};
</script>

<template>
  <main class="h-screen w-full py-16">
    <vTitle>Hide</vTitle>
    <QRCodeScanner @onDetect="onDetect" />
    <HidePopUp v-if="isShown" :uuid="uuid" :hide="hide" />
  </main>
</template>
