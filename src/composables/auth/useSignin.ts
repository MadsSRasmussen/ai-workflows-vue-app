import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCurrentUser, useFirebaseAuth } from "vuefire";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export function useSignin() {

    const signinPending = ref<boolean>(false);
    const error = ref<any>(null)

    const user = useCurrentUser();
    const auth = useFirebaseAuth();
    const router = useRouter();

    async function signinWithGooglePopup() {

        if(user.value) {
            
            router.push({ name: 'home' });
        
        } else {
            
            if (!auth) throw new Error('No Firebase Auth instance detected');

            signinPending.value = true;

            signInWithPopup(auth, new GoogleAuthProvider)
                .then(() => {
                    signinPending.value = false;
                    router.push({ name: 'home' })
                })
                .catch((err) => {
                    signinPending.value = false;
                    error.value = err;
                    console.error('Signin failed', err);
                })
        }

    }

    return {
        signinPending,
        error,
        signinWithGooglePopup
    }

}