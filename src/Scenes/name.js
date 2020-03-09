import React, { useCallback } from 'react';
import { Canvas } from 'react-three-fiber';
import Text from '../Components/ui/three/text';
import HalvorsenAttractor from '../Components/ui/three/HalvorsenAttractor';
import { useSpring, interpolate } from 'react-spring/three';
import Glitch from '../Effects/glitch';

export default function Name (props) {

  const [ { mouse, top }, set ] = useSpring( () => ({ mouse: [ 0, 0 ], top: 0 }) );
  const onMouseMove = useCallback( ({ clientX, clientY }) => set({
    mouse: [
      ( ( clientX / window.innerWidth ) * 2 ) - 1,
      ( ( clientY / window.innerHeight ) * 2 ) - 1
    ]
  }), []);
  const onScroll = useCallback( () => set({
    top: window.scrollY / window.innerHeight
  }), [])
  window.onscroll = onScroll;

  return(
    <Canvas onMouseMove={onMouseMove} pixelRatio={ window.devicePixelRatio } style={{ height: '100vh', width: '100vw' }}>
      <Glitch/>
      <Text opacity={top.interpolate( t => (1-t*3) )} fontSize={150} position={mouse.interpolate( ( x, y ) => [ x*-0.5, (y*0.5)-1, 0 ] )} color='black'>
        Tino Fileccia
      </Text>
      <Text opacity={top.interpolate( t => (1-t*3) )} fontSize={30} position={mouse.interpolate( ( x, y ) => [ x*-0.5, (y*0.5)-2, 0 ] )} color='black'>
        Advanced interactive web development
      </Text>
      <HalvorsenAttractor rotation={top.interpolate( h => [ 0.65, h-0.8, h ] )} position={interpolate([top, mouse], ( top, mouse ) => [ mouse[0]*-0.1, (mouse[1]*0.1)-0.4, 0-top*30 ])} pointSize={0.07} points={1708} scale={3.5} color='black'/>
    </Canvas>
  )

}
