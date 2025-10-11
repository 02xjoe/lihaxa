import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";

// ========================================= react form linked to backend =========================================
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = {name, email, phone, university, specialization, experience, licensed };

  const res = await fetch('http://localhost:5000/api/doctor-signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  const data = await res.json();
  if (data.success) alert('✅ Application submitted successfully! ');
  else alert('Error submitting form. Please try again.');
};
// =========================================end========================================


const SignupDoctor = () => {
  // =========================================
  // 🩺 FORM STATE MANAGEMENT
  // =========================================
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    specialization: "",
    experience: "",
    licensed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.licensed) {
       Swal.fire({
           title: "❌ Application not submitted!",
           text: "Confirm that you are a licensed medical practitioner.",
           icon: "error",
           confirmButtonText: "Close",
           confirmButtonColor: "#da0c0cff"
         });
   //   alert("⚠️ Please confirm that you are a licensed medical practitioner.");
   //   return;
    }
       Swal.fire({
           title: "😊 Your application is successful!",
           text: "We’ll notify you via email once we’re live.",
           icon: "success",
           confirmButtonText: "Awesome!",
           confirmButtonColor: "#2563EB" // Tailwind blue-600
         });
   // alert("✅ Application submitted successfully! Verification in progress.");
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0F172A] via-[#001E3C] to-[#0080FF] text-white px-6 pt-28 pb-16 font-sans">
      {/* ===============================  HEADER =============================== */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Join as Doctor</h1>
        <p className="text-gray-300 max-w-md mx-auto text-lg">
          Fill in your details to start the verification process.
        </p>
      </motion.div>

      {/* ===============================  SIGNUP CARD =============================== */}
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
            placeholder="Dr. John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="doctor@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+1234567890"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
          />
        </div>

        {/* University of Study */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            University of Study <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="university"
            placeholder="Harvard Medical School"
            value={formData.university}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
          />
        </div>

        {/* Specialization */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Specialization <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="specialization"
            placeholder="General Practice, Cardiology, etc."
            value={formData.specialization}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
          />
        </div>

        {/* Years of Experience */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Years of Experience <span className="text-red-400">*</span>
          </label>
          <input
            type="number"
            name="experience"
            placeholder="5"
            value={formData.experience}
            onChange={handleChange}
            required
            min="0"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
          />
        </div>

        {/* Licensed Checkbox */}
        <div className="flex items-start gap-3 mt-4">
          <input
            type="checkbox"
            name="licensed"
            checked={formData.licensed}
            onChange={handleChange}
            className="mt-1 h-5 w-5 accent-[#0080FF] rounded-md cursor-pointer"
          />
          <label className="text-sm text-gray-300">
            I am a licensed medical practitioner and I agree to provide
            accurate information for verification purposes.
          </label>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-[#0080FF] hover:bg-[#3697FF] text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300 mt-4"
        >
          Submit Application
        </motion.button>
      </motion.form>

      {/* ============== FOOTER SPACING ========= */}
      <div className="mt-16"></div>
    </main>
  );
};

export default SignupDoctor;
