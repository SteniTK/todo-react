import React from 'react';
import './Modal.css';

function Modal() {
    return (
    <div className="modal-box">
        <p>Are you sure you want to delete?</p>
        <button>No</button>
        <button>Yes</button>
    </div>);
}

export default Modal;