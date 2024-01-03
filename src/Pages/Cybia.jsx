import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './Cybia.scss'; // Assurez-vous que ce chemin est correct

const CYBIA = () => {
  const [selectedType, setSelectedType] = useState('');
  const [userResponse, setUserResponse] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
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

      const responseText = `Toxicité: ${is_toxic_probabilities.toFixed(2)}`;
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
      toxicity_type: selectedType, // Et que ça correspond aux valeurs attendues par le backend
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
    return (
      isLoggedIn ? (
        <div>
          <h2>Admin Section</h2>
        </div>
      ) : null
    );
  };

  const Modal = ({ isOpen, onClose, children, onSendFeedback }) => {

    const handleFeedbackChange = (e) => {
      setUserResponse(e.target.value);
    };

    const handleTypeChange = (e) => {
      setSelectedType(e.target.value);
    };

    const handleSendFeedback = () => {
      const feedbackData = {
          text: text,
          toxicity_score: parseFloat(toxicityScore), // Assurez-vous que c'est un nombre
          correctness: userResponse, // "Correct" ou "Incorrect"
          toxicity_type: selectedType, // Assurez-vous que c'est la valeur correcte
      };
      onSendFeedback(feedbackData);
      onClose(); // Fermer la modal après l'envoi
  };
  

    if (!isOpen) return null;

    return (
      <div className={`modal-overlay-Cybia ${isOpen ? 'open' : ''}`}>
        <div className="modal-Cybia">
          {children}
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
            <div className="comment-type-select">
              <label>Sélectionnez le type de commentaire :</label>
              <select value={selectedType} onChange={handleTypeChange}>
                <option value="">Sélectionnez un type</option>
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
              </select>
            </div>
          </div>
          <button onClick={handleSendFeedback}>Envoyer le Feedback</button>
          <button onClick={onClose}>Fermer</button>
        </div>
      </div>
    );
  };


  return (
    <div className="cybia-container">
      <header className="cybia-header">
        <h1>CYBIA - Détecteur de Toxicité</h1>
      </header>

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


      <footer className="cybia-form-footer">
        <section className="cybia-form">
          <label htmlFor="textInput">Texte à analyser:</label>
          <input type="text" id="textInput" value={text} onChange={handleTextChange} />
          <button onClick={handleSubmit}>Analyser</button>
          <div className="cybia-response">{response}</div>
        </section>
      </footer>
    </div>
  );
};

export default CYBIA;
