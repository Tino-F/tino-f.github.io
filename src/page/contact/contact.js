import React, { Component } from 'react';
import './contact.css';

export default class Contact extends Component {

  constructor() {

    super();

    this.handleSubmit = this.handleSubmit.bind( this );

  }

  handleSubmit( e ) {

    e.preventDefault();

  }

  render(){

    return(
      <div className='contactPage'>

        <h1>CONTACT ME <span className='shadow'/></h1>

      </div>
    );

  }

}
