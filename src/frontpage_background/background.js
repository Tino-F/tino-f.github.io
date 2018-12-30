import React, { Component } from 'react';
import './background.css';
import { connect } from 'react-redux';
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  PlaneGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  DoubleSide,
  PointLight,
  Clock
} from 'three';

class Background extends Component {

  static defaultProps = {
    planeSize: 1.2,
    speed: 0.9,
    height: 1,
    x: 36 * 3,
    y: 36 * 3
  }

  constructor () {

    super();

    this.animate = this.animate.bind( this );
    this.start = this.start.bind( this );
    this.stop = this.stop.bind( this );
    this.handleResize = this.handleResize.bind( this );
    this.generatePlanes = this.generatePlanes.bind( this );
    this.animatePlanes = this.animatePlanes.bind( this );

  }

  componentDidMount () {

    let h = window.innerHeight * this.props.height;

    this.clock = new Clock();
    this.scene = new Scene();
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setSize( window.innerWidth, h );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.camera = new PerspectiveCamera( 75, window.innerWidth / h, 0.1, 1000 );
    this.camera.position.z = 30;
    this.renderer.setClearColor(0x000000);
    this.light = new PointLight( 0xffffff, 1, 100, 2 );
    this.light.position.set( 0, 50, 0 );
    this.scene.add( this.light );
    this.mount.appendChild(this.renderer.domElement);

    this.planeInterval = 0;

    this.generatePlanes();
    this.start();

  }

  generatePlanes () {

    this.planeMatrix = [];

    for ( let i = 0; i < this.props.x; i++ ) {

      let planeGroup = new Group();

      for ( let q = 0; q < this.props.y; q++ ) {

        let planeGeometry = new PlaneGeometry( this.props.planeSize, this.props.planeSize );
        let planeMaterial = new MeshBasicMaterial( { color: 0xffffff, side: DoubleSide } );
        let plane = new Mesh( planeGeometry, planeMaterial );

        let y = ( q + 1 ) * this.props.planeSize;
        y -= this.props.planeSize/2;
        y -= ( this.props.planeSize * this.props.y ) / 2

        plane.position.set( 0, y, 0 )

        planeGroup.add( plane );

      }

      let x = ( i + 1 ) * this.props.planeSize;
      x -= this.props.planeSize / 2;
      x -= ( this.props.planeSize * this.props.x ) / 2

      console.log( x );

      planeGroup.position.set( x, this.props.planeSize/-2, 0 );
      this.planeMatrix.push( planeGroup );

    }

    this.planeMatrix.forEach( planeGroup => {
      this.scene.add( planeGroup );
    })

  }

  animatePlanes () {

    let d = this.clock.getDelta();
    this.planeInterval += d * this.props.speed;

    for( let i = 0; i < this.props.y; i++ ) {

      let height = Math.sin( this.planeInterval * i/this.props.y );
      this.planeMatrix[i].position.z = height * this.props.planeSize;

      for( let q = 0; q < this.props.x; q++ ) {
        let height = Math.sin( this.planeInterval * q/this.props.x );
        this.planeMatrix[i].children[q].position.z = height * this.props.planeSize;
      }

    }


  }

  componentWillUnmount () {

    this.stop()
    this.mount.removeChild(this.renderer.domElement)

  }

  handleResize () {
    let h = window.innerHeight * this.props.height;
    this.camera.aspect = window.innerWidth / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, h);
  }

  animate () {

    this.frameId = window.requestAnimationFrame( this.animate );
    this.renderer.render( this.scene, this.camera );
    this.animatePlanes();

  }

  start () {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }

    window.addEventListener('resize', this.handleResize)
  }

  stop () {
    cancelAnimationFrame(this.frameId)
    window.removeEventListener('resize', this.handleResize)
  }

  render () {

    return (
      <div
        style={{ width: '100vw', height: '100vh', zIndex: -2, position: 'absolute', top: 0, overflow: 'hidden', ...this.props.style}}
        ref={(mount) => { this.mount = mount }}
      />
    );

  }

}

const mapStateToProps = store => {
  return {
    menu: store.menu
  };
}

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Background);
