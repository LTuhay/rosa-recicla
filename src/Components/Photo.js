import React from 'react';
import './styles.css';

function Photo({ url }) {
  return (
    <div className="photo">
      <img src={url} alt="Rosa" />
    </div>
  );
}

export default Photo;