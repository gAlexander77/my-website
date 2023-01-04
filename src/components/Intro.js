import React from 'react';
import Typewriter from 'typewriter-effect';
import Nav from './Nav';
import '../style/components/Intro.css';

function Intro(props){

    const description = ""

    return(
        <div className="intro-container">
            <Nav
                intro={props.sectionOne}
                skills={props.sectionTwo}
                projects={props.sectionThree}
                contact={props.sectionFour}
            />
            <div className="intro-text-container">
                <div className="intro-text">
                    Hello,
                    <Typewriter
                        className="intro-hello"
                        onInit={(typewriter) => {
                            typewriter.typeString("I'm Alex Martinez").start();
                        }}
                    />
                </div>
                <p className="intro-text-description">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Intro;