import React from "react";
import "../../App.css";
import { Svg1 } from "../../assets/svg/svg";
import { Svg2 } from "../../assets/svg/svg";
import { Svg3 } from "../../assets/svg/svg";
import { Svg4 } from "../../assets/svg/svg";
import { Svg5 } from "../../assets/svg/svg";

export const OfferCard1 = () => {
  return (
    <div className="bg-white shadow-2xl shadow-top rounded-lg p-6 flex flex-col justify-center items-center align-middle h-[15rem] w-[25rem]">
      <div className="text-4xl mb-4">
        <span>
          <Svg1 />
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
          <Svg2 />
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
          <Svg3 />
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
          <Svg4 />
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
          <Svg5 />
        </span>
      </div>
      <h2 className="text-xl font-normal text-center">
        Professional Training and Management
      </h2>
    </div>
  );
};
