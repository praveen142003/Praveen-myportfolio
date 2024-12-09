import React from 'react'
import reactLogo from '../../assets/react.svg'
import boy from '../../images/boy.png'
import node from '../../images/node.png'
import "./Design.css"
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
function Designs() {
  const {ref , inView} = useInView({
    triggerOnce : true,
    threshold :0.2
})
 
  return (
    <>
      <img src={reactLogo} className='logo react' alt='React -logo' />
      <img src={node} className='nodelogo' />
     <div>
        <motion.img ref={ref}
                            initial={{opacity:0 ,scale:0}}
                            animate={inView ? {opacity:1 , scale:1} : {}}
                            transition={{delay:0.4 , duration:0.5}} src={boy} className='boylogo' />
      </div>
    </>
  )
}

export default Designs
