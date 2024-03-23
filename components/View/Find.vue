<script setup lang="ts">
const uuid = ref<string>();
const onDetect = (val: string) => {
  uuid.value = val;
};
const { getSession } = useAuth();
</script>

<template>
  <main class="h-screen w-screen py-16">
    <vTitle>Find</vTitle>
    <QRCodeScanner @onDetect="onDetect" />
    <FindPopUp v-if="uuid" :uuid="uuid" />
  </main>
</template>
