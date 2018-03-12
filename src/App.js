import React, { Component } from 'react';
import ReallySmoothScroll from 'really-smooth-scroll';
import ScrollableAnchor, { goToTop, removeHash } from 'react-scrollable-anchor';

import Jumbotron from './components/Jumbotron';
import Face from './components/Face';

import Portfolio from './components/Portfolio';
import Thumbs from './components/Thumbs';

import Skills from './components/Skills';

import Contact from './components/Contact';

import Footer from './components/Footer';

ReallySmoothScroll.shim();
ReallySmoothScroll.config({
  mousewheelSensitivity: 20,
  keydownSensitivity: 20
});

class App extends Component {
  componentDidMount() {
    removeHash()
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron componentFace={<Face />} />

        <ScrollableAnchor id={'portfolio'}>
          <Portfolio />
        </ScrollableAnchor>

        <ScrollableAnchor id={'thumbs'}>
          <Thumbs />
        </ScrollableAnchor>

        <ScrollableAnchor id={'skillsA'}>
          <Skills />
        </ScrollableAnchor>

        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>

        <ScrollableAnchor id={'footer'}>
          <Footer />
        </ScrollableAnchor>
      </React.Fragment>


    );
  }
}

export default App;
