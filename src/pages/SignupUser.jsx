// ===============================
// 📄 SignupUser.jsx
// ===============================
// This component renders the Patient Signup form.
// It collects patient details and submits them to the backend API route `/api/patients`
// which is automatically redirected to your backend hosted on Render
// via Netlify's redirect configuration.

import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useState } from "react";

// ===============================
// 🧠 COMPONENT: SignupUser
// ===============================
const SignupUser = () => {
  // --------------------------------------------
  // 🔧 State management for all form fields
  // --------------------------------------------
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    ageBracket: "",
    healthcareProblem: "",
  });

  // --------------------------------------------
  // 🖊️ Handle input field changes
  // --------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // --------------------------------------------
  // 🚀 Handle form submission
  // --------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting form to /api/patients", formData);

      const res = await fetch("/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // ✅ Success case
      if (res.ok && data.success !== false) {
        Swal.fire({
          icon: "success",
          title: "🎉 You're on the waitlist!",
          text: "We’ll notify you via email once we’re live.",
          confirmButtonText: "Awesome!",
          confirmButtonColor: "#2563EB", // Tailwind blue-600
        });

        // Reset form after success
        setFormData({
          fullName: "",
          email: "",
          ageBracket: "",
          healthcareProblem: "",
        });
      } else {
        // ❌ Backend returned an error
        Swal.fire({
          icon: "error",
          title: "Submission failed",
          text: data.message || "Something went wrong. Please try again.",
          confirmButtonColor: "#dc2626",
        });
      }
    } catch (error) {
      // ❌ Network or server connection issue
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Network error",
        text: "Unable to connect to the server. Please check your connection and try again.",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  // ===============================
  // 🎨 RENDER COMPONENT
  // ===============================
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0F172A] via-[#001E3C] to-[#0080FF] text-white px-6 pt-28 pb-16 font-sans">
      {/* =============================== 🌟 HEADER =============================== */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Join as Patient</h1>
        <p className="text-gray-300 max-w-md mx-auto text-lg">
          Get on the waitlist for instant medical consultations.
        </p>
      </motion.div>

      {/* =============================== 🧾 FORM =============================== */}
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
            <option value="" disabled>
              Select your age range
            </option>
            <option className="bg-white/5 text-black" value="18-25">
              18 - 25
            </option>
            <option className="bg-white/5 text-black" value="26-35">
              26 - 35
            </option>
            <option className="bg-white/5 text-black" value="36-45">
              36 - 45
            </option>
            <option className="bg-white/5 text-black" value="46-60">
              46 - 60
            </option>
            <option className="bg-white/5 text-black" value="60+">
              60+
            </option>
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
          className="w-full bg-[#28BD66] hover:bg-[#2ECC71] text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
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
