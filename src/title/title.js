import React, { Component } from 'react';
import './title.css';

export default class Title extends Component {

  constructor () {
    super();
  }

  render () {

    let topName = [];

    for ( let i = 0; i < 5; i++ ) {
      topName.push(<p className='title'>T I N O</p>);
      topName.push(<p className='title'>F I L E C C I A</p>);
    }

    return(
      <div className='titleContainer'>
        {topName}
      </div>
    );

  }

}
