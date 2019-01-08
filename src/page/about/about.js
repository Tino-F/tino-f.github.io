import React, { Component } from 'react';
import { connect } from 'react-redux';
import './about.css';

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

        <h1 style={{flex: 1}}>
          Working on it ;D
        </h1>

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
