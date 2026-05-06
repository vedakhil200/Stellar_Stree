import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Cpu, Coins, X, CheckCircle2, ArrowRight, Smartphone, Building2, Zap } from "lucide-react";

const solutions = [
  {
    id: "logging",
    title: "Task Logging",
    desc: "Simple mobile-first interface for women to log their daily work with photos and time-stamps.",
    icon: Cpu,
    color: "text-blue-500",
    bgColor: "bg-blue-500",
    details: {
      heroIcon: Smartphone,
      features: [
        "One-tap photo verification for completed work.",
        "Automatic GPS and time-stamping for authenticity.",
        "Offline mode support for remote village areas.",
        "Voice-to-text logging for easier accessibility."
      ]
    }
  },
  {
    id: "verification",
    title: "NGO Verification",
    desc: "Partner NGOs use our AI-assisted dashboard to verify task authenticity and quality.",
    icon: ShieldCheck,
    color: "text-green-500",
    bgColor: "bg-green-500",
    details: {
      heroIcon: Building2,
      features: [
        "AI-powered image analysis to detect duplicate logs.",
        "NGO dashboard for rapid batch approvals.",
        "Physical spot-checks coordinated via the platform.",
        "Transparent dispute resolution mechanism."
      ]
    }
  },
  {
    id: "rewards",
    title: "Token Rewards",
    desc: "Verified work triggers automated Stellar token transfers directly to user wallets.",
    icon: Coins,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500",
    details: {
      heroIcon: Zap,
      features: [
        "Instant settlement on the Stellar blockchain.",
        "Zero-fee transfers for the workforce.",
        "Easy conversion to local currency via partners.",
        "Immutable earning history for credit building."
      ]
    }
  }
];

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

  return (
    <section className="py-24 px-4 bg-white/20 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-slate-900 tracking-tighter uppercase">Our Solution</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A robust ecosystem combining human trust with blockchain transparency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedSolution(sol)}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="mb-6 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm group-hover:border-blue-400 group-hover:shadow-xl transition-all group-hover:-translate-y-2">
                <sol.icon className={`w-12 h-12 ${sol.color}`} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{sol.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{sol.desc}</p>
              <div className="mt-auto flex items-center gap-2 text-blue-600 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Explore Solution <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solution Detail Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white p-12 rounded-[40px] shadow-2xl border border-slate-200 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-2 ${selectedSolution.bgColor}`} />
              
              <button 
                onClick={() => setSelectedSolution(null)}
                className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>

              <div className="flex items-center gap-6 mb-12">
                <div className={`p-5 rounded-3xl ${selectedSolution.bgColor} shadow-xl`}>
                  <selectedSolution.details.heroIcon className="text-white w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter leading-none text-slate-900">{selectedSolution.title}</h3>
                  <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mt-2">Technology & Trust</p>
                </div>
              </div>

              <div className="space-y-6">
                {selectedSolution.details.features.map((feature, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="flex gap-6 items-start group"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-blue-600 font-black text-xs group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed pt-0.5">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => setSelectedSolution(null)}
                  className={`px-8 py-3 ${selectedSolution.bgColor} text-white font-black uppercase tracking-widest rounded-xl shadow-lg hover:opacity-90 transition-opacity`}
                >
                  Close View
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
