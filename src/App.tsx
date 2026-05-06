/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import About from "./components/About";
import JobCategories from "./components/JobCategories";
import Process from "./components/Process";
import Solutions from "./components/Solutions";
import DashboardPreview from "./components/DashboardPreview";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import InfoModal from "./components/InfoModal";
import ProfileModal from "./components/ProfileModal";
import { motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";

export default function App() {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; tab: "signin" | "signup" }>({
    isOpen: false,
    tab: "signin"
  });
  const [infoModal, setInfoModal] = useState<{ isOpen: boolean; type: "ecosystem" | "verification" | "impact" | "learn-more" | null }>({
    isOpen: false,
    type: null
  });
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLoginSuccess = (name: string, email: string) => {
    setUser({ name, email });
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-blue-500/30 bg-grid">
      {/* Atmospheric Background Glows */}
      <div className="glow-1" />
      <div className="glow-2" />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center nav-light">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="black"/>
            <g transform="rotate(-45 12 12)">
              <path d="M15.5 8.5C14.5 7.5 13.2 7 11.8 7C10.4 7 9.1 7.5 8.1 8.5L6.5 10.1H17.1L15.5 8.5Z" fill="white"/>
              <path d="M8.5 15.5C9.5 16.5 10.8 17 12.2 17C13.6 17 14.9 16.5 15.9 15.5L17.5 13.9H6.9L8.5 15.5Z" fill="white"/>
              <rect x="5.5" y="10.8" width="13" height="0.8" fill="white"/>
              <rect x="5.5" y="12.4" width="13" height="0.8" fill="white"/>
            </g>
          </svg>
          <span className="font-bold text-xl tracking-tight text-slate-900">Stellar Stree</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest">
          <button onClick={() => setInfoModal({ isOpen: true, type: "ecosystem" })} className="hover:text-blue-600 transition-colors">Ecosystem</button>
          <button onClick={() => scrollToSection('opportunities')} className="hover:text-blue-600 transition-colors">Opportunities</button>
          <button onClick={() => setInfoModal({ isOpen: true, type: "verification" })} className="hover:text-blue-600 transition-colors">Verification Hub</button>
          <button onClick={() => setInfoModal({ isOpen: true, type: "impact" })} className="hover:text-blue-600 transition-colors">Impact Reports</button>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setProfileModalOpen(true)}
                className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors"
              >
                Profile
              </button>
              <span className="text-xs font-black uppercase tracking-widest text-slate-900">{user.name}</span>
              <button 
                onClick={() => setUser(null)}
                className="text-[10px] font-black uppercase tracking-widest text-red-600 hover:text-red-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <button 
                onClick={() => setAuthModal({ isOpen: true, tab: "signin" })}
                className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={() => setAuthModal({ isOpen: true, tab: "signup" })}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-600/20"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>

      <AuthModal 
        isOpen={authModal.isOpen} 
        onClose={() => setAuthModal({ ...authModal, isOpen: false })} 
        onLoginSuccess={handleLoginSuccess}
        initialTab={authModal.tab}
      />

      <InfoModal
        isOpen={infoModal.isOpen}
        onClose={() => setInfoModal({ ...infoModal, isOpen: false })}
        type={infoModal.type}
      />

      <ProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        user={user}
      />

      <main className="relative z-10">
        <Hero 
          isLoggedIn={!!user}
          onJoin={() => {
            if (user) {
              scrollToSection('opportunities');
            } else {
              setAuthModal({ isOpen: true, tab: "signin" });
            }
          }}
          onLearn={() => setInfoModal({ isOpen: true, type: "learn-more" })}
        />
        <div id="opportunities">
          <JobCategories user={user} />
        </div>
        <Process />
        <Solutions />
        <DashboardPreview />
        <About />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:bg-blue-700 transition-colors"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </motion.button>
    </div>
  );
}


