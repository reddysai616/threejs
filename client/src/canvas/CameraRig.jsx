import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import State from '../store'
import { easing } from 'maath'
const CameraRig = ({children}) => {
  const group = useRef();
  const sanp = useSnapshot(State);

  useFrame((State , delta)=>{
    const isBreakPoint = window.innerWidth <=1260;
    const isMobile = window.innerWidth <=600;

    let targetPosition = [-0.4,0,2]
    if(sanp.intro){
      if(isMobile) targetPosition=[0,0.2,2.5]
      if(isBreakPoint) targetPosition=[0,0,2]

    }else{
      if(isMobile) targetPosition=[0,0,2.5]
      else targetPosition=[0,0,2]
    }
easing.damp3(State.camera.position, targetPosition, 0.25, delta)

    easing.dampE(
      group.current.rotation,
      [State.pointer.y/10 , -State.pointer.x /5,0],
      0.25,
      delta
    )
  })
  
  return (
    <group ref={group}>{children}</group>
  )
}

export default CameraRig