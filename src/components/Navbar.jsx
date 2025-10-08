import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // professional icon set
import logo from "./lihaxa1.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect dark pages
  const isDarkPage =
    location.pathname.includes("signup-doctor") ||
    location.pathname.includes("signup-user");

  // Determine if background should be white (only Home before scroll)
  const isWhiteBg = !isDarkPage && !scrolled;

  // Handle closing menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || isDarkPage
          ? "backdrop-blur-md bg-[#0F172A]/90 border-b border-white/10 shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* =============================== LOGO =============================== */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Lihaxa Logo"
            className="h-9 w-auto rounded-lg bg-white p-1 shadow-sm"
          />
          <span
            className={`text-xl font-bold tracking-wide transition-colors duration-500 ${
              isWhiteBg ? "text-[#0080FF]" : "text-white"
            }`}
          >
            Lihaxa
          </span>
        </div>

        {/* =============================== DESKTOP NAV LINKS =============================== */}
        <div className="hidden md:flex gap-6 text-sm md:text-base font-medium">
          {["Home", "Patients", "Doctors"].map((item) => {
            const path =
              item === "Home"
                ? "/"
                : item === "Patients"
                ? "/signup-user"
                : "/signup-doctor";

            return (
              <Link
                key={item}
                to={path}
                className={`transition-colors duration-300 ${
                  isWhiteBg
                    ? "text-[#0080FF] hover:text-[#005FCC]"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* =============================== MOBILE MENU ICON =============================== */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`transition-colors duration-300 ${
              isWhiteBg ? "text-[#0080FF]" : "text-white"
            }`}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* =============================== MOBILE MENU (Slide-down) =============================== */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-center gap-4 py-6 transition-all duration-500 ${
            isWhiteBg
              ? "bg-white border-t border-gray-200"
              : "bg-[#0F172A]/95 border-t border-white/10"
          }`}
        >
          {["Home", "Patients", "Doctors"].map((item) => {
            const path =
              item === "Home"
                ? "/"
                : item === "Patients"
                ? "/signup-user"
                : "/signup-doctor";

            return (
              <Link
                key={item}
                to={path}
                className={`text-lg font-medium transition-colors duration-300 ${
                  isWhiteBg
                    ? "text-[#0080FF] hover:text-[#005FCC]"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
