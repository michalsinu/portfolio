import React, { Component } from 'react';

import Jumbotron from './components/Jumbotron';
import Face from './components/Face';

import Portfolio from './components/Portfolio';
import Thumbs from './components/Thumbs';

class App extends Component {

  render() {
    return (
      <div>
        <Jumbotron componentFace={<Face />} />
        <Portfolio componentThumbs={<Thumbs />} />
      </div>
    );
  }
}

export default App;
