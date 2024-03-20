<script setup>
import eggsData from '~/eggs.json';

const route = useRoute();
const eggId = route.params.uuid;

const egg = ref(null);
egg.value = eggsData.find(egg => egg.uuid === eggId);
</script>

<template>
  <EggCard :title="egg.title" :image="egg.image" :description="egg.description" />
</template>
