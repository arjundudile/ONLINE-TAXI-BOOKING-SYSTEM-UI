import React, { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [selectedRideType, setSelectedRideType] = useState("");
  const [fare, setFare] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(""); // New state for payment method

  const handleBookRide = (rideType) => {
    setSelectedRideType(rideType);
    setIsBooking(true);
  };

  const closeBookingForm = () => {
    setIsBooking(false);
    setFare(null);
    setSelectedRideType("");
    setPaymentMethod(""); // Reset payment method
  };

  const calculateFare = (pickup, dropoff, rideType) => {
    if (!pickup || !dropoff || !rideType) {
      alert("Please fill all fields to calculate fare.");
      return;
    }

    const distance = Math.floor(Math.random() * 20) + 5; // Random distance for demo
    const baseRate =
      rideType === "Economy"
        ? 10
        : rideType === "Business"
        ? 20
        : rideType === "Luxury"
        ? 30
        : 5; // Base rate for Auto Rickshaw
    const estimatedFare = distance * baseRate;

    setFare(estimatedFare);
  };

  const confirmPayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    alert(`Payment of ₹${fare} confirmed using ${paymentMethod}.`);
    closeBookingForm();
  };

  const rideOptions = [
    {
      type: "Economy",
      description: "Affordable and comfortable rides.",
      img: "https://3dmodels.org/wp-content/uploads/Suzuki/008_Suzuki_Maruti_Alto_2012/Suzuki_Maruti_Alto_2012_600_0005.jpg",
    },
    {
      type: "Business",
      description: "Rides for your business needs.",
      img: "https://www.shutterstock.com/image-vector/green-suv-car-side-view-260nw-1970474207.jpg",
    },
    {
      type: "Luxury",
      description: "Premium rides for special occasions.",
      img: "https://www.pngitem.com/pimgs/m/7-76542_svg-freeuse-download-bmw-vector-cartoon-red-cartoon.png",
    },
    {
      type: "Auto Rickshaw",
      description: "Convenient local travel option.",
      img: "https://www.shutterstock.com/image-vector/yellow-orange-color-tuk-taxi-260nw-1926478046.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h2 className="text-3xl font-semibold mb-6">Our Ride Options</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {rideOptions.map((ride) => (
          <div
            key={ride.type}
            className="bg-white flex flex-col items-center p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
            style={{ height: "300px", width: "100%" }}
          >
            <img
              src={ride.img}
              alt={ride.type}
              className="w-3/4 h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{ride.type}</h3>
            <p className="text-sm text-gray-600 text-center">{ride.description}</p>
            <button
              onClick={() => handleBookRide(ride.type)}
              className="mt-auto py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              Book {ride.type} Ride
            </button>
          </div>
        ))}
      </div>

      {/* Booking Form with Payment Option */}
      {isBooking && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
        >
          <div className="bg-white w-full md:w-2/3 lg:w-4/5 h-full flex flex-col lg:flex-row rounded-lg overflow-hidden shadow-lg">
            {/* Booking Form Section */}
            <div className="w-full lg:w-1/2 p-8">
              <h2 className="text-2xl font-semibold mb-6">Book Your {selectedRideType} Ride</h2>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const pickup = e.target.pickup.value;
                  const dropoff = e.target.dropoff.value;
                  const rideType = selectedRideType;

                  calculateFare(pickup, dropoff, rideType);
                }}
              >
                <div>
                  <label className="block text-gray-600 text-sm">Pickup Location</label>
                  <input
                    name="pickup"
                    type="text"
                    placeholder="Enter pickup location"
                    className="w-full p-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm">Dropoff Location</label>
                  <input
                    name="dropoff"
                    type="text"
                    placeholder="Enter dropoff location"
                    className="w-full p-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 text-sm"
                >
                  Calculate Fare
                </button>
              </form>

              {fare !== null && (
                <div>
                  <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                    Estimated Fare: <strong>₹{fare}</strong>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-600 text-sm">Payment Method</label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full p-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a payment method</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="UPI">UPI</option>
                      <option value="PayPal">PayPal</option>
                      <option value="Cash">Cash</option>
                    </select>
                  </div>
                  <button
                    onClick={confirmPayment}
                    className="mt-4 w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 text-sm"
                  >
                    Confirm Payment
                  </button>
                </div>
              )}

              <button
                onClick={closeBookingForm}
                className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 text-sm"
              >
                Cancel
              </button>
            </div>

            {/* Map Section */}
            <div className="hidden lg:block w-full lg:w-1/2">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.599473758878!2d73.84778311534416!3d18.52043028739544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c068ac233023%3A0x29a3b22e2905ba57!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1609775851609!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;
