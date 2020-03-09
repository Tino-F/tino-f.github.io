import React, { Component } from 'react';
import './navigation.css';
import Plus from '../../ui/logos/plus/plus';
import Burger from '../../ui/burger/burger';
import Minus from '../../ui/logos/minus/minus';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {

  constructor() {

    super();

    this.state = { active: false };

  }

  disable = () => {
    this.setState({ active: false });
  }

  render() {

    let className = this.state.active ? 'nav-menu active' : 'nav-menu';

    return(
      <>
        <Burger fixed={true} active={this.state.active} onClick={ () => this.setState({ active: !this.state.active })}/>
        <div className={ className }>
          <div className='top' style={{ flex: 1 }}>
            <Plus/>
          </div>
          <div className='nav-options'>
            <Link to={'/'} onClick={this.disable} className='home-option'>HOME</Link>
            <Link to={'/contact'} onClick={this.disable} className='contact-option'>CONTACT</Link>
            <Link to={'/about'} onClick={this.disable} className='about-option'>ABOUT</Link>
            <Link to={'/portfolio'} onClick={this.disable} className='portfolio-option'>PORTFOLIO</Link>
          </div>
          <div className='bottom' style={{ flex: 1 }}>
            <Minus/>
          </div>
        </div>
      </>
    )

  }

}
