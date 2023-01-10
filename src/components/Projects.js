import React from 'react';
import { BsGithub, BsYoutube } from 'react-icons/bs';
import '../style/components/Projects.css';

function Projects(props){


    return(
        <div className="projects-container">
            <h1 className="projects-title" >Projects</h1>
            <div className="projects-list-of-projects"> 
                <div className="project-container">
                    <h1>Recipe Application</h1>
                    <p>Javascript | Python | React | Flask | SQLite3</p>
                    <div className="project-links">
                        <a href='https://github.com/gAlexander77/recipe-application/'>
                            <button className="btn"><BsGithub/>Github</button>
                        </a>
                    </div>
                </div>
                <div className="project-container">
                    <h1>My Planner</h1>
                    <p>Javascript | React | Express | Node | MongoDB</p>
                    <div className="project-links">
                        <button className="btn"><BsGithub/>Github</button>
                    </div>
                </div>
                <div className="project-container">
                    <h1>Study Timer</h1>
                    <p>React | Javascript | HTML | CSS</p>
                    <div className="project-links">
                        <button className="btn"><BsGithub/>Github</button>
                    </div>
                </div>
                <div className="project-container">
                    <h1>Auto Loan Calculator</h1>
                    <p>React | Javascript | HTML | CSS</p>
                    <div className="project-links">
                        <button className="btn"><BsGithub/>Github</button>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default Projects;