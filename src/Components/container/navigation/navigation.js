import React, { Component } from 'react';
import './navigation.css';
import Plus from '../../ui/logos/plus/plus';
import Burger from '../../ui/burger/burger';
import Minus from '../../ui/logos/minus/minus';
import { Link, withRouter } from 'react-router-dom';
import { scrollTo } from 'scroll-js';

const toTopConfig = {
  top: 0,
  easing: 'ease-out',
  duration: 700
}

class Navigation extends Component {

  constructor() {

    super();

    this.state = { active: false };

  }

  toNext = async e => {

    this.setState({ active: false });

    if ( window.scrollY > 25 ) {
      //animate scroll to top

      e.preventDefault();
      let linkTo = e.target.getAttribute('href');
      await scrollTo( window, toTopConfig )
      this.props.history.push( linkTo );

    }
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
            <Link to={'/'} onClick={this.toNext} className='home-option'>HOME</Link>
            <Link to={'/contact'} onClick={this.toNext} className='contact-option'>CONTACT</Link>
            <Link to={'/about'} onClick={this.toNext} className='about-option'>ABOUT</Link>
            <Link to={'/portfolio'} onClick={this.toNext} className='portfolio-option'>PORTFOLIO</Link>
          </div>
          <div className='bottom' style={{ flex: 1 }}>
            <Minus/>
          </div>
        </div>
      </>
    )

  }

}

export default withRouter(Navigation)
