import React from 'react';
import './Modal.scss'; // Assurez-vous de créer un fichier CSS pour le style de la modale

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-card">
      <div className="modal-content-card">
        {children}
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;
