import React, { useRef } from 'react';
import { extend, useRenderer, useThree, useFrame } from 'react-three-fiber';
import * as THREE from 'three/src/Three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

export default function Controls ( props ) {

  const controls = useRef()
  const {
    camera,
    gl: { domElement }
  } = useThree();
  useFrame(state => controls.current.update())
  return <orbitControls ref={controls} args={[ camera, domElement ]} />

}
