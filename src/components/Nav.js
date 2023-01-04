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
            <h1 className="nav-title">Alex Martinez</h1>
            <div className="menu-container">
                <button className="nav-btn" onClick={skillsScroll}>Skills</button>
                <button className="nav-btn" onClick={projectsScroll}>Projects</button>
                <button className="nav-contact-btn"onClick={contactScroll}>Contact Me</button>
            </div>
        </div>
    );
}

export default Nav;