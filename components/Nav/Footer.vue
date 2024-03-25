<script setup>
import { NAVIAGTION_OPTIONS } from '~/globals/NavigationOptions.ts';
const { status, signOut, signIn } = await useAuth();

const isOpen = ref(false);

const buttonClasses = computed(() => {
  return isOpen.value
    ? 'inline-flex items-center justify-center p-2 rounded-md hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
    : 'inline-flex items-center justify-center p-2 rounded-md hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white';
});

const handleSignIn = async () => await signIn();
const handleSignOut = async () => await signOut();

const signedIn = status.value === 'authenticated';
const options = NAVIAGTION_OPTIONS;
</script>

<template>
  <footer class="shadow-t-xl border-t border-black bg-white flex items-center justify-center flex-wrap">
    <template v-if="signedIn">
      <template v-for="(link, index) of options">
        <NuxtLink :to="link.route">
          <vLabel class="w-24 bubble-hover">
            {{ link.label }}
          </vLabel>
        </NuxtLink>
        <vLabel box="0 -10 40 55" class="w-4 min-h-16 py-4"> | </vLabel>
      </template>
      <template>
        <button @click="handleSignOut" class="flex items-center justify-center">
          <vLabel class="w-24 bubble-hover"> Sign Out </vLabel>
        </button>
      </template>
    </template>
    <template v-else>
      <button @click="handleSignIn" class="flex items-center justify-center">
        <vLabel class="w-24 bubble-hover"> Sign in </vLabel>
      </button>
    </template>
  </footer>
</template>

<style>
@media print {
  nav {
    visibility: hidden;
    display: none;
  }
}
</style>
