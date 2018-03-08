import React, { Component } from 'react';

class Contact extends Component {
  render() {
    let style = {paddingTop: '10px'};

    return (
      <React.Fragment>
      <div className="container" id="contactform">
        <form action="http://formspree.io/michalsinu@gmail.com" method="POST">
          <div className="form-row align-items-center">
            <div className="col-md-6">
              <div className="input-group mb-2 mb-sm-0">
                <input type="email" name="_replyto" className="form-control" id="input-email" placeholder="Your Email" />
              </div>
            </div>

            <div className="col-md-6">
              <input type="text" name="name" className="form-control mb-2 mb-sm-0" id="input-name" placeholder="Your Name" />
            </div>
          </div>

          <div className="form-row align-items-center" style={style}>
            <div className="col-md-12">
              <div className="input-group mb-2 mb-sm-0">
                <textarea className="form-control" name="message" id="input-message" rows="8" placeholder="Message"></textarea>
              </div>
            </div>
          </div>

          <div className="form-row align-items-center" style={style}>
            <div className="col-md-12">
              <button type="submit" className="btn" id="input-button">Hire Me</button>
            </div>
          </div>
        </form>
      </div>
      </React.Fragment>
    );
  }
}

export default Contact;
