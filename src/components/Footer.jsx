import React from "react";
import NavLogo from "../assets/images/Logo.png";

import {
  PiFacebookLogoLight,
  PiInstagramLogoLight,
  PiTwitterLogoLight,
  PiPhoneCallThin,
  PiLinkedinLogo,
} from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="sm:flex  justify-between w-full mb-4">
            <div className="flex items-center text-center justify-center">
              <img
                src={NavLogo}
                className="w-40 h-auto mr-4"
                alt="Website Logo"
              />
            </div>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://web.facebook.com/profile.php?id=61561877311422"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiFacebookLogoLight className="h-7 w-7 text-white hover:text-buttonClr  hover:scale-105 ease-in duration-300" />
              </a>
              <a
                href="https://www.instagram.com/3signetltd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiInstagramLogoLight className="h-7 w-7 text-white hover:text-buttonClr  hover:scale-105 ease-in duration-300" />
              </a>
              <a
                href="https://x.com/3Signetltd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiTwitterLogoLight className="h-7 w-7 text-white hover:text-buttonClr  hover:scale-105 ease-in duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/103925411/admin/notifications/all/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiLinkedinLogo className="h-7 w-7 text-white hover:text-buttonClr  hover:scale-105 ease-in duration-300" />
              </a>
            </div>
          </div>
          <hr className="line-horizontal w-full p-0 h-[0.1px]  py-4" />

          <div className="text-center">
            <p className="mb-2 font-light">
              The Philippi Centre, Oluwalogbon House, Plot A, Obafemi Awolowo
              Way, Ikeja
            </p>
            <p className="mb-2 font-light">+234 907 535 0589</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
