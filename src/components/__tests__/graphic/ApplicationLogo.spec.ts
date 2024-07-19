import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { ApplicationLogo } from "@/components/graphic";

describe('ApplicationLogo.vue', () => {
    test('renders title element', () => {
        const wrapper = mount(ApplicationLogo);

        // Title element renders correctly
        expect(wrapper.find('h1').exists()).toBe(true);
        expect(wrapper.find('h1').text()).toBeTruthy();
    })
})