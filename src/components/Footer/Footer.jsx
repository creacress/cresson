import React, { useState, useEffect } from 'react';
import './Footer.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            
            <p>© {currentYear} WebCresson</p>
            <p>Contactez-moi sur : <a href="mailto:alexis@webcresson.com">alexis@webcresson.com</a></p>
        </footer>
    );
};

export default Footer;
