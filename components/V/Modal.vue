<template>
  <main class="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
    <div class="w-full max-w-screen-sm h-1/2 p-8">
      <div class="flex flex-col items-center justify-center w-full bg-white border-black border rounded shadow-2xl p-4">
        <slot></slot>
      </div>
    </div>
  </main>
</template>
