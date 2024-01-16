import React from 'react';
import './About.scss';
import profilePic from '../../assets/profil.webp';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <figure className="profile-pic">
                    <img src={profilePic} alt="Profil" width="200" height="200" />
                </figure>
                <article className="about-content">
                    <h2>À propos de moi</h2>
                    <p>Je suis un développeur passionné par les projets backend. J'aime résoudre des problèmes complexes et créer des solutions efficaces.</p>
                    <p>Voici quelques compétences que je possède :</p>
                    <ul>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>Base de données</li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default About;
