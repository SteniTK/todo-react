import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component{
    render() {
        return (
            <li>Item #1
                <button>Delete</button>
                <button>Edit</button>
            </li>
        );
    }
}

export default TodoItem;