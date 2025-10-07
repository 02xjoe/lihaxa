// ===============================
// 📄 SignupDoctor.jsx
// ===============================

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SignupDoctor = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0F1C] via-[#08111E] to-[#060B16] text-white overflow-hidden px-6">
      {/* SEO Meta */}
      <Helmet>
        <title>Join as Doctor | Lihaxa</title>
        <meta
          name="description"
          content="Sign up as a verified Lihaxa doctor. Connect with patients, set your hours, and earn securely through your digital wallet."
        />
      </Helmet>

      {/* Decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,128,255,0.12),transparent_70%)]"></div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-lg w-full bg-white/10 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-white/10"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Join as Doctor</h2>
        <p className="text-gray-300 text-center mb-8">
          Connect with patients and practice medicine on your terms.
        </p>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="Dr. John Doe"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="doctor@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#28BD66]"
            />
          </div>

          {/* Specialization */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Specialization</label>
            <input
              type="text"
              placeholder="e.g. General Practitioner"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
            />
          </div>

          {/* License / ID */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">License Number</label>
            <input
              type="text"
              placeholder="Medical License ID"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#28BD66]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Create a secure password"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-lg bg-[#28BD66] font-semibold hover:bg-[#22A35B] transition shadow-lg hover:shadow-green-500/30"
          >
            Sign Up
          </button>

          <p className="text-sm text-gray-400 text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-[#0080FF] hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </motion.div>
    </main>
  );
};

export default SignupDoctor;
