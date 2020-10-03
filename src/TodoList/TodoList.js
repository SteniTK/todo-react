import React from 'react';
import TodoItem from '../TodoItem/TodoItem.js';

class TodoList extends React.Component {
    render() {
        this.todoListElement = this.props.todoEntries.map(
            (toDo) => (<TodoItem key={toDo.index} label={toDo.label} status={toDo.status}></TodoItem>)
        );
        return (<ul>
            {this.todoListElement}
          </ul>);
    }
}

export default TodoList;