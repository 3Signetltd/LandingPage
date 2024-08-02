// import React, { useState, useEffect, useRef } from "react";

// function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const faqRef = useRef();

//   const toggleOpen = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const handleClickOutside = (event) => {
//     if (faqRef.current && !faqRef.current.contains(event.target)) {
//       setOpenIndex(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="Nlg:px-3" ref={faqRef}>
//       <ul className="max-w-4xl mx-auto mt-20 divide-y shadow shadow-blue-600 bg-blue text-white">
//         {[
//           {
//             question: "Is 3Signet a tech training business?",
//             answer:
//               "Yes, 3Signet is a tech training business that provides a range of courses and workshops designed to help individuals and businesses develop their technical skills and knowledge.",
//           },
//           {
//             question: "Is the program free?",
//             answer:
//               "No, the program is not free. However, we offer various payment plans and scholarships to make our courses accessible to a wider audience.",
//           },
//           {
//             question: "What do I expect to gain from this program?",
//             answer:
//               "You can expect to gain practical skills and knowledge in various tech fields, including programming, web development, data analysis, and more. Our programs are designed to prepare you for real-world challenges and career advancement.",
//           },
//           {
//             question: "Is there going to be interview practice?",
//             answer:
//               "Yes, we offer interview practice sessions as part of our program. These sessions are designed to help you develop the skills and confidence needed to succeed in job interviews.",
//           },
//           {
//             question: "Is this a physical training?",
//             answer:
//               "Our training programs are primarily online, allowing you to learn at your own pace from anywhere. We also offer some in-person workshops and events for hands-on learning experiences.",
//           },
//         ].map((item, index) => (
//           <li key={index}>
//             <div
//               className="group"
//               onClick={() => toggleOpen(index)}
//               style={{ cursor: "pointer" }}
//             >
//               <summary className="flex items-center pt-4 justify-between px-4 py-2 font-light marker:content-none">
//                 <span
//                   style={{
//                     fontWeight: openIndex === index ? "bold" : "normal",
//                   }}
//                 >
//                   {item.question}
//                 </span>
//                 <svg
//                   className={`w-5 h-5 text-white transition-transform duration-300 ease-in-out ${
//                     openIndex === index ? "rotate-180 " : "rotate-90"
//                   }`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   fill="currentColor"
//                   viewBox="0 0 16 16"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
//                   ></path>
//                 </svg>
//               </summary>
//               <article
//                 className="px-4 pb-4 transition-max-height duration-500 ease-in-out overflow-hidden bg-white text-black p-3"
//                 style={{
//                   maxHeight: openIndex === index ? "200px" : "0",
//                   opacity: openIndex === index ? 1 : 0,
//                   transition:
//                     "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
//                 }}
//               >
//                 <p>{item.answer}</p>
//               </article>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FAQ;

import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse "
      className="lg:w-[70%] Nlg:mx-10 mx-auto bg-blue"
    >
      {/* Accordion Item 1 */}
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200   gap-3"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded={activeIndex === 1}
          aria-controls="accordion-collapse-body-1"
          onClick={() => toggleAccordion(1)}
        >
          <span className="flex text-lg font-light text-white items-center pt-4 justify-between px-4 py-2 border border-blue marker:content-none">
            Is 3Signet a tech training business?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              activeIndex === 1 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            color="white"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5L5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${activeIndex === 1 ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-b-2 bg-white ">
          <p className="mb-2 text-dark ">
            Yes, 3Signet is a tech training business that provides a range of
            courses and workshops designed to help individuals and businesses
            develop their technical skills and knowledge.
          </p>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200   gap-3"
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded={activeIndex === 2}
          aria-controls="accordion-collapse-body-2"
          onClick={() => toggleAccordion(2)}
        >
          <span className="flex text-lg font-light text-white items-center pt-4 justify-between px-4 py-2 border border-blue marker:content-none">
            Is the program free?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              activeIndex === 2 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              color="white"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5L5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={`${activeIndex === 2 ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 border border-b-2 bg-white">
          <p className="mb-2 text-dark ">
            "No, the program is not free. However, we offer various payment
            plans and scholarships to make our courses accessible to a wider
            audience.
          </p>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200   gap-3"
          data-accordion-target="#accordion-collapse-body-3"
          aria-expanded={activeIndex === 3}
          aria-controls="accordion-collapse-body-3"
          onClick={() => toggleAccordion(3)}
        >
          <span className="flex text-lg font-light text-white items-center pt-4 justify-between px-4 py-2 border border-blue marker:content-none">
            What do I expect to gain from this program?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              activeIndex === 3 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              color="white"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5L5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={`${activeIndex === 3 ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-b-2 bg-white">
          <p className="mb-2 text-dark ">
            You can expect to gain practical skills and knowledge in various
            tech fields, including programming, web development, data analysis,
            and more. Our programs are designed to prepare you for real-world
            challenges and career advancement.
          </p>
        </div>
      </div>
      {/* Accordion Item 4 */}
      <h2 id="accordion-collapse-heading-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200   gap-3"
          data-accordion-target="#accordion-collapse-body-4"
          aria-expanded={activeIndex === 4}
          aria-controls="accordion-collapse-body-4"
          onClick={() => toggleAccordion(4)}
        >
          <span className="flex text-lg font-light text-white items-center pt-4 justify-between px-4 py-2 border border-blue marker:content-none">
            Is there going to be interview practice?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              activeIndex === 4 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              color="white"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5L5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-4"
        className={`${activeIndex === 4 ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-b-2 bg-white">
          <p className="mb-2 text-dark ">
            Yes, we offer interview practice sessions as part of our program.
            These sessions are designed to help you develop the skills and
            confidence needed to succeed in job interviews.
          </p>
        </div>
      </div>
      {/* Accordion Item 5 */}
      <h2 id="accordion-collapse-heading-5">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200   gap-3"
          data-accordion-target="#accordion-collapse-body-5"
          aria-expanded={activeIndex === 5}
          aria-controls="accordion-collapse-body-5"
          onClick={() => toggleAccordion(5)}
        >
          <span className="flex text-lg font-light text-white items-center pt-4 justify-between px-4 py-2 border border-blue marker:content-none">
            Is this a physical training?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              activeIndex === 5 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              color="white"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5L5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-4"
        className={`${activeIndex === 5 ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-b-2 bg-white">
          <p className="mb-2 text-dark ">
            Our training programs are primarily online, allowing you to learn at
            your own pace from anywhere. We also offer some in-person workshops
            and events for hands-on learning experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
