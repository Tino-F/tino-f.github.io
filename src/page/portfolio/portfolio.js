import React, { Component } from 'react';
import { connect } from 'react-redux';
import './portfolio.css';
import Stars from '../../decoration/stars/stars';
import LogoHeader from '../../logos/header/header';
import FooterLogo from '../../logos/footer/footerLogo';
import PlusLogo from '../../logos/plus/plus';
import MinusLogo from '../../logos/minus/minus';
import Center from '../../center/center';
import Background from '../../frontpage_background/background';
import { Book, Page } from '../../bookLayout/BookLayout';
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
      <Carousel index={this.props.match.params.id} routerUrl='/portfolio/'>
        <Project>
          Ayy lmaooooo
        </Project>
        <Project>
          Skeet skeet lol
        </Project>
        <Project>
          Wtf is going on?
        </Project>
      </Carousel>
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
