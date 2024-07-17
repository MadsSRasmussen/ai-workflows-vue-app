<script setup lang="ts">
import { useSignin } from '@/composables';

const { signinWithGooglePopup } = useSignin()
</script>
<template>
    <h1>Login</h1>
    <Button @click="signinWithGooglePopup">Login</Button>
</template>