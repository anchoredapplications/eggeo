<script setup>
const { status, signIn } = await useAuth();

const isOpen = ref(false);

const buttonClasses = computed(() => {
  return isOpen.value
    ? 'inline-flex items-center justify-center p-2 rounded-md hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
    : 'inline-flex items-center justify-center p-2 rounded-md hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white';
});

const handleSignIn = async () => await signIn();

const signedIn = status.value === 'authenticated';
</script>

<template>
  <nav class="shadow-xl border-b border-black bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NavLogo />

        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <NavLink v-if="!signedIn" :style="'hover:text-cyan-600 border-none'">
            <button @click="handleSignIn">Sign In</button>
          </NavLink>
          <NavLinkGroup v-else />
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <NavLink v-if="!signedIn" :style="'hover:text-cyan-600 border-none'">
            <button @click="handleSignIn">Sign In</button>
          </NavLink>
          <button v-else @click="isOpen = !isOpen" :class="buttonClasses" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              v-if="!isOpen"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              v-else
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="signedIn"
      :class="{ absolute: isOpen, hidden: !isOpen }"
      class="bg-white border-1 border-black z-50 right-0 shadow-xl md:hidden"
    >
      <NavLinkGroup />
    </div>
  </nav>
</template>

<style>
@media print {
  nav {
    visibility: hidden;
    display: none;
  }
}
</style>
