import React, { Component } from 'react';
import './name.css';

export default class Name extends Component {

  render() {

    return(
      <div>
        <h1 className='myName'>Tino Fileccia</h1>
        <h1 style={{fontFamily: 'sans-serif', color: '#707070', fontSize: '0.7em', fontWeight: 300}}>ADVANCED WEB DEVELOPMENT</h1>
      </div>
    );

  }

}
