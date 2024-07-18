import type { RouteLocationRaw } from 'vue-router';

export type VerticalNavigationItem = {
    label: string,
    icon?: string,
    avatar?: string,
    to?: RouteLocationRaw
}