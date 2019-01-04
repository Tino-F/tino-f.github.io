import React, { Component } from 'react';
import { connect } from 'react-redux';
import './portfolio.css';
//import Stars from '../../decoration/stars/stars';
//import LogoHeader from '../../logos/header/header';
//import FooterLogo from '../../logos/footer/footerLogo';
//import PlusLogo from '../../logos/plus/plus';
//import MinusLogo from '../../logos/minus/minus';
//import Center from '../../center/center';
//import { Book, Page } from '../../bookLayout/BookLayout';
import {
  Carousel,
  Project,
  Listener
} from './carousel/carousel';
//import { Route } from "react-router-dom";

class Portfolio extends Component {

  constructor() {

    super();

    this.state= {
      projects: [
        {
          title: 'Aframe Fractal Component',
          img: require('./imgs/fractal1.gif'),
          url: 'https://www.npmjs.com/package/aframe-fractal-component',
          github: 'https://github.com/Tino-F/aframe-fractal-component',
          tech: [
            'es6 javascript',
            'Three.JS'
          ],
        },
        {
          title: "Gray's on main",
          img: require('./imgs/grays1.png'),
          url: 'https://graysonmain.com'
        },
        {
          title: "O'be Joyful",
          img: require('./imgs/obj1.png'),
          url: 'http://objfranklin.com'
        },
        {
          title: 'TesseraWorks',
          img: require('./imgs/tesseraworks1.png'),
          url: 'https://tessera.works'
        }
      ]
    };

  }

  componentDidMount() {

  }

  render() {

    return(
      <div>

        <br/>

        <Carousel index={this.props.match.params.id} routerUrl='/portfolio/'>

          <Project title='Aframe Fractal Component' url='https://www.npmjs.com/package/aframe-fractal-component' github='https://github.com/Tino-F/aframe-fractal-component' src={require('./imgs/fractal1.gif')}>
            This is an Aframe module/component built by me. The technologies used include <a href='https://aframe.io/' target='_blank' rel='noopener noreferrer'>AFrame</a>, <a href='https://threejs.org' target='_blank' rel='noopener noreferrer'>ThreeJS</a>, and <a href='http://es6-features.org' target='_blank' rel='noopener noreferrer'>ES6 Javascript</a>. It allows users to plot 3D/VR graphs in space, but it has a cool twist. It is audio responsive. You can specify your "fractal" to listen on whatever audio target you choose. This allows for the creation of quick and stunning visuals. What you are looking at above is my demonstration of an audio responsive <a href='https://en.wikipedia.org/wiki/Lorenz_system' rel='noopener noreferrer' target='_blank'>Lorenz Attractor</a>.
          </Project>

          <Project title="Gray's on main" url='https://graysonmain.com' src={require('./imgs/grays1.png')}>
            The <a href='https://graysonmain.com' target='_blank' rel='noopener noreferrer'>Gray's on Main website</a> is a <b>HEAVILY</b> modified <a href='https://wordpress.org' target='_blank'  rel='noopener noreferrer'>Wordpress</a> template designed by TC (who also did all photography/videography) and coded by me. Together we delivered this as our first website together under TesseraWorks. It uses jQuery combined with some CSS animations and Ajax content loading. It still stands as one of my favorites.
          </Project>

          <Project title="O'be Joyful" url='http://objfranklin.com' src={require('./imgs/obj1.png')}>
            After doing the Gray's website, the owners decided to have another website made for the opening of a new resturant, <a href='http://objfranklin.com' target='_blank'  rel='noopener noreferrer'>O'be Joyful</a>. This time, we decided to build a custom <a href='https://wordpress.org' target='_blank' rel='noopener noreferrer'>Wordpress</a> theme from scratch. We used SCSS which helped us create cleaner code and used CSS animations while avoiding JS/jQuery animations at all cost. The outcome was a much more managable codebase with a great end result on the frontend.
          </Project>

          <Project title="TesseraWorks" url='http://tessera.works' src={require('./imgs/tesseraworks1.png')}>
            The <a href='https://tessera.works' target='_blank' rel='noopener noreferrer'>TesseraWorks site</a> is also a custom wordpress theme that uses SCSS and Ajax to load page content. I also implemented my <a href='https://codepen.io/TinoF/pen/xjmYvx' target='_blank' rel='noopener noreferrer'>Navigation ghost concept from codepen</a> on the site. It also has a unique business card viewer that you won't see anywhere else...
          </Project>

          <Project title="TesseraWorks AR business cards" url='https://tessera.works/' src={require('./imgs/businessCard.svg')}>
            These are arguably the most advanced business cards in Nashville, TN with a fully functioning 3D UI when active. Follow the instructions on the back of the card to experience it for yourself!
          </Project>

        </Carousel>

        <Listener/>

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

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
