import React, { Component } from 'react';
import { connect } from 'react-redux';
import './footerLogo.css';

class FooterLogo extends Component {

  constructor() {
    super();
  }

  render() {

    return(
      <div className='footerContainer'>
        <div className='footer-inner'/>
        <div className='footerbar1'/>
        <div className='footerbar2'/>
        <div className='footerbar3'/>
      </div>
    );

  }

}

const mapStateToProps = store => {
  return {
    menu: store.menu
  };
}

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterLogo);
