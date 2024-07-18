<script setup lang="ts">
import { useSignin } from '@/composables';
import { ApplicationLogo } from '@/components/graphic';

const { signinWithGooglePopup } = useSignin()
</script>
<template>
    <div class="w-full h-[100vh] flex justify-center">
        <div class="w-72 flex flex-col items-center justify-center gap-4 h-full">
            <ApplicationLogo />
            <Button icon="pi pi-google" class="w-full" severity="secondary" label="Login med Google" @click="signinWithGooglePopup" />
        </div>
    </div>
</template>