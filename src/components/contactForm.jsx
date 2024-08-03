import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWhatsapp } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const templateParams = {
        to_name: "Peter Uche",
        from_name: email,
        message,
      };

      await emailjs.send(
        "service_mfruavt",
        "template_cst1uc9",
        templateParams,
        "9Tp4XEvOsWGi69ktz"
      );
      toast.success("Message sent successfully! 📧");
    } catch (error) {
      setError("Failed to send message. Please try again.");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }

    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="lg:w-[65%]  Nlg:w-full Nlg:mx-10  p-6 bg-white rounded-md shadow-2xl mt-5 mb-12">
          <div className="justify-center align-middle mx-auto">
            <div className="grid lg:grid-cols sm:max-w-[35rem] gap-8 mx-auto bg-white rounded-2xl">
              <div className="p-4">
                <form id="form" name="form" onSubmit={sendEmail}>
                  <div className="flex flex-col py-2">
                    <label className="text-sm py-2">Email Address</label>
                    <input
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-2 rounded-lg p-3 flex border-gray-200 focus:outline-blue"
                      type="email"
                      name="email"
                    />
                  </div>

                  <div className="flex flex-col py-2">
                    <label className="text-sm py-2">Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="border-2 rounded-lg p-3 flex border-gray-200 focus:outline-blue"
                      rows="10"
                      name="message"
                    ></textarea>
                  </div>

                  <div className="flex justify-center align-middle mx-auto mt-5">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="hover:scale-110 ease-in duration-300 relative px-12 py-2 bg-buttonClr text-white rounded-3xl"
                    >
                      <span className="relative transition-all ease-in duration-75 text-white rounded-md">
                        {isLoading ? "Sending..." : "Submit"}
                      </span>
                    </button>
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
          
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default ContactUs;
