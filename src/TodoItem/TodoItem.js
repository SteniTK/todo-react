import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component{
    render() {
        return (
            <li>
                {this.props.label}
                <button>Delete</button>
                <button>Edit</button>
                <span>{this.props.status}</span>
            </li>
        );
    }
}

export default TodoItem;