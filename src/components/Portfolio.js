import React, { Component } from 'react';
import ScrollingWeb from '../assets/scrollingWeb.JPG'

class Portfolio extends Component {

componentDidMount() {
    var scrollTop,
        offsetTop,
        distance,
        i = 0

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        )
    }

    var docheight = getDocHeight()
      var viewport = document.getElementById('viewport');
      var scrollingWeb = function scrollingWeb (){
      var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
      var docheight = getDocHeight()
      var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
      var trackLength = docheight - winheight
      var pctScrolled = Math.floor(scrollTop/trackLength * 100 * 2.3) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)

      viewport.style.backgroundPosition = '0 ' + pctScrolled + '%';
   }

    document.addEventListener("scroll", scrollingWeb);
  }

  render() {
  const style = {position: "relative"};
  const viewportImage = {backgroundImage: `url(${ScrollingWeb})`};

  return (
      <div className="container-fluid">
        <div className="row  portfolioIntro">

          <div className="col-md-6 portfolioText">
              <h2>
                My Work...
              </h2>
              <p>
                I'm a junior front end developer that is looking to expand in the web development industry. Self-taught through the internet, with a passion for progressing web development and creative web design. Problem-solving skills to create a responsive web solution for every device.
              </p>
              <a className="btn btn-portfolio" href="#thumbs" role="button">See more..</a>
          </div>

          <div className="col-md-6">

            <div className="imac temp">
              <div className="screen" id="scrn">
                <div id="viewport" style={viewportImage}></div>
              </div>

              <div className="logo"></div>
              <div className="leg"></div>
              <div className="foot"></div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Portfolio;
