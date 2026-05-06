import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white/50 border-t border-slate-200 py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">Stellar Stree</h3>
            <p className="text-slate-600 max-w-sm mb-8 leading-relaxed">
              Empowering women through secure, transparent, and decentralized work opportunities. Building a future where every contribution is recognized.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="https://x.com/Stellar_Stree" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-400 hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-800 hover:text-white transition-all"><Linkedin size={18} /></a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-700 font-bold">
                <Phone size={18} className="text-blue-600" />
                <span>+91 8756833529</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-bold">
                <Mail size={18} className="text-blue-600" />
                <span>stellar_stree@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-xs mb-6">Platform</h4>
            <ul className="space-y-3 text-slate-600 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Ecosystem</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Opportunities</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">NGO Partners</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Stellar Rewards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-xs mb-6">Support</h4>
            <ul className="space-y-3 text-slate-600 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">
            © 2026 Stellar Stree Foundation. Built on Stellar Network.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-[11px] text-slate-500 font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]" />
              Mainnet Connected
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]" />
              AI Agent Active
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
