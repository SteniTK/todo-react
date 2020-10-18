import React from 'react';
import { render } from '@testing-library/react';
import './TodoItem.js';
import TodoItem from './TodoItem.js';

test('is todoItem label rendering', () => {
    const { getByDisplayValue } = render(<TodoItem label="todoitem"/>);
    const todoElement = getByDisplayValue("todoitem");
    expect(todoElement.value).toBe("todoitem");
});