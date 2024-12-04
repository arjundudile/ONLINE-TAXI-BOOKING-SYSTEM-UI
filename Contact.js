import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="text-lg mt-4 max-w-3xl text-center">
        If you have any questions or feedback, feel free to reach out to us.
        We're here to help!
      </p>
      <form className="mt-8 space-y-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
      <img
        src="https://cdn-icons-png.flaticon.com/512/8781/8781951.png"
        alt="Contact Us"
        className="mt-8 w-full max-w-lg rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Contact;
