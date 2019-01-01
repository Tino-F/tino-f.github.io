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
import Title from './title/title';
import LoadingScreen from './loadingScreen/loadingScreen';

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="App" align='center'>
          <LoadingScreen/>
          <Title/>
          <NavMenu/>
          <Space/>
          <Ghost width='60'/>
          <Background/>
          <LogoHeader/>
        </div>
      </Provider>
    );

  }
}

export default App;
