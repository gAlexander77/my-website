import React from 'react';
import '../style/components/Nav.css';

function Nav(props){

    const skillsScroll = () => {
        props.skills.current?.scrollIntoView({behavior: 'smooth'})
    }

    const projectsScroll = () => {
        props.projects.current?.scrollIntoView({behavior: 'smooth'})
    }

    const contactScroll = () => {
        props.contact.current?.scrollIntoView({behavior: 'smooth'})
    }

    return(
        <div className="nav-container">
            <div className="menu-container">
                <button onClick={skillsScroll}>Skills</button>
                <button onClick={projectsScroll}>Projects</button>
                <button onClick={contactScroll}>contact Me</button>
            </div>
        </div>
    );
}

export default Nav;