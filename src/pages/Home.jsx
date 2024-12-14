import React, { useState, useEffect, useRef, useCallback } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import FAQ from "../components/FAQ";
import { Link } from "react-router-dom";
import { OfferCard1 } from "../components/Cards/OfferCards";
import { OfferCard2 } from "../components/Cards/OfferCards";
import { OfferCard3 } from "../components/Cards/OfferCards";
import { OfferCard4 } from "../components/Cards/OfferCards";
import { OfferCard5 } from "../components/Cards/OfferCards";
import { WhyusCard1 } from "../components/Cards/WhychooseUsCard";
import { WhyusCard2 } from "../components/Cards/WhychooseUsCard";
import { WhyusCard3 } from "../components/Cards/WhychooseUsCard";
import heroImage from "../assets/images/heroImage.png";
import heroImage2 from "../assets/images/heroImage2.png";
import ContactUs from "../components/contactForm";
import MasterClassRegister from "../components/MasterClassRegister";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../App.css";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/DashBoard");
  return (
    <>
      <section className="bg-blue lg:h-[95vh]">
        {!isDashboardRoute && <Navbar />}
        <MasterClassRegister
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />

        <div className=" lg:grid  grid-cols-7 mt-24">
          <div className="col-span-4 ml-6  mt-16 ">
            <h1 className="text-white !font-light mb-6 leading-[1.3] ">
              Transforming learning, <br></br>Empowering Enterprises
            </h1>
            <a href="#ContactUs">
              <button className="bg-buttonClr text-white px-9 py-2 rounded-md hover:scale-105 ease-in duration-300">
                Speak With Us
              </button>
            </a>
          </div>
          <div className="col-span-3 mx-auto text-center ">
            <img
              src={heroImage}
              alt="heroImage"
              className="w-[50rem] h-[23rem]  rounded-l-xl Nlg:hidden"
            />
            <img
              src={heroImage2}
              alt="heroImage"
              className="w-[50rem] h-[23rem]  rounded-tl-lg rounded-bl-3xl lg:hidden"
            />
          </div>
        </div>
      </section>
      <section id="AboutUs">
        <div className="text-center my-[10rem]">
          <h1 className="text-4xl font-light mb-7">About Us</h1>
          <p className="mod:text-sm lg:px-10 Nlg:px-5 text-start">
            3Signet is a technology consulting company building enterprise
            solutions and empowering the next generation of technology experts.
            We want to deeply engage technology for robust digital
            transformation end -to-end through technology education and talent
            acceleration,  business solution optimization and technological
            innovation.
          </p>
        </div>
      </section>
      <section id="Solutions">
        <h1 className="text-4xl font-light  text-center mb-7">
          What We Offer You
        </h1>

        {/* <div className="flex flex-wrap justify-center items-center min-h-screen"> */}
        <div className=" flex flex-wrap justify-center mod:px-12">
          <div className="m-4">
            <OfferCard1 />
          </div>
          <div className="m-4">
            <OfferCard2 />
          </div>
          <div className="m-4">
            <OfferCard3 />
          </div>
          <div className="m-4">
            <OfferCard4 />
          </div>
          <div className="m-4">
            <OfferCard5 />
          </div>
        </div>
      </section>

      <section id="Testimonials" className="mt-[11rem]">
        <h1 className="text-4xl font-light mod:text-3xl text-center lg:pb-[10rem] Nlg:pb-7">
          Why Our Customers Choose Us
        </h1>

        <div className="relative flex flex-col items-center">
          {/* Card Container */}
          <div className="lg:absolute top-[-7rem] flex flex-wrap justify-center items-center w-full">
            <div className="m-4">
              <WhyusCard1 />
            </div>
            <div className="m-4">
              <WhyusCard2 />
            </div>
            <div className="m-4">
              <WhyusCard3 />
            </div>
          </div>
          {/* Blue Background */}
          <div className=" Nlg:hidden bg-blue h-[15rem] w-full"></div>
        </div>
      </section>
      <section id="FAQ" className="mt-[10rem]">
        <h1 className="text-4xl font-light  text-center mb-12">
          Questions you may have
        </h1>
        <FAQ />
      </section>
      <section id="ContactUs" className="my-[10rem]">
        <h1 className="text-4xl font-light  text-center mb-7">Contact Us</h1>
        <ContactUs />
      </section>
      <section>{!isDashboardRoute && <Footer />}</section>
    </>
  );
}

export default Home;
