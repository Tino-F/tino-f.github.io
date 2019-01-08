import React, { Component } from 'react';
import './hover.css';

export default class Hover extends Component {

  render() {

    return(
      <div className='hoverComponent' style={{...this.props.style}}>
        {this.props.children}
      </div>
    );

  }

}
