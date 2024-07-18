import type { RouteRecordRaw } from "vue-router";
import AbacusMatematik from "@/views/app/abacus-matematik/AbacusMatematik.vue";

export const abacusMatematikRoutes: RouteRecordRaw[] = [
    {
        path: '',
        component: AbacusMatematik,
        name: 'abacus-matematik'
    }
]