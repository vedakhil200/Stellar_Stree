import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Globe, ShieldCheck, BarChart3, Users, ArrowRight } from "lucide-react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "ecosystem" | "verification" | "impact" | "learn-more" | null;
}

export default function InfoModal({ isOpen, onClose, type }: InfoModalProps) {
  const content = {
    ecosystem: {
      title: "The Stellar Ecosystem",
      subtitle: "A decentralized partnership for growth",
      icon: Globe,
      color: "bg-blue-600",
      details: [
        { label: "NGO Partners", text: "Local organizations that onboard and verify workers on the ground." },
        { label: "Stellar Network", text: "The blockchain backbone ensuring instant, low-cost global payments." },
        { label: "Workforce", text: "Empowered women providing essential services to their communities." },
        { label: "Community", text: "The end-users who benefit from verified, high-quality services." }
      ]
    },
    verification: {
      title: "Verification Hub",
      subtitle: "Ensuring trust through technology",
      icon: ShieldCheck,
      color: "bg-emerald-600",
      details: [
        { label: "Identity Check", text: "NGOs perform physical verification of every worker's identity." },
        { label: "AI Monitoring", text: "Smart systems analyze work logs to prevent fraud and ensure quality." },
        { label: "On-Chain Proof", text: "Every verified task is recorded permanently on the Stellar ledger." },
        { label: "Reputation Score", text: "Workers build a trust score that unlocks higher-paying opportunities." }
      ]
    },
    impact: {
      title: "Impact Reports",
      subtitle: "Measuring real-world change",
      icon: BarChart3,
      color: "bg-purple-600",
      details: [
        { label: "Financial Growth", text: "Average 40% increase in household income for registered workers." },
        { label: "Skills Gained", text: "Over 5,000 women trained in digital literacy and specialized crafts." },
        { label: "Community Value", text: "100k+ meals served and 20k+ garments produced for local markets." },
        { label: "Transparency", text: "100% of funds tracked from donor to worker with zero leakage." }
      ]
    },
    "learn-more": {
      title: "About Stellar Stree",
      subtitle: "Our vision for the future",
      icon: Users,
      color: "bg-amber-600",
      details: [
        { label: "Our Goal", text: "To bridge the gap between skilled women and the global digital economy." },
        { label: "Why Stellar?", text: "We use blockchain not as a buzzword, but as a tool for financial inclusion." },
        { label: "Scalability", text: "Our model is designed to be replicated across different regions and crises." },
        { label: "Join Us", text: "Whether as a worker, NGO, or partner, there's a place for you here." }
      ]
    }
  };

  const activeContent = type ? content[type] : null;

  return (
    <AnimatePresence>
      {isOpen && activeContent && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-3xl bg-white p-12 rounded-[50px] shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-2 ${activeContent.color}`} />
            
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>

            <div className="flex items-center gap-8 mb-12">
              <div className={`p-6 rounded-[32px] ${activeContent.color} shadow-2xl rotate-3`}>
                <activeContent.icon className="text-white w-12 h-12" />
              </div>
              <div>
                <h3 className="text-5xl font-black uppercase tracking-tighter leading-none mb-2">{activeContent.title}</h3>
                <p className="text-accent-blue text-sm font-bold uppercase tracking-widest">{activeContent.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeContent.details.map((detail, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-accent-blue" />
                    <h4 className="text-slate-900 font-black uppercase tracking-tight text-sm">{detail.label}</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{detail.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex justify-center">
              <button 
                onClick={onClose}
                className={`px-12 py-4 ${activeContent.color} text-white font-black uppercase tracking-widest rounded-2xl shadow-xl hover:opacity-90 transition-opacity flex items-center gap-3`}
              >
                Explore Further <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
