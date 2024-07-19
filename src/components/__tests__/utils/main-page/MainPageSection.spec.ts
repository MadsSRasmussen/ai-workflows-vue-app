import { describe, test, expect } from "vitest";
import { mount } from '@vue/test-utils';
import { MainPageSection } from "@/components/utils";

const sectionContent = '<p>Section Content</p>';

describe('MainPageSection.vue', () => {
    test('renders title when "title" prop is provided', () => {
        const wrapper = mount(MainPageSection, {
            props: { title: 'Section Title' },
            slots: {
                default: sectionContent
            }
        })

        // Title renders correctly
        expect(wrapper.find('h2').exists()).toBe(true);
        expect(wrapper.find('h2').text()).toBe('Section Title');

        // Content slot renders correctly
        expect(wrapper.find('p').exists()).toBe(true);
        expect(wrapper.find('p').text()).toBe('Section Content');
    })

    test('does not render title when "title" prop is not provided', () => {
        const wrapper = mount(MainPageSection, {
            slots: {
                default: sectionContent
            }
        })

        // Title is not rendered
        expect(wrapper.find('h2').exists()).toBe(false);

        // Content slot renders correctly
        expect(wrapper.find('p').exists()).toBe(true);
        expect(wrapper.find('p').text()).toBe('Section Content');
    })

    test('renders slot content', () => {
        const wrapper = mount(MainPageSection, {
            slots: {
                default: sectionContent
            }
        })

        // Content slot renders correctly
        expect(wrapper.find('p').exists()).toBe(true);
        expect(wrapper.find('p').text()).toBe('Section Content');
    })
})
