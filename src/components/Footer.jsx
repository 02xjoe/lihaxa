import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="relative bg-[#060B16] text-gray-400 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Logo + Tagline */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-white text-lg font-semibold">Lihaxa</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Smarter, accessible healthcare, connecting patients and doctors through technology and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#0080FF] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#0080FF] transition">About</Link></li>
            <li><Link to="/signup-user" className="hover:text-[#0080FF] transition">Join as Patient</Link></li>
            <li><Link to="/signup-doctor" className="hover:text-[#0080FF] transition">Join as Doctor</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect</h4>
          <ul className="space-y-2">
            <li><a href="mailto:support@lihaxa.com" className="hover:text-[#28BD66] transition">hello@lihaxa.com</a></li>
            <li><a href="https://x.com/lihaxa" target="_blank" className="hover:text-[#28BD66] transition">Twitter</a></li>
            <li><a href="https://www.linkedin.com/company/lihaxa/" className="hover:text-[#28BD66] transition">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 mt-10 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Lihaxa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
