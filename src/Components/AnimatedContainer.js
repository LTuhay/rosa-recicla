import React from "react";
import './styles.css';
import PropTypes from 'prop-types';

function AnimatedContainer({children, animationDuration}){

    const animationStyle = {
        animation: `fadeIn ${animationDuration} ease-in-out forwards`,
      };

    return (
        <div className="animated-container" style={animationStyle}>{children}</div>
    )
}

AnimatedContainer.propTypes = {
    children: PropTypes.node.isRequired,
    animationDuration: PropTypes.string.isRequired,
  };

export default AnimatedContainer;