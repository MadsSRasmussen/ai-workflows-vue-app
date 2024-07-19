import { describe, test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { VerticalNavigation, PotentialLinkWrapper } from "@/components/utils";
import type { VerticalNavigationItem } from "@/components/utils";
import { useRoute } from "vue-router";

import ForbiddenView from "@/views/ForbiddenView.vue";

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'Home', component: ForbiddenView },
    { path: '/profile', name: 'Profile', component: ForbiddenView},
    { path: '/another-route', component: ForbiddenView },
    { path: '/profile/sub-route', component: ForbiddenView }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const items: VerticalNavigationItem[] = [
    { to: { name: 'Home' }, label: 'Home', icon: 'pi pi-home' },
    { to: { name: 'Profile' }, label: 'Profile', avatar: 'SomeImage.png' }
]

const onSelectedClassAdds = "bg-gray-100 text-gray-800";

describe('VerticalNavigation.vue', () => {
    test('renders navigation items correctly', () => {
        const wrapper = mount(VerticalNavigation, {
            props: { 
                items,
                onSelectedClassAdds,
            },
            global: {
                plugins: [router],
                components: { PotentialLinkWrapper }
            }
        })

        // Both links rendered
        const navigationItems = wrapper.findAllComponents(PotentialLinkWrapper);
        expect(navigationItems.length).toBe(items.length);

        // Individual items rendered correctly
        items.forEach((item, index) => {
            const navigationItem = navigationItems[index];

            // Label renders correctly
            expect(navigationItem.text()).toContain(item.label);

            // Avatar conditionally renders
            if (item.avatar) {
                expect(navigationItem.find('img').exists()).toBe(true);
                expect(navigationItem.find('img').attributes('src')).toBe(item.avatar);
            } else {
                expect(navigationItem.find('img').exists()).toBe(false);
            }

            // Icon conditionally renders
            if (item.icon) {
                expect(navigationItem.find('span').classes().join(' ')).toContain(item.icon);
            } else {
                expect(navigationItem.find('span').exists()).toBe(false);
            }
        })
    })

    test('applies onSelectedClassAdds based on routes', async () => {
        const wrapper = mount(VerticalNavigation, {
            props: {
                items,
                onSelectedClassAdds,
            },
            global: {
                plugins: [router],
                components: { PotentialLinkWrapper }
            }
        })
        const navigationItems = wrapper.findAllComponents(PotentialLinkWrapper);
        
        router.push('/');
        await router.isReady();
        router.push(routes[1]);
        await router.isReady();
        await flushPromises();
        
        // Active classes applied
        expect(navigationItems[1].classes().join(' ')).toContain(onSelectedClassAdds);

        // Other items do not have active classes
        for (let i  = 0; i < navigationItems.length; i++) {
            if (i === 1) continue;
            expect(navigationItems[i].classes().join(' ')).not.toContain(onSelectedClassAdds);
        }
    })

    test('applies onSelectedClassAdds based on sub-routes', async () => {
        const wrapper = mount(VerticalNavigation, {
            props: {
                items,
                onSelectedClassAdds,
            },
            global: {
                plugins: [router],
                components: { PotentialLinkWrapper }
            }
        })

        router.push('/');
        await router.isReady();
        router.push(routes[3]);
        await router.isReady();

        const navigationItems = wrapper.findAllComponents(PotentialLinkWrapper);
        
        // Active classes applied
        expect(navigationItems[1].classes().join(' ')).toContain(onSelectedClassAdds);

        // Other items do not have active classes
        for (let i  = 0; i < navigationItems.length; i++) {
            if (i === 1) continue;
            expect(navigationItems[i].classes().join(' ')).not.toContain(onSelectedClassAdds);
        }
    })
})