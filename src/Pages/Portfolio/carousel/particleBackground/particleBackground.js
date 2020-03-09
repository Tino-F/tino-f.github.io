import React, { Component } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Math as threeMath,
  Geometry,
  Vector3,
  PointsMaterial,
  Points
} from 'three';

export default class ParticleBackground extends Component {

  constructor() {

    super();

    this.generateParticleField = this.generateParticleField.bind( this );
    this.start = this.start.bind( this );
    this.stop = this.stop.bind( this );
    this.handleResize = this.handleResize.bind( this );
    this.animate = this.animate.bind( this );

  }

  generateParticleField() {

    var starsGeometry = new Geometry();

    for ( var i = 0; i < 10000; i ++ ) {

    	var star = new Vector3();
    	star.x = threeMath.randFloatSpread( 2000 );
    	star.y = threeMath.randFloatSpread( 2000 );
    	star.z = threeMath.randFloatSpread( 2000 );

      //console.log(`X: ${star.x}, Y: ${star.y}, Z: ${star.z}`);

    	starsGeometry.vertices.push( star );

    }

    var starsMaterial = new PointsMaterial( { color: 0x808080, size: 2 } );

    var starField = new Points( starsGeometry, starsMaterial );

    return starField;

  }

  componentDidMount() {

    this.scene = new Scene();
    this.renderer = new WebGLRenderer({ antialias: true});
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setClearColor(0xffffff);
    this.camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.camera.position.z = 1000;

    this.mount.appendChild(this.renderer.domElement);

    this.particleField = this.generateParticleField();
    this.scene.add( this.particleField );
    window.addEventListener('resize', this.handleResize)
    this.start();

  }

  componentWillUnmount () {

    this.stop();
    this.mount.removeChild(this.renderer.domElement);
    window.removeEventListener('resize', this.handleResize)

  }

  handleResize () {
    let h = window.innerHeight;
    this.camera.aspect = window.innerWidth / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, h);
  }

  start () {

    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }

    window.addEventListener('resize', this.handleResize);

  }

  stop () {

    cancelAnimationFrame(this.frameId);
    window.removeEventListener('resize', this.handleResize);

  }

  animate() {
    this.frameId = window.requestAnimationFrame( this.animate );
    this.renderer.render( this.scene, this.camera );
    this.camera.position.z += 0.01;

    this.particleField.rotation.x += 0.0001;
    this.particleField.rotation.y += 0.0001;
    this.particleField.rotation.z += 0.0001;
  }

  render() {
    return(
      <div
        className='particle_background'
        style={{ width: '100vw', height: '100vh', zIndex: -2, overflow: 'hidden', ...this.props.style}}
        ref={(mount) => { this.mount = mount }}
      />
    );
  }

}
