import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

          <p>Nashville's rising talent</p>

        </div>

        <div className='paragraph'>

          <div className='outerBoxes'></div>

          <div className='inner'>
            Hello, <br/><br/>

            If you really want to learn about me, I would highly recommend looking through my <Link to='/portfolio'>portfolio</Link> because my work speaks for itself. That is the primary reason I built this website with as much interactivity that it has. By the way, have you tried looking at the <Link to='/portfolio'>portfolio</Link> on your phone? I added a very special feture for mobile users (it won't work in an emulator due to the lack of hardware).

            <br/><br/>

            Anyway, I am an interactive/responsive web & app developer who pushes existing technology to the <b>very edge</b>. In my free time, I like to experiment with <a href='https://github.com/jeromeetienne/AR.js/blob/master/README.md' target='_blank' rel='noopener noreferrer'>AR.js</a>, <a href='https://threejs.org/' target='_blank' rel='noopener noreferrer'>three.js</a>, <a href='https://www.tensorflow.org/guide/keras' target='_blank' rel='noopener noreferrer'>TensorFlow/Keras</a>, and more technologies that can bring stunning visuals and unique user experiences. Eventually I plan on documenting the discoveries that I find on my <Link to='/blog'>blog</Link> so other people can take them even further and implement them in their own way. In the realm of specifically web development, I am an SCSS/CSS expert and feel extremely comfortable working with Javascript. I started developing websites all the way back in high school and have never stopped. I began by making basic HTML/CSS websites with very little Javascript, to writing full stack NodeJS/MongoDB applications before I graduated. Now I am freelancing under <a href='https://tessera.works' target='_blank' rel='noopener noreferrer'>TesseraWorks</a> as the co-owner and primary software engineer. At <a href='https://tessera.works' target='_blank' rel='noopener noreferrer'>TesseraWorks</a> I have played large roles in developing custom wordpress themes/plugins, react projects, and even private IOS apps using <a href='https://facebook.github.io/react-native/' target='_blank' rel='noopener noreferrer'>react native</a>. If you want any web or app work done, you can reach us <a href='https://tessera.works/#contact' target='_blank' rel='noopener noreferrer'>here.</a> If you would like to know more about me personally, head over to my <Link to='/contact'>contact</Link> page and send me a message!

            <div className='signature'>
              Tino Fileccia
            </div>

          </div>

          <div className='outerBoxes'></div>

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
