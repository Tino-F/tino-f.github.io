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
  Project
} from './carousel/carousel';
//import { Route } from "react-router-dom";

class Portfolio extends Component {

  componentDidMount() {

    //Add event listener for project 3D effect here

  }

  render() {

    return(
      <div>

        <br/>

        <Stars/>

        <br/>

        <Carousel index={this.props.match.params.id} routerUrl='/portfolio/'>

          <Project title='Aframe Fractal Component' src={require('./imgs/fractal1.gif')}>
            This is my experimental fractal library
          </Project>

          <Project title="Gray's on main" src={require('./imgs/grays1.png')}>
            Website for gray's in Franklin, TN.
          </Project>

          <Project title="O'be Joyful" src={require('./imgs/obj1.png')}>
            Website for O'be Joyful in Franklin, TN.
          </Project>

          <Project title="TesseraWorks" src={require('./imgs/tesseraworks1.png')}>
            TesseraWorks.
          </Project>

        </Carousel>

        <br/>

        <Stars/>

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
