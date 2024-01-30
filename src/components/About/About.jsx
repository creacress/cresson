import React from 'react';
import './About.scss';
import profilePic from '../../assets/profil.webp';


const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <figure className="profile-pic">
                    <img src={profilePic} alt="Photo_Alexis" width="200" height="200" />
                </figure>
                <article className="about-content">
                    <h2>Bonjour,</h2>
                    <h3>Je suis un passionné de l'innovation numérique</h3>
                    <p>
                        Avec une expertise en développement FullStack et une spécialisation en Large Language Models (LLM),
                        je crée des solutions web qui allient fonctionnalité, performance et esthétique.
                        Mon parcours m'a permis de développer une vision holistique de la technologie,
                        où je fusionne maîtrise technique et compréhension approfondie des dernières tendances en intelligence artificielle.
                    </p>
                    <p>
                        Voici quelques compétences que je possède :
                        <ul>
                            <li>Développement frontend et backend avec React et Python</li>
                            <li>Conception d'interfaces utilisateur intuitives et réactives</li>
                            <li>Intégration de modèles LLM pour des applications innovantes</li>
                            <li>Optimisation des performances et référencement SEO</li>
                            <li>Approche agile et adaptative face aux défis techniques</li>
                        </ul>
                    </p>
                </article>

            </div>
        </section>
    );
};

export default About;
