import React, { useState } from "react";

const ContactSection = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9cb377ce-e96d-4fb5-9d02-c7c2a57b6a28");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="bg-[#333333] text-black min-h-screen flex flex-col justify-center items-center p-8"> {/* Updated background color */}
      <div className="w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        <div className=" text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
          <p className="mb-4 text-center">Feel free to reach out using the form below:</p>
        </div>
        <form onSubmit={onSubmit} className="p-6 space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4"> 
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-gray-700" htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300 text-black"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-gray-700" htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                required
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300 text-black"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-gray-700" htmlFor="message">Your Message</label>
            <textarea
              name="message"
              rows="6"
              required
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300 text-black"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Send Message
          </button>
          {result && (
            <p className="mt-4 text-center text-lg font-semibold text-green-700">
              {result}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
