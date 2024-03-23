<script setup lang="ts">
const uuid = ref<string>();
const showPopUp = ref<boolean>();
const onDetect = (val: string) => {
  uuid.value = val;
  showPopUp.value = true;
};
const show = (visible: bool) => {
  showPopUp.value = visible;
};
</script>

<template>
  <main class="h-screen w-full py-16">
    <vTitle>Hide</vTitle>
    <QRCodeScanner @onDetect="onDetect" />
    <HidePopUp v-if="showPopUp" :uuid="uuid" :show="show" />
  </main>
</template>
