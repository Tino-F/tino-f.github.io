import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlusLogo from '../../logos/plus/plus';
import MinusLogo from '../../logos/minus/minus';
import toggleMenu from '../../actions/toggleMenu';
import Burger from '../burger/burger';
import './menu.css';

class NavMenu extends Component {

  constructor() {
    super();

    this.state = {
      navButtons: [
        {title: 'HOME', url: '/'},
        {title: 'ABOUT', url: '/about'},
        {title: 'CONTACT', url: '/contact'},
        {title: 'PORTFOLIO', url: '/portfolio'},
        {title: 'BLOG', url: '/blog'}
      ],
      currentPage: 0
    }

    this.handleClick = this.handleClick.bind( this );
  }

  handleClick( index, e ) {
    this.setState({
      currentPage: index
    });
  }

  render() {

    let navButtons = this.state.navButtons.map( ( {title, url}, index ) => {
      return (
        <a to={url} className={ this.state.currentPage === index ? 'navLink active' : 'navLink'} href={'#' + url} onClick={function() {this.handleClick(index)}.bind( this )} key={url}>
          {title}
        </a>
      );
    });

    //navButtons.splice( Math.floor(this.state.navButtons.length/2), 0, <div className='centerLogo'><PlusLogo/></div> )

    return(
        <div className={ this.props.menu ? 'navContainer active' : 'navContainer' }>
          <div className='burger-container'>
            <Burger/>
          </div>
          <div className='outside-left'>
            <PlusLogo/>
          </div>
          {navButtons}
          <div className='outside-right'>
            <MinusLogo/>
          </div>
        </div>
    )
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
