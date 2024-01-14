import React from "react";
import './styles.css';
import Photo from "./Photo";
import AnimatedContainer from "./AnimatedContainer";

function Header ({title, photoUrl}){
    return(
        <AnimatedContainer animationDuration="0.5s">
        <div className="header">
          <Photo url={photoUrl} />
          <h1>{title}</h1>
        </div>
      </AnimatedContainer>
    )
}

export default Header;