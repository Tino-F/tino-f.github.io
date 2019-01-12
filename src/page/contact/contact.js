import React, { Component } from 'react';
import './contact.css';

export default class Contact extends Component {

  constructor() {

    super();

    this.state = {
      sending: false,
      sent: false,
      ok: true
    }

    this.handleSubmit = this.handleSubmit.bind( this );
    this.handleInputChange = this.handleInputChange.bind( this );

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

    console.log( `message: ${this.state.message}` );

    this.setState({sending: true});

    fetch('https://www.enformed.io/5xaoehzf', {
      method: 'POST',
      mode: 'no-cors',
      body: {
        name: 'tino',
        data: Date.now(),
        message: this.state.message
      }
    }).then(res => {

      this.setState({
        ok: res.ok,
        sent: true,
        sending: false
      });

      console.log( 'res:', res );

    });

  }

  render(){

    let contactPageClassName = 'contactPage';

    if ( this.state.sending ) {
      contactPageClassName += ' sending';
    }

    if ( this.state.sent ) {
      contactPageClassName += ' sent';
    }

    return(
      <div className={contactPageClassName}>
        <div className='contactContainer'>

          <div className='contactForm'>

            <div style={{flex: 1}} className='outerBoxes'></div>

            <div style={{flex: 3}} className='formInner'>

              <h1>CONTACT ME</h1>

              <div className='contactSpace'></div>

              <div style={{display: 'flex'}}>
                <input type='text' name='firstName' placeholder='First Name' required/>
                <div style={{flex: 0.1}}></div>
                <input type='text' name='lastName' placeholder='Last Name' required/>
              </div>

              <div className='contactSpace'></div>

              <div style={{display: 'flex'}}>
                <input type='email' name='email' placeholder='yourname@domain.com' required/>
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
            <h1>Sending...</h1>
          </div>

          <div className='sentPage'>
            <h1>Sent! :D</h1>
          </div>

        </div>
      </div>
    );

  }

}
