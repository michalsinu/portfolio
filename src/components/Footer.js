import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let style = {textAlign: "center"}

    return (
    <React.Fragment>
      <div className="container-fluid  footerGetInTouch">
        <div className="row">
          <div className="col-md-4" style={style}>
            <div className="email footerContact" />
              <h5>EMAIL</h5>
              <a href="mailto:michalsinu@gmail.com?Subject=Enquiry">michalsinu@gmail.com</a>
          </div>

          <div className="col-md-4" style={style}>
            <hr />
              <a href={this.props.github}>
                <div className="GitHub socialMedia" />
              </a>

              <a href={this.props.twitter}>
                <div className="Twitter socialMedia" />
              </a>

              <a href={this.props.linkedin}>
                <div className="LinkedIn socialMedia" />
              </a>
            <hr />
          </div>

          <div className="col-md-4" style={style}>
            <div className="phone footerContact" />
            <h5>CALL</h5>
            +44 7340 002720
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row footerCopyright">
          <div className="col" style={style}>
              &copy; Copyright Michal Sinu 2018
          </div>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default Footer;
