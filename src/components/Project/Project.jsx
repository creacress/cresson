import React, { useState } from 'react';
import './Project.scss';
import projectsData from '../../projectsData.json';
import Modal from '../Modal/Modal';

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    }

    return (
        <div className="projects" id="projects">
            <h2>Mes Projets</h2>

            {/* Backend Projects Section */}
            <section>
                <h3>Projets Backend</h3>
                <div className="project-list">
                    {projectsData.backend.map(project => (
                        <div className="project" key={project.id}>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <button onClick={() => openModal(project)}>En savoir plus</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* LLM Projects Section */}
            <section>
                <h3>Projets LLM</h3>
                <div className="project-list">
                    {projectsData.llm.map(project => (
                        <div className="project" key={project.id}>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <button onClick={() => openModal(project)}>En savoir plus</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Frontend Projects Section */}
            <section>
                <h3>Projets Frontend</h3>
                <div className="project-list">
                    {projectsData.frontend.map(project => (
                        <div className="project" key={project.id}>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <button onClick={() => openModal(project)}>En savoir plus</button>
                        </div>
                    ))}
                </div>
            </section>


            {modalOpen && (
                <Modal project={selectedProject} closeModal={() => setModalOpen(false)} />
            )}
        </div>
    );
};

export default Projects;
