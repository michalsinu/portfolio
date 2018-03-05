import React, { Component } from 'react';

class Skills extends Component {
  constructor() {
      super()
      this.state = { html: {width: '25%'},
                     htmlPercentage: '25',

                     php: {width: '55%'},
                     phpPercentage: '55'
                   }
  }

  render() {
    var scrollTop,
        offsetTop,
        distance,
        i=0;

 window.addEventListener("scroll", function () {
      scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
      offsetTop = document.getElementById("skillsPercentage").offsetTop;

      distance = offsetTop - scrollTop;

      setTimeout( () => {
        if (i===0) {
          if (distance <= 732 && distance <= 667) {
              this.setState({
                html: {width: '90%'},
                htmlPercentage: '90'
              });
              i = i + 1;
          }
        }
      }, 700)

        console.log("Distance: " + distance);
  }.bind(this));

    return (
      <div className="container-fluid" id="skills">
        <div className="row">
          <div className="col-sm-6">
            <div className="skillsHeading" id="headingSkeleton">
              ..Skills
            </div>
            <div className="skillsText">
              Having a “growth mindset”<br />
              is the key to being successful. <br />
              That’s why I will always find<br />
              areas to improve; to create<br />
              more and more awesome work.<br />
            </div>
          </div>
          <div className="col-sm-6" id="skillsPercentage">
          <div className="progress">
            <div className="progress-bar progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={this.state.html}>
            {this.state.htmlPercentage}%
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
