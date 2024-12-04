// src/pages/Home.js
import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle "Get Started" button click
  const handleGetStarted = () => {
    navigate("/login", { state: { from: location } });
  };

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50"
    >
      {/* Hero Section with Background Image */}
      <motion.div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/taxi-app-concept-illustration_52683-36027.jpg')",
        }}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 p-10 text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            Get There With QuickRoute
          </motion.h1>
          <motion.p
            className="text-lg mb-6 max-w-2xl mx-auto"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Reliable rides at your fingertips. Whether you’re heading to work, home, or out with
            friends, QuickRoute is here to get you where you need to go.
          </motion.p>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="w-full bg-white py-16"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Affordable", description: "Get the most competitive rates for your travel needs." },
            { title: "Fast & Reliable", description: "Rides are just a few taps away, anytime, anywhere." },
            { title: "Safe & Secure", description: "Your safety is our priority with verified drivers." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        className="w-full bg-blue-500 text-white py-16 text-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Ride?</h2>
        <p className="mb-6">Sign up now and experience the convenience of QuickRoute.</p>
        <motion.button
          className="px-8 py-4 bg-white text-blue-500 rounded-lg font-bold hover:bg-gray-100"
          onClick={handleGetStarted}
          variants={buttonVariants}
          whileHover="hover"
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Home;
