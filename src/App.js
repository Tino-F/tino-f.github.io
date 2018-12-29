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
          <NavMenu/>
          <br/>
          <Ghost width='60vw'/>
          <Background/>

        </div>
      </Provider>
    );
  }
}

export default App;
