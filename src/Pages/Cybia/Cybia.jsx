import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './Cybia.scss'; // Assurez-vous que ce chemin est correct

const CYBIA = () => {
  const [userResponse, setUserResponse] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');
  const [toxicityScore, setToxicityScore] = useState(null);
  const [history, setHistory] = useState([]);
  const handleTextChange = (e) => setText(e.target.value);


  const handleSubmit = async () => {
    if (!text.trim()) {
      alert("Veuillez entrer du texte à analyser.");
      return;
    }

    try {
      const apiResponse = await axios.post("http://127.0.0.1:8000/detect/", { text });
      const { is_toxic_probabilities } = apiResponse.data;

      const responseText = `Votre texte est Toxique à : ${is_toxic_probabilities.toFixed(2)}`;
      setResponse(responseText);
      setToxicityScore(is_toxic_probabilities); // Mise à jour du score de toxicité
      setIsModalOpen(true); // Ouvrir la modal
      updateHistory(text, responseText); // Mise à jour de l'historique
    } catch (error) {
      alert(`Erreur: ${error}`);
    }
  };

  const sendFeedback = async (userResponse) => {
    const feedbackData = {
      text: text,
      toxicity_score: parseFloat(toxicityScore),
      correctness: userResponse === "Correct" ? "Correct" : "Incorrect",
    };

    try {
      await axios.post("http://127.0.0.1:8000/feedback/", feedbackData);
      alert("Feedback envoyé avec succès.");
    } catch (error) {
      if (error.response) {
        // L'API a répondu avec un code d'erreur en dehors de la plage 2xx
        console.error("Erreur de réponse :", error.response.data);
        alert(`Erreur lors de l'envoi du feedback: ${error.response.status} - ${error.response.statusText}\n${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        // La requête a été faite mais aucune réponse n'a été reçue
        console.error("Erreur de requête :", error.request);
        alert("Erreur lors de l'envoi du feedback: Aucune réponse du serveur.");
      } else {
        // Quelque chose s'est produit lors de la configuration de la requête qui a déclenché une erreur
        console.error("Erreur :", error.message);
        alert(`Erreur lors de l'envoi du feedback: ${error.message}`);
      }
    }


  };

  const updateHistory = (newText, newResponse) => {
    setHistory([...history, `Texte: ${newText.substring(0, 30)}... - Réponse: ${newResponse}`]);
  };

  const AdminContent = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    const loginWithTwitter = () => {
      window.location.href = 'http://127.0.0.1:8000/login/twitter';
    };

    return (
      <div>
        {!isLoggedIn ? (
          <button onClick={loginWithTwitter}>Se connecter avec Twitter</button>
        ) : (
          <h2>Section Admin</h2>
          // Ajoutez ici le contenu de l'admin une fois connecté
        )}
      </div>
    );
  };

  const openModalWithLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
    }, 2000); // 2 secondes de chargement
  };
  const Modal = ({ isOpen, onClose, children, onSendFeedback }) => {

    const handleFeedbackChange = (e) => {
      setUserResponse(e.target.value);
    };

    const handleSendFeedback = () => {
      const feedbackData = {
        text: text,
        toxicity_score: parseFloat(toxicityScore),
        correctness: userResponse
      };
      onSendFeedback(feedbackData);
      onClose(); // Fermer la modal après l'envoi
    };


    if (!isOpen) return null;

    return (
      <div className={`modal-overlay-Cybia ${isOpen ? 'open' : ''}`}>
  <div className="modal-Cybia">
    <div className="modal-header">
      <h3>Résultats de l'analyse</h3>
      <button className="close-button" onClick={onClose}>×</button>
    </div>
    <div className="modal-body">
      {children}
      <div className="feedback-section">
        <h4>Votre avis</h4>
        <div className="feedback-options">
          <label>
            <input
              type="radio"
              name="feedback"
              value="Correct"
              onChange={handleFeedbackChange}
            /> Correct
          </label>
          <label>
            <input
              type="radio"
              name="feedback"
              value="Incorrect"
              onChange={handleFeedbackChange}
            /> Incorrect
          </label>
        </div>
      </div>
    </div>
    <div className="modal-footer">
      <button className="send-feedback-button" onClick={handleSendFeedback}>Envoyer le Feedback</button>
      <button className="close-modal-button" onClick={onClose}>Fermer</button>
    </div>
  </div>
</div>

    );
  };


  return (

    <section className="cybia-container">
      <header className="cybia-header">
        <h1>CYBIA - Détecteur de Toxicité</h1>
      </header>
      {!showModal && (
        <button className="button-cybia" onClick={openModalWithLoading}>Tester CYBIA</button>
      )}


      {isLoading && (
        <div className="loader-container">
          <div className="cybia-loader"></div>
        </div>
      )}

      {showModal && (
        <div className="cybia-form">
          <div className="cybia-form">
            <label htmlFor="textInput">Texte à analyser:</label>
            <input type="text" id="textInput" value={text} onChange={handleTextChange} />
            <button onClick={handleSubmit}>Analyser</button>
          </div>
        </div>
      )}

      <div className="cybia-content">
        <aside className="cybia-aside-left">
          <div className="card description">
            <h2>Description</h2>
            <p>Ce projet développe un classificateur de toxicité des textes en français en utilisant le modèle de deep learning Camembert...</p>
          </div>
          <div className="card libraries">
            <h3>Bibliothèques Utilisées</h3>
            <ul>
              <li>Manipulation des données et le logging : <strong>logging, sys, numpy, pandas</strong></li>
              <li>Outils d'apprentissage automatique et de deep learning : <strong>datasets, sklearn, transformers, torch, PyTorch</strong></li>
              <li>Diverses fonctionnalités de gestion de systèmes et d'optimisation : <strong>gc, signal, time, random, optuna, os</strong></li>
              <li>Gestion des bases de données : <strong>sqlite3</strong></li>
            </ul>
          </div>
        </aside>

        <aside className="cybia-aside-right">

          <div className="card history">
            <h2>Historique des requêtes</h2>
            <ul>
              {history.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
          </div>

          <div className="card features">
            <h3>Fonctionnalité</h3>
            <ul>
              <li>Chargement et préparation des données textuelles.</li>
              <li>Tokenisation et transformation des données pour Camembert.</li>
              <li>Entraînement, évaluation et ré-entraînement du modèle.</li>
              <li>Prédiction de la toxicité sur de nouveaux échantillons de texte.</li>
              <li>Optimisation des hyperparamètres avec Optuna.</li>
              <li>Intégration des retours des utilisateurs pour le ré-entraînement.</li>
            </ul>
          </div>
        </aside>
      </div>

      <AdminContent />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSendFeedback={sendFeedback}
      >
        <p>{response}</p>
      </Modal>

    </section>
  );
};

export default CYBIA;
