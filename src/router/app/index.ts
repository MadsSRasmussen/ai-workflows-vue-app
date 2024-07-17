import type { RouteRecordRaw } from 'vue-router';

import { profileRoutes } from './profile';
import { abacusMatematikRoutes } from './abacus-matematik';

import Home from '@/views/app/home/Home.vue';

export const appRoutes: RouteRecordRaw[] = [{
        path: '',
        component: Home
    }, {
        path: '/profile',
        children: profileRoutes
    }, {
        path: '/abacus-matematik',
        children: abacusMatematikRoutes
    }
]