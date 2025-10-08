import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // make sure your logo path is correct

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect route (dark pages)
  const isDarkPage =
    location.pathname.includes("signup-doctor") ||
    location.pathname.includes("signup-user");

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || isDarkPage
          ? "backdrop-blur-md bg-[#0F172A]/90 border-b border-white/10 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* =============================== LOGO =============================== */}
        <div className="flex items-center gap-2">
          <img
            src={"src/components/lihaxa1.png"}
            alt="Lihaxa Logo"
            className="h-9 w-auto rounded-lg bg-white/10 p-1 backdrop-blur-sm"
          />
          <span className="text-xl font-bold text-white tracking-wide">
            Lihaxa
          </span>
        </div>

        {/* =============================== NAV LINKS =============================== */}
        <div className="flex gap-6 text-sm md:text-base font-medium">
          <Link
            to="/"
            className="text-gray-200 hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/signup-user"
            className="text-gray-200 hover:text-white transition-colors duration-300"
          >
            Patients
          </Link>
          <Link
            to="/signup-doctor"
            className="text-gray-200 hover:text-gray-400 transition-colors duration-300"
          >
            Doctors
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

