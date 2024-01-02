import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import './Cybia.scss'; // Assurez-vous que ce chemin est correct

const CYBIA = () => {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');
  const [feedback, setFeedback] = useState('None');
  const [history, setHistory] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Utiliser useSelector pour récupérer l'état de connexion
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  // Utiliser useDispatch pour envoyer des actions
  const dispatch = useDispatch();

  const handleTextChange = (e) => setText(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert("Veuillez entrer du texte à analyser.");
      return;
    }

    try {
      const apiResponse = await axios.post("http://api.webcresson.com:8000/detect/", { text });
      const { is_toxic_probabilities, is_not_toxic_probabilities } = apiResponse.data;
      const responseText = `Toxicité: ${is_toxic_probabilities.toFixed(2)}, Non-toxicité: ${is_not_toxic_probabilities.toFixed(2)}`;
      setResponse(responseText);
      updateHistory(text, responseText);
    } catch (error) {
      alert(`Erreur: ${error}`);
    }
  };

  const handleFeedback = (e) => setFeedback(e.target.value);

  const saveFeedback = () => {
    // Implémenter la logique de sauvegarde du feedback ici
  };

  const updateHistory = (newText, newResponse) => {
    setHistory([...history, `Texte: ${newText.substring(0, 30)}... - Réponse: ${newResponse}`]);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      dispatch({ type: 'LOGIN' }); // Utiliser l'action de connexion
    } else {
      alert("Identifiants incorrects");
    }
  };

  const AdminContent = () => {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    return (
      isLoggedIn ? (
        <div>
          {/* Contenu réservé à l'administrateur */}
        </div>
      ) : null
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
              {/* Les requêtes historiques */}
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
      <footer className="cybia-form-footer">
        <section className="cybia-form">
          <label htmlFor="textInput">Texte à analyser:</label>
          <input type="text" id="textInput" value={text} onChange={handleTextChange} />
          <button onClick={handleSubmit}>Analyser</button>
          <div className="cybia-response">{response}</div>

          <div className="cybia-feedback">
            <label>La prédiction est-elle correcte ?</label>
            <input type="radio" name="feedback" value="Correct" onChange={handleFeedback} /> Oui
            <input type="radio" name="feedback" value="Incorrect" onChange={handleFeedback} /> Non
          </div>
          <button onClick={saveFeedback}>Enregistrer le Feedback</button>
        </section>
      </footer>
    </div>
  );
};

export default CYBIA;
