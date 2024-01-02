import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

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
                </ul>
            </nav>
        </header>
    );
};

export default Header;
