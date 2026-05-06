import { motion } from "motion/react";
import { AlertCircle, Target, Users } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground tracking-tighter uppercase">
              The Problem <br /> Statement
            </h2>
            <div className="space-y-8 text-text-dim text-lg leading-relaxed">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-blue-400 transition-colors">
                  <AlertCircle className="text-blue-600 w-6 h-6" />
                </div>
                <p>In many parts of the world, women facing disasters or financial crises struggle to find stable work.</p>
              </div>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-blue-400 transition-colors">
                  <AlertCircle className="text-blue-600 w-6 h-6" />
                </div>
                <p>Valuable skills like cooking, tailoring, and domestic services often go unrecorded and underpaid.</p>
              </div>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-blue-400 transition-colors">
                  <AlertCircle className="text-blue-600 w-6 h-6" />
                </div>
                <p>Lack of secure payment systems and trust issues lead to delayed earnings and loss of dignity.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 rounded-[40px] shadow-2xl border border-slate-200 relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600/10 blur-3xl rounded-full" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-600 rounded-2xl shadow-lg shadow-blue-600/20">
                <Target className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Our Mission</h3>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">Stellar Stree Foundation</p>
              </div>
            </div>
            
            <p className="text-slate-600 text-xl leading-relaxed mb-12 italic">
              "Building a reliable partnership network with NGOs to onboard and support verified women workers, ensuring transparent and secure payments via Stellar Blockchain."
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-blue-50 transition-colors">
                <div className="text-4xl font-black text-blue-600 mb-2 tracking-tighter">10k+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Women Empowered</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-blue-50 transition-colors">
                <div className="text-4xl font-black text-blue-600 mb-2 tracking-tighter">50+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">NGO Partners</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
