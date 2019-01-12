import React, { Component } from 'react';
import { connect } from 'react-redux';
import './about.css';
//import Hover from './hover/hover';
import GlitchEffect from 'react-glitch-effect';

/*

  About page content:
    * Title (My name)

    * Who I am
    * What I specialize in
    * Goals

*/

class About extends Component {

  render() {

    return(
      <div className='aboutPage'>

        <div className='aboutHeader'>

          <h1>ABOUT <GlitchEffect style={{display: 'inherit'}}>ME</GlitchEffect></h1>

        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(About);
