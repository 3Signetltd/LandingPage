import React from "react";
import NavLogo from "../assets/images/navLogo.png";

import {
  PiFacebookLogoLight,
  PiInstagramLogoLight,
  PiTwitterLogoLight,
  PiPhoneCallThin,
} from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="sm:flex  justify-between w-full  mb-4 ">
            <div className="flex items-center text-center justify-center">
              <img src={NavLogo} alt="Website Logo" className="h-10 mr-4" />
            </div>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiFacebookLogoLight className="h-6 w-6 text-white hover:text-buttonClr  hover:scale-105 ease-in duration-300" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiInstagramLogoLight className="h-6 w-6 text-white hover:text-buttonClr  hover:scale-105 ease-in duration-300" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiTwitterLogoLight className="h-6 w-6 text-white hover:text-buttonClr  hover:scale-105 ease-in duration-300" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="mb-2 font-light">
              The Philippi Centre, Oluwalogbon House, Plot A, Obafemi Awolowo
              Way, Ikeja
            </p>
            <p className="mb-2 font-light">+234 703 081 6508</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
