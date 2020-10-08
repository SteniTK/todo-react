import React from 'react';
import TodoItem from '../TodoItem/TodoItem.js';

class TodoList extends React.Component {
    render() {
        this.todoListElement = this.props.todoEntries.map(
            (toDo, index) => (<TodoItem key={index} id={'todo-'+index.toString()} label={toDo.label} status={toDo.status}
            onDeleteTodo={this.props.onDelete}></TodoItem>)
        );
        return (<ul>
            {this.todoListElement}
          </ul>);
    }
}

export default TodoList;