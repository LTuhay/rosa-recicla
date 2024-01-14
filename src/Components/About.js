import React from 'react';
import AboutText from './AboutText';
import './styles.css';
import AnimatedContainer from './AnimatedContainer';

function About({  }) {
  return (
    <AnimatedContainer animationDuration="1s">
        <div className="about">
        <AboutText />
        </div>
    </AnimatedContainer>

  );
}

export default About;