<script setup lang="ts">
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const auth = useFirebaseAuth();
const user = useCurrentUser();

const error = ref<any>(null);

function handleLogin() {

    if (!auth) throw new Error('No Firebase Auth instance detected');

    if(user.value) {
        router.push({ name: 'home' });
        return;
    }

    signInWithPopup(auth, new GoogleAuthProvider)
        .then(() => {
            router.push({ name: 'home' })
        })
        .catch((err) => {
            console.error('Signin failed', err);
            error.value = err;
        })

}
</script>
<template>
    <h1>Login</h1>
    <Button @click="handleLogin">Login</Button>
</template>