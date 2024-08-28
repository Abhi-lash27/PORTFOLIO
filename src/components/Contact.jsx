import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6'

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${CONTACT.email}`;
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-gray-900 px-5 sm:px-10 md:px-20 py-5 border-b border-neutral-900 pb-2 w-full'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-6 text-center sm:text-left text-4xl'>
        Get In Touch
      </motion.h1>
      <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start'>
        <div className='text-center sm:text-left sm:tracking-tighter'>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='my-4'>
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='my-4'>
            {CONTACT.phoneNo}
          </motion.p>
          <a href={`mailto:${CONTACT.email}`} onClick={handleEmailClick} className='border-b'>
            {CONTACT.email}
          </a>
        </div>
        <div className='flex justify-center sm:justify-start items-center gap-4 mt-4 sm:mt-0 text-3xl'>
          <motion.a
            whileHover={{ scale: 1.5 }}
            href='https://github.com/Abhi-lash27'
            target='_blank'
            rel='noopener noreferrer'>
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.5 }}
            href='https://www.instagram.com/ab_hi.27/'
            target='_blank'
            rel='noopener noreferrer'>
            <FaInstagram />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.5 }}
            href='https://www.linkedin.com/in/abhilash-b-697600221/'
            target='_blank'
            rel='noopener noreferrer'>
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.5 }}
            href='https://x.com/Abhilash2702/'
            target='_blank'
            rel='noopener noreferrer'>
            <FaSquareXTwitter />
          </motion.a>
        </div>
      </div>
      <div className="text-center py-4 text-gray-500 text-sm">
        &copy; {currentYear} Abhilash B. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
