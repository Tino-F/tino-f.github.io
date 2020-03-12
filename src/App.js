import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Navigation from './Components/container/navigation/navigation';
import Title from './Components/ui/title/title';
import Footer from './Components/container/footer/footer';
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import Portfolio from './Pages/Portfolio/portfolio';
import Contact from './Pages/Contact/contact';
import Blog from './Pages/Blog/blog';
import NotFound from './Pages/404/NotFound';
import './App.css';

const routes = [
  { path: '/', name: 'HOME', Component: Home },
  { path: '/contact', name: 'CONTACT', Component: Contact },
  { path: '/about', name: 'ABOUT', Component: About },
  { path: '/portfolio/:id?', name: 'PORTFOLIO', Component: Portfolio },
  { path: '/blog', name: 'BLOG', Component: Blog }
];

export default class App extends Component {

  componentDidMount() {

    //Remove loading screen
    document.getElementById('loadingScreen').classList.add('away');

  }

  render() {

    let pathList = routes.map( r => (r.path) );

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
          } else if ( pathList.indexOf( path ) > -1 ) {
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
          } else {
            return <Route component={NotFound}/>
          }
        })}

        <Footer/>
      </div>
    )
  }

}
