import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './carousel.css';

export class Carousel extends Component {

  static defaultProps = {
    routerUrl: '/projects/',
    index: 0
  }

  constructor() {

    super();

    this.state = {
      numOfItems: 0
    }

  }

  componentDidMount() {

    this.innerEl = document.querySelector('#carousel .inner');

    this.setState({
      numOfItems: this.innerEl.children.length
    }, function () {

      //stretch out the sliding element so that each project will fit without overlapping
      this.innerEl.style.width = ( this.state.numOfItems * 100 ) + '%';

    });

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

            <a href={this.props.url} className='imageLink' alt={this.props.title}>
              <div className='rotatingImage'>
                <img alt={this.props.title} src={this.props.src}/>
              </div>
              <div className='shadow'></div>
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
  }

  handleMouseMove( e ) {

    let x = e.clientX;
    let y = e.clientY;

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

  }

  componentWillUnmount() {
    this.carousel.removeEventListener('mousemove', this.handleMouseMove);
  }

  render() { return null; }

}
