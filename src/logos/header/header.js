import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css';

class LogoHeader extends Component {

  constructor() {
    super();
  }

  render() {

    return(
      <div className='headerContainer'>
        <div className='header-inner'/>
        <div className='headerbar1'/>
        <div className='headerbar2'/>
        <div className='headerbar3'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogoHeader);
