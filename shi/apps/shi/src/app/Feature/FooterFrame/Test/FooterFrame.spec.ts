import { mount } from '@vue/test-utils';
import FooterFrame from '../FooterFrame.vue';

describe('FooterFrame', () => {
  it('renders properly', () => {
    const wrapper = mount(FooterFrame, {});
    expect(wrapper.text()).toContain('Welcome to FooterFrame');
  });
});
