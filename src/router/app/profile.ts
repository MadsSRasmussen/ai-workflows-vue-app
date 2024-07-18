import type { RouteRecordRaw } from "vue-router";
import Profile from '@/views/app/profile/Profile.vue'

export const profileRoutes: RouteRecordRaw[] = [
    {
        path: '',
        component: Profile,
        name: 'profile'
    }
] 