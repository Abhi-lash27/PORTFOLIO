import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl font-bold text-white-500 shadow-lg">ABHILASH</h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <motion.a 
          whileHover={{ scale: 1.5 }}
          href="https://github.com/Abhi-lash27" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.5 }}
          href="https://www.instagram.com/ab_hi.27/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.5 }}
          href="https://www.linkedin.com/in/abhilash-b-697600221/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.5 }}
          href="https://x.com/Abhilash2702/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
