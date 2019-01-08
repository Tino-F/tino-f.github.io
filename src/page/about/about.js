import React, { Component } from 'react';
import { connect } from 'react-redux';
import './about.css';
import Hover from './hover/hover';

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

        <br/>
        <br/>
        <br/>
        

        <Hover style={{width: '100%'}}>

          <img src={require('./imgs/questionMark.svg')} width='15%'/>

        </Hover>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

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
