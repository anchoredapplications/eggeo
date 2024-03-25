<script setup>
import { NAVIAGTION_OPTIONS } from '~/globals/NavigationOptions.ts';
import { randomTailwindTextHoverColor } from '~/composables/colors/randomPastelColors';
const { signOut } = await useAuth();
const handleSignOut = async () => await signOut();
</script>
<template>
  <div class="flex flex-col md:flex-row">
    <NavLink v-for="option of NAVIAGTION_OPTIONS" :to="option.route">
      {{ option.label }}
    </NavLink>
    <NavLink :onClick="handleSignOut"> Sign Out </NavLink>
  </div>
</template>
