<script setup lang="ts">
import { $createEgg } from '~/composables/gateway/egg';
const title = defineModel<string>('title');
const description = defineModel<string>('description');
const color = defineModel<string>('color');
const refError = ref<string>();
const isDisabled = ref(false);
color.value = '#FFFF00';
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
  <div class="h-screen w-screen justify-center items-center flex flex-col">
    <vLabel box="0 0 600 200" class="w-3/4 sm:w-1/2">Create an Egg</vLabel>
    <form
      class="w-full max-w-screen-md justify-center items-center flex flex-col gap-4 mx-4 px-4"
      @submit.prevent="handleSubmit"
    >
      <input
        v-model="title"
        type="text"
        placeholder="Title"
        required
        class="w-full shadow-xl p-2 mx-4 border border-gray-300 rounded"
      />
      <textarea
        v-model="description"
        placeholder="Description"
        required
        class="w-full shadow-xl p-2 mx-4 border border-gray-300 rounded"
      ></textarea>
      <input
        v-model="color"
        type="color"
        required
        class="w-full shadow-xl rounded h-16 border border-gray-300 rounded"
      />
      <button
        :disabled="isDisabled"
        type="submit"
        :class="{ 'bg-blue-100': isDisabled }"
        class="w-full shadow-xl p-2 mx-4 bg-blue-500 text-white p-4 rounded border border-black my-[1px] hover:border-2 hover:my-0 active:bg-blue-400"
        aria-label="create-button"
      >
        Submit
      </button>
      <i v-if="refError" class="w-full p-2 px-4 text-red-600">{{ refError }}</i>
    </form>
  </div>
</template>
