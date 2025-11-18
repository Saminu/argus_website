import { Link } from 'react-router-dom'
import { Cpu, Shield, Zap, Server, Eye, Activity, Box, Lock, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

const ProductsPage = () => {
  return (
    <>
      <SEO
        title="ARGUS Hardware - AI-Enabled Edge Systems"
        description="Ruggedized AI compute modules and sensor fusion nodes for the tactical edge. High-performance hardware built for contested environments."
        keywords="defense hardware, edge AI, ruggedized compute, sensor fusion, tactical edge, embedded systems"
        image="https://argus.global/images/argus-logo-updated.png"
        url="https://argus.global/products"
      />
      <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">

        {/* Hero Section */}
        <section className="hero-minimal relative pt-32 pb-20 overflow-hidden border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-medium mb-8 tracking-tighter leading-tight">
                AI-Enabled<br />
                <span className="text-gray-500">Hardware.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed text-gray-400 font-light">
                High-performance compute modules and ruggedized sensor fusion nodes. We build the physical infrastructure that powers artificial intelligence at the tactical edge.
              </p>
            </div>
          </div>
        </section>

        {/* Edge Compute Modules */}
        <section className="py-32 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div>
                <div className="inline-block mb-6 px-3 py-1 border border-white text-white text-xs font-mono tracking-widest uppercase">
                  Compute Infrastructure
                </div>
                <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">Argus Core-X1</h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                  A ruggedized AI inference module designed for the tactical edge. Delivers server-grade processing power in a SWaP-optimized form factor, capable of running complex neural networks locally.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <Cpu className="h-6 w-6 text-white mt-1 mr-4" strokeWidth={1} />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">100 TOPS Performance</h3>
                      <p className="text-gray-500 font-light">High-throughput inference for real-time computer vision and signal processing.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-white mt-1 mr-4" strokeWidth={1} />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">IP67 Ruggedization</h3>
                      <p className="text-gray-500 font-light">Fully sealed, fanless chassis designed to withstand dust, water, and shock.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="h-6 w-6 text-white mt-1 mr-4" strokeWidth={1} />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Low Latency I/O</h3>
                      <p className="text-gray-500 font-light">Direct sensor interfacing via GMSL2 and 10GbE for minimal processing delay.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-full min-h-[500px] bg-gray-900 border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Abstract Hardware Visualization */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-black to-black"></div>
                <div className="relative z-10 w-64 h-64 border border-white/20 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center">
                  <div className="w-48 h-48 border border-white/10 grid grid-cols-4 gap-2 p-2">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className={`bg-white/10 ${i % 3 === 0 ? 'animate-pulse' : ''}`}></div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 text-xs font-mono text-white tracking-widest text-right">
                  UNIT: CORE-X1<br />
                  TEMP: 42°C<br />
                  LOAD: 85%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sensor Fusion Systems */}
        <section className="py-32 border-b border-white/10 bg-off-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div className="order-2 md:order-1 relative h-full min-h-[500px] bg-black border border-white/10 flex items-center justify-center">
                <div className="relative z-10">
                  <Eye className="h-32 w-32 text-white opacity-80" strokeWidth={0.5} />
                </div>
                <div className="absolute top-8 left-8 text-xs font-mono text-white tracking-widest">
                  SENSOR_ARRAY: ACTIVE<br />
                  MODE: MULTI-SPECTRAL
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-block mb-6 px-3 py-1 border border-white text-white text-xs font-mono tracking-widest uppercase">
                  Sensing
                </div>
                <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">Omni-Vision Node</h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                  Integrated multi-spectral sensor nodes with on-board processing. Combining EO/IR, LiDAR, and acoustic sensors to create a comprehensive real-time picture of the battlespace.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <Activity className="h-6 w-6 text-white mt-1 mr-4" strokeWidth={1} />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Sensor Fusion</h3>
                      <p className="text-gray-500 font-light">Hardware-accelerated fusion of thermal and visual data streams.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Box className="h-6 w-6 text-white mt-1 mr-4" strokeWidth={1} />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Modular Payload</h3>
                      <p className="text-gray-500 font-light">Hot-swappable sensor modules for rapid mission reconfiguration.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Lock className="h-6 w-6 text-white mt-1 mr-4" strokeWidth={1} />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Anti-Tamper</h3>
                      <p className="text-gray-500 font-light">Physical and cryptographic security mechanisms to protect sensitive data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hardware Specs Grid */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-3xl font-medium mb-6">Hardware Specifications</h2>
              <p className="text-gray-400 font-light max-w-2xl mx-auto">
                Built to military standards for reliability and performance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="card group">
                <Server className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                <h3 className="text-xl font-medium mb-4">Edge Processing</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  NVIDIA Jetson Orin™ based architecture for maximum AI throughput per watt.
                </p>
              </div>
              <div className="card group">
                <Shield className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                <h3 className="text-xl font-medium mb-4">Environmental</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  MIL-STD-810G certified for shock, vibration, and temperature extremes (-40°C to +85°C).
                </p>
              </div>
              <div className="card group">
                <Zap className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                <h3 className="text-xl font-medium mb-4">Power Management</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  Wide-range DC input (9-36V) with integrated battery backup and power conditioning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-off-black text-white border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
              Equip Your Force
            </h2>
            <p className="text-xl mb-12 leading-relaxed text-gray-400 font-light max-w-2xl mx-auto">
              Contact our hardware engineering team for datasheets and integration guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/company" className="btn-primary">
                Request Specs
              </Link>
              <Link to="/aerial" className="btn-secondary">
                View Aerial Systems
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductsPage

