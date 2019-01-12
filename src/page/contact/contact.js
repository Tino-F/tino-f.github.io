import React, { Component } from 'react';
import Sending from './sending/sending';
import './contact.css';

export default class Contact extends Component {

  constructor() {

    super();

    this.state = {
      sending: false,
      sent: false,
      ok: true,
      errorMessage: false
    }

    this.handleSubmit = this.handleSubmit.bind( this );
    this.handleInputChange = this.handleInputChange.bind( this );

  }

  validateEmail( email ) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test( String( email ).toLowerCase() );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit( e ) {

    e.preventDefault();

    let isFormOk = true;

    if ( !this.state.firstName || !this.state.lastName ) {

      this.setState({
        errorMessage: 'Please enter both your first and last name.'
      });

      isFormOk = false;

    }

    if ( !this.validateEmail( this.state.email ) ) {

      this.setState({
        errorMessage: 'Please enter a valid email address.'
      });

      isFormOk = false;

    }

    if ( !this.state.message ) {

      this.setState({
        errorMessage: 'Please write a message below.'
      });

      isFormOk = false;

    }

    if ( isFormOk ) {

      console.log( `message: ${this.state.message}` );

      this.setState({sending: true, errorMessage: false});

      fetch('https://www.enformed.io/5xaoehzf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          date: Date(),
          name: `${this.state.firstName} ${this.state.lastName}`,
          email: this.state.email,
          message: this.state.message
        })
      }).then(res => {

        this.setState({
          ok: res.ok,
          sent: true,
          sending: false
        });

        console.log( 'res:', res );

      });

    }

  }

  render(){

    let contactPageClassName = 'contactPage';

    if ( this.state.sending ) {
      contactPageClassName += ' sending';
    }

    if ( this.state.sent ) {

      if ( this.state.ok ) {
        contactPageClassName += ' sent';
      } else {
        contactPageClassName += ' failed';
      }

    }

    return(
      <div className={contactPageClassName}>
        <div className='contactContainer'>

          <div className='contactForm'>

            <div style={{flex: 1}} className='outerBoxes'></div>

            <div style={{flex: 3}} className='formInner'>

              <h1>CONTACT ME</h1>

              <div className={ this.state.errorMessage ? 'errorMessage active' : 'errorMessage'}> {this.state.errorMessage ? this.state.errorMessage : '.'} </div>

              <div className='contactSpace'></div>

              <div style={{display: 'flex'}}>
                <input type='text' name='firstName' placeholder='First Name' onChange={this.handleInputChange} required/>
                <div style={{flex: 0.1}}></div>
                <input type='text' name='lastName' placeholder='Last Name' onChange={this.handleInputChange} required/>
              </div>

              <div className='contactSpace'></div>

              <div style={{display: 'flex'}}>
                <input type='email' name='email' placeholder='yourname@domain.com' onChange={this.handleInputChange} required/>
              </div>

              <div className='contactSpace'></div>

              <div style={{display: 'flex'}}>
                <textarea onChange={this.handleInputChange} name='message' placeholder='Message' required></textarea>
              </div>

              <div className='contactSpace'></div>

              <input type='submit' value='submit' onClick={this.handleSubmit} />


            </div>

            <div style={{flex: 1}} className='outerBoxes'></div>

          </div>

          <div className='sendingPage'>
            <Sending/>
            <div className='sendingText'>
              Sending...
            </div>
          </div>

          <div className='sentPage'>
            Your message has been sent!
          </div>

          <div className='errorPage'>
            Uh oh! Your messaged failed to send, please try again later.
          </div>

        </div>
      </div>
    );

  }

}
