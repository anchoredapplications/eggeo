<template>
  <div class="max-w-full h-screen">
    <NavHeader class="fixed bg-white w-full top-0 z-50" />
    <main class="relative bg-sky-200 h-full">
      <slot></slot>
    </main>
    <NavFooter class="relative bg-a w-full bottom-0 z-50" />
  </div>
</template>
