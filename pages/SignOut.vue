<script setup lang="ts">
const { signOut } = await useAuth();
await signOut();
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard',
  },
});
</script>
