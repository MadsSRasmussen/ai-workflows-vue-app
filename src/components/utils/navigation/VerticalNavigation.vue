<script setup lang="ts">
import type { VerticalNavigationItem } from './types';
import type { RouteLocationRaw } from 'vue-router';
import { useRouter, useRoute } from 'vue-router';
import { PotentialLinkWrapper } from '@/components/utils';

defineProps<{
    items: VerticalNavigationItem[],
    onSelectedClassAdds: string,
}>();

const route = useRoute();
const router = useRouter();

function isSubRoute(to?: RouteLocationRaw): boolean {

    if (!to) return false;

    const targetRoute = router.resolve(to);
    if (route.path === "/") return targetRoute.path === "/";
    if (targetRoute.path === "/") return route.path === targetRoute.path;
    return route.path.startsWith(targetRoute.path);

}
</script>
<template>
    <div class="flex flex-col gap-2 w-full">
        <PotentialLinkWrapper 
            v-for="item in items" 
            :to="item.to" 
            class="text-gray-500 w-full h-8 p-2 flex items-center gap-2 hover:bg-gray-100 transition-colors hover:cursor-pointer rounded-md font-medium" 
            :class="isSubRoute(item.to) ? onSelectedClassAdds : ''"
        >
            <img class="h-6 rounded-full" v-if="item.avatar" :src="item.avatar" />
            <div class="w-6 flex justify-center" v-if="item.icon">
                <span :class="item.icon"></span>
            </div>
            {{ item.label }}
        </PotentialLinkWrapper>
    </div>
</template>