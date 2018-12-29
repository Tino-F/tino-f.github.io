import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlusLogo from '../../logos/plus/plus';
import toggleMenu from '../../actions/toggleMenu';
import NavLinks from './links/links';
import './menu.css'

class NavMenu extends Component {

  render() {
    return (
      <div className={this.props.menu ? 'menu active' : 'menu'} align='center'>
        <br/>
        <br/>
        <br/>
        <br/>
        <PlusLogo/>
        <br/>
        <br/>
        <br/>
        <br/>
        <NavLinks/>

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
  return {
    toggleMenu: toggleChoice => {
      dispatch(toggleMenu(toggleChoice));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
