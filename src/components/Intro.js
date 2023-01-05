import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Nav from './Nav';
import '../style/components/Intro.css';

function Intro(props){

    const description = "A Computer Science Student at the University of North Texas";

    return(
        <div className="intro-container">
            <Nav
                intro={props.sectionOne}
                skills={props.sectionTwo}
                projects={props.sectionThree}
                contact={props.sectionFour}
            />
            <div className="intro-text-container">
                <motion.div 
                    className="intro-text"
                    initial={{ x:-500 ,opacity: 0.5 }}
                    transition={{ duration: 0.5 }}
                    animate={{ x:0, opacity: 1 }}
                >
                    Hello,
                    <Typewriter
                        className="intro-hello"
                        onInit={(typewriter) => {
                            typewriter.typeString("I'm Alexander Martinez").start();
                        }}
                    />
                </motion.div>
                <motion.p 
                    className="intro-text-description"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ delay: 3.4, duration: 0.7 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {description}
                </motion.p>
            </div>
        </div>
    );
}

export default Intro;