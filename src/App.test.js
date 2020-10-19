import React from 'react';
import { getAllByDisplayValue, getAllByText, render } from '@testing-library/react';
import App from './App';
import { shallow, mount } from 'enzyme';

test('renders Headers & input', () => {
  const { getByText } = render(<App />);
  var linkElement = getByText(/What would you like to do today\?/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = getByText('TO DO');
  expect(linkElement).toBeInTheDocument();
});

test('delete todo item', () => {
  const wrapper = mount(<App></App>);
  let todeleteItem = wrapper.find('#todo-0');
  const todeleteItemLabel = todeleteItem.find('input').props().value;
  console.log(todeleteItemLabel);
  const deleteButton = todeleteItem.find('button').at(1);
  deleteButton.props().onClick();
  
  // modal function is called but delete has not happened yet.
  // unable to find modal in wrapper
  
  const yesButton = wrapper.debug();
  console.log(yesButton);
  // console.log(wrapper.find('li').length);
  // let nowFirstItem = wrapper.find('#todo-0').find('input').props().value;
  // console.log(nowFirstItem);
});