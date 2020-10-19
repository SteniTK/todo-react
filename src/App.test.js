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
  var numberOfItems = wrapper.find('li').length;
  // find first todoItem and click on delete
  let todeleteItem = wrapper.find('#todo-0');
  const todeleteItemLabel = todeleteItem.find('input').props().value;
  const deleteButton = todeleteItem.find('button').at(1);
  deleteButton.props().onClick();
  // modal function is called but delete has not happened yet.
  wrapper.update();    
  // give modal yes
  wrapper.find('.modal-box>button').at(1).props().onClick();
  // update todo list render
  wrapper.update();

  expect(wrapper.find('li').length).toBe(numberOfItems-1);
  let nowFirstItem = wrapper.find('#todo-0').find('input').props().value;
  expect(nowFirstItem).not.toEqual(todeleteItemLabel);
});