import { Link } from 'react-router-dom'
import { Plane, Wifi, Battery, Shield, Crosshair, Target, Zap } from 'lucide-react'
import SEO from '../components/SEO'

const AerialPage = () => {
    return (
        <>
            <SEO
                title="ARGUS Aerial Systems - Ghost-V4 UAS"
                description="Autonomous aerial systems for defense. Ghost-V4 UAS provides deep sensing, electronic warfare capabilities, and autonomous swarming."
                keywords="autonomous drones, UAS, UAV, defense drones, swarming drones, electronic warfare"
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

                {/* Main Product: Ghost-V4 */}
                <section className="py-32 border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-24 items-center">
                            <div className="relative h-full min-h-[500px] bg-gray-900 border border-white/10 flex items-center justify-center overflow-hidden">
                                {/* Abstract Drone Visualization */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-black to-black"></div>
                                <div className="relative z-10">
                                    <Plane className="h-48 w-48 text-white opacity-90" strokeWidth={0.5} />
                                </div>
                                <div className="absolute top-8 right-8 text-xs font-mono text-white tracking-widest text-right">
                                    MODEL: GHOST-V4<br />
                                    STATUS: COMBAT_READY
                                </div>
                            </div>

                            <div>
                                <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">Ghost-V4 UAS</h2>
                                <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                                    A low-observable, long-endurance unmanned aerial system designed for deep sensing and electronic warfare. Capable of autonomous swarming and collaborative engagement.
                                </p>

                                <div className="space-y-8 font-mono text-sm">
                                    <div className="flex justify-between border-b border-white/10 pb-4">
                                        <span className="text-gray-500">ENDURANCE</span>
                                        <span>12+ HOURS</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-4">
                                        <span className="text-gray-500">RANGE</span>
                                        <span>150 KM</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-4">
                                        <span className="text-gray-500">PAYLOAD</span>
                                        <span>EO/IR + EW SUITE</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-4">
                                        <span className="text-gray-500">COMMS</span>
                                        <span>SATCOM / MESH / SILENT</span>
                                    </div>
                                </div>
                            </div>
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
