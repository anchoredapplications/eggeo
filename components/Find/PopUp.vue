<script setup lang="ts">
import { $findEgg } from '~/composables/gateway/egg';
const { getSession } = useAuth();
const { user } = await getSession();

const props = defineProps(['uuid']);

const wasFound = ref<boolean>(false);
const refError = ref<string>();

onMounted(async () => {
  const [response, error] = await $findEgg({ username: user.email, id: uuid });
  if (response && !error) {
    wasFound.value = true;
  } else if (error) {
    refError.value = error;
  }
});
</script>
<template>
  <main class="absolute bg-white h-screen w-screen shadow-xl m-4">
    <h1 v-if="wasFound">Egg Found!</h1>
    <h1 v-else>Finding egg...!</h1>
    <EggImage id="popup" />
  </main>
</template>
