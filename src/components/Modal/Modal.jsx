
import React from 'react';
import './Modal.scss';

const Modal = ({ project, closeModal }) => {
    return (
        <div className="modal show">
            <div className="modal-content show">
                <span className="close" onClick={closeModal}>&times;</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {/* Add more project details if necessary */}
                <a href={project.link} target="_blank" rel="noreferrer">Voir le projet</a>
            </div>
        </div>
    );
};

export default Modal;
