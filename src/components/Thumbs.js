import React, { Component } from 'react';
import Temp from '../assets/tmp.png';

import thumb1 from '../assets/coffee.jpeg';
import thumb2 from '../assets/nature.jpeg';
import thumb3 from '../assets/flowers.jpeg';
import thumb4 from '../assets/food.jpeg';
import thumb5 from '../assets/tech.jpeg';
import thumb6 from '../assets/designer.jpeg';

class Thumbs extends Component {
  render() {
    return (
    <React.Fragment>
    <div className="container-fluid">
      <div className="row" >

        <div className="col-md-4">
          <img src={thumb1} className="thumb" />
        </div>

        <div className="col-md-4">
          <img src={thumb2} className="thumb" />
        </div>

        <div className="col-md-4">
          <img src={thumb3} className="thumb" />
        </div>

      </div>
    </div>

    <div className="container-fluid">
      <div className="row" >

        <div className="col-md-4">
          <img src={thumb4} className="thumb" />
        </div>

        <div className="laptop test" />

        <div className="col-md-4">
          <img src={thumb5} className="thumb" />
        </div>

        <div className="col-md-4">
          <img src={thumb6} className="thumb" />
        </div>
        
      </div>
    </div>
    </React.Fragment>
    );
  }
}

export default Thumbs;
