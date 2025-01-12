import React from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import logo from "../assets/images/logo.png"; // Assuming logo image is in this path

const Footer = () => {
  // Function to handle smooth scrolling on "Home" click
  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    homeSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.footer
      className="w-full bg-gray-800 text-white py-10 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <img src={logo} className="h-12" alt="Logo" />
            <span className="text-2xl font-bold">Nitish</span>
          </div>

          <ul className="flex gap-8 mb-4 md:mb-0">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-blue-500 transition-all"
                onClick={item === "Home" ? scrollToHome : null} // Only trigger scroll for Home
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <FiLinkedin size={30} />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <FiGithub size={30} />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <FiInstagram size={30} />
            </motion.a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nitish. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
