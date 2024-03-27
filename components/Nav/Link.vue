<script setup lang="ts">
import { randomTailwindFillColor } from '~/composables/colors/randomPastelColors';
import { NavLinkVariant, NavLinkRoute, LabelVariant } from '~/types/global';
const { status, signIn, signOut } = await useAuth();

const props = defineProps<{
  to?: string;
  onClick?: () => void;
  route: NavLinkRoute;
  variant: NavLinkVariant;
  useSlot?: boolean;
}>();

const navLinkRoute = (variant: NavLinkRoute) => {
  switch (variant) {
    case NavLinkRoute.HOME:
      return {
        to: '/',
        label: 'Egg Finder',
        a11y: 'Home',
      };
    case NavLinkRoute.SIGNIN:
      return {
        to: '/signin',
        label: 'Sign In',
        a11y: 'Sign In to your Google account.',
      };
    case NavLinkRoute.SIGNOUT:
      return {
        to: '/signout',
        label: 'Sign Out',
        a11y: 'Sign out of your Google account.',
      };
    case NavLinkRoute.HIDE:
      return {
        to: '/hide',
        label: 'Hide',
        a11y: 'Scan/Hide an easter egg.',
      };
    case NavLinkRoute.LOCATOR:
      return {
        to: '/locator',
        label: 'Map',
        a11y: 'Geolocate all hidden eggs.',
      };
    case NavLinkRoute.FIND:
      return {
        to: '/find',
        label: 'Find',
        a11y: 'Scan/Find an easter egg.',
      };
    case NavLinkRoute.CODES:
      return {
        to: '/codes',
        label: 'Print',
        a11y: 'Print Egg QR Codes.',
      };
    case NavLinkRoute.CREATE:
      return {
        to: '/create',
        label: 'Create',
        a11y: 'Create/Enter Easter eggs.',
      };
  }
};

const navLinkVariant = (variant: NavLinkVariant) => {
  switch (variant) {
    case NavLinkVariant.HEADER:
      return {
        labelVariant: LabelVariant.HEADER,
        linkStyling: 'w-fit border-black border-b border-l h-full md:border-none md:p-0',
      };
    case NavLinkVariant.FOOTER:
      return {
        labelVariant: LabelVariant.FOOTER,
        linkStyling: 'w-fit p-0',
      };
    case NavLinkVariant.DYNAMIC:
      return {
        labelVariant: LabelVariant.DYNAMIC,
      };
  }
};

const option =
  props.variant && props.route ? { ...navLinkVariant(props.variant), ...navLinkRoute(props.route) } : undefined;
</script>

<template>
  <NuxtLink v-if="option && option.to" :to="option.to" :class="option.linkStyling" :ariaLabel="option.a11y">
    <vLabel :variant="option.labelVariant">
      <template v-if="option.labelVariant !== LabelVariant.DYNAMIC">
        {{ option.label }}
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </vLabel>
  </NuxtLink>
</template>
