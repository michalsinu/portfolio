import React, { Component } from 'react';
import thumb1 from '../assets/cabin.png';
import thumb2 from '../assets/cake.png';
import thumb3 from '../assets/circus.png';
import thumb4 from '../assets/game.png';
import thumb5 from '../assets/safe.png';
import thumb6 from '../assets/submarine.png';

class Portfolio extends Component {

  render() {
    return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-6 portfolioIntro">
              <h2>
                My Work...
              </h2>
              <p>
                100% Hand made and made with passion,<br />
                my work is critically edited to a high standard.<br />
                Maybe, your website could be featured here too. ;)
              </p>
              <a class="btn btn-portfolio" href="#" role="button">See more..</a>
          </div>

          <div className="col-md-6" id="nopadding">
            {this.props.componentThumbs}
          </div>

        </div>
      </div>

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

export default Portfolio;
