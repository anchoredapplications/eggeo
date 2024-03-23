<script setup>
const route = useRoute();
const uuid = route.params.uuid;
</script>

<template>
  <ViewEgg :uuid="uuid" />
</template>
