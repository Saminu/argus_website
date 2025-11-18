import { Link } from 'react-router-dom'
import { Plane, Radio, Camera, MapPin, Battery, Wifi, Shield, Zap, Navigation, ArrowRight, Waves, Eye } from 'lucide-react'
import SEO from '../components/SEO'

const DronePage = () => {
  return (
    <>
      <SEO 
        title="ARGUS Drones & USV Rover - Autonomous Aerial & Marine Vehicles"
        description="Discover ARGUS autonomous drones and USV Argus Rover. Advanced aerial and marine vehicles with real-time glass synchronization, autonomous navigation, and comprehensive visual intelligence."
        keywords="ARGUS drones, autonomous drones, USV Argus Rover, unmanned surface vehicle, aerial inspection, marine drones, autonomous vehicles, drone network, visual intelligence"
        image="https://argus.global/images/argus-logo-updated.png"
        url="https://argus.global/drones"
      />
      <div style={{ backgroundColor: 'var(--concrete-light)' }}>
        {/* Hero Section */}
        <section className="hero-gradient text-pure-white py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--carbon-black) 0%, var(--graphite-gray) 100%)', color: 'var(--pure-white)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block mb-6 px-6 py-2 rounded-sm" style={{ backgroundColor: 'var(--graphite-gray)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <span className="text-sm font-bold tracking-wide">AUTONOMOUS AERIAL & MARINE VEHICLES</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                ARGUS Drones &<br />USV Rover
              </h1>
              <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
                Autonomous drones and unmanned surface vehicles that seamlessly integrate with Argus Smart Glasses, extending your operational capabilities beyond human reach.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/company" className="btn-primary">
                  <span>Request a Demo</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/products" className="btn-secondary">
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ARGUS Drone Section */}
        <section className="py-24 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block mb-4 px-4 py-1 rounded-sm" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)', border: '1px solid rgba(60, 90, 255, 0.3)' }}>
                  <span className="text-sm font-semibold" style={{ color: 'var(--steel-blue)' }}>AUTONOMOUS AERIAL VEHICLE</span>
                </div>
                <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>ARGUS Autonomous Drone</h2>
                <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
                  Advanced quadcopter drones equipped with gimbal-stabilized cameras, autonomous docking stations, and seamless integration with Argus Smart Glasses. Built for industrial inspections, surveillance, and extended operational missions.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                      <Camera className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                    </div>
                    <span style={{ color: 'var(--graphite-gray)' }}>Gimbal-Stabilized E07IR Camera</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                      <Navigation className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                    </div>
                    <span style={{ color: 'var(--graphite-gray)' }}>Autonomous Navigation & Docking</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                      <Wifi className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                    </div>
                    <span style={{ color: 'var(--graphite-gray)' }}>Real-time Glass Synchronization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                      <Battery className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                    </div>
                    <span style={{ color: 'var(--graphite-gray)' }}>Extended Flight Time (45+ minutes)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                      <Shield className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                    </div>
                    <span style={{ color: 'var(--graphite-gray)' }}>Rugged Industrial Design</span>
                  </div>
                </div>
                <Link to="/company" className="btn-primary">
                  View Specifications
                </Link>
              </div>
              <div className="relative flex justify-center items-center">
                <div className="p-8 rounded-sm w-full max-w-md" style={{ backgroundColor: 'var(--graphite-gray)', border: '1px solid #2A2E34' }}>
                  <div className="flex items-center justify-center h-64 text-6xl" style={{ color: 'var(--steel-blue)' }}>
                    <Plane className="float-animation" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USV Argus Rover Section */}
        <section className="py-24 bg-dark text-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative flex justify-center items-center order-2 md:order-1">
                <div className="p-8 rounded-sm w-full max-w-md" style={{ backgroundColor: 'var(--graphite-gray)', border: '1px solid #2A2E34' }}>
                  <div className="flex items-center justify-center h-64 text-6xl" style={{ color: 'var(--steel-blue)' }}>
                    <Waves className="float-animation" />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block mb-4 px-4 py-1 rounded-sm" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)', border: '1px solid rgba(60, 90, 255, 0.3)' }}>
                  <span className="text-sm font-semibold" style={{ color: 'var(--steel-blue)' }}>UNMANNED SURFACE VEHICLE</span>
                </div>
                <h2 className="text-5xl font-bold mb-6">ARGUS AQUA ROVER</h2>
                <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
                  Autonomous unmanned surface vehicle designed for marine operations, waterway monitoring, and aquatic inspections. The Argus Aqua Rover extends visual intelligence capabilities to marine environments with seamless integration into the Argus ecosystem.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                      <Camera className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                    </div>
                    <span style={{ color: 'var(--concrete-light)' }}>Forward-Facing Camera & Sensors</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                      <Radio className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                    </div>
                    <span style={{ color: 'var(--concrete-light)' }}>GPS & Communication Antennas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                      <Wifi className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                    </div>
                    <span style={{ color: 'var(--concrete-light)' }}>Real-time Data Streaming</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                      <Navigation className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                    </div>
                    <span style={{ color: 'var(--concrete-light)' }}>Autonomous Navigation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                      <Shield className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                    </div>
                    <span style={{ color: 'var(--concrete-light)' }}>Waterproof & Marine-Grade</span>
                  </div>
                </div>
                <Link to="/company" className="btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-24 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>Technical Specifications</h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
                Built for reliability, performance, and seamless integration with the Argus ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Drone Specifications */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Plane className="h-6 w-6" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-pure-white">ARGUS Drone</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--steel-blue)' }}>CAMERA SYSTEM</p>
                    <p className="text-concrete-light">Gimbal-stabilized E07IR camera with forward-facing sensors</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--steel-blue)' }}>FLIGHT TIME</p>
                    <p className="text-concrete-light">45+ minutes per battery cycle</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--steel-blue)' }}>AUTONOMOUS DOCKING</p>
                    <p className="text-concrete-light">Self-charging docking station with protective dome</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--steel-blue)' }}>CONNECTIVITY</p>
                    <p className="text-concrete-light">Real-time mesh networking with Argus Smart Glasses</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--steel-blue)' }}>NAVIGATION</p>
                    <p className="text-concrete-light">GPS, IMU, and obstacle avoidance sensors</p>
                  </div>
                </div>
              </div>

              {/* USV Specifications */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Waves className="h-6 w-6" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-pure-white">ARGUS AQUA ROVER</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--steel-blue)' }}>CAMERA SYSTEM</p>
                    <p className="text-concrete-light">Forward-facing camera with multiple sensor arrays</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--steel-blue)' }}>OPERATIONAL TIME</p>
                    <p className="text-concrete-light">Extended mission duration with efficient power management</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--steel-blue)' }}>WATERPROOF RATING</p>
                    <p className="text-concrete-light">IP67 marine-grade construction</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--steel-blue)' }}>COMMUNICATION</p>
                    <p className="text-concrete-light">GPS antenna, communication arrays, and real-time streaming</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--steel-blue)' }}>NAVIGATION</p>
                    <p className="text-concrete-light">Autonomous waypoint navigation and obstacle detection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Features */}
        <section className="py-24 bg-dark text-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">Seamless Ecosystem Integration</h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
                Drones and USV Rover work together with Argus Smart Glasses to create a comprehensive visual intelligence network.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Eye className="h-6 w-6" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-pure-white">Shared Vision</h3>
                </div>
                <p className="text-concrete-light leading-relaxed">
                  Workers access drone and USV camera feeds directly through their smart glasses, expanding visual field beyond physical limitations.
                </p>
              </div>
              
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Radio className="h-6 w-6" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-pure-white">Mesh Networking</h3>
                </div>
                <p className="text-concrete-light leading-relaxed">
                  Drones, USV, and glasses form a self-healing mesh network, ensuring continuous connectivity even in challenging environments.
                </p>
              </div>
              
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Zap className="h-6 w-6" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-pure-white">Distributed AI</h3>
                </div>
                <p className="text-concrete-light leading-relaxed">
                  AI processing distributed across the network, with drones, USV, and glasses collaborating to analyze complex scenarios in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-light text-carbon-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>Key Applications</h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
                Drones and USV Rover enable a wide range of industrial and enterprise applications.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <h3 className="text-2xl font-bold text-pure-white mb-4">Aerial Inspection & Monitoring</h3>
                <p className="text-concrete-light leading-relaxed">
                  Deploy drones for hard-to-reach inspections while workers view real-time footage through their glasses, enabling collaborative assessment of infrastructure, equipment, and facilities.
                </p>
              </div>
              <div className="card">
                <h3 className="text-2xl font-bold text-pure-white mb-4">Marine & Waterway Monitoring</h3>
                <p className="text-concrete-light leading-relaxed">
                  USV Aqua Rover provides autonomous waterway surveillance, environmental monitoring, and aquatic infrastructure inspection with real-time data streaming.
                </p>
              </div>
              <div className="card">
                <h3 className="text-2xl font-bold text-pure-white mb-4">Perimeter Security & Surveillance</h3>
                <p className="text-concrete-light leading-relaxed">
                  Autonomous drone patrols integrated with security personnel wearing smart glasses for comprehensive site monitoring and threat detection.
                </p>
              </div>
              <div className="card">
                <h3 className="text-2xl font-bold text-pure-white mb-4">Emergency Response Coordination</h3>
                <p className="text-concrete-light leading-relaxed">
                  First responders coordinate with aerial drones and marine USV for situational awareness, search and rescue operations, and real-time incident assessment.
                </p>
              </div>
              <div className="card">
                <h3 className="text-2xl font-bold text-pure-white mb-4">Industrial Asset Management</h3>
                <p className="text-concrete-light leading-relaxed">
                  Regular automated inspections of industrial facilities, pipelines, and infrastructure with drones providing comprehensive visual documentation.
                </p>
              </div>
              <div className="card">
                <h3 className="text-2xl font-bold text-pure-white mb-4">Environmental Monitoring</h3>
                <p className="text-concrete-light leading-relaxed">
                  Continuous monitoring of environmental conditions, wildlife, and ecosystems using both aerial and marine autonomous vehicles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-dark text-pure-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Extend Your Operational Reach?
            </h2>
            <p className="text-xl mb-10 leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Discover how ARGUS Drones and USV Rover can transform your operations with autonomous visual intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/company" className="btn-primary">
                Request a Demo
              </Link>
              <Link to="/products" className="btn-secondary">
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default DronePage

