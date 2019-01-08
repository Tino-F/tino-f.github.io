import './home.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Space from '../../mobileSpace/space';
import Stars from '../../decoration/stars/stars';
import LogoHeader from '../../logos/header/header';
import FooterLogo from '../../logos/footer/footerLogo';
import PlusLogo from '../../logos/plus/plus';
import MinusLogo from '../../logos/minus/minus';
import Name from '../../logos/name/name';
import Center from '../../center/center';
import Background from '../../frontpage_background/background';
import { Book, Page } from '../../bookLayout/BookLayout';

class Home extends Component {

  componentDidMount() {
    document.title = "Tino Fileccia";
  }

  render() {
    return(
      <div>
        <Space/>
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
          <Name/>
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
