import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/What would you like to do today\?/i);
  expect(linkElement).toBeInTheDocument();
});
