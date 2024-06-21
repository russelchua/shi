import { mount } from '@vue/test-utils';
import MainFrame from '../MainFrame.vue';

describe('MainFrame', () => {
  it('renders properly', () => {
    const wrapper = mount(MainFrame, {});
    expect(wrapper.text()).toContain('Welcome to MainFrame');
  });
});
