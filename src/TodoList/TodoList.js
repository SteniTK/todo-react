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
        this.toDeleteId = id;
    }

    modalNoHandler = (event) => {
        this.setState({'isShowModal' : false});
    }

    modalYesHandler = (event) => {
        this.props.onDelete(this.toDeleteId);
        this.setState({'isShowModal' : false});
    }


    render() {
        this.todoListElement = this.props.todoEntries.map(
            (toDo, index) => (<TodoItem key={index} id={'todo-'+index.toString()} label={toDo.label} status={toDo.status}
            onDeleteTodo={this.askConfirmationAndDelete}></TodoItem>)
        );
        return (<>
            {(this.state.isShowModal) && <Modal noHandler={this.modalNoHandler} yesHandler={this.modalYesHandler}/>};
            <ul>
                {this.todoListElement}
            </ul>
        </>);
    }
}

export default TodoList;