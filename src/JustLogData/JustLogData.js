import React, { Component } from 'react';

export default class JustLogData extends Component {

  render() {

    if ( this.props.type == 'raw' ) {
      console.log( this.props.data );
    } else {
      console.log( 'Data: ' + this.props.data );
    }

    return null;

  }

}
