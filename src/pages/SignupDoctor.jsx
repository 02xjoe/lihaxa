import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";

const SignupDoctor = () => {
  // ===============================
  // FORM STATE MANAGEMENT
  // ===============================
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    specialization: "",
    experience: "",
    licensed: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ===============================
  // FORM SUBMIT HANDLER
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate license checkbox
    if (!formData.licensed) {
      Swal.fire({
        icon: "error",
        title: "❌ Application not submitted!",
        text: "Confirm that you are a licensed medical practitioner.",
        confirmButtonColor: "#dc2626",
      });
      return;
    }

    try {
      console.log("Submitting form to /api/doctors", formData);

      const res = await fetch("/api/doctors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          university: formData.university,
          specialization: formData.specialization,
          yearsOfExperience: formData.experience,
          isDoctor: formData.licensed,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success !== false) {
        Swal.fire({
          icon: "success",
          title: "Application submitted!",
          text: "You’ve successfully joined the doctor waitlist.",
          confirmButtonColor: "#2563EB",
        });

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          university: "",
          specialization: "",
          experience: "",
          licensed: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission failed",
          text: data.message || "Error submitting form. Please try again.",
          confirmButtonColor: "#dc2626",
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      Swal.fire({
        icon: "error",
        title: "Network error",
        text: "Please check your connection and try again.",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  // ===============================
  // JSX RENDER
  // ===============================
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0F172A] via-[#001E3C] to-[#0080FF] text-white px-6 pt-28 pb-16 font-sans">
      {/* Header */}
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

      {/* Form */}
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

        {/* Phone */}
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

        {/* University */}
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
            I am a licensed medical practitioner and agree to provide accurate
            information for verification.
          </label>
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-[#0080FF] hover:bg-[#3697FF] text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300 mt-4"
        >
          Submit Application
        </motion.button>
      </motion.form>

      <div className="mt-16"></div>
    </main>
  );
};

export default SignupDoctor;