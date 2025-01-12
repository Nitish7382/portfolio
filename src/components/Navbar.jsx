import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Lottie from "react-lottie";
import LinkedInAnimation from "../assets/images/LinkedIn.json";
import GitHubAnimation from "../assets/images/Github.json";
import InstagramAnimation from "../assets/images/Instagram.json";
import logo from "../assets/images/logo.png";

const iconOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData: animationData,
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full px-10 py-4 z-50 backdrop-blur-lg bg-opacity-80 transition-all bg-transparent text-gray-900 shadow-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center">
        {/* Left Section: Logo */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} className="h-12" alt="Logo" />
          <span className="text-xl font-bold">Nitish</span>
        </motion.div>

        {/* Center Section: Menu Links */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer hover:text-blue-500 transition-all"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>

        {/* Right Section: Socials */}
        <div className="hidden md:flex items-center gap-6">
          {/* Social Media Icons */}
          <motion.a
            href="https://www.linkedin.com/in/nitish-kumar-mohanty-86588b227/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <Lottie options={iconOptions(LinkedInAnimation)} height={50} width={55} />
          </motion.a>
          <motion.a
            href="https://github.com/Nitish7382"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <Lottie options={iconOptions(GitHubAnimation)} height={30} width={40} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/nitish_mohantyy/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <Lottie options={iconOptions(InstagramAnimation)} height={50} width={50} />
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="md:hidden mt-4 flex flex-col items-center gap-4 text-lg font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-500 transition-all">
              <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
