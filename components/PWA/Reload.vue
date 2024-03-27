<script setup>
const { $pwa } = useNuxtApp();
onMounted(() => {
  if ($pwa.offlineReady) console.log('App ready to work offline');
});
</script>

<template>
  <!-- You can use $pwa directly in templates! -->
  <div v-show="$pwa.needRefresh">
    <span> New content available, click on reload button to update. </span>

    <button @click="$pwa.updateServiceWorker()">Reload</button>
  </div>
</template>
