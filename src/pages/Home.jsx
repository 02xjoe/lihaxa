import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import chatImage from "../components/chat.png";

import {
  MessageCircle,
  UserCheck,
  Wallet,
  HeartPulse,
  Stethoscope,
  DollarSign,
  Clock,
  Users,
} from "lucide-react";

// 💡 Color Guide
// Blue: #0080FF
// Green: #28BD66
// Text dark: #0F172A
// White: #FFF

const Home = () => {
  return (
    <div className="w-full bg-white text-gray-900 overflow-hidden">
      {/* ========================= HERO SECTION ========================= */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24 bg-gradient-to-b from-[#f9fbff] to-[#f1faff] relative">
        {/* --- Left Text Side --- */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#0080FF] font-medium">Healthcare on WhatsApp</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#0F172A]">
            Talk to a Doctor <br />
            <span className="text-[#0080FF]">Anytime,</span>{" "}
            <span className="text-[#28BD66]">Anywhere</span>
          </h1>
          <p className="text-gray-600 text-lg md:w-4/5">
            Join Lihaxa to get care on WhatsApp or provide trusted medical help.
            Connect with verified doctors instantly, wherever you are.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              to="/signup-user"
              className="bg-[#0080FF] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#0070e0] transition duration-300"
            >
              Join Waitlist →
            </Link>
            <Link
              to="/learn-more"
              className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:border-[#0080FF] hover:text-[#0080FF] transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* --- Right Hero Image --- */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <img
              src={"src/components/image2.png"}
              alt="Doctors chatting"
              className="rounded-3xl shadow-2xl w-[100%] md:w-[600px] object-cover"
            />

            {/* Floating Badges */}
            <div className="absolute bottom-6 left-6 bg-white p-3 rounded-xl shadow-lg">
              <p className="text-[#0080FF] text-lg font-semibold">24/7</p>
              <p className="text-gray-600 text-sm">Available</p>
            </div>

            <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-xl shadow-lg">
              <p className="text-[#28BD66] text-lg font-semibold">100%</p>
              <p className="text-gray-600 text-sm">Verified</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================= HOW IT WORKS ========================= */}
      <section className="py-24 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-[#0F172A]">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <MessageCircle className="text-[#0080FF] w-10 h-10 mb-4" />,
              title: "Chat with our WhatsApp bot",
              desc: "Start a conversation on WhatsApp and describe your symptoms or health concerns.",
            },
            {
              icon: <UserCheck className="text-[#28BD66] w-10 h-10 mb-4" />,
              title: "Get connected to a verified doctor",
              desc: "Our system matches you with a licensed, experienced doctor best suited for your needs.",
            },
            {
              icon: <Wallet className="text-[#0080FF] w-10 h-10 mb-4" />,
              title: "Pay and follow up through your wallet",
              desc: "Secure payment processing and easy follow-ups, all tracked in your digital wallet.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-b from-[#f9fbff] to-[#ffffff] border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#0F172A]">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================= WHY CHOOSE LIHAXA ========================= */}
      <section className="py-24 bg-gradient-to-r from-[#0080FF]/10 to-[#28BD66]/10 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F172A] mb-14">
          Why Choose Lihaxa?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* ---------- FOR PATIENTS ---------- */}
          <motion.div
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8"
            whileHover={{ y: -8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <HeartPulse className="text-[#0080FF] w-8 h-8" />
              <h3 className="text-2xl font-semibold text-[#0080FF]">
                For Patients
              </h3>
            </div>
            <div className="space-y-5 text-gray-700">
              <div>
                <h4 className="font-semibold text-lg text-[#28BD66]">
                  Fast Access
                </h4>
                <p>Get medical help within minutes, anytime you need it.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#28BD66]">
                  Verified Doctors
                </h4>
                <p>All doctors are licensed, experienced professionals.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#28BD66]">
                  Affordable Care
                </h4>
                <p>Transparent pricing with no hidden fees.</p>
              </div>
            </div>
          </motion.div>

          {/* ---------- FOR DOCTORS ---------- */}
          <motion.div
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8"
            whileHover={{ y: -8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Stethoscope className="text-[#28BD66] w-8 h-8" />
              <h3 className="text-2xl font-semibold text-[#28BD66]">
                For Doctors
              </h3>
            </div>
            <div className="space-y-5 text-gray-700">
              <div>
                <h4 className="font-semibold text-lg text-[#0080FF]">
                  Flexible Hours
                </h4>
                <p>Work when you want, from wherever you are.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#0080FF]">
                  Reliable Patients
                </h4>
                <p>Pre-screened patients with genuine health concerns.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#0080FF]">
                  Fair Pay
                </h4>
                <p>Competitive rates with transparent payment terms.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================= JOIN WAITLIST CTA ========================= */}
      <section className="py-24 bg-[#0080FF] text-white text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Join Lihaxa Today
        </motion.h2>
        <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
          Whether you’re a doctor or a patient, connect with the future of
          healthcare — today.
        </p>
        <Link
          to="/signup-user"
          className="bg-white text-[#0080FF] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Join Waitlist →
        </Link>
      </section>
    </div>
  );
};

export default Home;
