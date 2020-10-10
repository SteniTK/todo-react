import React from 'react';
import './Modal.css';

function Modal(props) {
    return (
    <div className="modal-box">
        <p>Are you sure you want to delete?</p>
        <button onClick={props.noHandler}>No</button>
        <button onClick={props.yesHandler}>Yes</button>
    </div>);
}

export default Modal;