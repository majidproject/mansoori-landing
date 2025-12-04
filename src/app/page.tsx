"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight, 
  Terminal, 
  Database, 
  Layout, 
  Server,
  Cpu,
  Globe,
  LucideIcon,
  Menu,
  X,
  CloudSun,
  TrendingUp,
  Home as HomeIcon,
  User,
  Briefcase,
  FileText,
  Video,
  Mic,
  Zap,
  Shield,
  Code,
  ExternalLink
} from "lucide-react";

// --- Components: Smart Top Bar ---
function SmartTopBar() {
  const [btcPrice, setBtcPrice] = useState(96400);
  const [priceDirection, setPriceDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.random() > 0.5 ? 50 : -50;
      setBtcPrice((prev) => prev + change);
      setPriceDirection(change > 0 ? "up" : "down");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-900 border-b border-slate-800 text-xs md:text-sm z-50 relative">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8 text-slate-400">
        <div className="flex items-center gap-3">
          <TrendingUp className={`h-4 w-4 ${priceDirection === 'up' ? 'text-emerald-500' : 'text-rose-500'}`} />
          <span className="font-mono font-medium text-slate-300">BTC: ${btcPrice.toLocaleString()}</span>
          <span className="hidden sm:inline text-slate-500">| ETH: $3,200</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Tehran, IR</span>
          <CloudSun className="h-4 w-4 text-amber-400" />
          <span className="font-bold text-slate-200">14°C</span>
        </div>
      </div>
    </div>
  );
}

// --- Components: Responsive Navbar ---
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: HomeIcon, href: "#" },
    { name: "Projects", icon: Briefcase, href: "#projects" },
    { name: "About", icon: User, href: "#about" },
    { name: "Resume", icon: FileText, href: "#resume" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <div className="text-lg font-bold tracking-tighter text-white">
          Mansoori<span className="text-emerald-500">.dev</span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              <span className="lg:hidden text-xl group-hover:scale-110 transition-transform">
                <item.icon className="h-5 w-5" />
              </span>
              <span className="hidden lg:block">{item.name}</span>
              <span className="absolute top-full mt-2 hidden md:block lg:hidden rounded bg-slate-800 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 border border-slate-700">
                {item.name}
              </span>
              <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-slate-800 transition-transform group-hover:scale-100" />
            </a>
          ))}
          <button className="ml-4 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-transform hover:scale-105 active:scale-95">
            Hire Me
          </button>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-slate-800 bg-slate-950 px-4 md:hidden"
          >
            <div className="flex flex-col space-y-4 py-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-lg font-medium text-slate-300 hover:text-emerald-400"
                  >
                    <item.icon className="h-5 w-5 text-emerald-500/70" />
                    {item.name}
                  </a>
                </motion.div>
              ))}
              <button className="mt-4 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white shadow-lg">
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// --- Data ---
const TECH_STACK = [
  { name: "Next.js 15", icon: Globe },
  { name: "TypeScript", icon: Terminal },
  { name: "Tailwind CSS", icon: Layout },
  { name: "PostgreSQL", icon: Database },
  { name: "Node.js", icon: Server },
  { name: "DevOps", icon: Cpu },
];

const BLOG_POSTS = [
  { 
    title: "Deploying Next.js on Windows IIS", 
    date: "Nov 28, 2025",
    excerpt: "A step-by-step guide to configuring iisnode and rewriting rules for seamless Next.js deployment on enterprise Windows servers."
  },
  { 
    title: "Why I chose Recharts for Data Viz", 
    date: "Nov 20, 2025",
    excerpt: "Comparing D3.js, Chart.js, and Recharts. Why Recharts won for our React-based analytics dashboard."
  },
  { 
    title: "Optimizing Server-Side Rendering", 
    date: "Nov 15, 2025",
    excerpt: "Strategies to reduce TTFB and improve hydration performance in large-scale Next.js 15 applications."
  },
];

// --- Sub-Components ---

function BentoCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-2xl backdrop-blur-sm hover:border-emerald-500/30 transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SocialButton({ icon: Icon, href, label }: { icon: LucideIcon, href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-400 transition-all hover:bg-emerald-600 hover:text-white hover:scale-110"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

// --- NEW Project Card with Slideshow ---
function ProjectCard({ 
  title, 
  subtitle, 
  description, 
  href, 
  images, 
  tags,
  delay = 0
}: { 
  title: string, 
  subtitle: string, 
  description: string, 
  href: string, 
  images: string[],
  tags: string[],
  delay?: number
}) {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Auto-slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="md:col-span-3 lg:col-span-2 flex flex-col gap-0"
    >
      {/* 1. Visual Card (Slideshow) - Height Increased to h-80 */}
      <div className="group relative h-80 w-full overflow-hidden rounded-t-3xl border-x border-t border-slate-800 bg-slate-900 shadow-2xl transition-all">
        
        {/* Slideshow Images */}
        {images.map((img, index) => (
          <div 
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"}`}
          >
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={img} 
              alt={`${title} screenshot ${index + 1}`} 
              className="h-full w-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            {/* Gradient Overlay for blend */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90" />
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-6 z-20 flex gap-1.5">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImage ? "w-6 bg-emerald-500" : "w-1.5 bg-slate-500/50"}`} 
            />
          ))}
        </div>

        {/* Top Badges */}
        <div className="absolute top-4 right-6 z-20">
           <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full text-xs font-bold text-emerald-400 border border-emerald-500/20 uppercase tracking-wider shadow-lg">
             {subtitle}
           </span>
        </div>
      </div>

      {/* 2. Detailed Description Box - Smaller Padding */}
      <div className="rounded-b-3xl border border-slate-800 bg-slate-900/50 p-5 md:p-6 backdrop-blur-sm flex flex-col h-full hover:bg-slate-900/80 transition-colors">
        <div className="flex justify-between items-start mb-3">
           <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
        </div>
        
        <p className="text-slate-300 leading-relaxed text-sm md:text-base flex-grow mb-4 text-justify">
          {description}
        </p>
        
        {/* Footer with Button ABOVE Tech Stack */}
        <div className="flex flex-col gap-4 pt-4 border-t border-slate-800/50">
          {/* Action Button - Fixed Width & No Wrap */}
          <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-48 flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 whitespace-nowrap"
          >
            Visit Project <ExternalLink className="h-4 w-4" />
          </a>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-slate-800 rounded-lg text-xs text-slate-300 border border-slate-700/50 flex items-center gap-1 font-mono">
                 <Code className="h-3 w-3 text-emerald-500" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- NEW Component: Live Connect Card (Full Width) ---
function LiveConnectCard({ className = "", delay = 0 }: { className?: string, delay?: number }) {
  const [isLive, setIsLive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    if (isLive && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((s) => {
          stream = s;
          if (videoRef.current) videoRef.current.srcObject = stream;
          setError(null);
        })
        .catch((err) => {
          console.error("Error accessing camera:", err);
          setIsLive(false);
          setError("Camera access needed for demo");
        });
    }
    return () => {
      if (stream) stream.getTracks().forEach(track => track.stop());
    };
  }, [isLive]);

  const handleStartDemo = () => {
    if (navigator.mediaDevices) {
      setIsLive(true);
      setError(null);
    } else {
      setError("Not supported in this preview");
    }
  };

  return (
    <BentoCard className={`${className} border-emerald-500/20 !p-0 grid grid-cols-1 md:grid-cols-2`} delay={delay}>
       {/* Left Side: Video */}
       <div className="relative min-h-[300px] bg-slate-950/50 p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-slate-800">
         <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${isLive ? 'bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.5)]' : 'bg-slate-600'}`} />
            <h3 className="font-semibold text-slate-200 flex items-center gap-2">
               <Video className="h-4 w-4 text-emerald-500" /> Live Connect
            </h3>
         </div>
         {isLive && <span className="absolute top-4 right-4 text-[10px] font-mono text-rose-400 tracking-widest animate-pulse">● REC</span>}

         <div className="relative w-full max-w-sm aspect-video rounded-xl bg-slate-900 border border-slate-700 overflow-hidden shadow-2xl">
            {isLive ? (
              <>
                <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover transform scale-x-[-1]" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                   <button 
                     onClick={() => setIsLive(false)}
                     className="px-4 py-1.5 bg-rose-500 hover:bg-rose-600 text-white text-xs font-medium rounded-full backdrop-blur-sm transition-colors shadow-lg"
                   >
                     End
                   </button>
                   <div className="p-1.5 bg-slate-900/50 rounded-full text-white backdrop-blur-sm"><Mic className="h-4 w-4" /></div>
                </div>
              </>
            ) : (
               <div className="flex h-full flex-col items-center justify-center p-4">
                 <button 
                   onClick={handleStartDemo}
                   className="group relative inline-flex items-center justify-center px-6 py-2 overflow-hidden text-sm font-medium text-white transition-all duration-300 bg-emerald-600 rounded-lg hover:bg-emerald-500 hover:scale-105"
                 >
                   <span className="relative">Start Demo</span>
                 </button>
                 {error && <p className="text-xs text-rose-500 mt-2">{error}</p>}
               </div>
            )}
         </div>
       </div>

       {/* Right Side: Capabilities */}
       <div className="p-8 flex flex-col justify-center bg-slate-900/20">
          <h3 className="text-xl font-bold text-white mb-4">Real-time Communication</h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Showcasing expertise in building low-latency communication tools. This demo utilizes WebRTC for peer-to-peer video streaming and Socket.io for signaling.
          </p>
          <div className="space-y-4">
             <div className="flex items-start gap-3">
               <div className="p-2 bg-slate-800 rounded-lg text-emerald-400"><Zap className="h-5 w-5" /></div>
               <div>
                 <h4 className="font-semibold text-slate-200 text-sm">Low Latency</h4>
                 <p className="text-xs text-slate-500">Optimized for minimal delay &lt; 200ms</p>
               </div>
             </div>
             <div className="flex items-start gap-3">
               <div className="p-2 bg-slate-800 rounded-lg text-emerald-400"><Shield className="h-5 w-5" /></div>
               <div>
                 <h4 className="font-semibold text-slate-200 text-sm">Secure Signaling</h4>
                 <p className="text-xs text-slate-500">End-to-end encryption capable architecture</p>
               </div>
             </div>
             <div className="flex items-start gap-3">
               <div className="p-2 bg-slate-800 rounded-lg text-emerald-400"><Code className="h-5 w-5" /></div>
               <div>
                 <h4 className="font-semibold text-slate-200 text-sm">Scalable Backend</h4>
                 <p className="text-xs text-slate-500">Node.js custom signaling server</p>
               </div>
             </div>
          </div>
       </div>
    </BentoCard>
  );
}

// --- Main Page Component ---

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500 selection:text-white font-sans">
      <div className="fixed inset-0 bg-glow pointer-events-none" />

      {/* New Header Section */}
      <div className="flex flex-col">
        <SmartTopBar />
        <Navbar />
      </div>

      <div className="p-4 md:p-8 pt-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto">
          
          {/* Row 1: Profile + Tech Stack */}
          <BentoCard className="md:col-span-2 lg:col-span-3 flex flex-col justify-between group h-full">
            <div className="space-y-4">
              <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/majid_mansoori.jpg" 
                  alt="Majid Mansoori" 
                  className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Majid";
                  }}
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white">
                  Majid <span className="text-emerald-500">Mansouri</span>
                </h1>
                <p className="mt-2 text-lg text-slate-400">
                  Senior Full-Stack Developer specializing in scalable <span className="text-emerald-400">Next.js</span> applications.
                </p>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <SocialButton icon={Github} href="https://github.com/majidproject" label="GitHub Profile" />
              <SocialButton icon={Linkedin} href="https://linkedin.com" label="LinkedIn Profile" />
              <SocialButton icon={Mail} href="mailto:contact@mansoori.dev" label="Email Contact" />
            </div>
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-600/10 blur-3xl group-hover:bg-emerald-600/20 transition-all" />
          </BentoCard>

          <BentoCard className="md:col-span-1 lg:col-span-1 overflow-hidden h-full" delay={0.2}>
            <h3 className="font-semibold text-slate-300 mb-4 flex items-center gap-2">
              <Cpu className="h-4 w-4 text-emerald-500" /> Tech Stack
            </h3>
            <div className="flex flex-col gap-3">
              {TECH_STACK.map((tech) => (
                <div key={tech.name} className="flex items-center gap-3 text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  <tech.icon className="h-4 w-4" />
                  {tech.name}
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Section Divider */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 mt-8 mb-4 border-b border-slate-800 pb-2 flex items-center gap-2">
             <div className="h-2 w-2 rounded-full bg-emerald-500" />
             <h2 className="text-xl font-bold tracking-widest text-slate-200 uppercase">Featured Projects</h2>
          </div>

          {/* Row 2: Projects (Reordered & Updated) */}
          
          {/* Project 1: Service Pro (Moved to Top) */}
          <ProjectCard 
            title="Service Pro"
            subtitle="B2C Application"
            description="A modern Progressive Web App (PWA) connecting thousands of customers with local professionals. Key features include an advanced geolocation-based search engine, real-time availability checking, secure payment gateways, and a responsive design optimized for mobile conversions. The platform handles complex booking workflows and instant provider notifications."
            href="https://app.mansoori.dev"
            images={["/s1.jpg", "/s2.jpg", "/s3.jpg", "/s4.jpg", "/s5.jpg"]}
            tags={["React", "Next.js", "Tailwind", "Google Maps API", "Stripe"]}
            delay={0.1}
          />

          {/* Project 2: Admin Dashboard */}
          <ProjectCard 
            title="Admin Dashboard"
            subtitle="Enterprise Solution"
            description="A comprehensive enterprise-grade administration panel designed for handling large datasets. It features dynamic data visualization using Recharts, granular Role-Based Access Control (RBAC), and dark/light mode toggle. The dashboard includes complex order management tables with filtering, sorting, and export capabilities, ensuring maximum productivity for operations teams."
            href="https://admin.mansoori.dev"
            images={["/d1.jpg", "/d2.jpg", "/d3.jpg", "/d4.jpg"]}
            tags={["Next.js", "Recharts", "Data Grid", "TypeScript", "Auth.js"]}
            delay={0.2}
          />

          {/* Row 3: Live Connect */}
          <LiveConnectCard className="col-span-1 md:col-span-3 lg:col-span-4 mt-8" delay={0.35} />

          {/* Row 4: Blog */}
          <BentoCard className="col-span-1 md:col-span-3 lg:col-span-4 mt-4" delay={0.4}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h3 className="font-semibold text-slate-300 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-emerald-500" /> Latest Insights
              </h3>
              <a href="#" className="text-xs text-emerald-500 hover:underline mt-2 md:mt-0">View all posts →</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post, i) => (
                <div key={i} className="group p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all cursor-pointer h-full flex flex-col">
                  <span className="text-xs text-slate-500 font-mono mb-2 block">{post.date}</span>
                  <h4 className="text-base font-bold text-slate-200 group-hover:text-emerald-400 transition-colors mb-3 line-clamp-2">{post.title}</h4>
                  <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>
                  <div className="mt-4 flex items-center text-xs text-emerald-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                    Read Article <ArrowUpRight className="h-3 w-3 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

        </div>
        
        <footer className="mt-16 text-center text-slate-600 text-sm pb-8 border-t border-slate-900 pt-8">
          <p>© 2025 Majid Mansouri. Built with Next.js 15 & Tailwind.</p>
        </footer>
      </div>
    </main>
  );
}