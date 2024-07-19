import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { MainPageSection, MainPageSectionContainer } from "@/components/utils";

describe('MainPageSectionContainer.vue', () => {
    test('renders MainPageSection components correctly', () => {
        const wrapper = mount(MainPageSectionContainer, {
            slots: {
                default: `
                    <MainPageSection title="Section 1">
                        <p>Content 1</p>
                    </MainPageSection>
                    <MainPageSection title="Section 2">
                        <p>Content 2</p>
                    </MainPageSection>
                `   
            },
            global: {
                components: {
                    MainPageSection,
                }
            }
        })

        const sections = wrapper.findAllComponents(MainPageSection);
        
        // MainPageSections both rendered
        expect(sections.length).toBe(2);

        // First section renderes correctly
        expect(sections[0].find('h2').text()).toBe('Section 1');
        expect(sections[0].find('p').text()).toBe('Content 1');

        // Second section renderes correctly
        expect(sections[1].find('h2').text()).toBe('Section 2');
        expect(sections[1].find('p').text()).toBe('Content 2');
    })
})
