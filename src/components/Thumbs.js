import React, { Component } from 'react';

import Thumb01 from '../assets/thumb-01.png';
import Thumb02 from '../assets/thumb-02.png';
import Thumb03 from '../assets/thumb-03.png';
import Thumb04 from '../assets/thumb-04.png';
import Thumb05 from '../assets/thumb-05.png';
import Thumb06 from '../assets/thumb-06.png';
import Thumb07 from '../assets/thumb-07.png';

let style = [{width: '18em'}];

class Thumbs extends Component {
  render() {
    return (
      <div>
          <img src={Thumb03} alt="Card image cap" />
          <img src={Thumb02} alt="Card image cap" />
          <img src={Thumb01} alt="Card image cap" />
          <img src={Thumb07} alt="Card image cap" />
          <img src={Thumb05} alt="Card image cap" />
          <img src={Thumb06} alt="Card image cap" />
          <img src={Thumb04} alt="Card image cap" />
      </div>
    );
  }
}

export default Thumbs;
