import React, { Component } from 'react';
import './logo.css';

export default class Logo extends Component {

  constructor() {

    super();

  }

  render() {

    let className = this.props.className ? 'plus-logo ' + this.props.className : 'plus-logo';

    return(
      <div className={ className }>

        <svg className='circle'>
          <circle cx='50' cy='50' r='40' stroke='white' stroke-width='3' />
        </svg>

      </div>
    )

  }

}
