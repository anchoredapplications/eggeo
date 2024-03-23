<script setup>
import { NAVIAGTION_OPTIONS } from '~/globals/NavigationOptions.ts';
import { randomTailwindTextColor } from '~/composables/util/randomTailwindTextColor.ts';
const { signOut } = await useAuth();
const handleSignOut = async () => await signOut();
</script>
<template>
  <div class="flex flex-col md:flex-row">
    <NavLink v-for="option of NAVIAGTION_OPTIONS" :style="`hover:${randomTailwindTextColor()}`">
      <NuxtLink :to="option.route">{{ option.label }}</NuxtLink>
    </NavLink>
    <NavLink :style="'hover:text-orange-600'">
      <button @click="handleSignOut">Sign Out</button>
    </NavLink>
  </div>
</template>
