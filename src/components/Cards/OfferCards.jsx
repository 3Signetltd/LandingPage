import React from "react";
import "../../App.css";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import icon5 from "../../assets/images/icon5.png";

export const OfferCard1 = () => {
  return (
    <div className="bg-white shadow-2xl shadow-top rounded-lg p-6 flex flex-col justify-center items-center align-middle h-[15rem] w-[25rem]">
      <div className="text-4xl mb-4">
        <span>
          <img src={icon1} className="w-[4rem]" alt="icon1" />
        </span>
      </div>
      <h2 className="text-xl font-normal">Data Technology</h2>
    </div>
  );
};
export const OfferCard2 = () => {
  return (
    <div className="bg-white shadow-2xl shadow-top rounded-lg p-6 flex flex-col justify-center items-center align-middle h-[15rem] w-[25rem]">
      <div className="text-4xl mb-4">
        <span>
          <img src={icon2} className="w-[4rem]" alt="icon1" />
        </span>
      </div>
      <h2 className="text-xl font-normal">Business Consulting and Analysis</h2>
    </div>
  );
};
export const OfferCard3 = () => {
  return (
    <div className="bg-white shadow-2xl shadow-top rounded-lg p-6 flex flex-col justify-center items-center align-middle h-[15rem] w-[25rem]">
      <div className="text-4xl mb-4">
        <span>
          <img src={icon3} className="w-[4rem]" alt="icon1" />
        </span>
      </div>
      <h2 className="text-xl font-normal">Generative AI</h2>
    </div>
  );
};
export const OfferCard4 = () => {
  return (
    <div className="bg-white shadow-2xl shadow-top rounded-lg p-6 flex flex-col justify-center items-center align-middle h-[15rem] w-[25rem]">
      <div className="text-4xl mb-4">
        <span>
          <img src={icon4} className="w-[4rem]" alt="icon1" />
        </span>
      </div>
      <h2 className="text-xl font-normal">Product Development</h2>
    </div>
  );
};
export const OfferCard5 = () => {
  return (
    <div className="bg-white shadow-2xl shadow-top rounded-lg p-6 flex flex-col justify-center items-center align-middle h-[15rem] w-[25rem]">
      <div className="text-4xl mb-4">
        <span>
          <img src={icon5} className="w-[4rem]" alt="icon1" />
        </span>
      </div>
      <h2 className="text-xl font-normal text-center">
        Professional Training and Management
      </h2>
    </div>
  );
};
