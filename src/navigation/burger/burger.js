import { connect } from 'react-redux';
import React, { Component } from 'react';
import toggleMenu from '../../actions/toggleMenu';
import './burger.css';

class Burger extends Component {

  constructor() {
    super();

    this.toggleMenu = this.toggleMenu.bind( this );
  }

  toggleMenu() {

    this.props.toggleMenu( !this.props.menu );

  }

  render() {
    return (
      <div className={this.props.menu ? 'Burger active' : 'Burger'} onClick={this.toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
