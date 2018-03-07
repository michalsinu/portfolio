import React, { Component } from 'react';
import Temp from '../assets/tmp.png';

class Thumbs extends Component {
  render() {
    return (
    <React.Fragment>
      <img src={Temp} className="temp" />
    </React.Fragment>
    );
  }
}

export default Thumbs;
