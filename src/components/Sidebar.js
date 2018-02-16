import React, { Component } from 'react';
import Logo from '../assets/Logo.png';

class Sidebar extends Component {
  render() {

    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <div class="sidebar">
              <img src={Logo} class="logo" alt="Logo" /><br />
              <a href="#">Skills</a>
              <a href="#">Portfolio</a>
              <a href="#">Contact form</a>
              <div class="laptop" />
              <div class="iphone" />
              <div class="notebook" />
              <div class="coffee" />
              <div class="water_bottle" />
              <div class="briefcase" />
            </div>
          </div>
          <div class="col-sm-6">
            Face here
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
