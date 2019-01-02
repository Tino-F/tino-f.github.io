import React, { Component } from 'react';
import './center.css';

export default class Center extends Component {
  render() {
    return(
      <div id='centerContent' style={{marginTop: this.props.size, marginBottom: this.props.size}}>
        {this.props.children}
      </div>
    );
  }
}
