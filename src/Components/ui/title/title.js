import React, { Component } from 'react';
import './title.css';

export default class Title extends Component {

  render () {

    let topName = [];

    for ( let i = 0; i < 5; i++ ) {
      topName.push(<p key={i} className='title'>T I N O</p>);
      topName.push(<p key={i+10} className='title'>F I L E C C I A</p>);
    }

    return(
      <div className='titleContainer'>
        {topName}
      </div>
    );

  }

}
