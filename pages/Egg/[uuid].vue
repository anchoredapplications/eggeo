<script setup>
  const route = useRoute();
  const egg = ref(null);
  const { data } = await useFetch(`/api/getEggs?uuid=${route.params.uuid}`, { method: "post"})
  egg.value = data.value
</script>

<template>
  <EggCard v-if="egg" :egg="egg" />
</template>
