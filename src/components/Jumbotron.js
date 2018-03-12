import React, { Component } from 'react';
import Logo from '../assets/Logo.png';

class Jumbotron extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="sidebar">
              <img src={Logo} className="logo" alt="Logo" /><br />
              <a href="#skillsA">Skills</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact form</a>
              <div className="laptop" />
              <div className="iphone" />
              <div className="notebook" />
              <div className="coffee" />
              <div className="water_bottle" />
              <div className="briefcase" />
            </div>
          </div>
          <div className="col-lg-6" id="nopadding">
            {this.props.componentFace}
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
