import React, { Component } from 'react';
import thumb1 from '../assets/coffee.jpeg';
import thumb2 from '../assets/nature.jpeg';
import thumb3 from '../assets/flowers.jpeg';
import thumb4 from '../assets/food.jpeg';
import thumb5 from '../assets/tech.jpeg';
import thumb6 from '../assets/designer.jpeg';

class Portfolio extends Component {

  render() {
    return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row  portfolioIntro">

          <div className="col-md-6 portfolioText">
              <h2>
                My Work...
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros nisl, commodo ac felis vel, maximus tincidunt nisl. Vestibulum suscipit massa justo, nec tempor augue feugiat at. Ut gravida porttitor condimentum. Morbi tincidunt ligula id diam varius faucibus. Sed id velit ullamcorper, consequat ligula eget,
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

export default Portfolio;
