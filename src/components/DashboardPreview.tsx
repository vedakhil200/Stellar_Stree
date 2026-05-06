import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, TrendingUp, Clock, CheckCircle, Activity } from "lucide-react";

function AnimatedNumber({ value, duration = 2, decimals = 0 }: { value: number; duration?: number; decimals?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return controls.stop;
  }, [value, count, duration]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded]);

  return <span>{displayValue}</span>;
}

export default function DashboardPreview() {
  const [walletBalance, setWalletBalance] = useState(1240.50);
  const [tasksCount, setTasksCount] = useState(24);

  // Simulate live fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setWalletBalance(prev => prev + (Math.random() * 2 - 0.5));
      if (Math.random() > 0.8) setTasksCount(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground tracking-tighter uppercase leading-none">Your <br /> Dashboard</h2>
            <p className="text-text-dim text-lg mb-10 leading-relaxed">
              Track your daily tasks, monitor your earnings, and see your impact in real-time. Everything is secured on the blockchain with live updates.
            </p>
            <ul className="space-y-6">
              {[
                "Real-time task tracking",
                "Instant Stellar token rewards",
                "NGO verification status"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-text-dim font-medium group">
                  <div className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue transition-colors">
                    <CheckCircle className="text-accent-blue w-4 h-4 group-hover:text-white transition-colors" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden border border-slate-200"
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-600">Live Network Status: Active</span>
              </div>
              <Activity className="w-5 h-5 text-accent-blue opacity-50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <Card className="wallet-gradient border-none shadow-2xl rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                  <CardTitle className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em]">Stellar Asset Wallet</CardTitle>
                  <Wallet className="w-5 h-5 text-white/70" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-black text-white tracking-tighter">
                    <AnimatedNumber value={walletBalance} decimals={2} />
                    <span className="text-sm opacity-60 ml-2 font-bold uppercase">STR</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <p className="text-[10px] font-mono text-white/40 bg-black/20 px-2 py-1 rounded">GC7N...Z6R2</p>
                    <div className="text-[10px] font-bold text-green-400">+2.4% Today</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 border-slate-200 shadow-xl rounded-3xl group">
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                  <CardTitle className="text-[10px] font-black text-accent-blue uppercase tracking-[0.2em]">Tasks Completed</CardTitle>
                  <TrendingUp className="w-5 h-5 text-accent-blue" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-black text-slate-900 tracking-tighter">
                    <AnimatedNumber value={tasksCount} />
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <Badge variant="secondary" className="bg-accent-blue/10 text-accent-blue border-none font-bold text-[10px] uppercase tracking-widest">
                      3 Pending Verification
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-foreground text-xs font-black uppercase tracking-[0.2em]">Recent Activity Log</h4>
                <button className="text-[10px] font-bold text-accent-blue uppercase tracking-widest hover:underline">View All History</button>
              </div>
              {[
                { task: "Community Cooking", time: "2 hours ago", reward: "+30.00 STR", status: "Verified" },
                { task: "Handicraft Making", time: "Yesterday", reward: "+50.00 STR", status: "Verified" },
                { task: "Data Entry", time: "2 days ago", reward: "+40.00 STR", status: "Pending" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between py-5 border-b border-slate-100 last:border-none group hover:bg-slate-50 -mx-4 px-4 rounded-2xl transition-colors"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:border-accent-blue/30 transition-colors">
                      <Clock className="w-5 h-5 text-slate-400 group-hover:text-accent-blue transition-colors" />
                    </div>
                    <div>
                      <div className="text-slate-900 text-sm font-black uppercase tracking-tight">{item.task}</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-accent-blue text-sm font-black tracking-tighter">{item.reward}</div>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mt-2 inline-block ${item.status === 'Verified' ? 'bg-green-500/10 text-green-600' : 'bg-amber-500/10 text-amber-600'}`}>
                      {item.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
