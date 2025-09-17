import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Example API endpoint: replace with your backend URL
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", date: "", time: "", guests: "", requests: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server.");
    }
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-r from-[#3E2723] via-[#5D4037] to-[#3E2723] text-white">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-4xl font-bold mb-6">Reserve Your Table</h2>
        <p className="mb-8 text-lg text-amber-200">
          Enjoy a cozy time at Kigali Café — book your table in advance
        </p>

        {/* Success Popup */}
        {success && (
          <div className="bg-green-500 text-white p-4 rounded-lg mb-6 animate-bounce">
            ✅ Thank you for booking! We’ll confirm your table soon.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col gap-5 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 rounded-lg bg-amber-50 text-black focus:ring-2 focus:ring-amber-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="p-4 rounded-lg bg-amber-50 text-black focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-4 rounded-lg bg-amber-50 text-black focus:ring-2 focus:ring-amber-500"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="p-4 rounded-lg bg-amber-50 text-black focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <input
            type="number"
            name="guests"
            min="1"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={handleChange}
            className="p-4 rounded-lg bg-amber-50 text-black focus:ring-2 focus:ring-amber-500"
            required
          />

          <textarea
            name="requests"
            placeholder="Special Requests (optional)"
            rows="3"
            value={formData.requests}
            onChange={handleChange}
            className="p-4 rounded-lg bg-amber-50 text-black focus:ring-2 focus:ring-amber-500"
          ></textarea>

          <button
            type="submit"
            className="bg-amber-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition shadow-lg"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
}
