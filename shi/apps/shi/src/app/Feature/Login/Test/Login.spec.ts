import { mount } from '@vue/test-utils';
import Login from '../Login.vue';

describe('Login', () => {
  it('renders properly', () => {
    const wrapper = mount(Login, {});
    expect(wrapper.text()).toContain('Welcome to Login');
  });
});
