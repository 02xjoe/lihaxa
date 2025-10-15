// ===============================
// 📄 SignupUser.jsx
// ===============================

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { useState } from "react";
// ========================================= react form linked to backend =========================================
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = {fullName, email, ageBracket, healthcareProblem };

  
  const res = await fetch("https://lihaxa-backend.onrender.com/api/patients", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  const data = await res.json();
  if (data.success) alert(' You\'re on the waitlist! We’ll notify you once we’re live.');
  else alert('Error submitting form. Please try again.');
};
// =========================================end========================================

const SignupUser = () => {
  // =========================================
  // 🔧 FORM STATE MANAGEMENT
  // =========================================
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    ageBracket: "",
    healthcareProblem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      Swal.fire({
    title: "😊 You're on the waitlist!",
    text: "We’ll notify you via email once we’re live.",
    icon: "success",
    confirmButtonText: "Awesome!",
    confirmButtonColor: "#2563EB" // Tailwind blue-600
  });
  //  alert("🎉 You're on the waitlist! We’ll notify you via email once we’re live.");
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0F172A] via-[#001E3C] to-[#0080FF] text-white px-6 pt-28 pb-16 font-sans">
      {/* =============================== 🌟 HEADER =============================== */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Join as Patient
        </h1>
        <p className="text-gray-300 max-w-md mx-auto text-lg">
          Get on the waitlist for instant medical consultations.
        </p>
      </motion.div>

      {/* ====== SIGNUP CARD ========= */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl space-y-6"
      >
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
          />
          <p className="text-sm text-gray-400 mt-1">
            Name must be at least 2 characters.
          </p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
          />
        </div>

        {/* Age Bracket */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Age Bracket <span className="text-red-400">*</span>
          </label>
          <select
            name="ageBracket"
            value={formData.ageBracket}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
          >
            <option  value="" disabled>
              Select your age range
            </option>
            <option className="bg-white/5 text-black" value="18-25">18 - 25</option>
            <option className="bg-white/5 text-black" value="26-35">26 - 35</option>
            <option className="bg-white/5 text-black" value="36-45">36 - 45</option>
            <option className="bg-white/5 text-black" value="46-60">46 - 60</option>
            <option className="bg-white/5 text-black" value="60+">60+</option>
          </select>
        </div>

        {/* Healthcare Problem */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            What’s your most pressing healthcare problem?{" "}
            <span className="text-red-400">*</span>
          </label>
          <textarea
            name="healthcareProblem"
            placeholder="Describe the healthcare challenge you’re facing..."
            value={formData.healthcareProblem}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF] h-28"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full  bg-[#28BD66] hover:bg-[#2ECC71] text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
        >
          Join Waitlist
        </motion.button>
      </motion.form>

      {/* =============================== ✨ FOOTER SPACING =============================== */}
      <div className="mt-16"></div>
    </main>
  );
};

export default SignupUser;
