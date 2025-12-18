import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Shield,
    Radar,
    Crosshair,
    Globe,
    Settings2,
    Target,
    Zap,
    Activity,
    Terminal,
    Cpu,
    Flag
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import '../styles/LandingPage.css';

const LandingPageV2 = () => {
    useEffect(() => {
        // UnicornStudio Script
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js";
        script.onload = () => {
            if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
                window.UnicornStudio.init();
                window.UnicornStudio.isInitialized = true;
            }
        };
        document.body.appendChild(script);

        return () => {
            // Cleanup if necessary, though UnicornStudio might be global
            // document.body.removeChild(script);
        };
    }, []);

    const chartData = [
        { name: '00', value: 45 },
        { name: '05', value: 52 },
        { name: '10', value: 49 },
        { name: '15', value: 62 },
        { name: '20', value: 58 },
        { name: '25', value: 65 },
        { name: '30', value: 75 },
        { name: '35', value: 68 },
        { name: '40', value: 72 },
        { name: '45', value: 85 },
        { name: '50', value: 80 },
        { name: '55', value: 92 },
    ];

    return (
        <div className="text-slate-300 antialiased selection:bg-white/20 selection:text-white font-jakarta bg-[#020204] min-h-screen">
            {/* Background (component) added by Aura */}
            <div
                className="aura-background-component top-0 w-full h-screen -z-10 absolute"
                data-alpha-mask="80"
                style={{
                    maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'
                }}
            >
                <div data-us-project="BmkW7Lf1854963eLrBje" className="absolute w-full h-full left-0 top-0 -z-10"></div>
            </div>

            {/* Background Effects */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-[#020204]/80 to-transparent blur-[80px]"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#030508]/80 backdrop-blur-xl">
                <div className="flex max-w-7xl mx-auto px-6 py-4 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-3 group">
                            {/* New Logo from Pitch Deck */}
                            <div className="relative flex items-center justify-center">
                                <Shield className="w-8 h-8 text-white stroke-[1.5]" />
                            </div>
                            <div className="flex flex-col leading-none justify-center">
                                <span className="text-base font-bold text-white tracking-widest font-jakarta">ARGUS</span>
                                <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase font-geist">SYSTEMS</span>
                            </div>
                        </Link>
                        <div className="hidden md:flex items-center gap-6 ml-4">
                            <Link to="/products" className="text-xs font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-wide">Capabilities</Link>
                            <Link to="/products" className="text-xs font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-wide">Systems</Link>
                            <Link to="/company" className="text-xs font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-wide">Mission</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="mailto:contact@argusai.uk" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-white px-5 py-2 text-xs font-bold text-black transition-all hover:bg-zinc-200">
                            <span>CONTACT SALES</span>
                        </a>
                    </div>
                </div>
            </nav>

            <main className="relative">
                {/* Hero Section */}
                <section className="overflow-hidden min-h-[1100px] pt-32 pb-44 relative">

                    {/* RADAR BACKGROUND LAYER (Monochrome) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] z-0 pointer-events-none mask-radar-bottom select-none">

                        {/* Radar Container */}
                        <div className="relative w-full h-full flex items-center justify-center">

                            {/* 1. The Sweep / Scanner */}
                            <div className="absolute inset-0 w-full h-full rounded-full animate-[radar-scan_8s_linear_infinite]">
                                <div className="radar-sweep w-full h-full rounded-full opacity-50"></div>
                                {/* Leading edge glowing line (White) */}
                                <div className="absolute top-0 left-1/2 w-[1px] h-1/2 bg-gradient-to-b from-white via-white/50 to-transparent origin-bottom -translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
                            </div>

                            {/* 2. Outer Ring Structure */}
                            <div className="absolute w-[98%] h-[98%] rounded-full border border-dashed border-white/10 opacity-30 animate-[spin-slow_120s_linear_infinite]"></div>
                            <div className="absolute w-[80%] h-[80%] rounded-full border border-white/10 opacity-40"></div>

                            {/* Decorative Arc Slices */}
                            <svg className="absolute w-[80%] h-[80%] animate-[spin-reverse-slow_60s_linear_infinite]" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.2" strokeDasharray="20 40"></circle>
                            </svg>

                            {/* 3. Inner Rings */}
                            <div className="absolute w-[72%] h-[72%] rounded-full border border-white/5"></div>

                            {/* 4. Grid Lines */}
                            <div className="absolute w-full h-full opacity-10">
                                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/30"></div>
                                <div className="absolute left-0 right-0 top-1/2 h-px bg-white/30"></div>
                                <div className="absolute top-[14.6%] left-[14.6%] w-[70.8%] h-[70.8%] border border-white/30 rounded-full"></div>
                            </div>

                            {/* 5. Central Glowing Core */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center">
                                <div className="absolute inset-0 bg-white/5 blur-xl rounded-full animate-pulse"></div>
                                <div className="w-[60%] h-[60%] border border-white/20 rounded-full flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_white]"></div>
                                </div>
                            </div>

                            {/* Floating Data Points on Radar */}
                            <div className="absolute top-[20%] left-[75%] w-32 h-8 flex items-center gap-2 text-white/40 text-[10px] font-mono animate-pulse">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div> TARGET_LOCKED
                            </div>
                            <div className="absolute bottom-[40%] left-[25%] w-32 h-8 flex items-center gap-2 text-white/40 text-[10px] font-mono animate-pulse delay-700">
                                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div> UAV_ONLINE
                            </div>
                        </div>
                    </div>

                    {/* HERO CONTENT */}
                    <div className="flex flex-col max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center" style={{ maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)' }}>

                        {/* Text Content */}
                        <div className="text-center max-w-4xl mx-auto mb-16 pt-10">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                                <div className="h-1.5 w-1.5 animate-pulse bg-white rounded-full"></div>
                                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-200 font-jakarta">
                                    Argus Robotics Systems
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                                Autonomous Intelligence
                                <span className="text-gradient-silver relative inline-block ml-3">
                                    for Modern Robotics
                                    {/* Glitch decorative underline */}
                                    <svg className="absolute w-full h-2 bottom-0 left-0 text-white/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="1" className=""></path>
                                    </svg>
                                </span>
                            </h1>

                            <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                                We provide AI-enabled precision mass and autonomous systems. Software-defined superiority for complex environments.
                            </p>

                            <div className="mt-8 flex items-center justify-center gap-4">
                                <Link to="/products" className="px-6 py-3 rounded-md bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white text-sm font-medium transition-all">View Platforms</Link>
                                <a href="mailto:contact@argusai.uk" className="px-6 py-3 rounded-md bg-white hover:bg-slate-200 text-black text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">Contact Sales</a>
                            </div>
                        </div>

                        {/* GLASS DASHBOARD INTERFACE */}
                        <div className="w-full max-w-6xl z-20 mt-[-20px] relative perspective-1000">

                            {/* Dashboard Container */}
                            <div className="glass-surface border-x overflow-hidden transition-all duration-500 animate-enter [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(0)_noise(0.5,1,0)] bg-[#0A0A0B] border-white/10 rounded-t-xl border-b relative backdrop-blur-md">

                                {/* Top Glow Border */}
                                <div className="glass-top-border"></div>

                                {/* Subtle internal noise/texture */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>

                                {/* Header Bar */}
                                <div className="z-20 flex bg-black/40 border-white/5 border-b pt-3 pr-6 pb-3 pl-6 relative items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        {/* Tactical Status dots */}
                                        <div className="flex gap-2 opacity-60">
                                            <div className="w-2.5 h-2.5 rounded-sm bg-zinc-500"></div>
                                            <div className="w-2.5 h-2.5 rounded-sm bg-zinc-700"></div>
                                            <div className="w-2.5 h-2.5 rounded-sm bg-zinc-700"></div>
                                        </div>
                                        <div className="h-4 w-px bg-white/10 mx-2"></div>
                                        <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                                            <Shield size={14} />
                                            <span>ARGUS_OS</span>
                                            <span className="text-zinc-600">/</span>
                                            <span className="text-zinc-400">COMMAND_NODE_ALPHA</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2 px-3 py-1 rounded-sm bg-zinc-900/80 border border-white/10">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                                            <span className="text-[9px] font-bold text-slate-200 tracking-wide uppercase">Secure Uplink</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Dashboard Content */}
                                <div className="z-20 flex h-[500px] relative">

                                    {/* Sidebar */}
                                    <div className="flex flex-col gap-6 bg-black/30 w-16 border-white/5 border-r pt-6 pb-6 gap-x-6 gap-y-6 items-center">
                                        <div className="p-2.5 rounded bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                            <Radar size={18} />
                                        </div>
                                        <div className="p-2.5 rounded text-zinc-500 hover:text-white hover:bg-white/5 transition-colors">
                                            <Crosshair size={18} />
                                        </div>
                                        <div className="p-2.5 rounded text-zinc-500 hover:text-white hover:bg-white/5 transition-colors">
                                            <Globe size={18} />
                                        </div>
                                        <div className="mt-auto p-2.5 rounded text-zinc-500 hover:text-white hover:bg-white/5 transition-colors">
                                            <Settings2 size={18} />
                                        </div>
                                    </div>

                                    {/* Main Grid */}
                                    <div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6 bg-black/20">

                                        {/* Stats Row */}
                                        <div className="col-span-12 grid grid-cols-3 gap-6 h-32">
                                            {/* Stat 1 */}
                                            <div className="rounded-lg border border-white/5 bg-zinc-900/50 p-5 flex flex-col justify-between group hover:border-white/20 transition-all hover:bg-zinc-800/50">
                                                <div className="flex justify-between items-start">
                                                    <div className="">
                                                        <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Active Targets</p>
                                                        <h3 className="text-2xl font-bold text-white tracking-tight">142</h3>
                                                    </div>
                                                    <div className="text-white bg-white/5 rounded-sm pt-1.5 pr-1.5 pb-1.5 pl-1.5 border border-white/5">
                                                        <Target size={14} />
                                                    </div>
                                                </div>
                                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
                                                    <div className="h-full w-[70%] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                                                </div>
                                            </div>

                                            {/* Stat 2 */}
                                            <div className="rounded-lg border border-white/5 bg-zinc-900/50 p-5 flex flex-col justify-between group hover:border-white/20 transition-all hover:bg-zinc-800/50">
                                                <div className="flex justify-between items-start">
                                                    <div className="">
                                                        <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Signal Latency</p>
                                                        <h3 className="text-2xl font-bold text-white tracking-tight">4<span className="text-sm font-medium text-zinc-500 ml-1">ms</span></h3>
                                                    </div>
                                                    <div className="text-white bg-white/5 rounded-sm pt-1.5 pr-1.5 pb-1.5 pl-1.5 border border-white/5">
                                                        <Zap size={14} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 mt-2">
                                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                                    Real-time sync active
                                                </div>
                                            </div>

                                            {/* Stat 3 */}
                                            <div className="rounded-lg border border-white/5 bg-zinc-900/50 p-5 flex flex-col justify-between group hover:border-white/20 transition-all hover:bg-zinc-800/50">
                                                <div className="flex justify-between items-start">
                                                    <div className="">
                                                        <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Swarm Health</p>
                                                        <h3 className="text-2xl font-bold text-white tracking-tight">100%</h3>
                                                    </div>
                                                    <div className="text-white bg-white/5 rounded-sm pt-1.5 pr-1.5 pb-1.5 pl-1.5 border border-white/5">
                                                        <Activity size={14} />
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 mt-2">
                                                    <div className="h-1 flex-1 bg-white/80 rounded-full opacity-100 shadow-[0_0_5px_rgba(255,255,255,0.3)]"></div>
                                                    <div className="h-1 flex-1 bg-white/80 rounded-full opacity-100 shadow-[0_0_5px_rgba(255,255,255,0.3)]"></div>
                                                    <div className="h-1 flex-1 bg-white/80 rounded-full opacity-100 shadow-[0_0_5px_rgba(255,255,255,0.3)]"></div>
                                                    <div className="h-1 flex-1 bg-white/80 rounded-full opacity-100 shadow-[0_0_5px_rgba(255,255,255,0.3)]"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Main Chart Area */}
                                        <div className="col-span-8 bg-zinc-900/30 border border-white/5 rounded-lg p-6 relative">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Autonomous Response</h4>
                                                <div className="flex gap-2">
                                                    <button className="text-[9px] font-bold px-2 py-0.5 rounded bg-white/10 text-white border border-white/10">LIVE</button>
                                                    <button className="text-[9px] font-bold px-2 py-0.5 rounded text-zinc-500 hover:text-white transition-colors">LOG</button>
                                                </div>
                                            </div>
                                            <div className="relative w-full h-[200px]">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <AreaChart data={chartData}>
                                                        <defs>
                                                            <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.2} />
                                                                <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                                                            </linearGradient>
                                                        </defs>
                                                        <Area
                                                            type="monotone"
                                                            dataKey="value"
                                                            stroke="#ffffff"
                                                            strokeWidth={1.5}
                                                            fillOpacity={1}
                                                            fill="url(#colorRequests)"
                                                        />
                                                    </AreaChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>

                                        {/* Logs/Events */}
                                        <div className="col-span-4 bg-zinc-900/30 border border-white/5 rounded-lg flex flex-col">
                                            <div className="p-4 border-b border-white/5 flex justify-between items-center">
                                                <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Tactical Log</h4>
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                                </span>
                                            </div>
                                            <div className="flex-1 overflow-y-hidden p-3 space-y-2 font-mono text-[10px]">
                                                <div className="flex gap-2 items-center text-zinc-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
                                                    <span className="text-zinc-600">10:42:01</span>
                                                    <span className="text-white font-bold">INFO</span>
                                                    <span className="group-hover:text-white transition-colors">Pattern matched</span>
                                                </div>
                                                <div className="flex gap-2 items-center text-zinc-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
                                                    <span className="text-zinc-600">10:42:05</span>
                                                    <span className="text-emerald-500 font-bold">SAFE</span>
                                                    <span className="group-hover:text-white transition-colors">Sector 4 clear</span>
                                                </div>
                                                <div className="flex gap-2 items-center text-zinc-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
                                                    <span className="text-zinc-600">10:42:12</span>
                                                    <span className="text-white font-bold">ALRT</span>
                                                    <span className="group-hover:text-white transition-colors">Anomaly detected</span>
                                                </div>
                                                <div className="flex gap-2 items-center text-zinc-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
                                                    <span className="text-zinc-600">10:42:18</span>
                                                    <span className="text-white font-bold">INFO</span>
                                                    <span className="group-hover:text-white transition-colors">Re-routing swarm</span>
                                                </div>
                                                <div className="flex gap-2 items-center text-zinc-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group opacity-50">
                                                    <span className="text-zinc-600">10:42:22</span>
                                                    <span className="text-white font-bold">INFO</span>
                                                    <span className="group-hover:text-white transition-colors">Protocol engaged</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Bottom Reflection/Glow under dashboard */}
                            <div className="absolute -bottom-10 left-0 right-0 h-20 bg-white/5 blur-[50px] pointer-events-none z-0"></div>
                        </div>
                    </div>
                    {/* Bottom dark shade */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-[#020204]/80 to-[#020204] z-[15]"></div>
                </section>

                {/* Stats / Partners */}
                <section className="overflow-visible max-w-7xl mr-auto ml-auto pt-10 pb-20 px-6 relative border-b border-white/5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">100%</div>
                            <div className="text-xs font-bold uppercase tracking-wider text-zinc-600">Open Architecture</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">5+</div>
                            <div className="text-xs font-bold uppercase tracking-wider text-zinc-600">Nations Supported</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">24/7</div>
                            <div className="text-xs font-bold uppercase tracking-wider text-zinc-600">Autonomous Ops</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">∞</div>
                            <div className="text-xs font-bold uppercase tracking-wider text-zinc-600">Scalability</div>
                        </div>
                    </div>
                </section>

                {/* Capabilities Grid (formerly Bento Integrations) */}
                <section id="capabilities" className="relative py-32 overflow-hidden">
                    {/* Ambient Background (Subtle White/Grey) */}
                    <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6">
                        {/* Header */}
                        <div className="text-center mb-32">
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 shadow-lg">
                                <span className="text-xs font-bold tracking-wider text-slate-200 uppercase">
                                    Mission &amp; Values
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                                Our Capabilities
                            </h2>
                            <p className="text-slate-400 text-lg max-w-xl mx-auto font-light">
                                Software-defined superiority for sovereign robotics.
                            </p>
                        </div>

                        {/* Integration Grid */}
                        <div className="relative max-w-5xl mx-auto">
                            {/* Axis Lines */}
                            <div className="absolute top-1/2 left-[-50%] right-[-50%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2"></div>
                            <div className="absolute left-1/2 top-[-50%] bottom-[-50%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>

                            {/* Center Hub */}
                            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <div className="relative w-[260px] h-[260px]">
                                    {/* 3 filled concentric circles (small, medium, big) */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="center-circle center-circle--3 w-56 h-56 rounded-full bg-white/5"></div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="center-circle center-circle--2 w-40 h-40 rounded-full bg-white/10"></div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="center-circle w-24 h-24 rounded-full bg-white/20"></div>
                                    </div>

                                    {/* Rays that end the animation */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="center-ray-horizontal center-ray-left bg-gradient-to-l from-white/40 via-white/20 to-transparent w-14 gap-x-32 gap-y-32"></div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="center-ray-horizontal center-ray-right w-14 bg-gradient-to-r from-white/40 via-white/20 to-transparent"></div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="center-ray-vertical center-ray-top h-14 bg-gradient-to-t from-white/40 via-white/20 to-transparent"></div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="center-ray-vertical center-ray-bottom h-14 bg-gradient-to-b from-white/40 via-white/20 to-transparent"></div>
                                    </div>

                                    {/* Core Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex bg-zinc-100 w-16 h-16 rounded-full ring-[#020204] ring-8 relative shadow-[0_0_40px_rgba(255,255,255,0.2)] gap-x-32 gap-y-32 items-center justify-center">
                                            {/* Black Icon inside white circle */}
                                            <Shield className="text-black w-7 h-7" strokeWidth={2.5} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32">

                                {/* Item 1 (Top Left) */}
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0B0C10] border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                                        <Cpu className="text-zinc-500 group-hover:text-white transition-colors w-7 h-7" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Software-Defined</h3>
                                    <p className="text-sm text-slate-400 max-w-[240px]">
                                        Hardware is a commodity. Intelligence is the differentiator. We retrofit existing platforms with state-of-the-art AI.
                                    </p>
                                </div>

                                {/* Item 2 (Top Right) */}
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0B0C10] border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                                        <Shield className="text-zinc-500 group-hover:text-white transition-colors w-7 h-7" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Information Superiority</h3>
                                    <p className="text-sm text-slate-400 max-w-[240px]">
                                        Data is the weapon. Our systems process sensor data on-device, delivering real-time situational awareness.
                                    </p>
                                </div>

                                {/* Item 3 (Bottom Left) */}
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0B0C10] border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                                        <Shield className="text-zinc-500 group-hover:text-white transition-colors w-7 h-7" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Sovereign &amp; Secure</h3>
                                    <p className="text-sm text-slate-400 max-w-[240px]">
                                        Built on open standards. We ensure critical infrastructure remains under sovereign control.
                                    </p>
                                </div>

                                {/* Item 4 (Bottom Right) */}
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0B0C10] border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                                        <Globe className="text-zinc-500 group-hover:text-white transition-colors w-7 h-7" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Mass Scalability</h3>
                                    <p className="text-sm text-slate-400 max-w-[240px]">
                                        Deploying autonomous swarms cost-effectively at scale to achieve asymmetric advantage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Systems Section */}
                <section className="border-y border-white/5 py-12 px-6 md:p-24" id="systems">
                    <div className="border-gradient-mask group relative overflow-hidden rounded-[2.5rem] bg-zinc-900/20 backdrop-blur-md">
                        {/* Background Glow (Monochrome) */}
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-zinc-600/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-zinc-600/20 transition-colors duration-700"></div>

                        <div className="grid lg:grid-cols-2 z-10 gap-x-0 gap-y-0" style={{ position: 'relative', '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))' }}>
                            {/* Text Content */}
                            <div className="flex flex-col z-10 p-8 md:p-16 justify-center">
                                <div className="mb-6 h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                                    <Crosshair className="h-6 w-6 text-white" />
                                </div>

                                <h2 className="text-3xl tracking-tight text-white sm:text-4xl font-medium">
                                    Autonomous Systems.
                                    <span className="block text-zinc-500">
                                        Multi-Domain Operations.
                                    </span>
                                </h2>

                                <div className="space-y-6 text-lg text-zinc-400 font-normal leading-relaxed">
                                    <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                                        We bridge the gap between legacy platforms and next-generation autonomy.
                                    </p>
                                    <div className="mt-8">
                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18h20"></path><path d="M12 2v16"></path><path d="m19 9-7-7-7 7"></path></svg>
                                            Air Superiority
                                        </h3>
                                        <p className="text-sm text-slate-400 mb-6">
                                            AI-enabled air dominance. Our software stack transforms legacy airframes and next-gen drones into cognitive assets capable of autonomous decision-making in GPS-denied environments.
                                        </p>

                                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"></path><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                                            Maritime Intelligence
                                        </h3>
                                        <p className="text-sm text-slate-400">
                                            Deploying neural networks at the edge to secure sovereign waters. From autonomous surface vessels to deep-sea monitoring, ensuring continuous situational awareness.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Visual: AI Editor */}
                            <div className="min-h-[500px] lg:border-t-0 lg:border-l font-geist bg-black/40 border-white/5 border-t relative overflow-hidden">
                                {/* Floating Prompt Input */}
                                <div className="-translate-x-1/2 -translate-y-1/2 z-20 w-[85%] max-w-md absolute top-1/2 left-1/2">
                                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 p-4 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/30">
                                        {/* Prompt Header */}
                                        <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/5">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
                                                <span className="text-xs font-medium text-white">Argus Sentinel Core</span>
                                            </div>
                                            <span className="text-[10px] text-zinc-600">v4.0.1 Stable</span>
                                        </div>

                                        {/* User Input Simulation */}
                                        <div className="flex gap-3 mb-4">
                                            <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-white/5">
                                                <Terminal className="h-3 w-3 text-zinc-400" />
                                            </div>
                                            <div className="text-sm text-zinc-300 font-normal leading-relaxed">
                                                Initialize swarm protocol. Sector 4 surveillance. Authorized autonomous engagement on confirmed hostile signatures.
                                            </div>
                                        </div>

                                        {/* AI Generating Loader */}
                                        <div className="flex gap-3">
                                            <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                                <Cpu className="h-3 w-3 text-white" />
                                            </div>
                                            <div className="w-full space-y-2">
                                                <div className="h-2 w-3/4 bg-zinc-800 rounded animate-pulse"></div>
                                                <div className="h-2 w-1/2 bg-zinc-800 rounded animate-pulse delay-75"></div>

                                                {/* The Generated Component Preview (Code Block) */}
                                                <div className="mt-4 rounded-lg border border-zinc-700/50 bg-[#0B0C10] p-4 font-mono text-[10px] md:text-xs leading-relaxed overflow-hidden relative group">
                                                    {/* Language Badge */}
                                                    <div className="absolute top-2 right-2 text-[8px] text-zinc-500 border border-zinc-800 px-1.5 rounded bg-zinc-900/50">
                                                        CPP
                                                    </div>

                                                    <div className="text-zinc-400">
                                                        <span className="text-purple-400">class</span>{' '}
                                                        <span className="text-yellow-200">SwarmController</span>{' '}
                                                        <span className="text-purple-400">extends</span>{' '}
                                                        BaseUnit {'{'}
                                                    </div>
                                                    <div className="pl-4 text-zinc-400">
                                                        <span className="text-blue-400">void</span> executeMission() {'{'}
                                                    </div>
                                                    <div className="pl-8 text-zinc-400">
                                                        scanSector(<span className="text-green-400">SECTOR_04</span>);
                                                    </div>
                                                    <div className="pl-8 text-zinc-400">
                                                        <span className="text-purple-400">if</span> (target.confirmed()) {'{'}
                                                    </div>
                                                    <div className="pl-12 text-zinc-400">
                                                        engage(<span className="text-blue-400">Protocol::AUTONOMOUS</span>);
                                                    </div>
                                                    <div className="pl-8 text-zinc-400">{'}'}</div>
                                                    <div className="pl-4 text-zinc-400">{'}'}</div>
                                                    <div className="text-zinc-400">{'};'}</div>

                                                    {/* Decorative glowing cursor or selection */}
                                                    <div className="absolute bottom-4 left-10 w-1.5 h-3 bg-white/50 animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Background Abstract Code */}
                                <div className="absolute inset-0 p-8 opacity-20 pointer-events-none select-none overflow-hidden">
                                    <div className="absolute inset-0 w-full h-full" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
                                        <div className="w-full" style={{ animation: 'scrollUp 30s linear infinite' }}>
                                            <style>{`
                        @keyframes scrollUp {
                            0% { transform: translateY(0); }
                            100% { transform: translateY(-50%); }
                        }
                      `}</style>
                                            {/* Original Block */}
                                            <div className="text-xs text-zinc-600 space-y-1 pb-16">
                                                <p><span className="text-purple-400">import</span> <span className="text-yellow-200">TargetingSystem</span>;</p>
                                                <p><span className="text-purple-400">import</span> <span class="text-yellow-200">NeuralNet</span>;</p>
                                                <br />
                                                <p><span className="text-blue-400">void</span> main() {'{'}</p>
                                                <p className="pl-4">System.init(Mode.AUTONOMOUS);</p>
                                                <p className="pl-4">while(active) {'{'}</p>
                                                <p className="pl-8">scan();</p>
                                                <p className="pl-8">analyze_telemetry();</p>
                                                <p className="pl-4">{'}'}</p>
                                                <p>{'}'}</p>
                                            </div>
                                            {/* Duplicate Block */}
                                            <div className="text-xs text-zinc-600 space-y-1 pb-16">
                                                <p><span className="text-purple-400">import</span> <span className="text-yellow-200">TargetingSystem</span>;</p>
                                                <p><span className="text-purple-400">import</span> <span className="text-yellow-200">NeuralNet</span>;</p>
                                                <br />
                                                <p><span className="text-blue-400">void</span> main() {'{'}</p>
                                                <p className="pl-4">System.init(Mode.AUTONOMOUS);</p>
                                                <p className="pl-4">while(active) {'{'}</p>
                                                <p className="pl-8">scan();</p>
                                                <p className="pl-8">analyze_telemetry();</p>
                                                <p className="pl-4">{'}'}</p>
                                                <p>{'}'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="mission" className="pt-24 pb-32 relative">
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/5 border border-white/10 mb-8">
                            <Flag className="text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                            Join the Mission
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            We are looking for engineers and operators who share our conviction that democratic values are worth protecting.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/company" className="px-8 py-4 rounded-md bg-white text-black font-bold hover:bg-slate-200 transition-all hover:scale-105">View Open Roles</Link>
                            <a href="mailto:contact@argusai.uk" className="px-8 py-4 rounded-md border border-white/20 text-white font-medium hover:bg-white/5 transition-all">Contact Sales</a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/10 bg-[#010203] pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
                        <div className="col-span-2 lg:col-span-2">
                            <a href="#" className="flex items-center gap-3 mb-6">
                                <Shield className="w-6 h-6 text-white stroke-[1.5]" />
                                <div className="flex flex-col leading-none justify-center">
                                    <span className="text-lg font-bold text-white tracking-widest font-jakarta">ARGUS</span>
                                </div>
                            </a>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
                                Artificial intelligence to protect our critical infrastructure. We build software-defined autonomous systems that ensure information superiority in modern operations.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Platform</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/aerial" className="text-slate-400 hover:text-white transition-colors">Air Superiority</Link></li>
                                <li><Link to="/maritime" className="text-slate-400 hover:text-white transition-colors">Maritime</Link></li>
                                <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors">Command OS</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Company</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/company" className="text-slate-400 hover:text-white transition-colors">Mission</Link></li>
                                <li><Link to="/company" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
                                <li><Link to="/resources" className="text-slate-400 hover:text-white transition-colors">Press</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Legal</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Privacy</Link></li>
                                <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-slate-500">
                            © 2024 Argus Robotics. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-xs text-slate-400 font-mono">
                                System Operational
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPageV2;
