import React, { useRef } from 'react';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import '../style/pages/Home.css';

function Home(){

    const sectionOne = useRef(null);
    const sectionTwo = useRef(null);
    const sectionThree = useRef(null);
    const sectionFour = useRef(null);

    return(
        <div className="home-container">
            <section className="intro-section" ref={sectionOne}>
                <Intro
                    sectionOne={sectionOne}
                    sectionTwo={sectionTwo}
                    sectionThree={sectionThree}
                    sectionFour={sectionFour}
                />
            </section>
            <section className="skills-section" ref={sectionTwo}>
                <Skills/>
            </section>
            <section className="projects-section" ref={sectionThree}>
                <Projects/>
            </section>
            <section className="contact-section" ref={sectionFour}>
                Contact
            </section>
        </div>
    );
}

export default Home;