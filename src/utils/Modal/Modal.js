import React from 'react';
import './Modal.css';

function Modal({noHandler, yesHandler}) {
    return (
    <div className="modal-box">
        <p>Are you sure you want to delete?</p>
        <button onClick={noHandler}>No</button>
        <button onClick={yesHandler}>Yes</button>
    </div>);
}

export default Modal;