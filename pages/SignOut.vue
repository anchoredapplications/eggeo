<script setup lang="ts">
const { signOut } = await useAuth();
await signOut({callbackUrl: "/"});
</script>
