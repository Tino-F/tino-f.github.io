import React, { Component } from 'react';
import './burger.css';

export default class Burger extends Component {

  static defaultProps = {
    onClick: () => {}
  }

  constructor() {

    super();

    this.onClick = this.onClick.bind( this );

  }

  onClick( e ) {

    this.props.onClick( e );

  }

  render() {

    const { active } = this.props;
    const { fixed } = this.props;
    let className = active ? 'burger active' : 'burger';
    className += fixed ? ' burger-fixed' : '';

    return(
      <div className={ className } onClick={ this.onClick }>
        <span/>
        <span/>
        <span/>
      </div>
    );

  }

}
