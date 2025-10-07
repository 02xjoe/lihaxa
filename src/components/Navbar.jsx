import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
      <nav

        
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white" : "bg-transparent"
              }`}
      >
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
              <Link to="/" className="flex items-center space-x-2">
                  <img
                      src="src/components/lihaxa1.png"
                      alt="Lihaxa Logo"
                      className="h-12 w-auto opacity-100 select-none pointer-events-none"
                  />
                    <span className="font-bold text-xl text-[#3697D1]">Lihaxa</span>
        
              </Link>
 


        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-[#3697D1] font-medium">
            Home
          </Link>
          <Link to="/signup-user" className="hover:text-[#3697D1] font-medium">
            Patients
          </Link>
          <Link to="/signup-doctor" className="hover:text-[#3697D1] font-medium">
            Doctors
          </Link>
        </div>
      </div>
    </nav>
  );
} /*


import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-6 py-4 bg-[--color-lihaxa-main] text-blue-600 font-bold shadow-md">
            <div className="flex items-center space-x-3">
                <img src="/src/components/liha.png" alt="Lihaxa Logo" className="h-10 w-10 rounded-full" />          
                <span className="font-bold text-xl">Lihaxa</span>
            </div>

            <div className="space-x-4">
                <Link to="/" className="hover:underline ">Home</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link
                    to="/signup-user"
                    className="bg-[--color-lihaxa-green] px-3 py-1 rounded hover:opacity-90 transition"
                >
                    User Signup
                </Link>
                <Link
                    to="/signup-doctor"
                    className="bg-[--color-lihaxa-darkteal] px-3 py-1 rounded hover:opacity-90 transition"
                >
                    Doctor Signup
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
*/

