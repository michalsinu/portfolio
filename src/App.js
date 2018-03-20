import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import Jumbotron from './components/Jumbotron';
import Face from './components/Face';

import Portfolio from './components/Portfolio';
import Thumbs from './components/Thumbs';

import Skills from './components/Skills';

import Contact from './components/Contact';

import Footer from './components/Footer';

class App extends Component {
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
          <Contact email="https://formspree.io/michalsinu@gmail.com" />
        </ScrollableAnchor>

        <ScrollableAnchor id={'footer'}>
          <Footer github="https://github.com/michalsinu" 
                  twitter="https://twitter.com/objectmichal" 
                  linkedin="https://www.linkedin.com/in/objectmichal" 
          />
        </ScrollableAnchor>
      </React.Fragment>
    );
  }
}

export default App;
