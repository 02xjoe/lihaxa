import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import SignupUser from "./pages/SignupUser";
import SignupDoctor from "./pages/SignupDoctor";
import ScrollToTop from "./components/ScrollToTop";


import { HelmetProvider } from "react-helmet-async";
const App = () => {
  
  return ( 
    <HelmetProvider>
    <Router>
      <ScrollToTop /> {/* 👈 Always scrolls to top on route change */}
      <div className="min-h-screen flex flex-col bg-[--color-lihaxa-white] text-[--color-lihaxa-darkteal]">
        <Navbar />
        <main className="flex-grow overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup-user" element={<SignupUser />} />
            <Route path="/signup-doctor" element={<SignupDoctor />} />
          </Routes>
        </main>
        {/* Footer - fixed at the bottom */}
        <Footer className="mt-auto" />
      </div>
    </Router>
    </HelmetProvider>
  );
};

export default App;