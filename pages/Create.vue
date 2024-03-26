<script setup lang="ts">
import { $createEgg } from '~/composables/gateway/egg';
const title = defineModel('title');
const description = defineModel('description');
const username = defineModel('username');
const color = defineModel('color');
const refError = ref<string>();
const isDisabled = ref(false);

const handleSubmit = async () => {
  isDisabled.value = true;
  const trimTitle = title.value?.trim();
  const trimDescription = description.value?.trim();
  const trimColor = color.value?.trim();

  if (!!trimTitle || !!trimDescription) {
    const [response, error] = await $createEgg({
      title: trimTitle,
      description: trimDescription,
      color: trimColor,
    });
    isDisabled.value = false;
    if (response && !error) {
      title.value = undefined;
      description.value = undefined;
    } else if (error) {
      refError.value = error;
    }
  }
};
</script>

<template>
  <main class="h-screen w-screen py-16">
    <form class="flex flex-col gap-4 w-full pt-8" @submit.prevent="handleSubmit">
      <input v-model="title" type="text" placeholder="Title" required class="p-2 border border-gray-300 rounded" />
      <textarea
        v-model="description"
        placeholder="Description"
        required
        class="p-2 border border-gray-300 rounded"
      ></textarea>
      <input v-model="color" type="color" required class="w-full h-16 border border-gray-300 rounded" />
      <button
        :disabled="isDisabled"
        type="submit"
        :class="{ 'bg-blue-100': isDisabled }"
        class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
      <i v-if="refError" class="text-red-600">{{ refError }}</i>
    </form>
  </main>
</template>
