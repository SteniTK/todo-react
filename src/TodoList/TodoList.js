import React from 'react';
import TodoItem from '../TodoItem/TodoItem.js';
import Modal from '../utils/Modal/Modal.js';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'isShowModal' : false};
    }

    askConfirmationAndDelete = (id) => {
        this.setState({'isShowModal' : true});
        this.props.onDelete(id);
    }

    render() {
        this.todoListElement = this.props.todoEntries.map(
            (toDo, index) => (<TodoItem key={index} id={'todo-'+index.toString()} label={toDo.label} status={toDo.status}
            onDeleteTodo={this.askConfirmationAndDelete}></TodoItem>)
        );
        return (<>
            {(this.state.isShowModal) && <Modal/>};
            <ul>
                {this.todoListElement}
            </ul>
        </>);
    }
}

export default TodoList;