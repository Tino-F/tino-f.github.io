import React, { Component } from 'react';
import './bookLayout.css';

export class Book extends Component {

  render() {
    return(
      <div id='bookLayout-container'>
        <div className='leftSpace'/>
          {this.props.children}
        <div className='rightSpace'/>
      </div>
    );
  }

}

export class Page extends Component {

  render() {
    return(
      <div className='page'>
        {this.props.children}
      </div>
    );
  }

}

export class FullPage extends Component {

  render() {
    return(
      <div className='fullpage'>
        {this.props.children}
      </div>
    );
  }

}
