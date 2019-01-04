import React, { Component } from 'react';
import { connect } from 'react-redux';
import './about.css';

class About extends Component {

  render() {

    return(
      <div className='aboutPage'>

        <h1 style={{flex: 1}}>
          Working on it ;D
        </h1>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

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
