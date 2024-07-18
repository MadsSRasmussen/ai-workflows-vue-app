<script setup lang="ts">
import { useCurrentUser } from 'vuefire';
import { ApplicationLogo } from '@/components/graphic';
import { VerticalNavigation } from '@/components/utils'
import type { VerticalNavigationItem } from '@/components/utils';
import { computed } from 'vue';

const user = useCurrentUser();

const navigationItems = computed<VerticalNavigationItem[]>(() => [
    {
        label: user.value ? (user.value.displayName ? user.value.displayName : 'Unkown user') : 'Unknown user',
        avatar: user.value ? (user.value.photoURL ? user.value.photoURL : undefined) : undefined,
        to: { name: 'profile' }
    }, {
        label: 'Home',
        icon: 'pi pi-home',
        to: { name: 'home' }
    }, {
        label: 'Abacus Matematik',
        icon: 'pi pi-calculator',
        to: { name: 'abacus-matematik' }
    }
])

</script>
<template>
    <div class="w-full h-full flex flex-col gap-4 items-center bg-gray-50 dark:bg-gray-900 p-5">
        <ApplicationLogo />
        <VerticalNavigation :items="navigationItems" />
    </div>
</template>
<style scoped>
</style>