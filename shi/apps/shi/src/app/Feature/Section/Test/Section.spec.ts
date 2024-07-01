import { mount } from '@vue/test-utils';
import Section from '../Section.vue';

describe('Section', () => {
  it('renders properly', () => {
    const wrapper = mount(Section, {});
    expect(wrapper.text()).toContain('Welcome to Section');
  });
});
