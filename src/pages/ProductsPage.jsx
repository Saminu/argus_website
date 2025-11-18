import { Link } from 'react-router-dom'
import { Eye, Cpu, Network, Zap, Settings, Shield, ArrowRight, Plane, Wifi, MapPin, Battery, Camera, Radio, Lock, Server } from 'lucide-react'
import SEO from '../components/SEO'

const ProductsPage = () => {
  return (
    <>
      <SEO
        title="ARGUS Capabilities - Precision Mass & Software-Defined Defense"
        description="Our capabilities in AI-enabled precision mass and software-defined defense. Edge intelligence, autonomous swarms, and sovereign cloud infrastructure."
        keywords="precision mass, defense AI, edge computing, autonomous swarms, sovereign cloud, defense software"
        image="https://argus.global/images/argus-logo-updated.png"
        url="https://argus.global/products"
      />
      <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">

        {/* Hero Section */}
        <section className="hero-minimal relative pt-32 pb-20 overflow-hidden border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-medium mb-8 tracking-tighter leading-tight">
                Software-Defined<br />
                <span className="text-gray-500">Defense.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed text-gray-400 font-light">
                We build the operating system for the modern battlefield. Integrating sensors, effectors, and intelligence into a unified, autonomous network.
              </p>
            </div>
          </div>
        </section>

        {/* Edge Intelligence */}
        <section className="py-32 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-24 items-start">
              <div>
                <div className="inline-block mb-6 px-3 py-1 border border-white text-white text-xs font-mono tracking-widest uppercase">
                  Core Capability
                </div>
                <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">Edge Intelligence</h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                  Processing critical data where it matters most: at the edge. Our AI models run locally on low-power devices, ensuring operational continuity in disconnected environments.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <Cpu className="h-6 w-6 text-white mt-1 mr-4" strokeWidth={1} />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">On-Device Inference</h3>
                      <p className="text-gray-500 font-light">Real-time object detection and threat analysis without cloud dependency.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-white mt-1 mr-4" strokeWidth={1} />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Anti-Jamming Navigation</h3>
                      <p className="text-gray-500 font-light">Visual odometry and terrain matching for GPS-denied operations.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Network className="h-6 w-6 text-white mt-1 mr-4" strokeWidth={1} />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Swarm Coordination</h3>
                      <p className="text-gray-500 font-light">Distributed decision-making across autonomous assets.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-full min-h-[500px] bg-gray-900 border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Abstract Visualization */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-black to-black"></div>
                <div className="relative z-10 grid grid-cols-3 gap-4 opacity-50">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-16 h-16 border border-white/20"></div>
                  ))}
                </div>
                <div className="absolute z-20 text-xs font-mono text-white tracking-widest">
                  NEURAL_ENGINE_V4 // ACTIVE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sovereign Cloud */}
        <section className="py-32 border-b border-white/10 bg-off-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div className="order-2 md:order-1 relative h-full min-h-[500px] bg-black border border-white/10 flex items-center justify-center">
                <div className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 border border-white/40 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-block mb-6 px-3 py-1 border border-white text-white text-xs font-mono tracking-widest uppercase">
                  Infrastructure
                </div>
                <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">Sovereign Cloud</h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                  Data sovereignty is national security. We provide deployable cloud infrastructure that ensures your data remains under your control, air-gapped or connected.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <Lock className="h-6 w-6 text-white mt-1 mr-4" strokeWidth={1} />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Zero Trust Architecture</h3>
                      <p className="text-gray-500 font-light">Identity-based access control and end-to-end encryption.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Server className="h-6 w-6 text-white mt-1 mr-4" strokeWidth={1} />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Deployable Nodes</h3>
                      <p className="text-gray-500 font-light">Ruggedized server nodes for forward operating bases.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
              Deploy the Future
            </h2>
            <p className="text-xl mb-12 leading-relaxed text-gray-400 font-light max-w-2xl mx-auto">
              Our systems are ready for integration. Contact our engineering team to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/company" className="btn-primary">
                Contact Engineering
              </Link>
              <Link to="/drones" className="btn-secondary">
                View Autonomous Assets
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductsPage

