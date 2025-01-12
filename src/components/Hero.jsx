import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import HeroImage from "../assets/images/hero3.png";
import { FaLinkedin, FaGithub } from "react-icons/fa"; 
import Footer from "./Footer";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-[#F1F0EC] to-[#e0e0e0] relative overflow-hidden">
      <Navbar />

      {/* Animated Background Blobs */}
      <motion.div 
        className="absolute top-[-100px] left-[-150px] w-[350px] h-[350px] bg-purple-400 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-[-100px] right-[-150px] w-[350px] h-[350px] bg-blue-400 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, -15, 0], y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Flex Container for Content */}
      <div className="flex items-center justify-between min-h-screen px-20">
        {/* Left Section (Text) */}
        <div className="w-1/2">
          {/* Name with Proper Alignment */}
          <motion.div 
            className=""
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl font-extrabold leading-tight text-gray-900">
              Hey... I am 
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                {" "}Nitish
              </span>
            </h1>
          </motion.div>

          {/* Staggered Text Animation */}
          <motion.p 
            className="text-2xl font-semibold text-gray-700 mt-4"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            Full Stack Developer 🚀
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 mt-2"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            Passionate about building scalable and efficient web applications.
          </motion.p>

          {/* Call-to-Action & Social Links */}
          <div className="mt-6 flex items-center gap-6">
            <motion.a 
              href="#contact"
              className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
               Download Resume
            </motion.a>

            {/* Social Icons with Hover Effect */}
            <div className="flex gap-4">
              <motion.a href="https://www.linkedin.com/in/nitish-kumar-mohanty-86588b227/" target="_blank" rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a href="https://github.com/Nitish7382" target="_blank" rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-black transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Right Section (Image) with Floating Effect */}
        <motion.div 
          className="w-1/2 flex justify-center mb-12 relative"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Soft Glowing Effect */}
          <div className="absolute inset-0 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>

          <img
            src={HeroImage}
            alt="Hero"
            className="w-[450px] h-[480px]  scale-x-[-1]"
          />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
