import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import SignupUser from "./pages/SignupUser";
import SignupDoctor from "./pages/SignupDoctor";

const App = () => {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "signup-user":
        return <SignupUser />;
      case "signup-doctor":
        return <SignupDoctor />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[--color-lihaxa-white] text-[--color-lihaxa-darkteal]">
      <Navbar setPage={setPage} />
      <main className="flex-grow overflow-y-auto">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
