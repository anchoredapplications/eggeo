<script setup>
import { useRoutes } from '~/globals/Routes.ts';
import { randomTailwindTextHoverColor } from '~/composables/colors/randomPastelColors';
const routes = useRoutes();
</script>
<template>
  <div class="flex flex-col md:flex-row">
    <NavLink v-for="route of routes" :route="route" variant="HEADER" />
  </div>
</template>
