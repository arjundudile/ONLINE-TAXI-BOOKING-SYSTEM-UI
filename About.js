import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-3xl font-bold">About Us</h2>
      <p className="text-lg mt-4 max-w-3xl text-center">
        Uber Clone is a ride-sharing app that connects riders with drivers.
        Our mission is to make transportation fast, reliable, and affordable. 
        Whether you're heading to work or going on a vacation, Uber Clone is
        here to make your ride easy and convenient.
      </p>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/002/361/983/small/route-icon-free-vector.jpg"
        alt="About Us"
        className="mt-8 w-full max-w-lg rounded-lg shadow-lg"
      />
    </div>
  );
};

export default About;
