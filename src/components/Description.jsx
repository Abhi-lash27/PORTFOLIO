import React from 'react'
import { HERO_CONTENT } from '../constants'
import {motion} from 'framer-motion'

const container = (delay) => ({
    hidden: {x:100, opacity: 0},
    visible: {
        x:0,
        opacity: 1,
        transition: {duration:0.5,delay: delay}
    }
})

const Description = () => {
  return (
        <div className='w-full  lg:p-8'>
                <div >
                    <div className='flex flex-col items-center lg:items-start'>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                        STUDENT
                    </motion.span>
                </div>
                <div className='jusfity-center'>
                <motion.p                     
                    variants={container(1)}
                    initial="hidden"
                    animate="visible" className='my-2  py-6 font-light tracking-tighter text-lg'>
                      {HERO_CONTENT}  
                    </motion.p>
                </div>
                </div>
            </div>
  )
}

export default Description