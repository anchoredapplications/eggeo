<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard',
  },
});

const { signIn } = useAuth();
onMounted(async () => {
  await signIn('google', { callbackUrl: '/dashboard' });
});
</script>
