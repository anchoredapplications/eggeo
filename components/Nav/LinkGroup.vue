<script setup>
import { NAVIAGTION_OPTIONS } from '~/globals/NavigationOptions.ts';
import { randomTailwindTextHoverColor } from '~/composables/colors/randomPastelColors';
const { signOut } = await useAuth();
const handleSignOut = async () => await signOut();
</script>
<template>
  <div class="flex flex-col md:flex-row">
    <NuxtLink v-for="option of NAVIAGTION_OPTIONS" :to="option.route">
      <NavLink :class="randomTailwindTextHoverColor()">
        {{ option.label }}
      </NavLink>
    </NuxtLink>
    <button class="w-full h-full" @click="handleSignOut">
      <NavLink :style="'hover:text-orange-600'"> Sign Out </NavLink>
    </button>
  </div>
</template>
