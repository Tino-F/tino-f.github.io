import React, { Component } from 'react';
import './minus.css';

export default class MinusLogo extends Component {

  constructor () {

    super();

  }

  render() {

    return(
      <div id='minus_logo'>
        <div className='outer_border'></div>
        <div className='inner_border'>
          <div className='orbital'></div>
        </div>
        <div className='bar1'></div>
      </div>
    );

  }

}
