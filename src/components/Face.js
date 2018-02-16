import React, { Component } from 'react';
import faceIMG from '../assets/Face.png'

class Face extends Component {

  render() {
    return (
      <div>
        <div className="face" />
        <img src={faceIMG} className="faceIMG" alt="Face" />
      </div>
    );
  }
}

export default Face;
