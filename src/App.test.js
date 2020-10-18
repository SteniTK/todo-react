import React from 'react';
import { getAllByDisplayValue, getAllByText, render } from '@testing-library/react';
import App from './App';

test('renders Headers & input', () => {
  const { getByText } = render(<App />);
  var linkElement = getByText(/What would you like to do today\?/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = getByText('TO DO');
  expect(linkElement).toBeInTheDocument();
});

test('delete todo item', () => {
  const { getAllByRole } = render(<App></App>);
  const deleteButton = getAllByRole('button', {'name' : 'Delete'});
});