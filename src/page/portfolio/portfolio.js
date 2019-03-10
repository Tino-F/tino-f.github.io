import './portfolio.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Carousel,
  ImageProject,
  Listener,
  SectionHeading
} from './carousel/carousel';

class Portfolio extends Component {

  componentDidMount() {
    document.title = "Tino Fileccia | Portfolio";
  }

  render() {

    return(
      <div className='portfolioPage'>

        <br/>

        <Carousel index={this.props.match.params.id} routerUrl='/portfolio/'>

          <ImageProject title='Gyroscopic Background Images' url='https://www.npmjs.com/package/gyrobackground' github='https://github.com/Tino-F/gyroBackground' src={require('./imgs/gyro-demo.gif')}>
            This is a JavaScript library that uses <a href='https://threejs.org' target='_blank' rel='noopener noreferrer'>Three.JS</a> alongside the <a href='https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API' target='_blank' rel='noopener noreferrer'>WebVR</a> API to make it easy for you to create background images that move when your phone moves. It also includes a parallax option for non-supported devices.
          </ImageProject>

          <ImageProject title='Aframe Fractal Component' url='https://www.npmjs.com/package/aframe-fractal-component' github='https://github.com/Tino-F/aframe-fractal-component' src={require('./imgs/fractal1.gif')}>
            This is an Aframe module/component built by me. The technologies used include <a href='https://aframe.io/' target='_blank' rel='noopener noreferrer'>AFrame</a>, <a href='https://threejs.org' target='_blank' rel='noopener noreferrer'>ThreeJS</a>, and <a href='http://es6-features.org' target='_blank' rel='noopener noreferrer'>ES6 Javascript</a>. It allows users to plot 3D/VR graphs in space, but it has a cool twist. It is audio responsive. You can specify your "fractal" to listen on whatever audio target you choose. This allows for the creation of quick and stunning visuals. What you are looking at above is my demonstration of an audio responsive <a href='https://en.wikipedia.org/wiki/Lorenz_system' rel='noopener noreferrer' target='_blank'>Lorenz Attractor</a>.
          </ImageProject>

          <ImageProject title="Gray's on main" url='https://graysonmain.com' src={require('./imgs/grays1.png')}>
            The <a href='https://graysonmain.com' target='_blank' rel='noopener noreferrer'>Gray's on Main website</a> is a <b>HEAVILY</b> modified <a href='https://wordpress.org' target='_blank'  rel='noopener noreferrer'>Wordpress</a> template designed by TC (who also did all photography/videography) and coded by me. Together we delivered this as our first website together under TesseraWorks. It uses jQuery combined with some CSS animations and Ajax content loading. It still stands as one of my favorites.
          </ImageProject>

          <ImageProject title="O'be Joyful" url='http://objfranklin.com' src={require('./imgs/obj1.png')}>
            After doing the Gray's website, the owners decided to have another website made for the opening of a new resturant, <a href='http://objfranklin.com' target='_blank'  rel='noopener noreferrer'>O'be Joyful</a>. This time, we decided to build a custom <a href='https://wordpress.org' target='_blank' rel='noopener noreferrer'>Wordpress</a> theme from scratch. We used SCSS which helped us create cleaner code and used CSS animations while avoiding JS/jQuery animations at all cost. The outcome was a much more managable codebase with a great end result on the frontend.
          </ImageProject>

          <ImageProject title="TesseraWorks" url='http://tessera.works' src={require('./imgs/tesseraworks1.png')}>
            The <a href='https://tessera.works' target='_blank' rel='noopener noreferrer'>TesseraWorks site</a> is also a custom wordpress theme that uses SCSS and Ajax to load page content. I also implemented my <a href='https://codepen.io/TinoF/pen/xjmYvx' target='_blank' rel='noopener noreferrer'>Navigation ghost concept from codepen</a> on the site. It also has a unique business card viewer that you won't see anywhere else...
          </ImageProject>

          <ImageProject title="TesseraWorks AR business cards" url='https://tessera.works/' src={require('./imgs/businessCard.svg')}>
            These are arguably the most advanced business cards in Nashville, TN with a fully functioning 3D UI when active. Follow the instructions on the back of the card to experience it for yourself!
          </ImageProject>

          <SectionHeading>
            Popular <a href='https://codepen.io/TinoF' target='_blank' rel='noopener noreferrer'>Codepen</a> Projects <br/> <br/> :D
          </SectionHeading>

          <ImageProject title="Split Sections" url='https://codepen.io/TinoF/pen/oEvYob' src={require('./imgs/splitSections.png')}>
            The concept behind this project was that by using flexboxes and CSS transitions, I could very easily animate the width merely by changing a 1 into a 2 in the :hover styling. This is the proof of concept. I didn't think it would get as popular as it did, but it managed to get over 10,000 views on codepen.
          </ImageProject>

          <ImageProject title="Navigation Ghost" url='https://codepen.io/TinoF/pen/xjmYvx' src={require('./imgs/navigationGhost.png')}>
            After my <a href='https://codepen.io/TinoF/pen/xjmYvx' target='_blank' rel='noopener noreferrer'>"Split Sections"</a> project, I wanted to play with flex-boxes even more. The navigation ghost also uses animated flexboxes, however the flex-boxes are actually animating are invisible and on the left and right of the "ghost". Based on which menu item has been clicked, it calculates the left flexbox size as ( menuItemIndex - 1 ) and the right flexbox as ( menuArray.length - menuItenIndex ). Or at least that's how it's used on <a href='https://tessera.works' target='_blank' rel='noopener noreferrer'>TesseraWorks</a>. The pen currently has 3,000 views and counting!
          </ImageProject>

          <ImageProject title="Aframe Lorenz Attractor" url='https://codepen.io/TinoF/pen/pOyoQP' src={require('./imgs/fractalDemo.png')}>
            After completing the <a href='https://github.com/Tino-F/aframe-fractal-component' target='_blank' rel='noopener noreferrer'>Aframe Fractal Component</a>, I had to show it to the world, so of course I stopped by codepen! You can drag any audio file you like into the scene, and watch the lorenz attractor light up with beautiful colors! The pen got 1,900+ views which trickeled down into my github and the npm package.
          </ImageProject>

          <SectionHeading>
            Experimental and unfinished Projects <p style={{color: '#ff8080', fontSize: '0.4em'}}>A lof of these projects were just for me to see how far I could push the limits of code and to help me learn</p>  <br/> :D
          </SectionHeading>

          <ImageProject title="MongoDB/NodeJS chat server" url='https://github.com/Tino-F/chat-server' src={require('./imgs/chatServ.png')}>
            This project was built in my early stages as a NodeJS & MongoDB developer. It uses EJS as the templating engine with a Node/Express server on the backend. It also uses Passport for authentications. This project taught me a lot about structure and how I should organize my code. It is unfinished because I didn't implement web sockets, so you have to refresh the page when a new message is received. Also, later on I realized that I was connecting to the MongoDB server wrong and creating a new connection each time I requested/updated information which is a hugh preformace issue and caused the server to crash at times.
          </ImageProject>

          <ImageProject title="Fractal Universe MMO" url='https://github.com/Tino-F/Visuals' src={require('./imgs/fractalVerse.png')}>
            This is actually a project that I am very proud of even though it is not finished. It uses a NodeJS/Express/MongoDB on the backend with PUG/SCSS for the frontend. It also uses PassportJS for authentication and Socket.IO for instant updates. The concept was to create an online game similar to <a href='http://dmytry.com/games/polynomial2/' target='_blank' rel='noopener noreferrer'>The Polynomial</a>. It is also what inspired me to creat the <a href='https://github.com/Tino-F/aframe-fractal-component' target='_blank' rel='noopener noreferrer'>Aframe Fractal Component</a>. It also gave me a completely different outlook on mathmatics itself.
          </ImageProject>

        </Carousel>

        <Listener/>

        <br/>
        <br/>
        <br/>
        <br/>

        <div id='portfolioBody'>
          <a className='left' target='_blank' rel='noopener noreferrer' href='https://codepen.io/TinoF'>
            <div style={{width: '100%'}} align='center'>
              <div className='profilePic' style={{backgroundImage: `url(${ require('./imgs/codepenProfilePic.jpg') })`}}></div>
            </div>
            <h1>Codepen</h1>
          </a>
          <a className='right' target='_blank' rel='noopener noreferrer' href='https://github.com/Tino-F'>
            <div style={{width: '100%'}} align='center'>
              <div className='profilePic' style={{backgroundImage: `url(${ require('./imgs/githubProfilePic.png') })`}}></div>
            </div>
            <h1>Github</h1>
          </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
