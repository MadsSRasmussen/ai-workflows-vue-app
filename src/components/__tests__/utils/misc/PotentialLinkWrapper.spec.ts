import { describe, test, expect } from 'vitest';
import { mount, RouterLinkStub } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { PotentialLinkWrapper } from '@/components/utils';

const router = createRouter({
    history: createWebHistory(),
    routes: []
})

describe('PotentialLinkWrapper.vue', () => {
    test('renders RouterLink when "to" prop is provided', () => {
        const wrapper = mount(PotentialLinkWrapper, {
            props: { to: { name: 'Some Route' } },
            global: {
                plugins: [router],
                stubs: {
                    RouterLink: RouterLinkStub
                }
            },
            slots: {
                default: 'Link Text'
            }
        })

        expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(true);
        expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({ name: 'Some Route' });
        expect(wrapper.findComponent(RouterLinkStub).text()).toBe('Link Text');
    })

    test('renders a div when "to" prop is not provided', () => {
        const wrapper = mount(PotentialLinkWrapper, {
            slots: {
                default: 'Non-Link Text'
            }
        })

        expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(false);
        expect(wrapper.find('div').exists()).toBe(true);
        expect(wrapper.find('div').text()).toBe('Non-Link Text');
    })
})