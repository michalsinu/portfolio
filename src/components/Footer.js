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
              michalsinu@gmail.com
          </div>

          <div className="col-md-4" style={style}>
            <hr />
            <div className="GitHub socialMedia" />
            <div className="Twitter socialMedia" />
            <div className="LinkedIn socialMedia" />
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
