import React, { Component } from 'react';
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

export default class About extends Component {

  render() {

    return(
      <div className='aboutPage'>

        <div className='aboutHeader'>

          <h1>ABOUT <GlitchEffect style={{display: 'inherit'}}>ME</GlitchEffect></h1>

          <p>Full Stack Web Development with an emphasis on R&D</p>

        </div>

        <div className='paragraph'>

          <div className='outerBoxes'></div>

          <div className='inner'>
            Hi, <br/><br/>
            I am an interactive full stack developer with tools such as node.js, python, SQL, react, react-native, and more under my belt.
            Starting from my teenage years, I have spent a very long time working to advance my skill from the basic HTML/CSS.
            I've taught myself about machine learning algorithms, 3D programming techniques, cyber security, and much more.
            These skills have aided me throughout my career in various ways; allowing me to discover security vulnerabilities and give me a deeper understanding of my current job duties.
            Not to mention being able to build advanced websites and apps for my clients.


            Teaching myself about these technologies has allowed me to learn at a much faster pace that some traditional methods
            I enjoy learning about new technology, so it has become routine for me to frequently learn about new concepts & techniques to implement into my code.
            However, you may not have seen much activity from my codepen or github profiles recently, and that's because I am working tirelessly to build an augmented reality startup called "Eternity".
            I can't provide too much details about the services that it will provide just yet, but I can say that the core services of this company will be based on augmented reality experiences.

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
