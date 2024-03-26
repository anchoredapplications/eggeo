<script setup lang="ts">
const { signIn } = await useAuth();
await signIn('google', { callbackUrl: '/dashboard' });
</script>
