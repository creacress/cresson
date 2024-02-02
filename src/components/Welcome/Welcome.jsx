import React from 'react';
import { useState } from 'react';
import './Welcome.scss';
import About from '../About/About';
import Modal from '../Modal/ModalCard';
import projectsData from '../../projectsData.json';


const Welcome = () => {

    const [isBackendModalOpen, setIsBackendModalOpen] = useState(false);
    const [isLLMModalOpen, setIsLLMModalOpen] = useState(false);
    const [isFrontendModalOpen, setIsFrontendModalOpen] = useState(false);

    const openBackendModal = () => setIsBackendModalOpen(true);
    const closeBackendModal = () => setIsBackendModalOpen(false);

    const openLLMModal = () => setIsLLMModalOpen(true);
    const closeLLMModal = () => setIsLLMModalOpen(false);

    const openFrontendModal = () => setIsFrontendModalOpen(true);
    const closeFrontendModal = () => setIsFrontendModalOpen(false);

    return (
        <section className="welcome">
            <h1 className="welcome-title">CRESSON Alexis</h1>
            <h2 className="welcome-subtitle">Développeur Full Stack LLM</h2>
            <p className="welcome-info">Ici, vous trouverez une variété de ressources pour enrichir vos connaissances et compétences.</p>

            <About />
            <div className='welcome-content'>
                <div className="project-preview">
                    <h3>Aperçu des Projets</h3>

                    <article className="welcome-card">
                        <h3>Backend</h3>
                        <p><em>Python</em> <em>Selenium</em> <em>API</em> <em>Scrapping</em></p>
                        <button className="button-card" aria-label="En savoir plus sur mes compétences en backend" onClick={openBackendModal}>Voir plus</button>
                        <Modal isOpen={isBackendModalOpen} onClose={closeBackendModal}>
                            <h3>Projets Backend</h3>
                            <div className="project-list">
                                {projectsData.backend.map(project => (
                                    <div className="project" key={project.id}>
                                        <h4>{project.title}</h4>
                                        <p>{project.description}</p>
                                        <a href={project.link}>En savoir plus</a>
                                    </div>
                                ))}
                            </div>
                        </Modal>

                    </article>


                    <article className="welcome-card">

                        <h3>LLM (Modèles de Langage à Grande Échelle)</h3>
                        <p>Expertise en IA et modélisation du langage</p>
                        <p>NLP</p>
                        <button className="button-card" aria-label="En savoir plus sur mes compétences en LLM" onClick={openLLMModal}>Voir plus</button>
                        <Modal isOpen={isLLMModalOpen} onClose={closeLLMModal}>
                            <h3>Détails sur mes compétences en Large Language Models</h3>
                            <ul>
                                <li><strong>Camembert :</strong> Expertise dans l'utilisation et la personnalisation de Camembert, un modèle de langue puissant spécifique au français, pour diverses applications NLP.</li>
                                <li><strong>Traitement du langage naturel (NLP) :</strong> Expérience approfondie dans l'analyse de données textuelles, la compréhension et la génération de langage naturel, et l'application de modèles de langage pré-entraînés.</li>
                                <li><strong>Modélisation et fine-tuning :</strong> Aptitude à affiner les modèles de langage pour des tâches spécifiques telles que la classification de texte, l'analyse de sentiments, et la reconnaissance d'entités nommées.</li>
                                <li><strong>Intégration de LLM dans des applications :</strong> Expérience dans l'intégration de modèles de langage dans des applications et des systèmes pour améliorer l'interaction utilisateur et le traitement automatique du langage.</li>
                                <li><strong>Veille technologique :</strong> Engagement constant dans la recherche et l'adoption de nouvelles avancées dans le domaine des LLM et du NLP, garantissant l'utilisation des techniques les plus récentes et efficaces.</li>
                            </ul>
                        </Modal>

                    </article>
                    <article className="welcome-card">
                        <h3>FrontEnd</h3>

                        <p>Conception et développement d'interfaces utilisateur modernes</p>
                        <button className="button-card" aria-label="En savoir plus sur mes compétences en FrontEnd" onClick={openFrontendModal}>Voir plus</button>
                        <Modal isOpen={isFrontendModalOpen} onClose={closeFrontendModal}>
                            <h3>Détails sur mes compétences en FrontEnd</h3>
                            <ul>
                                <li><strong>HTML & CSS :</strong> Maîtrise des standards du web, y compris HTML5 et CSS3, avec une attention particulière au design responsive et à l'accessibilité.</li>
                                <li><strong>JavaScript & Frameworks :</strong> Expérience approfondie avec JavaScript ES6+, ainsi qu'avec des frameworks populaires tels que React, Vue.js, et Angular pour la création d'applications web dynamiques.</li>
                                <li><strong>React & Redux :</strong> Capacité à construire des applications web robustes en utilisant React, en gérant l'état de l'application de manière efficace avec Redux.</li>
                                <li><strong>Conception UI/UX :</strong> Expérience dans la conception d'interfaces utilisateur attrayantes et intuitives, en tenant compte de l'expérience utilisateur pour optimiser l'interaction et l'engagement.</li>
                                <li><strong>Préprocesseurs CSS et Frameworks :</strong> Utilisation de préprocesseurs CSS comme SASS ou LESS et de frameworks CSS comme Bootstrap ou Materialize pour un développement rapide et maintenable.</li>
                                <li><strong>Responsive Design :</strong> Création de designs qui s'adaptent à différents appareils et tailles d'écran, assurant une expérience utilisateur cohérente sur desktop, tablette, et mobile.</li>
                                <li><strong>Optimisation des performances :</strong> Techniques avancées pour optimiser les performances des sites web, y compris le chargement paresseux, le fractionnement de code, et l'optimisation des images.</li>
                                <li><strong>SEO et accessibilité web :</strong> Connaissance des meilleures pratiques de SEO et d'accessibilité pour garantir que les sites web sont facilement trouvables et utilisables par tous.</li>
                            </ul>
                        </Modal>

                    </article>

                </div>

            </div>

            <button className="cta-button">En savoir plus</button>
        </section>
    );
};

export default Welcome;
