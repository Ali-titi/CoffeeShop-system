import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState({ show: false, text: "", type: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({
          show: true,
          text: "✅ Thank you for contacting Kigali Café! We’ll get back to you soon.",
          type: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setToast({
          show: true,
          text: "❌ Something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      setToast({
        show: true,
        text: "⚠️ Could not connect to server.",
        type: "error",
      });
    }

    // Auto hide toast after 4 seconds
    setTimeout(() => {
      setToast({ show: false, text: "", type: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#3E2723] text-white relative">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-10 text-lg">
          Have questions or want to collaborate? We’d love to hear from you.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Phone className="text-white w-8 h-8 mb-2" />
            <p>+250 780 000 000</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="text-white w-8 h-8 mb-2" />
            <p>info@kigalicafe.com</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="text-white w-8 h-8 mb-2" />
            <p>Kigali, Rwanda</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black shadow-lg rounded-2xl p-8 flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-amber-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-4 rounded-lg shadow-lg text-white font-medium transition transform ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.text}
        </div>
      )}
    </section>
  );
}
