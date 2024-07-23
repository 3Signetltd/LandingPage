import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import { OfferCard1 } from "./components/Cards/OfferCards";
import { OfferCard2 } from "./components/Cards/OfferCards";
import { OfferCard3 } from "./components/Cards/OfferCards";
import { OfferCard4 } from "./components/Cards/OfferCards";
import { OfferCard5 } from "./components/Cards/OfferCards";
import { WhyusCard1 } from "./components/Cards/WhychooseUsCard";
import { WhyusCard2 } from "./components/Cards/WhychooseUsCard";
import { WhyusCard3 } from "./components/Cards/WhychooseUsCard";

import "./App.css";

function App() {
  return (
    <>
      <section className="bg-blue h-screen">
        <Navbar />
        <div className="flex mt-24">
          <div className=" ml-6">
            <h1 className="text-white !font-light mb-6">
              Transforming learning, <br></br>Empowering Enterprises
            </h1>
            <button className="bg-buttonClr text-white px-6 py-2 rounded-sm">
              Speak With Us
            </button>
          </div>
          <div></div>
        </div>
      </section>
      <section>
        <div className="text-center my-[15rem]">
          <h1 className="text-4xl font-light mb-5">About Us</h1>
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
      <section>
        <h1 className="text-4xl font-light  text-center mb-7">
          What We Offer You
        </h1>

        <div className="flex flex-wrap justify-center items-center min-h-screen">
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

      <section className="mt-[10rem]">
        <h1 className="text-4xl font-light mod:text-3xl text-center pb-[10rem]">
          Why Our Customers Choose Us
        </h1>

        <div className="relative flex flex-col items-center">
          {/* Card Container */}
          <div className="absolute top-[-7rem] flex flex-wrap justify-center items-center w-full">
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
          <div className="bg-blue h-[15rem] w-full"></div>
        </div>
      </section>
    </>
  );
}

export default App;
