
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Stethoscope, Clock, Wallet, CheckCircle, UserCheck, HeartPulse } from "lucide-react";

const About = () => {
  return (
    < section className = "relative w-full py-24 px-6 md:px-12 bg-[#0F172A] text-white overflow-hidden" >
      {/* Background gradient glow */ }
      < div className = "absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,128,255,0.15),transparent_60%)]" ></div >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(40,189,102,0.15),transparent_70%)]"></div>

  {/* Content Wrapper */ }
  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    {/* LEFT: Image or abstract medical illustration */}
    <div className="flex-1">
      <img
        src="logo" // replace with your preferred image or abstract illustration
        alt="Lihaxa healthcare illustration"
        className="w-full max-w-md mx-auto rounded-2xl shadow-lg opacity-90"
      />
    </div>

    {/* RIGHT: Text Content */}
    <div className="flex-1 space-y-6 text-center md:text-left">
      <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0080FF] to-[#28BD66]">
        About Lihaxa
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed">
        Lihaxa is a telemedicine and digital wellness platform bridging the gap
        between patients and verified doctors across Africa. We’re building a
        future where healthcare is affordable, accessible, and powered by
        technology — enabling patients to get real-time medical help through
        WhatsApp and doctors to practice from anywhere.
      </p>

      <p className="text-gray-400 text-base leading-relaxed">
        Our mission is simple: <span className="text-[#28BD66] font-semibold">empower better health decisions</span> by
        combining modern communication tools, verified medical professionals, and
        seamless digital payments.
      </p>

      <div className="pt-4">
        <a
          href="#waitlist"
          className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-[#0080FF] to-[#28BD66] font-semibold text-white hover:opacity-90 transition"
        >
          Join the Waitlist
        </a>
      </div>
    </div>
  </div>
</section >

  );
};

export default About;
