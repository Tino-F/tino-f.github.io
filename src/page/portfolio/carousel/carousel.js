import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './carousel.css';
import ParticleBackground from './particleBackground/particleBackground';
import WebVRPolyfill from 'webvr-polyfill';

export class Carousel extends Component {

  static defaultProps = {
    routerUrl: '/projects/',
    index: 0
  }

  constructor() {

    super();

    this.state = {
      numOfItems: 0,
      redirect: false
    }

    this.touchstartX = 0;
    this.touchendX = 0;
    this.handleTouchStart = this.handleTouchStart.bind( this );
    this.handleTouchEnd = this.handleTouchEnd.bind( this );
    this.slideLeft = this.slideLeft.bind( this );
    this.slideRight = this.slideRight.bind( this );

  }

  handleTouchStart( e ) {
    this.touchstartX = e.changedTouches[0].screenX;
    this.touchstartY = e.changedTouches[0].screenY;
  }

  handleTouchEnd( e ) {

    this.touchendX = e.changedTouches[0].screenX;
    this.touchendY = e.changedTouches[0].screenY;

    //console.log(`Start: ${this.touchstartX}, End: ${this.touchendX}`);
    //console.log( this.touchstartX - this.touchendX );

    if (this.touchendX + 55 <= this.touchstartX) {
      this.slideRight();
    }

    if (this.touchendX - 55 >= this.touchstartX) {
        this.slideLeft();
    }
  }

  slideLeft() {

    let index = parseInt(this.props.index);

    let leftURL = ( index - 1 ) < 0 ? this.state.numOfItems - 1 : index - 1;
    leftURL = this.props.routerUrl + leftURL;

    this.setState({
      redirect: <Redirect push to={leftURL}/>
    })

  }

  slideRight() {

    let index = parseInt(this.props.index);

    let rightURL = ( index + 1 ) > this.state.numOfItems - 1 ? 0 : index + 1;
    rightURL = this.props.routerUrl + rightURL;

    this.setState({
      redirect: <Redirect push to={rightURL}/>
    })

  }

  componentDidMount() {

    this.innerEl = document.querySelector('#carousel .inner');
    this.carouselEl = document.getElementById('#carousel');

    document.addEventListener('touchstart', this.handleTouchStart);
    document.addEventListener('touchend', this.handleTouchEnd);

    this.setState({
      numOfItems: this.innerEl.children.length
    }, function () {

      //stretch out the sliding element so that each project will fit without overlapping
      this.innerEl.style.width = ( this.state.numOfItems * 100 ) + '%';

    });

  }

  componentWillUnmount() {
    document.removeEventListener('touchstart', this.handleTouchStart);
    document.removeEventListener('touchend', this.handleTouchEnd);
  }

  render() {

    let index = parseInt(this.props.index);

    let leftURL = ( index - 1 ) < 0 ? this.state.numOfItems - 1 : index - 1;
    let rightURL = ( index + 1 ) > this.state.numOfItems - 1 ? 0 : index + 1;

    leftURL = this.props.routerUrl + leftURL;
    rightURL = this.props.routerUrl + rightURL;


    return(
      <div id='carousel' style={{...this.props.style}}>

        <div className='leftArrow'>
          <Link to={leftURL}>
            <img alt='left' src={require('./imgs/chevron-left.png')}/>
          </Link>
        </div>

        <div className='rightArrow'>
          <Link to={rightURL}>
            <img alt='right' src={require('./imgs/chevron-right.png')}/>
          </Link>
        </div>

        <div className='inner' style={{transform: `translateX(${-100/this.state.numOfItems * this.props.index}%)`}}>

          {this.props.children}

        </div>

        <ParticleBackground style={{position: 'absolute', top: 0}}/>

        { this.state.redirect ? (
          this.state.redirect
        ) : null }

      </div>
    )

  }

}

export class Project extends Component {

  render() {
    return(
      <div id='project' align='center'>

        <div className='projectInner'>

          <h1>{this.props.title}</h1>

          <div className='projectContent'>

            <a href={this.props.url} className='imageLink' target='_blank' rel='noopener noreferrer' alt={this.props.title}>
              <div className='rotatingImage'>
                <img alt={this.props.title} src={this.props.src}/>
              </div>
              <div className='shadowContainer'>
                <div className='shadow' />
              </div>
            </a>

          </div>

          <div className='childrenContent'>
            {this.props.children}
          </div>

        </div>

      </div>
    );
  }

}

export class Listener extends Component {

  static defaultProps = {
    sensitivity: 10
  }

  constructor() {
    super();

    this.handleMouseMove = this.handleMouseMove.bind( this );
    this.enableAccelerometer = this.enableAccelerometer.bind( this );
    this.animateAccelerometer = this.animateAccelerometer.bind( this );
    this.start = this.start.bind( this );
    this.stop = this.stop.bind( this );
  }

  enableAccelerometer ( cb ) {
    let config = (function() {
      let config = {};
      let q = window.location.search.substring(1);
      if ( q === '' ) {
        return config;
      }
      let params = q.split('&');
      let param, name, value;
      for (let i = 0; i < params.length;  i++) {
        param = params[i].split('=');
        name = param[0];
        value = param[1];
        config[name] = value === 'true' ? true :
                       value === 'false' ? false :
                       parseFloat(value);
      }
      return config;
    })();

    let polyfill = new WebVRPolyfill( config );

    console.log('Using webvr-polyfill version ' + WebVRPolyfill.version + ' with configuration ' + JSON.stringify( config ));

    this.frameData = new window.VRFrameData();

    navigator.getVRDisplays().then(function( vrDisplays ) {

      this.vrDisplay = vrDisplays[0];

      if ( this.vrDisplay ) {

        this.vrDisplay.getFrameData( this.frameData );

      } else {

        this.vrDisplay = false;

      }

      cb();

    }.bind( this ));

  }

  start() {

    this.enableAccelerometer(function () {

      if ( this.vrDisplay ) {

        if ( !this.frameId ) {
          this.frameId = requestAnimationFrame( this.animateAccelerometer );
        }

      }

    }.bind( this ));

  }

  stop() {

    if ( this.frameId ) {

      cancelAnimationFrame( this.frameId );
    }

  }

  animateAccelerometer() {

    this.frameId = window.requestAnimationFrame( this.animateAccelerometer );

    this.vrDisplay.getFrameData( this.frameData );
    let orientation = this.frameData.pose.orientation;

    //console.log( orientation );

    let transform = `rotate3D( ${(orientation[0]) * 5}, ${-orientation[1] * 5}, 0, ${ ( Math.abs(orientation[0]) + Math.abs(orientation[1]) ) * 50 }deg )`;

    this.imgEls.forEach( img => {
      img.style.transform = transform;
    })

  }

  handleMouseMove( e ) {

    let xDif = ( e.clientX / window.innerWidth ) - 0.5;
    let yDif = ( e.clientY / window.innerHeight ) - 0.5;

    let shadowWidth = 85 - ( 28 * ( Math.abs( xDif ) * 2 ) ) ;
    let shadowHeight =  5 + ( 15 * Math.abs( yDif / 0.5 ) )

    /*
    let rotateX = `rotateX( ${ ( Math.floor( yDif * 1000 ) / 1000 ) * this.props.sensitivity }deg )`;
    let rotateY = `rotateY( ${ ( Math.floor( xDif * 1000 ) / 1000 ) * this.props.sensitivity }deg )`;
    let transform = `${rotateX}, ${rotateY}`;
    */

    let transform = `rotate3D( ${-yDif}, ${xDif}, 0, ${ ( Math.abs(xDif) + Math.abs(yDif) ) * 50 }deg )`

    this.imgEls.forEach( img => {
      img.style.transform = transform;
    })

    this.shadows.forEach( shadow => {
      shadow.style.width = `${shadowWidth}%`;
      shadow.style.height = `${shadowHeight}px`
    })

  }

  componentDidMount() {

    this.carousel = document.getElementById('carousel');
    this.imgEls = document.querySelectorAll('.projectContent .imageLink .rotatingImage');
    this.shadows = document.querySelectorAll('#carousel #project .imageLink .shadow');

    this.carousel.addEventListener('mousemove', this.handleMouseMove);
    this.start();

  }

  componentWillUnmount() {
    this.carousel.removeEventListener('mousemove', this.handleMouseMove);
    this.stop();
  }

  render() { return null; }

}
