import React, { Component } from 'react';

import Temp from '../assets/tmp.png';
import ScrollingWeb from '../assets/scrollingWeb.JPG';
import iMacBody from '../assets/iMacBody.png';

class Portfolio extends Component {

  render() {
  const style = {position: "relative"};
  const overflow = {overflow: "hidden"};

  return (
      <div className="container-fluid">
        <div className="row  portfolioIntro">

          <div className="col-md-6 portfolioText">
              <h2>
                My Work...
              </h2>
              <p>
                I am a junior front end developer that is looking to join the web development industry. Self-taught through the internet, with a passion for progressing web development and creative web design. Problem-solving skills to create a responsive web solution for every device.
              </p>
              <a className="btn btn-portfolio" href="#thumbs" role="button">See more..</a>
          </div>

          <div className="col-md-6" style={style}>
              <img className="img-fluid temp" src={Temp} />
          </div>

        </div>
      </div>
    );
  }
}

export default Portfolio;
