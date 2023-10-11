import React from 'react'
import {motion , AnimatePresence} from 'framer-motion'
import { useSnapshot } from 'valtio'
import {
headContainerAnimation,
headContentAnimation,
headTextAnimation,
slideAnimation

} from '../config/motion'
import State from '../store'
import { CustomButton } from '../components'



export const Home = () => {
  const snap = useSnapshot(State)
  return (
   <AnimatePresence>
    {snap.intro && (
      <motion.section className='home' {...slideAnimation('left')}>
<motion.header {...slideAnimation("down")}>
  <img 
  src='./threejs.png'
  alt='logo'
  className='w-8 h-8 object-contain'
  />
</motion.header>
<motion.div className='home-content' {...headContainerAnimation}>
  <motion.div className='head-text' {...headTextAnimation}>
    <h1>Let's <br className='xl:block hidden'/> Do It </h1>

  </motion.div>
  <motion.div className='flex flex-col gap-5 ' {...headContentAnimation}>
    <p className='max-w-md font-normal text-gray-600 text-base'> Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.</p>
  </motion.div>
<CustomButton type='filled' title='customized' handleClick={()=>{
  State.intro=false;
}}
customStyles='w-fit px-4 py-2.5 font-bold text-sm'
/>
</motion.div>

      </motion.section>
    )}
   </AnimatePresence>
  )
}
