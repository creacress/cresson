import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Header.scss';

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            dispatch({ type: 'LOGIN' });
        } else {
            alert("Identifiants incorrects");
        }
    };

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    const toggleNav = useCallback(() => {
        setIsNavExpanded(prevState => !prevState);
    }, []);

    return (
        <header className="header">
            <a href="/">
                <div className="logo">Votre Logo</div>
            </a>
            <button 
                className="nav-toggle" 
                aria-label="toggle navigation"
                onClick={toggleNav}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleNav()}
                tabIndex={0}
            >
                <span className={`hamburger ${isNavExpanded ? 'open' : ''}`}></span>
            </button>
            <nav className={`navigation ${isNavExpanded ? 'expanded' : ''}`}>
                <ul>
                    <li><Link to="/projects" onClick={() => setIsNavExpanded(false)}>Projects</Link></li>
                    <li><Link to="/Selenium" onClick={() => setIsNavExpanded(false)}>Selenium</Link></li>
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
                            <button onClick={handleLogout}>Déconnexion</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
