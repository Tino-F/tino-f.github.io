import React, { Component } from 'react';
import { connect } from 'react-redux';
import './portfolio.css';
import Stars from '../../decoration/stars/stars';
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
            This is my experimental fractal library
          </Project>

          <Project title="Gray's on main" url='https://graysonmain.com' src={require('./imgs/grays1.png')}>
            Website for gray's in Franklin, TN.
          </Project>

          <Project title="O'be Joyful" url='http://objfranklin.com' src={require('./imgs/obj1.png')}>
            This is a custom <a href='https://wordpress.org' target='_blank'>Wordpress</a> theme built for O'be Joyful in Franklin, TN.
          </Project>

          <Project title="TesseraWorks" url='http://tessera.works' src={require('./imgs/tesseraworks1.png')}>
            This is
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
