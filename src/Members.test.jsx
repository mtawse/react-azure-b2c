import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from 'semantic-ui-react';
import Members from './Members';
import user from './user';

configure({ adapter: new Adapter() });

jest.mock('./user');

it('renders data fetched in a hook', async () => {
    user.getUser.mockResolvedValue(Promise.resolve({ name: "Martin Tawse" }));
    const wrapper = mount(<Members />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    wrapper.update();
    expect(wrapper.find(Header).text()).toContain("Martin Tawse");
});