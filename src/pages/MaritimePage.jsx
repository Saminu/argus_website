import { Link } from 'react-router-dom'
import { Waves, Radio, Navigation, Shield, Eye, Anchor, Activity } from 'lucide-react'
import SEO from '../components/SEO'

const MaritimePage = () => {
    return (
        <>
            <SEO
                title="ARGUS Maritime Systems - Triton USV"
                description="Autonomous maritime systems for defense. Triton USV provides littoral surveillance, mine countermeasures, and autonomous naval operations."
                keywords="USV, unmanned surface vehicle, naval drones, maritime security, autonomous boats"
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
                                Deploying neural networks at the edge to secure sovereign waters. From autonomous surface vessels to deep-sea monitoring, ensuring continuous situational awareness.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Product: Triton USV */}
                <section className="py-32 border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-24 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">Triton USV</h2>
                                <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                                    Autonomous surface vessel for littoral surveillance and mine countermeasures. Modular payload bay allows for rapid reconfiguration between ISR and kinetic missions.
                                </p>

                                <div className="space-y-8 font-mono text-sm">
                                    <div className="flex justify-between border-b border-white/10 pb-4">
                                        <span className="text-gray-500">AUTONOMY</span>
                                        <span>LEVEL 4</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-4">
                                        <span className="text-gray-500">SPEED</span>
                                        <span>45 KNOTS</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-4">
                                        <span className="text-gray-500">SIGNATURE</span>
                                        <span>LOW RCS / ACOUSTIC</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-4">
                                        <span className="text-gray-500">OPERATIONS</span>
                                        <span>SEA STATE 5</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-full min-h-[500px] bg-gray-900 border border-white/10 flex items-center justify-center overflow-hidden">
                                {/* Abstract USV Visualization */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-black to-black"></div>
                                <div className="relative z-10">
                                    <Waves className="h-48 w-48 text-white opacity-90" strokeWidth={0.5} />
                                </div>
                                <div className="absolute bottom-8 left-8 text-xs font-mono text-white tracking-widest">
                                    VESSEL: TRITON-X<br />
                                    SONAR: ACTIVE
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Capabilities Grid */}
                <section className="py-32 bg-off-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-24">
                            <h2 className="text-3xl font-medium mb-6">Naval Capabilities</h2>
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
                                <h3 className="text-xl font-medium mb-4">Acoustic Monitoring</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm">
                                    Advanced sonar arrays for submarine detection and tracking.
                                </p>
                            </div>
                            <div className="card group">
                                <Anchor className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                                <h3 className="text-xl font-medium mb-4">Mine Countermeasures</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm">
                                    Autonomous detection and neutralization of naval mines.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 bg-black text-white border-t border-white/10">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
                            Secure the Seas
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
