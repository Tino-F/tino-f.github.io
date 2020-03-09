import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';
import Navigation from './Components/container/navigation/navigation';
import Title from './Components/ui/title/title';
import Footer from './Components/container/footer/footer';
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import Portfolio from './Pages/Portfolio/portfolio';
import Contact from './Pages/Contact/contact';
import './App.css';

const routes = [
  { path: '/', name: 'HOME', Component: Home },
  { path: '/contact', name: 'CONTACT', Component: Contact },
  { path: '/about', name: 'ABOUT', Component: About },
  { path: '/portfolio/:id?', name: 'PORTFOLIO', Component: Portfolio }
];

export default class App extends Component {

  constructor() {
    super();

    this.omittedLocations = ['/portfolio'];

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
    return(
      <div className='app'>
        <Title/>
        <Navigation/>

        {routes.map(({ path, Component }) => {
          if ( path === '/' ) {
            return(
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={800}
                    classNames="page"
                    unmountOnExit
                  >
                    <Component match={match}/>
                  </CSSTransition>
                )}
              </Route>
            )
          } else {
            return(
              <Route key={path} path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={800}
                    classNames="page"
                    unmountOnExit
                  >
                    <Component match={match}/>
                  </CSSTransition>
                )}
              </Route>
            )
          }
        })}

        <Footer/>
      </div>
    )
  }

}
