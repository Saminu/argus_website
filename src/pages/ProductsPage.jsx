import { Link } from 'react-router-dom'
import { Eye, Cpu, Network, Zap, Settings, Shield, ArrowRight, Plane, Wifi, MapPin, Battery, Camera, Radio } from 'lucide-react'
import SEO from '../components/SEO'

const ProductsPage = () => {
  return (
    <>
      <SEO 
        title="ARGUS Products - Smart Glasses, Drone Network & Visual Intelligence Platform"
        description="Discover ARGUS Smart Glasses, Drone Network, and Visual Intelligence Platform. Connected open-source hardware and software solutions for frontline workers in automotive, healthcare, manufacturing, and more."
        keywords="ARGUS smart glasses, drone network, visual intelligence platform, AR hardware, connected drones, open source glasses, frontline technology, ARGUS products, aerial inspection, mesh networking"
        image="https://argus.global/images/argus-glasses-black.png"
        url="https://argus.global/products"
      />
      <div style={{ backgroundColor: 'var(--concrete-light)' }}>
      {/* Hero Section */}
      <section className="hero-gradient text-pure-white py-32" style={{ background: 'linear-gradient(135deg, var(--carbon-black) 0%, var(--graphite-gray) 100%)', color: 'var(--pure-white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Our Products
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Discover Argus Smart Glasses, Drone Network, and the Visual Intelligence Platform – connected open-source solutions for enhanced productivity and safety.
            </p>
            <Link to="/company" className="btn-primary">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Argus Smart Glasses */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 rounded-sm" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)', border: '1px solid rgba(60, 90, 255, 0.3)' }}>
                <span className="text-sm font-semibold" style={{ color: 'var(--steel-blue)' }}>HARDWARE</span>
              </div>
              <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>Argus Smart Glasses</h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
                Purpose-built for frontline workers. Hands-free operation, open hardware, and community-built applications. Complete control over your data and freedom to build custom solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Eye className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <span style={{ color: 'var(--graphite-gray)' }}>HD AR Optical Display</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Cpu className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <span style={{ color: 'var(--graphite-gray)' }}>On-Device AI Processing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Network className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <span style={{ color: 'var(--graphite-gray)' }}>Open APIs & Protocols</span>
                </div>
              </div>
              <Link to="#" className="btn-primary">
                View Specifications
              </Link>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="p-8 rounded-sm w-full max-w-md" style={{ backgroundColor: 'var(--graphite-gray)', border: '1px solid #2A2E34' }}>
                <img src="/images/argus-glasses-black.png" alt="Argus Smart Glasses" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Argus Visual Intelligence Platform */}
      <section className="py-24 bg-dark text-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center items-center order-2 md:order-1">
              <div className="p-8 rounded-sm w-full max-w-md" style={{ backgroundColor: 'var(--graphite-gray)', border: '1px solid #2A2E34' }}>
                <img src="/images/argus-glasses-outline.png" alt="Argus Visual Intelligence Platform" className="w-full h-auto object-contain" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-4 py-1 rounded-sm" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)', border: '1px solid rgba(60, 90, 255, 0.3)' }}>
                <span className="text-sm font-semibold" style={{ color: 'var(--steel-blue)' }}>SOFTWARE & PLATFORM</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">Visual Intelligence Platform</h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
                The backbone of the Argus ecosystem. A robust, open-source platform for managing devices, data, and applications. Built for scalability and security.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Zap className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <span style={{ color: 'var(--concrete-light)' }}>Real-time Data Processing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Settings className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <span style={{ color: 'var(--concrete-light)' }}>Customizable Dashboards</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Shield className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <span style={{ color: 'var(--concrete-light)' }}>Enterprise-Grade Security</span>
                </div>
              </div>
              <Link to="#" className="btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Argus Drone Network */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 rounded-sm" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)', border: '1px solid rgba(60, 90, 255, 0.3)' }}>
                <span className="text-sm font-semibold" style={{ color: 'var(--steel-blue)' }}>CONNECTED HARDWARE</span>
              </div>
              <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>Argus Drone Network</h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
                Autonomous drones that seamlessly integrate with Argus Smart Glasses to create a comprehensive visual intelligence network. Extend your field of view and operational capabilities beyond human reach.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Wifi className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <span style={{ color: 'var(--graphite-gray)' }}>Real-time Glass Synchronization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Camera className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <span style={{ color: 'var(--graphite-gray)' }}>4K Visual Data Streaming</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <MapPin className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <span style={{ color: 'var(--graphite-gray)' }}>Autonomous Navigation & Mapping</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                    <Battery className="h-4 w-4" style={{ color: 'var(--steel-blue)' }} />
                  </div>
                  <span style={{ color: 'var(--graphite-gray)' }}>Extended Flight Time (45+ mins)</span>
                </div>
              </div>
              <Link to="#" className="btn-primary">
                View Drone Specs
              </Link>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="p-8 rounded-sm w-full max-w-md" style={{ backgroundColor: 'var(--graphite-gray)', border: '1px solid #2A2E34' }}>
                <div className="flex items-center justify-center h-64 text-6xl" style={{ color: 'var(--steel-blue)' }}>
                  <Plane />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Integration */}
      <section className="py-24 bg-dark text-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Connected Intelligence Network</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Experience the power of synchronized visual intelligence across glasses and drones, creating an unprecedented operational awareness ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                  <Radio className="h-6 w-6" style={{ color: 'var(--steel-blue)' }} />
                </div>
                <h3 className="text-2xl font-bold text-pure-white">Mesh Networking</h3>
              </div>
              <p className="text-concrete-light leading-relaxed">
                Drones and glasses form a self-healing mesh network, ensuring continuous connectivity even in challenging environments.
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                  <Eye className="h-6 w-6" style={{ color: 'var(--steel-blue)' }} />
                </div>
                <h3 className="text-2xl font-bold text-pure-white">Shared Vision</h3>
              </div>
              <p className="text-concrete-light leading-relaxed">
                Workers can access drone camera feeds directly through their smart glasses, expanding their visual field beyond physical limitations.
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-sm flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(60, 90, 255, 0.2)' }}>
                  <Cpu className="h-6 w-6" style={{ color: 'var(--steel-blue)' }} />
                </div>
                <h3 className="text-2xl font-bold text-pure-white">Distributed AI</h3>
              </div>
              <p className="text-concrete-light leading-relaxed">
                AI processing is distributed across the network, with drones and glasses collaborating to analyze complex scenarios in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-light text-carbon-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>Key Use Cases</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
              Argus products are designed to enhance a wide range of industrial and enterprise applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Remote Assistance</h3>
              <p className="text-concrete-light leading-relaxed">
                Connect frontline workers with remote experts for real-time guidance and support, reducing downtime and improving problem resolution.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Training & Onboarding</h3>
              <p className="text-concrete-light leading-relaxed">
                Provide immersive, hands-on training experiences with AR overlays and interactive guides for new and existing employees.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Quality Control</h3>
              <p className="text-concrete-light leading-relaxed">
                Automate inspection processes and ensure compliance with visual checks and data capture, minimizing errors and improving product quality.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Logistics & Inventory</h3>
              <p className="text-concrete-light leading-relaxed">
                Optimize warehousing and supply chain operations with visual picking, real-time inventory updates, and navigation.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Safety & Compliance</h3>
              <p className="text-concrete-light leading-relaxed">
                Enhance worker safety in hazardous environments with hands-free access to safety protocols and real-time alerts.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Data Capture & Analytics</h3>
              <p className="text-concrete-light leading-relaxed">
                Collect rich visual data from the field, process it with on-device AI, and gain actionable insights through customizable dashboards.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Aerial Inspection & Monitoring</h3>
              <p className="text-concrete-light leading-relaxed">
                Deploy drones for hard-to-reach inspections while workers view real-time footage through their glasses, enabling collaborative assessment.
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
                First responders coordinate with aerial drones for situational awareness, search and rescue operations, and real-time incident assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Experience Argus?
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
            Explore our products and see how they can transform your operations.
          </p>
          <Link to="/company" className="btn-primary">
            Contact Sales
          </Link>
        </div>
      </section>
      </div>
    </>
  )
}

export default ProductsPage

