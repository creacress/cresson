import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Header.scss';

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Utilisez useSelector pour accéder à l'état de connexion à partir du store Redux
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    // Utilisez useDispatch pour dispatcher des actions
    const dispatch = useDispatch();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Ici, ajoutez votre logique de vérification des identifiants
        if (username === "admin" && password === "admin") {
            // Dispatch l'action de connexion
            dispatch({ type: 'LOGIN' });
        } else {
            alert("Identifiants incorrects");
        }
    };

    // Ajoutez une fonction pour gérer la déconnexion
    const handleLogout = () => {
        // Dispatch l'action de déconnexion
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <header className="header">
            <a href="/">
            <div className="logo">Votre Logo</div>
            </a>
            <button 
                className="nav-toggle" 
                aria-label="toggle navigation"
                onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
                <span className="hamburger"></span>
            </button>
            <nav className={`navigation ${isNavExpanded ? 'expanded' : ''}`}>
                <ul>
                    <li><Link to="/projects" onClick={() => setIsNavExpanded(false)}>Projects</Link></li>
                    {!isLoggedIn ? (
                        <li>
                            <form onSubmit={handleLoginSubmit} className="login-form">
                                <input 
                                    type="text" 
                                    placeholder="Nom d'utilisateur" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input 
                                    type="password" 
                                    placeholder="Mot de passe" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="submit">Connexion</button>
                            </form>
                        </li>
                    ) : (
                        <li>
                            Bienvenue, Admin!
                            {/* Ajoutez un bouton ou un lien pour la déconnexion */}
                            <button onClick={handleLogout}>Déconnexion</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
