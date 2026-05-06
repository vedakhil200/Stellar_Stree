import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, User, Camera, Mail, Phone, MapPin, Briefcase, ShieldCheck } from "lucide-react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: { name: string; email: string } | null;
}

export default function ProfileModal({ isOpen, onClose, user }: ProfileModalProps) {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
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

            <div className="text-center mb-8">
              <div className="relative inline-block group">
                <div className="w-32 h-32 rounded-full border-4 border-slate-50 overflow-hidden bg-slate-100 mx-auto shadow-inner">
                  {profilePhoto ? (
                    <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User size={64} className="text-slate-300" />
                    </div>
                  )}
                </div>
                <label className="absolute bottom-1 right-1 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg hover:bg-blue-700 transition-colors border-4 border-white">
                  <Camera size={18} />
                  <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
                </label>
                {isUploading && (
                  <div className="absolute inset-0 bg-white/50 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mt-4 text-slate-900">{user.name}</h3>
              <div className="flex items-center justify-center gap-2 mt-1">
                <ShieldCheck size={14} className="text-green-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-green-600">Verified Worker</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Email Address</div>
                <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <Mail size={16} className="text-blue-600" />
                  {user.email}
                </div>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Phone Number</div>
                <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <Phone size={16} className="text-blue-600" />
                  +91 98765 43210
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Primary Skill</div>
                <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <Briefcase size={16} className="text-blue-600" />
                  Culinary Services
                </div>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="w-full py-4 bg-slate-900 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl hover:bg-slate-800 transition-colors mt-8"
            >
              Close Profile
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
