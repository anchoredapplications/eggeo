<script setup lang="ts">
const emits = defineEmits(['close']);
const onClose = () => {
  emits('close');
};
</script>
<template>
  <main class="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
    <div class="w-full max-w-screen-sm h-1/2 px-8 sm:px-16">
      <div
        class="relative flex flex-col items-center justify-center w-full bg-white border-black border rounded shadow-2xl p-8"
      >
        <button @click="onClose" class="absolute top-1 right-1 z-50">
          <vClose />
        </button>
        <slot></slot>
      </div>
    </div>
  </main>
</template>
