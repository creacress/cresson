import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Ici, ajoutez votre logique de vérification des identifiants
        if (username === "admin" && password === "admin") {
            setIsLoggedIn(true);
        } else {
            alert("Identifiants incorrects");
        }
    };

    return (
        <header className="header">
            <div className="logo">Votre Logo</div>
            <button 
                className="nav-toggle" 
                aria-label="toggle navigation"
                onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
                <span className="hamburger"></span>
            </button>
            <nav className={`navigation ${isNavExpanded ? 'expanded' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={() => setIsNavExpanded(false)}>About</Link></li>
                    <li><Link to="/projects" onClick={() => setIsNavExpanded(false)}>Projects</Link></li>
                    {!isLoggedIn && (
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
                    )}
                    {isLoggedIn && (
                        <li>Bienvenue, Admin!</li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
