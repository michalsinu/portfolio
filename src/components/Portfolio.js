import React, { Component } from 'react';

class Portfolio extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row" >

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
    );
  }
}

export default Portfolio;
