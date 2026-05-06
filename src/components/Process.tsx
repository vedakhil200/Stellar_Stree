import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UserPlus, ClipboardList, Wallet, ShieldCheck, X, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  { 
    title: "Registration", 
    desc: "Create your profile and set up your auto-generated Stellar wallet.", 
    icon: UserPlus,
    color: "bg-blue-600",
    details: [
      "Click the 'Sign Up' button at the top right of the page.",
      "Enter your basic details like Name, Age, and Location.",
      "Your secure Stellar wallet is automatically created for you.",
      "Connect with a local NGO partner to verify your identity."
    ]
  },
  { 
    title: "Task Selection", 
    desc: "Browse and select tasks based on your skills and daily activities.", 
    icon: ClipboardList,
    color: "bg-purple-600",
    details: [
      "Scroll to the 'Available Domains' section above.",
      "Choose a category like 'Culinary' or 'Tailoring' that fits your skills.",
      "Click the card and fill out the quick work registration form.",
      "Once registered, you can view and start specific daily tasks."
    ]
  },
  { 
    title: "Verification", 
    desc: "NGOs and AI systems verify your completed work logs.", 
    icon: ShieldCheck,
    color: "bg-emerald-600",
    details: [
      "Log your work progress daily with photos or simple notes.",
      "Our partner NGOs review your logs to ensure quality and authenticity.",
      "Blockchain transparency ensures your work is recorded permanently.",
      "Receive a 'Verified' status once your task is approved."
    ]
  },
  { 
    title: "Payment", 
    desc: "Receive instant, transparent rewards in Stellar tokens.", 
    icon: Wallet,
    color: "bg-amber-600",
    details: [
      "Verified tasks trigger an automatic payment on the Stellar network.",
      "Rewards are sent directly to your auto-generated digital wallet.",
      "Convert your tokens to local currency (INR) easily via PayPal.",
      "Track all your earnings in real-time on your personal dashboard."
    ]
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<typeof steps[0] | null>(null);

  return (
    <section className="py-24 px-4 bg-white/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-slate-900 tracking-tighter uppercase">How It Works</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">A simple, transparent journey from work to reward. Click any step to see the guide.</p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setActiveStep(step)}
                className="relative z-10 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className={`w-24 h-24 ${step.color} rounded-[32px] flex items-center justify-center mb-8 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300 border-4 border-white rotate-3 group-hover:rotate-0`}>
                  <step.icon className="text-white w-10 h-10" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[10px] font-black text-blue-600 border border-slate-200 shadow-sm">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed px-4">{step.desc}</p>
                
                <div className="mt-6 flex items-center gap-2 text-blue-600 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Guide <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Detail Modal */}
      <AnimatePresence>
        {activeStep && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStep(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white p-12 rounded-[40px] shadow-2xl border border-slate-200 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-2 ${activeStep.color}`} />
              
              <button 
                onClick={() => setActiveStep(null)}
                className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>

              <div className="flex items-center gap-6 mb-12">
                <div className={`p-5 rounded-3xl ${activeStep.color} shadow-xl`}>
                  <activeStep.icon className="text-white w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter leading-none text-slate-900">{activeStep.title}</h3>
                  <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mt-2">Process Guide</p>
                </div>
              </div>

              <div className="space-y-6">
                {activeStep.details.map((detail, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="flex gap-6 items-start group"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-blue-600 font-black text-xs group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {idx + 1}
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed pt-0.5">{detail}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" /> Verified Process
                </div>
                <button 
                  onClick={() => setActiveStep(null)}
                  className={`px-8 py-3 ${activeStep.color} text-white font-black uppercase tracking-widest rounded-xl shadow-lg hover:opacity-90 transition-opacity`}
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
