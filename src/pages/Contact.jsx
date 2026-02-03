// src/pages/Contact.jsx
import { useState } from "react";
import apiClient from "../apiClient";
import { Mail, Phone, MapPin } from "lucide-react";
import InformationExtra from "../components/InformationExtra";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");
    try {
      const { data } = await apiClient.post("/api/contact/contact", form);
      setSuccess(data?.message || "Message sent successfully.");
      setForm({ name: "", email: "", mobile: "", subject: "", message: "" });
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Contact Header */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-12 md:py-16 text-center shadow-inner mt-32">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 px-4 drop-shadow-sm">
          Let's Talk
        </h1>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          We'd love to hear from you. Get in touch today!
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left side info card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 leading-relaxed">
            Need more <span className="text-purple-600">information? </span>
            Reach out via our social channels or directly below.
          </h2>
          <p className="text-gray-600">
            We usually reply within a couple of hours — no more than 2 working
            days after receiving your ticket.
          </p>

          {/* Location */}
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-purple-600 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Bhagalpur</h3>
              <p className="text-gray-600">
                Naya Tola TeenPuliya (Ganeshpur), Post - Khirabandh <br />
                P.s - By Pass , District - Bhagalpur , (Bihar) India
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-blue-600" />
            <a
              href="mailto:manturani.pp@gmail.com"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              manturani.pp@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-green-600" />
            <p className="font-bold text-lg">(+91) 7764026786</p>
          </div>
        </div>

        {/* Right side form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-6 md:p-8 space-y-5 h-fit border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
        >
          {error && (
            <div className="p-3 rounded-lg bg-red-50 text-red-700 text-sm border border-red-200">{error}</div>
          )}
          {success && (
            <div className="p-3 rounded-lg bg-green-50 text-green-700 text-sm border border-green-200">{success}</div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                         outline-none transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                         outline-none transition-all"
              required
            />
          </div>

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile *"
            value={form.mobile}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full 
                       focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                       outline-none transition-all"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject *"
            value={form.subject}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full 
                       focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                       outline-none transition-all"
            required
          />

          <textarea
            name="message"
            placeholder="Please describe what you need."
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="border border-gray-300 p-3 rounded-lg w-full resize-none 
                       focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                       outline-none transition-all"
          ></textarea>

          {/* Sexy Gradient Send Message Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 
                       text-white px-6 py-3 rounded-xl font-semibold 
                       bg-gradient-to-r from-blue-500 to-purple-500 
                       hover:opacity-90 active:scale-95 
                       transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
      <InformationExtra />
    </div>
  );
}