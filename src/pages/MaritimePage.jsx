import { Link } from 'react-router-dom'
import { Waves, Radio, Navigation, Shield, Eye, Anchor, Activity } from 'lucide-react'
import SEO from '../components/SEO'

const MaritimePage = () => {
    return (
        <>
            <SEO
                title="ARGUS Maritime Systems - Triton USV"
                description="Autonomous maritime systems for industry. Triton USV provides littoral surveillance, infrastructure inspection, and precision mass naval operations."
                keywords="USV, unmanned surface vehicle, naval drones, maritime security, autonomous boats, precision mass"
                image="https://argus.global/images/argus-logo-updated.png"
                url="https://argus.global/maritime"
            />
            <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">

                {/* Hero Section */}
                <section className="hero-minimal relative pt-32 pb-20 overflow-hidden border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-block mb-6 px-3 py-1 border border-white text-white text-xs font-mono tracking-widest uppercase">
                                Maritime Domain
                            </div>
                            <h1 className="text-6xl md:text-8xl font-medium mb-8 tracking-tighter leading-tight">
                                Maritime<br />
                                <span className="text-gray-500">Intelligence.</span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed text-gray-400 font-light">
                                Deploying neural networks at the edge to secure offshore assets. From autonomous surface vessels to deep-sea monitoring, ensuring continuous situational awareness.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Maritime Fleets Grid */}
                {/* Maritime Fleets Grid */}
                <section className="py-32 border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Hammerhead USV */}
                            <Link to="/maritime/hammerhead" className="group relative bg-zinc-900 border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-300 min-h-[500px] flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                                <div className="absolute inset-0 bg-[url('/images/fleets/hammerhead/hammerhead-1.png')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
                                <div className="relative z-20 p-8 mt-auto">
                                    <div className="inline-block px-3 py-1 mb-4 border border-white/20 rounded-full bg-black/50 backdrop-blur-sm text-xs font-mono tracking-wider text-blue-400">
                                        HYDROGRAPHIC SURVEY
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">The Hammerhead USV</h3>
                                    <p className="text-gray-300 font-light line-clamp-2">
                                        The Surface is Just the Beginning. See What Lies Beneath.
                                    </p>
                                </div>
                            </Link>

                            {/* Piranha Scout */}
                            <Link to="/maritime/piranha" className="group relative bg-zinc-900 border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-300 min-h-[500px] flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                                <div className="absolute inset-0 bg-[url('/images/fleets/piranha/piranha-1.png')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
                                <div className="relative z-20 p-8 mt-auto">
                                    <div className="inline-block px-3 py-1 mb-4 border border-white/20 rounded-full bg-black/50 backdrop-blur-sm text-xs font-mono tracking-wider text-blue-400">
                                        ULTRA-PORTABLE USV
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">The Piranha Scout</h3>
                                    <p className="text-gray-300 font-light line-clamp-2">
                                        Small. Agile. Voracious for Data.
                                    </p>
                                </div>
                            </Link>

                            {/* Mantis X6 ROV */}
                            <Link to="/maritime/mantis" className="group relative bg-zinc-900 border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-300 min-h-[500px] flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                                <div className="absolute inset-0 bg-[url('/images/fleets/mantis/mantis-1.png')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
                                <div className="relative z-20 p-8 mt-auto">
                                    <div className="inline-block px-3 py-1 mb-4 border border-white/20 rounded-full bg-black/50 backdrop-blur-sm text-xs font-mono tracking-wider text-blue-400">
                                        DEEP-SEA ROV
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">The Mantis X6</h3>
                                    <p className="text-gray-300 font-light line-clamp-2">
                                        Pressure is Irrelevant. Descend. Inspect. Recover.
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
                            <h2 className="text-3xl font-medium mb-6">Marine Capabilities</h2>
                            <p className="text-gray-400 font-light max-w-2xl mx-auto">
                                Securing the maritime domain through autonomous innovation.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="card group">
                                <Eye className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                                <h3 className="text-xl font-medium mb-4">Persistent ISR</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm">
                                    Long-endurance surveillance of coastal and blue-water environments.
                                </p>
                            </div>
                            <div className="card group">
                                <Activity className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                                <h3 className="text-xl font-medium mb-4">Precision Hydrography</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm">
                                    Ultra-shallow to deep-sea mapping capabilities using multi-beam echo sounders.
                                </p>
                            </div>
                            <div className="card group">
                                <Anchor className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                                <h3 className="text-xl font-medium mb-4">Subsea Intervention</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm">
                                    Dexterous manipulation and recovery operations at depth with the Mantis ROV.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 bg-black text-white border-t border-white/10">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
                            Autonomy at Sea
                        </h2>
                        <p className="text-xl mb-12 leading-relaxed text-gray-400 font-light max-w-2xl mx-auto">
                            Contact our maritime division for capability demonstrations.
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

export default MaritimePage
