"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  LucideIcon
} from "lucide-react";

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
  { title: "Deploying Next.js on Windows IIS", date: "Nov 28, 2025" },
  { title: "Why I chose Recharts for Data Viz", date: "Nov 20, 2025" },
  { title: "Optimizing Server-Side Rendering", date: "Nov 15, 2025" },
];

// --- Components ---

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

function SocialButton({ icon: Icon, href }: { icon: LucideIcon, href: string }) {
  return (
    <Link 
      href={href} 
      target="_blank"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-400 transition-all hover:bg-emerald-600 hover:text-white hover:scale-110"
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 p-4 md:p-8 text-white selection:bg-emerald-500 selection:text-white font-sans">
      <div className="fixed inset-0 bg-glow pointer-events-none" />

      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* 1. Profile Card (Large) */}
        <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Majid" alt="Majid" className="h-full w-full object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white">
                Majid <span className="text-emerald-500">Mansouri</span>
              </h1>
              <p className="mt-2 text-lg text-slate-400">
                Senior Full-Stack Developer specializing in scalable <span className="text-emerald-400">Next.js</span> applications and Enterprise Dashboards.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <SocialButton icon={Github} href="https://github.com/majidproject" />
            <SocialButton icon={Linkedin} href="https://linkedin.com" />
            <SocialButton icon={Mail} href="mailto:contact@mansoori.dev" />
          </div>
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-600/10 blur-3xl group-hover:bg-emerald-600/20 transition-all" />
        </BentoCard>

        {/* 2. Admin Dashboard Showcase */}
        <BentoCard className="md:col-span-2 lg:col-span-2 group cursor-pointer relative" delay={0.1}>
           <Link href="https://admin.mansoori.dev" target="_blank" className="absolute inset-0 z-10" />
           <div className="absolute top-4 right-4 rounded-full bg-slate-800 p-2 text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
             <ArrowUpRight className="h-5 w-5" />
           </div>
           
           <div className="h-full flex flex-col justify-between">
             <div className="space-y-1">
               <div className="flex items-center gap-2">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                 </span>
                 <h3 className="font-semibold text-emerald-400 text-sm tracking-wider uppercase">Featured Project</h3>
               </div>
               <h2 className="text-2xl font-bold">Admin Dashboard</h2>
             </div>
             
             <div className="mt-4 flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                <div className="h-24 w-1/3 rounded-t-lg bg-slate-800 border-t border-l border-r border-slate-700"></div>
                <div className="h-24 w-2/3 rounded-t-lg bg-slate-800 border-t border-l border-r border-slate-700"></div>
             </div>
           </div>
        </BentoCard>

        {/* 3. Tech Stack */}
        <BentoCard className="md:col-span-1 lg:col-span-1 overflow-hidden" delay={0.2}>
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

        {/* 4. Service App Link */}
        <BentoCard className="md:col-span-1 lg:col-span-1 group relative bg-service-gradient" delay={0.3}>
          <Link href="https://app.mansoori.dev" target="_blank" className="absolute inset-0 z-10" />
          <div className="h-full flex flex-col justify-between">
             <div className="rounded-lg bg-blue-500/20 w-fit p-2 text-blue-400 mb-2">
               <Globe className="h-6 w-6" />
             </div>
             <div>
               <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Service Pro</h3>
               <p className="text-sm text-slate-500 mt-1">B2C Application</p>
             </div>
          </div>
        </BentoCard>

        {/* 5. Blog */}
        <BentoCard className="md:col-span-2 lg:col-span-2" delay={0.4}>
          <h3 className="font-semibold text-slate-300 mb-4 flex items-center gap-2">
            <Terminal className="h-4 w-4 text-emerald-500" /> Latest Insights
          </h3>
          <div className="space-y-3">
            {BLOG_POSTS.map((post, i) => (
              <div key={i} className="group flex items-center justify-between border-b border-slate-800 pb-3 last:border-0 hover:bg-slate-800/50 p-2 rounded-lg cursor-pointer transition-colors">
                <span className="text-sm font-medium text-slate-300 group-hover:text-emerald-400 transition-colors">{post.title}</span>
                <span className="text-xs text-slate-500 font-mono">{post.date}</span>
              </div>
            ))}
          </div>
        </BentoCard>

      </div>
      
      <footer className="mt-12 text-center text-slate-600 text-sm">
        <p>© 2025 Majid Mansouri. Built with Next.js 15 & Tailwind.</p>
      </footer>
    </main>
  );
}