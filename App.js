// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";  // Import Login Page

function App() {
  return (
    <Router>
      <div>
        {/* Header with Navigation */}
        <header className="flex justify-between items-center p-4 bg-black text-white">
          <h1 className="text-2xl font-bold">QuickRoute</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Page Transitions */}
        <Routes>
          <Route
            path="/"
            element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/services"
            element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Services />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <About />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={<Login />}  // Define the route for Login page
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
