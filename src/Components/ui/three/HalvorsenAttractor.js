import React from 'react';
import * as THREE from 'three/src/Three';
import { a as animated } from 'react-spring/three';

function getVectorArray( howMany, { a, t, scale=1, initialValue } ) {

  let lastValue = initialValue ? initialValue : { x: -5, y: 0, z: 0 };

  let points = Array(howMany).fill().map( ( _, i ) => {

    let dx = -a*lastValue.x - 4*lastValue.y - 4*lastValue.z - Math.pow( lastValue.y, 2 );
    let dy = -a*lastValue.y - 4*lastValue.z - 4*lastValue.x - Math.pow( lastValue.z, 2 );
    let dz = -a*lastValue.z - 4*lastValue.x - 4*lastValue.y - Math.pow( lastValue.x, 2 );
    let x = lastValue.x + ( t * dx );
    let y = lastValue.y + ( t * dy );
    let z = lastValue.z + ( t * dz );

    lastValue = { x, y, z };

    return new THREE.Vector3( x, y, z ).addScalar( scale );

  })

  return points

}

export default function HalvorsenAttractor( props ) {

  const pointSize = props.pointSize ? props.pointSize : 1;
  const points = props.points ? props.points : 1000;
  const a = props.a ? props.a : 1.4;
  const t = props.t ? props.t : 0.01;
  const scale = props.scale ? props.scale : 10;
  const color = props.color ? props.color : 'black';

  let pointArray = getVectorArray( points, { a, t, scale } );
  const g = new THREE.Geometry();
  g.vertices.push( ...pointArray );
  const m = new THREE.PointsMaterial({ color: new THREE.Color( color ), size: pointSize });

  return (
    <animated.group rotation={ props.rotation } position={ props.position }>
      <points
        geometry={ g }
        material={ m }
      />
    </animated.group>
  )

}
