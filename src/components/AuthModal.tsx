import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, User, Chrome, MapPin, Briefcase, Eye, EyeOff } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (name: string, email: string) => void;
  initialTab?: "signin" | "signup";
}

export default function AuthModal({ isOpen, onClose, onLoginSuccess, initialTab = "signin" }: AuthModalProps) {
  const [tab, setTab] = useState<"signin" | "signup">(initialTab);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Specific test login logic
    if (tab === "signin" && email === "sunitasingh07@gmail.com" && password === "Sunita Singh") {
      setIsSuccess(true);
      setTimeout(() => {
        onLoginSuccess("Sunita Singh", "sunitasingh07@gmail.com");
        onClose();
        setIsSuccess(false);
        setEmail("");
        setPassword("");
      }, 2000);
      return;
    }

    setIsSuccess(true);
    setTimeout(() => {
      onLoginSuccess(name || "User", email || "user@example.com");
      onClose();
      setIsSuccess(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/90 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white p-10 rounded-[40px] shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-600" />
            
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>

            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">
                  {tab === "signin" 
                    ? (email === "sunitasingh07@gmail.com" ? "Logged In!" : "Welcome Back!") 
                    : "Welcome to the Workforce!"}
                </h3>
                <p className="text-text-dim">
                  {tab === "signin" 
                    ? (email === "sunitasingh07@gmail.com" ? "Welcome back, Sunita Singh." : "You have successfully signed in to your portal.") 
                    : "Your account has been created. Let's start your journey!"}
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h3 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">
                    {tab === "signin" ? "Sign In" : "Join Stellar Stree"}
                  </h3>
                  <p className="text-accent-blue text-xs font-bold uppercase tracking-widest">
                    {tab === "signin" ? "Access your dashboard" : "Start your financial independence"}
                  </p>
                </div>

                {/* Google Sign In Option */}
                <button 
                  onClick={() => setIsSuccess(true)}
                  className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-100 transition-all shadow-lg mb-8"
                >
                  <Chrome className="w-5 h-5" />
                  {tab === "signin" ? "Sign in with Google" : "Sign up with Google"}
                </button>

                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
                    <span className="bg-white px-4 text-slate-400">Or use your email</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {tab === "signup" ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-text-dim ml-1">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
                            <input 
                              required 
                              type="text" 
                              placeholder="Your Name" 
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-sm focus:border-accent-blue outline-none transition-colors" 
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-text-dim ml-1">Phone Number</label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
                            <input required type="tel" placeholder="+91..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-sm focus:border-accent-blue outline-none transition-colors" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-text-dim ml-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
                          <input 
                            required 
                            type="email" 
                            placeholder="name@example.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-sm focus:border-accent-blue outline-none transition-colors" 
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-text-dim ml-1">Primary Skill / Interest</label>
                        <div className="relative">
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
                          <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-sm focus:border-accent-blue outline-none transition-colors appearance-none">
                            <option className="bg-white">Culinary Services</option>
                            <option className="bg-white">Tailoring & Fashion</option>
                            <option className="bg-white">Caregiving</option>
                            <option className="bg-white">Digital Tasks</option>
                            <option className="bg-white">Handicrafts</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-text-dim ml-1">Create Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
                          <input 
                            required 
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-12 text-sm focus:border-accent-blue outline-none transition-colors" 
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors"
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-text-dim ml-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
                          <input 
                            required 
                            type="email" 
                            placeholder="name@example.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-sm focus:border-accent-blue outline-none transition-colors" 
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-text-dim ml-1">Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
                          <input 
                            required 
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-12 text-sm focus:border-accent-blue outline-none transition-colors" 
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors"
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="pt-4">
                    <button type="submit" className="w-full py-4 bg-blue-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl hover:bg-blue-700 transition-all">
                      {tab === "signin" ? "Sign In" : "Create My Account"}
                    </button>
                  </div>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-text-dim text-xs font-medium">
                    {tab === "signin" ? "Don't have an account?" : "Already have an account?"}
                    <button 
                      onClick={() => setTab(tab === "signin" ? "signup" : "signin")}
                      className="text-accent-blue font-bold ml-2 hover:underline"
                    >
                      {tab === "signin" ? "Sign Up" : "Sign In"}
                    </button>
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
