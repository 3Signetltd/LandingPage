import React from "react";
import "../../App.css";
import whyus1 from "../../assets/images/whyus1.png";
import whyus2 from "../../assets/images/whyus2.png";
import whyus3 from "../../assets/images/whyus3.png";

export const WhyusCard1 = () => {
  return (
    <div className="bg-white shadow-2xl shadow-top rounded-lg p-6  h-auto w-[25rem]">
      <div className="flex">
        <span>
          <img
            src={whyus1}
            className="w-[6rem] h-auto rounded-full"
            alt="icon1"
          />
        </span>
        <span className=" align-middle items-center mt-6 ml-5">
          <h3 className=" font-medium mb-2">James Adele</h3>
          <h4 className="text-xs font-normal">Data Scientist</h4>
        </span>
      </div>
      <p className="text-sm text-start px-1 mt-5">
        Joining 3Signet was the best decision of my career—transforming my
        passion for data into powerful analytics skills that opened doors to
        endless opportunities and an exciting future!
      </p>
    </div>
  );
};
export const WhyusCard2 = () => {
  return (
    <div className="bg-white shadow-2xl shadow-top rounded-lg p-6  h-auto w-[25rem]">
      <div className="flex">
        <span>
          <img
            src={whyus3}
            className="w-[6rem] h-auto rounded-full"
            alt="icon1"
          />
        </span>
        <span className=" align-middle items-center mt-6 ml-5">
          <h3 className=" font-medium mb-2">Ada Meche</h3>
          <h4 className="text-xs font-normal">Data Scientist</h4>
        </span>
      </div>
      <p className="text-sm text-start px-1 mt-5">
        It was the best program I have had the priviledge to attend. The
        instructors care abbout our understanding the concepts. It has been an
        honor and I advice everyone to be a part of this.
      </p>
    </div>
  );
};
export const WhyusCard3 = () => {
  return (
    <div className="bg-white shadow-2xl shadow-top rounded-lg p-6  h-auto w-[25rem]">
      <div className="flex">
        <span>
          <img
            src={whyus2}
            className="w-[6rem] h-auto rounded-full"
            alt="icon1"
          />
        </span>
        <span className=" align-middle items-center mt-6 ml-5">
          <h3 className=" font-medium mb-2">Jude Kade</h3>
          <h4 className="text-xs font-normal">Data Scientist</h4>
        </span>
      </div>
      <p className="text-sm text-start px-1 mt-5">
        Attending the Data Engineering program at 3Signet was truly a
        life-changing experience! The instructors genuinely care about our
        comprehension and mastery of the material, providing invaluable insights
        and support throughout the journey. I wholeheartedly encourage everyone
        to seize this opportunity and become part of a community that empowers
        you to excel in data engineering!
      </p>
    </div>
  );
};
