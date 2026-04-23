import React, { useState, useEffect } from 'react';
import { 
  Home, 
  MapPin, 
  Phone, 
  Wifi, 
  ShieldCheck, 
  Utensils, 
  Bed, 
  MessageCircle, 
  AlertCircle, 
  FileText,
  User,
  ExternalLink,
  Droplets,
  Zap,
  Menu,
  X,
  Send,
  CheckCircle2,
  Calendar,
  Search,
  Bell
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// --- Constants & Data ---
const CONTACT_NUMBERS = ["073556 60636", "09335959373"];
const ADDRESS = "128/102, H Block, Kidwai Nagar, Kanpur, Uttar Pradesh 208011, India";
const WHATSAPP_LINK = "https://wa.me/917355660636?text=Hi,%20I'm%20interested%20in%20Vrindavan%20Girl's%20Hostel.";

const AMENITIES = [
  { icon: <Zap className="w-5 h-5" />, label: "24/7 Power" },
  { icon: <Wifi className="w-5 h-5" />, label: "High-Speed WiFi" },
  { icon: <Droplets className="w-5 h-5" />, label: "RO Water" },
  { icon: <ShieldCheck className="w-5 h-5" />, label: "Full Security" },
  { icon: <Utensils className="w-5 h-5" />, label: "Homely Meals" },
  { icon: <Bed className="w-5 h-5" />, label: "Comfort Beds" },
];

// --- Sub-components ---

const Sidebar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  const tabs = [
    { id: 'home', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { id: 'booking', label: 'Room Booking', icon: <Bed className="w-5 h-5" /> },
    { id: 'student', label: 'Maintenance', icon: <Droplets className="w-5 h-5" /> },
    { id: 'location', label: 'Our Location', icon: <MapPin className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 bg-primary-dark text-white flex flex-col h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-indigo-900/50">
        <h1 className="text-xl font-bold tracking-tight text-white mb-1">Vrindavan Girls</h1>
        <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Management System</p>
      </div>
      
      <nav className="flex-1 py-6 px-4 space-y-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group text-sm font-medium",
              activeTab === tab.id 
                ? "bg-primary-light text-white shadow-lg shadow-black/20" 
                : "text-indigo-300 hover:bg-indigo-900/50 hover:text-white"
            )}
          >
            <span className={cn(activeTab === tab.id ? "text-white" : "text-indigo-400 group-hover:text-indigo-200")}>
              {tab.icon}
            </span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 bg-indigo-900/30 m-4 rounded-2xl border border-indigo-800/50">
        <p className="text-[10px] uppercase text-indigo-400 font-bold mb-2">Manager On Duty</p>
        <p className="text-sm font-semibold mb-1">Ms. Priyanka Dubey</p>
        <p className="text-[10px] text-indigo-300 mb-4">{CONTACT_NUMBERS[0]}</p>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          className="w-full btn-accent py-2 flex items-center justify-center space-x-2 text-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </aside>
  );
};

const Header = ({ announcement }: { announcement?: string }) => (
  <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
    <div className="flex items-center space-x-3">
      {announcement && (
        <div className="flex items-center space-x-2 text-indigo-600">
          <span className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
          <span className="text-xs font-semibold">{announcement}</span>
        </div>
      )}
    </div>
    
    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-2">
        <div className="text-right">
          <p className="text-xs font-bold text-slate-800">Student Portal</p>
          <p className="text-[10px] text-slate-400">Kidwai Nagar Sector</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
          <User className="w-4 h-4" />
        </div>
      </div>
    </div>
  </header>
);

// --- Page Components ---

const LandingPage = ({ onStart }: { onStart: () => void }) => (
  <div className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col justify-center items-center">
    {/* Background Pattern */}
    <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1e1b4b 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-indigo-950 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">V</div>
          <span className="text-2xl font-bold tracking-tight text-indigo-950 uppercase">Vrindavan Girls PG</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-indigo-950 leading-[0.85] mb-8 uppercase tracking-tighter">
          Excellence <br />In Living.
        </h1>
        <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">
          Premium girls accommodation in Kidwai Nagar, Kanpur. Designed for students who prioritize safety, comfort, and focus.
        </p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={onStart}
            className="btn-primary px-10 py-5 text-base flex items-center gap-3 shadow-xl shadow-indigo-950/20 active:scale-95 transition-all"
          >
            Enter Portal <ShieldCheck className="w-5 h-5" />
          </button>
          <a hhref={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} target="_blank" className="bg-white px-8 py-5 rounded-lg border border-slate-200 text-slate-800 font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
            Show Location <MapPin className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="aspect-[4/5] bg-slate-200 rounded-[60px] overflow-hidden shadow-2xl relative">
          <img 
            src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=2000&auto=format&fit=crop" 
            alt="Hostel Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 to-transparent" />
        </div>
        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[30px] shadow-xl border border-slate-100 hidden md:block">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Amenities</p>
              <p className="text-lg font-bold text-indigo-950">24/7 Security & Power</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const LoginPage = ({ onLogin, onRegister }: { onLogin: (u: any) => void, onRegister: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
      onLogin(data.user);
    })
    .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-indigo-950 flex items-center justify-center p-4">
      <div className="card-sleek max-w-md w-full p-10 border-none shadow-2xl">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-indigo-950 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">V</div>
          <h2 className="text-2xl font-bold text-slate-800">Student Login</h2>
          <p className="text-slate-500 text-sm mt-2">Access your hostel dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:ring-2 ring-indigo-500 outline-none"
              placeholder="name@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Password</label>
              <button type="button" className="text-[10px] text-indigo-600 font-bold hover:underline">Forgot?</button>
            </div>
            <input 
              type="password" 
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:ring-2 ring-indigo-500 outline-none"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full btn-primary py-4 text-sm shadow-lg shadow-indigo-950/20 active:scale-95 disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Sign In"}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col items-center gap-4">
          <p className="text-xs text-slate-500">New student?</p>
          <button 
            onClick={onRegister}
            className="text-sm font-bold text-indigo-700 hover:text-indigo-900 transition-colors"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [announcements, setAnnouncements] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/announcements').then(res => res.json()).then(setAnnouncements);
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6 p-8">
      {/* Left Main Column */}
      <div className="col-span-12 lg:col-span-8 space-y-6">
        <div className="card-sleek bg-gradient-to-br from-indigo-950 to-indigo-900 border-none text-white overflow-hidden relative">
          <div className="relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">Welcome to Vrindavan PG</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Premium Girls Accommodation</h2>
            <p className="text-indigo-200/80 text-sm max-w-lg mb-8 leading-relaxed">
              Safe, secure, and comfortable stays for the next generation of academic leaders in Kanpur. Near Allen & Aakash Institute.
            </p>
            <div className="flex space-x-4">
              <button className="btn-accent px-6">Book Now</button>
              <button className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg text-sm font-bold transition-all">View Facilities</button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-full bg-white/5 -skew-x-12 transform translate-x-32" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
            <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-rose-500 mb-4">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-rose-900 mb-2">Maintenance Issue?</h3>
            <p className="text-xs text-rose-700 mb-6 leading-relaxed">Report leakage, electrical, or WiFi issues for a 24-hour resolution guarantee.</p>
            <button className="w-full bg-white text-rose-600 py-3 rounded-xl text-xs font-bold shadow-sm border border-rose-200">Log Maintenance</button>
          </div>
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-500 mb-4">
              <Send className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-amber-900 mb-2">Suggestion Box</h3>
            <p className="text-xs text-amber-700 mb-6 leading-relaxed">Help us improve the mess menu or common facilities. We value your feedback.</p>
            <button className="w-full bg-white text-amber-600 py-3 rounded-xl text-xs font-bold shadow-sm border border-amber-200">Submit Feedback</button>
          </div>
        </div>

        <div className="card-sleek">
          <h3 className="font-bold text-slate-800 mb-6 flex justify-between items-center text-sm">
            <span>Essential Amenities</span>
            <span className="text-[10px] text-indigo-600 font-bold px-3 py-1 bg-indigo-50 rounded-full">ALL INCLUSIVE</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {AMENITIES.map((a, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 transition-all group">
                <div className="text-indigo-400 group-hover:text-indigo-600">{a.icon}</div>
                <span className="text-xs font-semibold text-slate-600">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <div className="card-sleek">
          <h3 className="text-sm font-bold text-slate-800 mb-6 flex items-center space-x-2">
            <Bell className="w-4 h-4 text-indigo-500" />
            <span>Latest Updates</span>
          </h3>
          <div className="space-y-4">
            {announcements.map(ann => (
              <div key={ann.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                <h4 className="text-xs font-bold text-slate-700 mb-1">{ann.title}</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed mb-2 line-clamp-2">{ann.content}</p>
                <div className="text-[9px] font-bold text-slate-400">{new Date(ann.date).toLocaleDateString()}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-950 text-white rounded-2xl p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-sm font-bold mb-4">Quick Rules Summary</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-emerald-400 text-xs translate-y-1">●</span>
                <p className="text-[11px] leading-relaxed text-indigo-100">Curfew is strictly 08:30 PM for safety.</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-emerald-400 text-xs translate-y-1">●</span>
                <p className="text-[11px] leading-relaxed text-indigo-100">Male visitors are not allowed beyond reception.</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-emerald-400 text-xs translate-y-1">●</span>
                <p className="text-[11px] leading-relaxed text-indigo-100">Save energy: Turn off AC when leaving.</p>
              </li>
            </ul>
            <button className="mt-6 text-[10px] font-bold text-indigo-400 hover:text-indigo-300 py-2 border-t border-indigo-800 w-full text-left uppercase tracking-widest">View Full Policy Document</button>
          </div>
          <div className="absolute -bottom-8 -right-8 opacity-5">
            <FileText className="w-32 h-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingPage = () => {
  const [rooms, setRooms] = useState<any[]>([]);
  
  useEffect(() => {
    fetch('/api/rooms').then(res => res.json()).then(setRooms);
  }, []);

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Room Availability</h2>
          <p className="text-sm text-slate-500">View live status and book your preferred category.</p>
        </div>
        <div className="flex items-center space-x-2 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl text-xs font-bold">
          <Calendar className="w-4 h-4" />
          <span>Next Intake: May 2026</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map(room => (
          <div key={room.id} className="card-sleek group hover:border-indigo-400 transition-all flex flex-col justify-between">
            <div>
              <div className="h-40 bg-slate-100 rounded-xl mb-4 relative overflow-hidden">
                <img 
                  src={room.type.includes('AC') 
                    ? "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=400" 
                    : "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400"
                  } 
                  alt={room.type}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className={cn(
                  "absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                  room.available ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                )}>
                  {room.available ? "Available" : "Full"}
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-lg text-slate-800">{room.type}</h4>
                <div className="text-indigo-600 font-bold">₹{room.price / 1000}k</div>
              </div>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">Studio desk, wardrobe, 24/7 security & laundry support included.</p>
            </div>
            
            <button 
              disabled={!room.available}
              onClick={() => window.open(WHATSAPP_LINK)}
              className={cn(
                "w-full py-3 rounded-xl text-xs font-bold transition-all",
                room.available ? "btn-primary" : "bg-slate-100 text-slate-400 cursor-not-allowed"
              )}
            >
              {room.available ? "Inquire to Reserve" : "Join Waiting List"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const MaintenancePage = () => {
  const [report, setReport] = useState({ type: 'Plumbing', description: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/maintenance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(report)
    }).then(() => {
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); setReport({ type: 'Plumbing', description: '' }) }, 3000);
    });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Maintenance Portal</h2>
        <p className="text-sm text-slate-500">Report room issues for 24-hour tracked resolution.</p>
      </div>

      <div className="card-sleek">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Category</label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 ring-indigo-500 outline-none"
                value={report.type}
                onChange={e => setReport({...report, type: e.target.value})}
              >
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Furniture</option>
                <option>WiFi/Tech</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Urgency</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 ring-indigo-500 outline-none">
                <option>Standard (24h)</option>
                <option>Urgent (4h)</option>
                <option>Low (48h)</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Describe the Issue</label>
            <textarea 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm min-h-[150px] focus:ring-2 ring-indigo-500 outline-none"
              placeholder="E.g. The AC in room 204 is making a loud noise..."
              value={report.description}
              onChange={e => setReport({...report, description: e.target.value})}
              required
            />
          </div>
          <button 
            type="submit"
            className={cn(
              "w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all",
              submitted ? "bg-emerald-500 text-white" : "btn-primary"
            )}
          >
            {submitted ? <CheckCircle2 className="w-5 h-5" /> : <Send className="w-4 h-4" />}
            <span>{submitted ? "Successfully Logged" : "Submit Maintenance Request"}</span>
          </button>
        </form>
      </div>

      <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex items-start space-x-4">
        <ShieldCheck className="text-indigo-600 shrink-0 mt-1" />
        <div>
          <p className="text-xs font-bold text-indigo-900 mb-1">Our Resolution Guarantee</p>
          <p className="text-[11px] text-indigo-700 leading-relaxed">
            All registered issues are tracked by the management system. If your issue is not addressed within 24 hours (for standard priority), please contact the Manager On Duty directly.
          </p>
        </div>
      </div>
    </div>
  );
};

const LocationPage = () => (
  <div className="p-8 grid grid-cols-12 gap-6 h-[calc(100vh-64px-32px)]">
    <div className="col-span-12 lg:col-span-5 space-y-6 flex flex-col justify-center">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Visit Us</h2>
        <p className="text-sm text-slate-500 leading-relaxed mb-8">
          Centrally located in Kidwai Nagar, Kanpur. Our facility is within walking distance from major coaching centers like Allen and Aakash.
        </p>
      </div>

      <div className="space-y-4">
        <div className="card-sleek p-5 flex items-start space-x-4">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-700 mb-1">Address</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed">{ADDRESS}</p>
          </div>
        </div>

        <div className="card-sleek p-5 flex items-start space-x-4">
          <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-700 mb-1">Nearby</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider font-bold">50m to Allen • 200m to Aakash</p>
          </div>
        </div>
      </div>

      <a 
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
        target="_blank"
        className="btn-primary py-4 flex items-center justify-center space-x-2 w-full mt-4"
      >
        <ExternalLink className="w-4 h-4" />
        <span>Open in Google Maps</span>
      </a>
    </div>

    <div className="col-span-12 lg:col-span-7 bg-slate-200 rounded-[32px] overflow-hidden relative border-4 border-white shadow-xl shadow-slate-200">
      <iframe 
        title="Hostel Map"
        width="100%" 
        height="100%" 
        frameBorder="0" 
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.VITE_MAP_API_KEY || ''}&q=${encodeURIComponent(ADDRESS)}`}
        className="grayscale-[0.2] contrast-[1.1]"
      />
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [appState, setAppState] = useState<'landing' | 'auth' | 'app'>('landing');
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [announcements, setAnnouncements] = useState<any[]>([]);

  useEffect(() => {
    if (appState === 'app') {
      fetch('/api/announcements').then(res => res.json()).then(setAnnouncements);
    }
  }, [appState]);

  if (appState === 'landing') {
    return <LandingPage onStart={() => setAppState('auth')} />;
  }

  if (appState === 'auth') {
    return (
      <LoginPage 
        onLogin={(u) => {
          setUser(u);
          setAppState('app');
        }} 
        onRegister={() => alert("Registration feature currently in verification. Please contact manager.")}
      />
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header announcement={announcements[0]?.title ? `Latest: ${announcements[0].title}` : undefined} />
        
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full"
            >
              {activeTab === 'home' && <HomePage />}
              {activeTab === 'booking' && <BookingPage />}
              {activeTab === 'student' && <MaintenancePage />}
              {activeTab === 'location' && <LocationPage />}
            </motion.div>
          </AnimatePresence>
        </div>

        <footer className="h-10 bg-white border-t border-slate-200 flex items-center justify-between px-8 text-[9px] text-slate-400 font-bold uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Vrindavan Girls Hostel • Kidwai Nagar Facility</span>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span>Hostel Data Sync Active</span>
            </span>
            <button onClick={() => setAppState('landing')} className="hover:text-indigo-600 transition-colors">Sign Out</button>
            <span>v1.0.5 - Build Stable</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
