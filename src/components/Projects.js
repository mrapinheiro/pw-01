import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "A full-stack e-commerce site built with React and Node.js"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio site showcasing projects and skills"
        },
        {
            title: "Weather App",
            description: "A responsive weather application using external APIs"
        }
    ];

    return (
        <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <Link to={`/project${index + 1}`}>View Project</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
