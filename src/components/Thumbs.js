import React, { Component } from 'react';

import Thumb01 from '../assets/thumb-01.jpeg';
import Thumb02 from '../assets/thumb-02.jpeg';
import Thumb03 from '../assets/thumb-03.jpeg';
import Thumb04 from '../assets/thumb-04.jpeg';
import Thumb05 from '../assets/thumb-05.jpeg';
import Thumb06 from '../assets/thumb-06.jpeg';
import Temp from '../assets/tmp.png';

class Thumbs extends Component {
  render() {
    return (
    <div>
      <img src={Temp} className="img-fluid temp" />
    </div>
    );
  }
}

export default Thumbs;
