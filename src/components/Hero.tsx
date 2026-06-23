import { motion } from "motion/react";
import heroImage from "../Assets/Images/hero.png";

interface HeroProps {
  isLoggedIn: boolean;
  onJoin: () => void;
  onLearn: () => void;
}

export default function Hero({ isLoggedIn, onJoin, onLearn }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden">

      {/* Hero Background */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Sky Blue Overlay */}
      <div className="absolute inset-0 bg-blue-600/10 z-[1]" />

      <div className="relative z-10 text-left px-12 md:px-24 max-w-7xl w-full">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-black mb-2"
        >
          STELLAR STREE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-sm md:text-lg text-black font-medium uppercase mb-8"
        >
          EMPOWERING THE INVISIBLE WORKFORCE
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button
            onClick={onJoin}
            className="px-12 py-5 bg-blue-600 text-white rounded-sm font-black uppercase tracking-widest transition-all shadow-2xl hover:bg-blue-700"
          >
            {isLoggedIn ? "Explore Opportunities" : "Login to Join"}
          </button>

          <button
            onClick={onLearn}
            className="px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-sm font-black uppercase tracking-widest hover:bg-white/20 transition-all"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}