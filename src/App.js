import React, { Component } from 'react';
import {
  Route
} from "react-router-dom";
import './main.css';
import store from './store'
import { Provider } from 'react-redux';
import NavMenu from './navigation2/menu/menu';
import Ghost from './navigation2/ghost/ghost';
import Title from './title/title';
import Footer from './footer/footer';
import Home from './page/home/home';
import Portfolio from './page/portfolio/portfolio';

class App extends Component {

  componentDidMount() {

    //Remove loading screen
    document.getElementById('loadingScreen').classList.add('away');

  }

  render() {

    return (
      <Provider store={store}>
        <div className="App" align='center'>
          <Title/>
          <NavMenu/>
          <Ghost width='60'/>

          <Route exact path='/' component={Home}/>
          <Route path='/portfolio/:id?' component={Portfolio}/>

          <Footer/>
        </div>
      </Provider>
    );

  }
}

export default App;
