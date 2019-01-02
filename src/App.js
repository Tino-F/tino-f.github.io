import React, { Component } from 'react';
import './main.css';
import store from './store'
import { Provider } from 'react-redux';
//import Burger from './navigation/burger/burger';
import NavMenu from './navigation2/menu/menu';
import Ghost from './navigation2/ghost/ghost';
import Background from './frontpage_background/background';
import Space from './mobileSpace/space';
import LogoHeader from './logos/header/header';
import FooterLogo from './logos/footer/footerLogo';
import Title from './title/title';
import Footer from './footer/footer';
import { Book, Page } from './bookLayout/BookLayout';
import PlusLogo from './logos/plus/plus';
import MinusLogo from './logos/minus/minus';
import Center from './center/center';

class App extends Component {

  componentDidMount() {

    document.getElementById('loadingScreen').classList.add('away');

  }

  render() {

    return (
      <Provider store={store}>
        <div className="App" align='center'>
          <Title/>
          <NavMenu/>
          <Space/>
          <Ghost width='60'/>
          <Background/>
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
          <br/>
          <br/>
          <br/>
          <Footer/>
        </div>
      </Provider>
    );

  }
}

export default App;
