import React from 'react';
import '../style/components/Skills.css';

function Skills(props){

    return(
        <div className="skills-container">
            <div className="skills-list-container">
                <h1 className="skills-title">My Skills</h1>
                <h1 className="skills-list-header">Programming Languages</h1>
                <div className="skills-list-of-skills">
                    <p>C/C++</p>
                    <p>Python</p>
                    <p>Go</p>
                    <p>Javascript</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>SQL</p>
                </div>
                <h1 className="skills-list-header">Technologies</h1>
                <div className="skills-list-of-skills">
                    <p>React</p>
                    <p>Flask</p>
                    <p>Express</p>
                    <p>MySQL</p>
                    <p>MongoDB</p>
                    <p>Docker</p>
                    <p>Git</p>
                </div>
                <h1 className="skills-list-header">Tools</h1>
                <div className="skills-list-of-skills">
                    <p>VS Code</p>
                    <p>Figma</p>
                    <p>Photoshop</p>
                    <p>Illustrator</p>
                    <p>Micorosoft Office</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;