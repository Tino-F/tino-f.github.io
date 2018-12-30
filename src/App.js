import React, { Component } from 'react';
import './main.css';
import store from './store'
import { Provider } from 'react-redux';
//import Burger from './navigation/burger/burger';
import NavMenu from './navigation2/menu/menu';
import Ghost from './navigation2/ghost/ghost';
import Background from './frontpage_background/background';

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="App" align='center'>
          <Background/>
          <div style={{position: 'absolute', top: 0, width: '100vw', height: '45px'}}></div>
          <NavMenu/>
          <Ghost width='60'/>

        </div>
      </Provider>
    );

  }
}

export default App;
