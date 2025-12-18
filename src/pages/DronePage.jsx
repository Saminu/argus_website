import { Link } from 'react-router-dom'
import { Plane, Radio, Camera, MapPin, Battery, Wifi, Shield, Zap, Navigation, ArrowRight, Waves, Eye, Crosshair, Target } from 'lucide-react'
import SEO from '../components/SEO'

const DronePage = () => {
  return (
    <>
      <SEO
        title="ARGUS Autonomous Assets - Air & Sea"
        description="Autonomous aerial and marine systems for industry and security. AI-enabled drones and USVs for persistent surveillance and critical operations."
        keywords="autonomous drones, industrial drones, USV, unmanned surface vehicle, remote monitoring, aerial surveillance"
        image="https://argus.global/images/argus-logo-updated.png"
        url="https://argus.global/drones"
      />
      <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">

        {/* Hero Section */}
        <section className="hero-minimal relative pt-32 pb-20 overflow-hidden border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-medium mb-8 tracking-tighter leading-tight">
                Autonomous<br />
                <span className="text-gray-500">Assets.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed text-gray-400 font-light">
                Unmanned systems for multi-domain operations. From high-altitude surveillance to maritime interdiction, our assets operate autonomously in contested environments.
              </p>
            </div>
          </div>
        </section>

        {/* Aerial Systems */}
        <section className="py-32 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div>
                <div className="inline-block mb-6 px-3 py-1 border border-white text-white text-xs font-mono tracking-widest uppercase">
                  Air Domain
                </div>
                <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">Ghost-V4 UAS</h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                  A low-observable, long-endurance unmanned aerial system designed for deep sensing and signal resilience. Capable of autonomous swarming and collaborative engagement.
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

              <div className="relative h-full min-h-[500px] bg-gray-900 border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Abstract Drone Visualization */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-black to-black"></div>
                <div className="relative z-10">
                  <Plane className="h-32 w-32 text-white opacity-80" strokeWidth={0.5} />
                </div>
                <div className="absolute bottom-8 left-8 text-xs font-mono text-white tracking-widest">
                  SYSTEM_STATUS: ONLINE<br />
                  ALT: 15000 FT<br />
                  SPD: 120 KTS
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maritime Systems */}
        <section className="py-32 border-b border-white/10 bg-off-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div className="order-2 md:order-1 relative h-full min-h-[500px] bg-black border border-white/10 flex items-center justify-center">
                <div className="relative z-10">
                  <Waves className="h-32 w-32 text-white opacity-80" strokeWidth={0.5} />
                </div>
                <div className="absolute bottom-8 right-8 text-xs font-mono text-white tracking-widest text-right">
                  VESSEL_ID: USV-X1<br />
                  DEPTH: SURFACE<br />
                  MODE: AUTONOMOUS
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-block mb-6 px-3 py-1 border border-white text-white text-xs font-mono tracking-widest uppercase">
                  Maritime Domain
                </div>
                <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">Triton USV</h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                  Autonomous surface vessel for littoral surveillance and infrastructure inspection. Modular payload bay allows for rapid reconfiguration between ISR and advanced missions.
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
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-3xl font-medium mb-6">Operational Advantages</h2>
              <p className="text-gray-400 font-light max-w-2xl mx-auto">
                Our autonomous systems are designed to operate as a cohesive force multiplier.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="card group">
                <Crosshair className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                <h3 className="text-xl font-medium mb-4">Precision Targeting</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  AI-assisted target recognition reduces operational risks and ensures mission success in cluttered environments.
                </p>
              </div>
              <div className="card group">
                <Target className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                <h3 className="text-xl font-medium mb-4">Swarm Intelligence</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  Assets communicate and coordinate tactics in real-time, maximizing operational coverage through synchronized action.
                </p>
              </div>
              <div className="card group">
                <Shield className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                <h3 className="text-xl font-medium mb-4">Resilient Comms</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  Advanced waveforms and optical links maintain connectivity in high-interference environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-off-black text-white border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
              Secure the Advantage
            </h2>
            <p className="text-xl mb-12 leading-relaxed text-gray-400 font-light max-w-2xl mx-auto">
              Contact our robotics solutions team for detailed technical specifications and capability demonstrations.
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

export default DronePage

