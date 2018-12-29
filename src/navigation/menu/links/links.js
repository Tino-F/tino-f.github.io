import React, { Component } from 'react';
import './links.css';

export default class NavLinks extends Component {

  constructor() {
    super();

    this.onLinkClick = this.onClick.bind( this );

    this.state = {
      currentLink: 0
    };

    this.linkData = [
      {title: 'HOME', url: '/'},
      {title: 'ABOUT', url: '/about'},
      {title: 'PORTFOLIO', url: '/portfolio'},
      {title: 'CONTACT', url: '/contact'}
    ];
  }

  onClick( index, e ) {

    this.setState({
      currentLink: index
    });

  }

  render() {
    return(
      <div className='navghost-container' style={{height: (this.linkData.length + 1) * 4 + 'vh' }}>

        <div className='ghost-container'>

          <div className='ghost' style={{transform: `translateY(${100 * this.state.currentLink}%)`}}>
            -->
          </div>

          <div style={{flexGrow: this.linkData.length - 1}}></div>
        </div>

        <div className='navLink-container'>
          {this.linkData.map(( { title, url }, index ) => {
            return(
              <div className={this.state.currentLink === index ? 'navLink active' : 'navLink'} onClick={e => { this.onClick( index, e ) }} key={index}>
                <a href='#'>{title}</a>
              </div>
            )
          })}
        </div>

      </div>
    );
  }

}
