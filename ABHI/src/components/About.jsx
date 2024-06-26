import React from 'react'
import aboutimg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  const paragraphs = ABOUT_TEXT.split('\n\n');
  
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>About
        <span className='text-neutral-500'> Me</span>
        </motion.h1>
        <div className='flex flex-wrap'>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{x:-100,opacity:0}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src={aboutimg} alt='about'/>
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{x:100,opacity:0}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className='my-2 max-w-xl py-6'>{paragraph}</p>
                    ))}
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
