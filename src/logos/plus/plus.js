import React, { Component } from 'react';
import './plus.css';

export default class PlusLogo extends Component {

  render() {

    return(
      <div id='plus_logo'>
        <div className='outer_border'>
          <div className='orbital'></div>
        </div>
        <div className='inner_border'></div>
        <div className='barContainer'>
          <div className='bar1'></div>
          <div className='bar2'></div>
        </div>
      </div>
    );

  }

}
