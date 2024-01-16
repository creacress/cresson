import React from "react";
import "./Selenium.scss"; // Assure-toi d'inclure ton fichier CSS

const Selenium = () => {
    const videos = [
        {
            url: "https://www.canva.com/design/DAF5xrKlKUQ/watch"
        }
    ];
    return (
        <div className="selenium-container">
            <header>
                <h1>Mon Projet Selenium</h1>
            </header>
            <section className="selenium-content">
                <aside className="selenium-aside-left">
                    <div className="card description">
                        <h2>Description</h2>
                        <p>Découvrez mon projet révolutionnaire d'automatisation, conçu pour simplifier et optimiser la gestion des contrats via une interface web Interne Https. Utilisant la puissance de Selenium et Python, ce script permet une interaction fluide avec les pages web, facilitant ainsi les tâches répétitives et augmentant l'efficacité opérationnelle.</p>
                    </div>
                    <div className="card libraries">
                        <h3>Technologies Utilisées</h3>
                        <ul>
                            <li><strong>Python</strong>
                                <br />
                                Langage de programmation principal, reconnu pour sa simplicité et son efficacité.
                            </li>

                            <li><strong>Selenium WebDriver :</strong>
                                <br />
                                Outil puissant pour l'automatisation des interactions avec les navigateurs web.
                            </li>
                            <li> <strong>Webdriver Manager :</strong>
                                <br />
                                Webdriver Manager : Gestion automatisée des pilotes de navigateur, ici pour Microsoft Edge.
                            </li>
                            <li><strong>Threading : </strong>
                                <br />
                                Utilisation de threads pour une gestion efficace des processus en arrière-plan.
                            </li>
                            <li> <strong>JSON :</strong>
                                <br />
                                Format de fichier pour le traitement et le stockage des données de contrat.
                            </li>

                        </ul>
                    </div>
                    <div className="card code-source">
                        <h2>Code Source</h2>
                        <p>Le code source complet de ce projet est disponible sur GitHub. N'hésitez pas à le consulter, à l'utiliser et à contribuer.</p>
                        <a href="https://github.com/creacress/Selenium" target="_blank" rel="noopener noreferrer">
                            Voir le Code Source sur GitHub
                        </a>
                    </div>
                    <div className="card video-carousel">
                        {videos.map((video, index) => (
                            <div key={`video-${index}`} className="video-slide">
                                <a href={video.url} target="_blank" rel="noopener noreferrer">
                                    {video.thumbnail ? (
                                        <img src={video.thumbnail} alt="Video thumbnail" />
                                    ) : (
                                        <div className="video-placeholder">
                                            <p>
                                                <br />
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum iste cupiditate ut excepturi sint alias. Iure et deserunt illum, ducimus ad animi nobis mollitia necessitatibus minima, voluptas inventore cum?
                                                <br />

                                                <strong>Voir la vidéo </strong>
                                            </p>
                                        </div>
                                    )}
                                </a>
                            </div>
                        ))}
                    </div>
                </aside>
                <aside className="selenium-aside-right">

                    <div className="card features">
                        <h2>Fonctionnalité</h2>
                        <ul>
                            <li> <strong>Automatisation de Connexion :</strong>
                                <br />
                                Connexion automatique à des interfaces web sécurisées en utilisant des identifiants stockés de manière sécurisée.
                            </li>
                            <li><strong>Gestion des Modales :</strong>
                                <br />
                                Interaction intelligente avec diverses fenêtres modales, assurant une navigation fluide et une exécution sans erreur.
                            </li>
                            <li><strong>Traitement Dynamique des Contrats :</strong>
                                <br />
                                Lecture et traitement automatisé de fichiers JSON pour extraire et traiter des numéros de contrats spécifiques.
                            </li>
                            <li><strong>Gestion d'Interface Dynamique :</strong>
                                <br />
                                Adaptation aux différents cas de figure dans l'interface utilisateur, comme les conditions de vente ou les sélections spécifiques, en utilisant une logique conditionnelle complexe.
                            </li>
                            <li><strong>Robustesse et Fiabilité : </strong>
                                <br />
                                Gestion des exceptions et des erreurs potentielles pour assurer une exécution stable et fiable du script.
                            </li>
                        </ul>
                    </div>
                    <div className="card debug">
                        <h2>Gestion des Logs et Captures d'Écran pour le Debugging</h2>
                        <p>Notre script inclut une fonctionnalité avancée de logging et de capture d'écran pour faciliter le débogage et le suivi des erreurs. Cela assure une maintenance plus facile et aide à identifier rapidement les problèmes lors de l'exécution du script.</p>
                        <ul>
                            <li><strong>Journalisation Détaillée : </strong>
                                <br />
                                Utilisation de la bibliothèque logging de Python pour enregistrer des informations détaillées sur le déroulement du script. Cela inclut les niveaux de log comme DEBUG, INFO, WARNING, ERROR et CRITICAL, offrant une vue complète des événements.</li>
                            <li><strong>Formatage des Logs :</strong>
                                <br />
                                Les logs sont formatés pour inclure la date, l'heure, le niveau de gravité et le message, rendant les logs facilement lisibles et informatifs.</li>
                            <li><strong>Capture d'Écran Automatisée : </strong>
                                <br />
                                En cas d'erreur, le script capture automatiquement une capture d'écran de l'état actuel du navigateur. Cela aide à visualiser l'état de l'application web au moment de l'erreur, ce qui est crucial pour le débogage.</li>

                            <li><strong>Exemple type : </strong>
                                <br />
                                Voici un exemple de message log typique généré par notre script :
                                <br />
                                <pre id="log-example">
                                    <code>
                                        2024-01-13 15:30:45 - ERROR - Erreur dans le contrat numéro 12345: ElementNotVisibleException, Screenshot: screenshots/error_12345_20240113_153045.png
                                    </code>
                                </pre>

                            </li>
                        </ul>
                    </div>
                </aside>
            </section>
            <section className="gallery">
                <h2>Galerie</h2>
                {/* Galerie d'images ou vidéos ici */}
            </section>
            <div className="contact-section">
    <h2>Contactez-Moi</h2>
    <form className="contact-form">
        <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
    </form>
</div>
        </div>
    );
};

export default Selenium;
