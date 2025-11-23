import { Link } from 'react-router-dom'
import { Plane, Wifi, Battery, Shield, Crosshair, Target, Zap } from 'lucide-react'
import SEO from '../components/SEO'

const AerialPage = () => {
    return (
        <>
            <SEO
                title="ARGUS Aerial Systems - Ghost-V4 UAS"
                description="Autonomous aerial systems for defense. Ghost-V4 UAS provides deep sensing, electronic warfare capabilities, and precision mass swarming."
                keywords="autonomous drones, UAS, UAV, defense drones, swarming drones, precision mass, electronic warfare"
                image="https://argus.global/images/argus-logo-updated.png"
                url="https://argus.global/aerial"
            />
            <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">

                {/* Hero Section */}
                <section className="hero-minimal relative pt-32 pb-20 overflow-hidden border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-block mb-6 px-3 py-1 border border-white text-white text-xs font-mono tracking-widest uppercase">
                                Air Domain
                            </div>
                            <h1 className="text-6xl md:text-8xl font-medium mb-8 tracking-tighter leading-tight">
                                Aerial<br />
                                <span className="text-gray-500">Superiority.</span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed text-gray-400 font-light">
                                AI-enabled air dominance. Our software stack transforms legacy airframes and next-gen drones into cognitive assets capable of autonomous decision-making in GPS-denied environments.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Aerial Fleets Grid */}
                <section className="py-32 border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">Aerial Systems</h2>
                            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                                Next-generation autonomous platforms for every mission profile.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* SkyMako */}
                            <Link to="/aerial/skymako" className="group relative bg-zinc-900 border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-300 min-h-[400px] flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
                                <div className="relative z-20 p-8 mt-auto">
                                    <div className="inline-block px-3 py-1 mb-4 border border-white/20 rounded-full bg-black/50 backdrop-blur-sm text-xs font-mono tracking-wider text-blue-400">
                                        SCOUT / ANTI-INTERFERENCE
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">SkyMako™ Ghost-Ray 260</h3>
                                    <p className="text-gray-300 font-light line-clamp-2">
                                        Silent. Hover. Strike. The Apex Predator of the Skies.
                                    </p>
                                </div>
                            </Link>

                            {/* Barracuda */}
                            <Link to="/aerial/barracuda" className="group relative bg-zinc-900 border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-300 min-h-[400px] flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
                                <div className="relative z-20 p-8 mt-auto">
                                    <div className="inline-block px-3 py-1 mb-4 border border-white/20 rounded-full bg-black/50 backdrop-blur-sm text-xs font-mono tracking-wider text-blue-400">
                                        RAPID DEPLOYMENT
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Barracuda 260 "Switchblade"</h3>
                                    <p className="text-gray-300 font-light line-clamp-2">
                                        Unfold. Launch. Dominate. The Pocket-Sized Powerhouse.
                                    </p>
                                </div>
                            </Link>

                            {/* Leviathan */}
                            <Link to="/aerial/leviathan" className="group relative bg-zinc-900 border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-300 min-h-[400px] flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
                                <div className="relative z-20 p-8 mt-auto">
                                    <div className="inline-block px-3 py-1 mb-4 border border-white/20 rounded-full bg-black/50 backdrop-blur-sm text-xs font-mono tracking-wider text-blue-400">
                                        HEAVY LIFT
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Leviathan X8</h3>
                                    <p className="text-gray-300 font-light line-clamp-2">
                                        Gravity is just a suggestion. Lift Heavy. Fly Anywhere.
                                    </p>
                                </div>
                            </Link>

                            {/* Orca Pod */}
                            <Link to="/aerial/orca" className="group relative bg-zinc-900 border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-300 min-h-[400px] flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
                                <div className="relative z-20 p-8 mt-auto">
                                    <div className="inline-block px-3 py-1 mb-4 border border-white/20 rounded-full bg-black/50 backdrop-blur-sm text-xs font-mono tracking-wider text-blue-400">
                                        AUTONOMOUS SENTINEL
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Orca Pod</h3>
                                    <p className="text-gray-300 font-light line-clamp-2">
                                        The Pilot is Optional. The Mission is Permanent.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Capabilities Grid */}
                <section className="py-32 bg-off-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-24">
                            <h2 className="text-3xl font-medium mb-6">Operational Capabilities</h2>
                            <p className="text-gray-400 font-light max-w-2xl mx-auto">
                                Engineered for the most demanding combat environments.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="card group">
                                <Target className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                                <h3 className="text-xl font-medium mb-4">Swarm Logic</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm">
                                    Autonomous coordination between multiple assets to overwhelm air defense systems.
                                </p>
                            </div>
                            <div className="card group">
                                <Shield className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                                <h3 className="text-xl font-medium mb-4">EW Resilience</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm">
                                    Operates effectively in GPS-denied and jammed environments using visual navigation.
                                </p>
                            </div>
                            <div className="card group">
                                <Zap className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                                <h3 className="text-xl font-medium mb-4">Kinetic Payload</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm">
                                    Modular bay supports loitering munition configurations for precision strikes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 bg-black text-white border-t border-white/10">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
                            Deploy Air Superiority
                        </h2>
                        <p className="text-xl mb-12 leading-relaxed text-gray-400 font-light max-w-2xl mx-auto">
                            Contact our defense solutions team for detailed technical specifications.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/company" className="btn-primary">
                                Request Briefing
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AerialPage
