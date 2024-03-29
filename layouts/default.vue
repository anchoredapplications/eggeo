<template>
  <div class="max-w-full overflow-x-hidden">
    <NavHeader class="fixed bg-white w-full top-0 z-50" />
    <main class="relative bg-sky-200 h-screen max-w-full overflow-x-hidden">
      <slot></slot>
    </main>
    <NavFooter class="relative bg-white w-full min-h-12 bottom-0 z-50" />
  </div>
</template>
