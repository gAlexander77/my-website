import React from 'react';
import Nav from './Nav';
import '../style/components/Intro.css';

function Intro(props){

    return(
        <div className="intro-container" style={{height: '100%'}}>
            <Nav
                intro={props.sectionOne}
                skills={props.sectionTwo}
                projects={props.sectionThree}
                contact={props.sectionFour}
            />
        </div>
    );
}

export default Intro;