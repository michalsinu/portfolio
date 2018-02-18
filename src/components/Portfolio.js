import React, { Component } from 'react';

class Portfolio extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row" >

          <div className="col-md-6 portfolioIntro">
              <h1>
                My Work...
              </h1>
              <p>
                Here is where I showcase my art,<br />
                everything you see is critically edited to a high standard.<br />
                Maybe, your website could be here too. ;)
              </p>
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
