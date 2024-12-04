import { useState } from "react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    rideType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Submitted");
  };

  return (
    <div className="container">
      <div className="booking-form">
        <h2>Book a Ride</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="date"
            placeholder="Pick a Date"
            value={formData.date}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Pickup Location"
            value={formData.location}
            onChange={handleInputChange}
          />
          <select
            name="rideType"
            value={formData.rideType}
            onChange={handleInputChange}
          >
            <option value="">Select Ride Type</option>
            <option value="standard">Standard</option>
            <option value="luxury">Luxury</option>
            <option value="suv">SUV</option>
          </select>
          <button type="submit">Book Ride</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
