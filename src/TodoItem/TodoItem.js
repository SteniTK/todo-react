import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component{
    
    onDeleteHandler = (event) => {
        this.props.onDeleteTodo(this.props.id);
    }

    onStatusChangeHandler = (event) => {
        this.props.onStatusChangeHandler(this.props.id, event.target.value);
    }

    render() {
        return (
            <li>
                {this.props.label}
                <button onClick={this.onDeleteHandler}>Delete</button>
                <button>Edit</button>
                <select value={this.props.status} onChange={this.onStatusChangeHandler}>
                    <option>to-do</option>
                    <option>in-progress</option>
                    <option>complete</option>
                </select>
            </li>
        );
    }
}

export default TodoItem;