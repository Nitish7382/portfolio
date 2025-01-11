import React from "react";
import logo from "../assets/images/logo.png";
import LinkedInAnimation from "../assets/images/LinkedIn.json";
import GitHubAnimation from "../assets/images/Github.json";
import InstagramAnimation from "../assets/images/Instagram.json";
import CenterIconAnimation from "../assets/images/Centericon.json";
import Lottie from "react-lottie";

const Navbar = () => {
  const Linkidinlogo = {
    loop: true,
    autoplay: true,
    animationData: LinkedInAnimation,
  };

  const Githublogo = {
    loop: true,
    autoplay: true,
    animationData: GitHubAnimation,
  };

  const Instagramlogo = {
    loop: true,
    autoplay: true,
    animationData: InstagramAnimation,
  };

  const centerlogo = {
    loop: true,
    autoplay: true,
    animationData: CenterIconAnimation,
  };

  return (
    <div className="h-auto w-full bg-[#F1F0EC] flex items-center justify-between px-4">
      
      {/* Left Section (Logo & Social Icons) */}
      <div className="flex items-center space-x-10 flex-1">
        <img src={logo} className="h-14" alt="Logo" />
        <div className="flex items-center">
          <Lottie options={Linkidinlogo} height={75} width={65} />
          LinkedIn
        </div>
        <div className="flex items-center">
          <Lottie options={Githublogo} height={35} width={55} />
          GitHub
        </div>
        <div className="flex items-center">
          <Lottie options={Instagramlogo} height={75} width={65} />
          Instagram
        </div>
      </div>

      {/* Center Icon */}
      <div className="flex justify-center flex-1">
        <Lottie options={centerlogo} height={75} width={65} />
      </div>

      {/* Right Section (Buttons) */}
      <div className="flex justify-end flex-1">
        <a
          href="Download Cv"
          className="text-lg font-semibold text-[#4d21a5] bg-[#F1F0EC] px-4 py-2 rounded-lg"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="text-lg font-semibold text-[#F1F0EC] bg-[#4d21a5] px-4 py-2 rounded-lg ml-4"
        >
          Contact Me!
        </a>
      </div>
    </div>
  );
};

export default Navbar;
