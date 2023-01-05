import React, {useRef} from 'react';
import { motion, useInView } from 'framer-motion';
import '../style/components/Skills.css';

function Skills(props){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return(
        <div className="skills-container">
            <div className="skills-list-container" ref={ref}>
                <motion.h1 
                    className="skills-title"
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0, duration: 0.5 }}
                    animate={isInView ? { opacity: 1 }: "none"}
                >
                    My Skills
                </motion.h1>
                <motion.h1 
                    className="skills-list-header"
                    initial={ { opacity: 0, x: -200 }}
                    transition={{ delay: 0.45, duration: 0.7 }}
                    animate={isInView ? { opacity: 1, x: 0 } : "none"}
                >
                    Programming Languages
                </motion.h1>
                <motion.div 
                    className="skills-list-of-skills"
                    initial={{ opacity: 0 }}
                    transition={{ delay: 1.20, duration: 0.5 }}
                    animate={isInView ? { opacity: 1 } : "none"}
                >
                    <p>C/C++</p>
                    <p>Python</p>
                    <p>Go</p>
                    <p>Javascript</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>SQL</p>
                </motion.div>
                <motion.h1 
                    className="skills-list-header"
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ delay: 0.55, duration: 0.7 }}
                    animate={isInView ? { opacity: 1, x: 0 }: "none"}
                >
                    Technologies
                </motion.h1>
                <motion.div 
                    className="skills-list-of-skills"
                    initial={{ opacity: 0 }}
                    transition={{ delay: 1.35, duration: 0.5 }}
                    animate={isInView ? { opacity: 1 } : "none"}
                >
                    <p>React</p>
                    <p>Flask</p>
                    <p>Express</p>
                    <p>Postgres</p>
                    <p>MongoDB</p>
                    <p>Docker</p>
                    <p>Git</p>
                </motion.div>
                <motion.h1 
                    className="skills-list-header"
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    animate={isInView ? { opacity: 1, x: 0 }: "none"}
                >
                    Tools
                </motion.h1>
                <motion.div 
                    className="skills-list-of-skills"
                    initial={{ opacity: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    animate={isInView ? { opacity: 1 } : "none"}
                >
                    <p>VS Code</p>
                    <p>Figma</p>
                    <p>Photoshop</p>
                    <p>Illustrator</p>
                    <p>Micorosoft Office</p>
                </motion.div>
            </div>
        </div>
    );
}

export default Skills;