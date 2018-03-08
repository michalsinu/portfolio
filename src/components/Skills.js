import React, { Component } from 'react';

class Skills extends Component {
  constructor() {
      super()
      this.state = { html: {width: '25%'},
                     htmlPercentage: '25',

                     js: {width: '30%'},
                     jsPercentage: '30',

                     css: {width: '25%'},
                     cssPercentage: '25',

                     php: {width: '15%'},
                     phpPercentage: '15',

                     mysql: {width: '15%'},
                     mysqlPercentage: '15',

                     reactjs: {width: '25%'},
                     reactjsPercentage: '25',
                   }
  }

componentDidMount() {
  var scrollTop,
      offsetTop,
      distance,
      i=0


  var progressbar = function progressbar (){
    scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    offsetTop = document.getElementById("skillsPercentage").offsetTop;

    distance = offsetTop - scrollTop;

    setTimeout( () => {
      if (i===0) {
        if (distance <= 732 && distance <= 667) {
            this.setState({
              html: {width: '85%'},
              htmlPercentage: '90',

              js: {width: '62%'},
              jsPercentage: '62',

              css: {width: '85%'},
              cssPercentage: '90',

              php: {width: '87%'},
              phpPercentage: '87',

              mysql: {width: '75%'},
              mysqlPercentage: '75',

              reactjs: {width: '85%'},
              reactjsPercentage: '90',
            })
            i = i + 1;
            console.log("Distance: " + distance);
            document.removeEventListener("scroll", progressbar)
        }
      }
    }, 700)


 }

  document.addEventListener("scroll", progressbar.bind(this));
}

render() {
var marginProgressBar = {marginTop: '5px'};

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
              <div className="lang" id="html">HTML</div>
              <div className="progress-bar progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={this.state.html}>
                {this.state.htmlPercentage}%
              </div>
            </div>

            <div className="progress" style={marginProgressBar}>
              <div className="lang" id="js">Javascript</div>
              <div className="progress-bar progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={this.state.js}>
                {this.state.jsPercentage}%
              </div>
            </div>

            <div className="progress" style={marginProgressBar}>
              <div className="lang" id="css">CSS</div>
              <div className="progress-bar progress-bar-animated bg-danger" id="cssProgress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={this.state.css}>
                {this.state.cssPercentage}%
              </div>
            </div>

            <div className="progress" style={marginProgressBar}>
              <div className="lang" id="php">PHP</div>
              <div className="progress-bar progress-bar-animated bg-danger bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={this.state.php}>
                {this.state.phpPercentage}%
              </div>
            </div>

            <div className="progress" style={marginProgressBar}>
              <div className="lang" id="mysql">MySQL</div>
              <div className="progress-bar progress-bar-animated bg-danger" id="mysqlProgress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={this.state.mysql}>
                {this.state.mysqlPercentage}%
              </div>
            </div>

            <div className="progress" style={marginProgressBar}>
              <div className="lang" id="reactjs">ReactJS</div>
              <div className="progress-bar progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={this.state.reactjs}>
                {this.state.reactjsPercentage}%
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
