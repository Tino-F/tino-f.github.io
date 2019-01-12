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
import Contact from './page/contact/contact'
import NotFound from './page/404/NotFound';

class App extends Component {

  constructor() {
    super();

    this.omittedLocations = ['/portfolio', '/about'];

    this.omitLocations = this.omitLocations.bind( this );
  }

  componentDidMount() {

    //Remove loading screen
    document.getElementById('loadingScreen').classList.add('away');

  }

  omitLocations( location ) {

    let key = 'randomtext';

    this.omittedLocations.forEach( url => {

      let urlRegex = new RegExp( url + '(.*)' );

      if ( key !== '' ) {

        let result = urlRegex.exec( location.pathname );

        if ( result ) {
          if ( result[0] ) {
            key = '';
          } else {
            key = location.key;
          }
        } else {
          key = location.key;
        }

      }

    });

    return key;

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
              <CSSTransition key={ this.omitLocations( location ) } classNames='slide' timeout={800}>
                <Switch location={location}>

                  <Route exact path='/' component={Home}/>
                  <Route path='/portfolio/:id?' component={Portfolio}/>
                  <Route path='/about' component={About}/>
                  <Route path='/contact' component={Contact}/>
                  <Route component={NotFound}/>

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
