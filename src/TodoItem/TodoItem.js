import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component{
    onDeleteHandler = (event) => {
        this.props.onDeleteTodo(this.props.id);
    }

    render() {
        return (
            <li>
                {this.props.label}
                <button onClick={this.onDeleteHandler}>Delete</button>
                <button>Edit</button>
                <span>{this.props.status}</span>
            </li>
        );
    }
}

export default TodoItem;