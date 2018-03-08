import React, { Component } from 'react';
import ReallySmoothScroll from 'really-smooth-scroll';

import Jumbotron from './components/Jumbotron';
import Face from './components/Face';

import Portfolio from './components/Portfolio';
import Thumbs from './components/Thumbs';

import Skills from './components/Skills';

import Contact from './components/Contact';

ReallySmoothScroll.shim();
ReallySmoothScroll.config({
  mousewheelSensitivity: 20,
  keydownSensitivity: 20
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron componentFace={<Face />} />
        <Portfolio componentThumbs={<Thumbs />} />
        <Skills />
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
