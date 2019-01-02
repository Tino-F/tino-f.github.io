import './home.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stars from '../../decoration/stars/stars';
import LogoHeader from '../../logos/header/header';
import FooterLogo from '../../logos/footer/footerLogo';
import PlusLogo from '../../logos/plus/plus';
import MinusLogo from '../../logos/minus/minus';
import Center from '../../center/center';
import Background from '../../frontpage_background/background';
import { Book, Page } from '../../bookLayout/BookLayout';

class Home extends Component {

  render() {
    return(
      <div>
        <Background/>
        <Stars/>
        <LogoHeader/>
        <Book>
          <Page>
            <MinusLogo/>
          </Page>
          <Page>
            <PlusLogo/>
          </Page>
        </Book>

        <Center>
          Hope you like my website!!! :D
        </Center>

        <Book>
          <Page>
            <PlusLogo/>
          </Page>
          <Page>
            <MinusLogo/>
          </Page>
        </Book>
        <FooterLogo/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
