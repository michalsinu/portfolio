import React, { Component } from 'react';

import Sidebar from './components/Sidebar';
import Face from './components/Face';

class App extends Component {

  render() {
    return (
      <div>
        <Sidebar componentFace={<Face />} />
      </div>
    );
  }
}

export default App;
