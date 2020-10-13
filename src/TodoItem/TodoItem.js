import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.state = {'isReadOnly': true};
    }

    onDeleteHandler = (event) => {
        this.props.onDeleteTodo(this.props.id);
    }

    onStatusChangeHandler = (event) => {
        this.props.onStatusChangeHandler(this.props.id, event.target.value);
    }

    onEditHandler = (event) => {
        this.setState({'isReadOnly' : false})
    }
    
    onChange = (event) => {
       this.props.onEditTodo(this.props.id, event.target.value);
    }

    onKeyDownHandler = (event) => {
        if (event.key === "Enter") {
            this.setState({'isReadOnly' : true});
        }
    }

    render() {
        return (
            <li>
                <input className="todo" type="text" readOnly={this.state.isReadOnly} 
                    value={this.props.label} onChange={this.onChange} onKeyDown={this.onKeyDownHandler}/>
                <button onClick={this.onDeleteHandler}>Delete</button>
                <button onClick={this.onEditHandler}>Edit</button>
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