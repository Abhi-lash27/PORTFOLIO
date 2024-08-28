import React from 'react'
import { HERO_CONTENT } from '../constants'
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x:100, opacity: 0},
    visible: {
        x:0,
        opacity: 1,
        transition: {duration:0.5,delay: delay}
    }
})

const Hero = () => {
  return (
    <div className=' lg:mb-35'>
        <div className='flex flex-wrap '>
            <div className='w-full lg:w-2/3'>
            <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-15xl'>
                        <p className="text-0xl font-serif leading-tight">
                        <span> "Code is like humor.</span><br />
                        <span> When you have to explain it, it's bad." <br />
                            - Cory House </span>
                    </p>
                    </motion.h1>
            </div>
            
        </div>
    </div>
  )
}

export default Hero
