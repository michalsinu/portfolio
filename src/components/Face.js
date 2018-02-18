import React, { Component } from 'react';
import faceIMG from '../assets/Face.png'
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

class Face extends Component {
  render() {
    return (
      <div>
        <div className="face" />
          <img src={faceIMG} className="faceIMG" alt="Face" />
          <div  className="faceHeading" id="faceHeadingSkeleton">
            Hi, I'm Michal.
          </div>
          <div  className="faceHeading2" id="faceHeadingSkeleton">
            I create
          </div>
          <div  className="faceHeading3" id="faceHeadingSkeleton">
          <Typist>
            <span>nice websites.</span>
          <Typist.Backspace count={14} delay={1000} />
            <span>good websites.</span>
          <Typist.Backspace count={14} delay={1000} />
            <span><b>stunning</b> websites.</span>
          </Typist>
          </div>
      </div>
    );
  }
}

export default Face;
