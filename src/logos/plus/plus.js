import React, { Component } from 'react';
import './plus.css';

export default class PlusLogo extends Component {
  render() {
    return(
      <div align='center' className='plus-container'>

        <div className='plusLogo'>+</div>

        <div className='outerCircle' align='center'>
          <div className='innerCircle'></div>
        </div>

        <div className='outerCircle2' align='center'>
          <div className='innerCircle2'></div>
        </div>

      </div>
    )
  }
}
