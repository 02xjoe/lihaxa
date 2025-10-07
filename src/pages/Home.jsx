
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Stethoscope, Clock, Wallet, CheckCircle, UserCheck, HeartPulse } from "lucide-react";
import { Helmet } from "react-helmet-async";



const Home = () => {
  // Simple floating particle effect (optional aesthetic touch)
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const temp = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
    }));
    setParticles(temp);
  }, []);
   <Helmet>
  <title>Lihaxa | Smarter, Accessible Healthcare</title>
  <meta
    name="description"
    content="Lihaxa connects you instantly to verified doctors via WhatsApp. Affordable, secure, and accessible healthcare for everyone."
  />
  <meta
    name="keywords"
    content="Lihaxa, telemedicine, healthcare, doctors online, Nigeria health startup, WhatsApp health bot, digital health, affordable care, online consultation"
  />
  <meta name="author" content="Lihaxa" />
</Helmet>


  return (
    <main className="w-full mt-16 font-sans text-[#E8EDF2] bg-[#0A0F1F] overflow-hidden">
      {/* = HERO SECTION == */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* Abstract Medical Illustration (SVG or gradient waves) */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#012A5F] to-[#0A0F1F]"></div>

          {/* Medical wave shape overlay */}
          <div className="absolute bottom-0 left-0 right-0 opacity-30">
            <svg
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-48 md:h-72"
            >
              <path
                fill="#0080FF"
                fillOpacity="0.3"
                d="M0,192L80,213.3C160,235,320,277,480,288C640,299,800,277,960,261.3C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>

          {/* Floating gradient orbs */}
          <div className="absolute w-[600px] h-[600px] bg-[#0080FF]/20 blur-3xl rounded-full top-[-150px] left-[-150px] animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] bg-[#28BD66]/20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

          {/* Floating particles */}
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
              style={{ left: p.left, top: p.top }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 5 + p.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Glassmorphic overlay card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl max-w-3xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Smarter, Accessible Healthcare for Everyone
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed"
          >
            Lihaxa empowers patients and doctors with seamless virtual care,
            secure health data, and AI-driven wellness insights. All inside
            WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/signup-user"
              className="px-8 py-3 bg-[#0080FF] text-white font-semibold rounded-xl shadow-lg hover:bg-[#0B66CC] transition-all duration-300"
            >
              Join as Patient
            </Link>
            <Link
              to="/signup-doctor"
              className="px-8 py-3 bg-white/10 text-white border border-white/20 font-semibold rounded-xl hover:bg-white/20 backdrop-blur-md transition-all duration-300"
            >
              Join as Doctor
            </Link>
          </motion.div>
        </motion.div>
      </section>


      {/* = Why lihaxa ==*/}

      <section className="relative py-24 px-6 bg-[#0B0F1F] text-white overflow-hidden">
  {/* Decorative glowing backgrounds */}
  <div className="absolute w-[500px] h-[500px] bg-[#0080FF]/10 blur-3xl rounded-full top-[-150px] left-[-150px]" />
  <div className="absolute w-[400px] h-[400px] bg-[#28BD66]/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
       

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-[#28BD66]">Lihaxa</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Designed for patients and doctors alike, connecting verified care, fair pay, and effortless communication.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* For Patients */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition duration-300 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#28BD66]/20 flex items-center justify-center text-[#28BD66]">
                <HeartPulse size={22} />
              </div>
              <h3 className="text-2xl font-semibold">For Patients</h3>
            </div>

            <h4 className="text-lg text-gray-300 mb-6">
              Fast, verified, and affordable care at your fingertips.
            </h4>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-2">
                <Clock className="text-[#28BD66]" size={18} />
                <span><span className="font-semibold text-white">Fast Access</span>  Get medical help within minutes, anytime.</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="text-[#28BD66]" size={18} />
                <span><span className="font-semibold text-white">Verified Doctors</span>  Only licensed, experienced professionals.</span>
              </li>
              <li className="flex items-start gap-2">
                <Wallet className="text-[#28BD66]" size={18} />
                <span><span className="font-semibold text-white">Affordable Care</span>  Transparent pricing, no hidden fees.</span>
              </li>
            </ul>
          </motion.div>

          {/* For Doctors */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition duration-300 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0080FF]/20 flex items-center justify-center text-[#0080FF]">
                <Stethoscope size={22} />
              </div>
              <h3 className="text-2xl font-semibold">For Doctors</h3>
            </div>

            <h4 className="text-lg text-gray-300 mb-6">
              Practice medicine flexibly, securely, and fairly.
            </h4>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-2">
                <Clock className="text-[#0080FF]" size={18} />
                <span><span className="font-semibold text-white">Flexible Hours</span>  Work when you want, from wherever you are.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-[#0080FF]" size={18} />
                <span><span className="font-semibold text-white">Reliable Patients</span>  Pre-screened, genuine health concerns.</span>
              </li>
              <li className="flex items-start gap-2">
                <Wallet className="text-[#0080FF]" size={18} />
                <span><span className="font-semibold text-white">Fair Pay</span>  Competitive, transparent payment terms.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
<section className="relative py-24 bg-[#060B16] text-white overflow-hidden">
  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,128,255,0.08),transparent_70%)]"></div>

  {/* Section Header */}
  <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      How <span className="text-[#0080FF]">Lihaxa</span> Works
    </h2>
    <p className="text-gray-400">
      From chat to care, your complete health journey in three seamless steps.
    </p>
  </div>

  {/* Steps Container */}
  <div className="relative z-10 mt-16 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
    
    {/* STEP 1 */}
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }} 
      initial={{ opacity: 0, y: 50 }} 
      transition={{ duration: 0.6 }}
      className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
    >
      <div className="p-5 bg-[#0080FF]/10 text-[#0080FF] rounded-2xl mb-6">
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </div>
      <h3 className="text-xl font-semibold mb-3">Chat with our WhatsApp bot</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Start a conversation on WhatsApp and describe your symptoms or health concerns.
      </p>
      <div className="absolute top-1/2 right-[-30px] hidden md:block">
        <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#0080FF] to-transparent"></div>
      </div>
    </motion.div>

    {/* STEP 2 */}
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }} 
      initial={{ opacity: 0, y: 50 }} 
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-green-500/20 transition-all duration-300"
    >
      <div className="p-5 bg-[#28BD66]/10 text-[#28BD66] rounded-2xl mb-6">
        <i className="fa-solid fa-stethoscope text-3xl"></i>
      </div>
      <h3 className="text-xl font-semibold mb-3">Get connected to a verified doctor</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Our system matches you with a licensed, experienced doctor best suited for your needs.
      </p>
      <div className="absolute top-1/2 right-[-30px] hidden md:block">
        <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#28BD66] to-transparent"></div>
      </div>
    </motion.div>

    {/* STEP 3 */}
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }} 
      initial={{ opacity: 0, y: 50 }} 
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
    >
      <div className="p-5 bg-[#0080FF]/10 text-[#0080FF] rounded-2xl mb-6">
        <i className="fa-solid fa-wallet text-3xl"></i>
      </div>
      <h3 className="text-xl font-semibold mb-3">Pay and follow up through your wallet</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Secure payment processing and easy follow-ups, all tracked in your digital wallet.
      </p>
    </motion.div>

  </div>
</section>
   
   {/* ============================ 🌟 CTA SECTION ============================ */}
<section className="relative py-32 text-center text-white bg-gradient-to-b from-[#0A0F1C] via-[#08111E] to-[#060B16] overflow-hidden">
  {/* Background abstract medical glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,128,255,0.1),transparent_70%)]"></div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 max-w-3xl mx-auto px-6"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
      Ready to take charge of your <span className="text-[#28BD66]">health</span>?
    </h2>
    <p className="text-gray-300 mb-10 text-lg">
      Get trusted care from verified doctors in minutes... all through WhatsApp.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-5">
      <Link
        to="/signup-user"
        className="relative px-8 py-4 rounded-xl font-semibold text-[#0F172A] bg-white hover:bg-gray-100 transition-all shadow-lg hover:shadow-blue-500/30"
      >
        Join as Patient
      </Link>
      <Link
        to="/signup-doctor"
        className="relative px-8 py-4 rounded-xl font-semibold bg-[#28BD66] text-white hover:bg-[#22A35B] transition-all shadow-lg hover:shadow-green-400/30"
      >
        Join as Doctor
      </Link>
    </div>
  </motion.div>
</section>






    </main>
  );
};

export default Home;
