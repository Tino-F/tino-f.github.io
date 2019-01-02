import React, { Component } from 'react';
import './stars.css';

export default class Stars extends Component {

  render() {

    return(
      <div id='starDecoration'>
        <div className='star left'>
          <span>*</span>
        </div>
        <div className='star'/>
        <div className='star right'>
          <span>*</span>
        </div>
      </div>
    );

  }

}
