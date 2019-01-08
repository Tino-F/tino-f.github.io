import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';
import './main.css';
import store from './store'
import { Provider } from 'react-redux';
import NavMenu from './navigation2/menu/menu';
import Ghost from './navigation2/ghost/ghost';
import Title from './title/title';
import Footer from './footer/footer';
import Home from './page/home/home';
import Portfolio from './page/portfolio/portfolio';
import About from './page/about/about';
import JustLogData from './JustLogData/JustLogData';

const portfolioRegEx = new RegExp('/portfolio(.*)');

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

          <Route render={({ location }) => (
            <TransitionGroup>

              <JustLogData data={ location.key }/>
              <JustLogData data={ location } type='raw'/>
              <JustLogData data={ location.pathname }/>

              <CSSTransition key={ portfolioRegEx.exec(location.pathname) ? ( portfolioRegEx.exec(location.pathname)[0] ? '' : location.key ) : location.key } classNames='slide' timeout={800}>
                <Switch location={location}>

                  <Route exact path='/' component={Home}/>
                  <Route path='/portfolio/:id?' component={Portfolio}/>
                  <Route path='/about' component={About}/>

                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}/>

          <Footer/>
        </div>
      </Provider>
    );

  }
}

export default App;
