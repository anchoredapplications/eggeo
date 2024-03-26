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
const options = NAVIAGTION_OPTIONS.reduce((a, b, c) => (c % 3 ? a[a.length - 1].push(b) : a.push([b]), a), []);
</script>

<template>
  <footer class="shadow-t-xl border-t border-black bg-white flex flex-wrap items-center justify-center">
    <template v-if="signedIn">
      <span v-for="(chunk, i) of options" class="flex items-center justify-center py-2 sm:py-4">
        <template v-for="(option, j) of chunk">
          <NuxtLink :to="option.route">
            <vLabel class="w-24 bubble-hover">
              {{ option.label }}
            </vLabel>
          </NuxtLink>
          <vLabel v-if="j < chunk.length - 1" box="0 -10 40 55" class="w-4"> | </vLabel>
        </template>
        <vLabel v-if="i < options.length - 1" box="0 -10 40 55" styles="w-4 hidden sm:block"> | </vLabel>
      </span>
    </template>
    <template v-else>
      <NuxtLink :to="option.route">
        <vLabel class="w-24 bubble-hover"> Sign In </vLabel>
      </NuxtLink>
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
