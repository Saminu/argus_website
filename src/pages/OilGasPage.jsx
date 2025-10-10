import { Link } from 'react-router-dom'
import { FlaskConical, HardHat, Shield, Cloud, ArrowRight } from 'lucide-react'

const OilGasPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--concrete-light)' }}>
      {/* Hero Section */}
      <section className="hero-gradient text-pure-white py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--carbon-black) 0%, var(--graphite-gray) 100%)', color: 'var(--pure-white)' }}>
        <img src="/images/oilgas-banner.jpg" alt="Oil & Gas Industry Banner" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Oil & Gas Solutions
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Enhancing safety, efficiency, and compliance in hazardous oil and gas environments with hands-free visual intelligence.
            </p>
            <Link to="/company" className="btn-primary">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>Navigating Oil & Gas Complexities</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
              The oil and gas sector faces unique challenges, from extreme conditions to stringent safety regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Hazardous Environments</h3>
              <p className="text-concrete-light leading-relaxed">
                Working in volatile and remote locations demands robust, reliable, and safe equipment.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Regulatory Compliance</h3>
              <p className="text-concrete-light leading-relaxed">
                Adhering to strict safety and environmental regulations is paramount and complex.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Remote Operations</h3>
              <p className="text-concrete-light leading-relaxed">
                Managing and maintaining assets across vast, often inaccessible, areas is a logistical challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-graphite text-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Argus Solutions for Oil & Gas</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Our smart glasses provide critical visual intelligence, enhancing safety and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <HardHat className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Enhanced Worker Safety</h3>
              <p className="text-concrete-light leading-relaxed">
                Provide hands-free access to safety protocols, real-time alerts, and remote expert assistance.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Compliance & Inspections</h3>
              <p className="text-concrete-light leading-relaxed">
                Streamline regulatory compliance with visual documentation, guided inspections, and audit trails.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <Cloud className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Remote Maintenance</h3>
              <p className="text-concrete-light leading-relaxed">
                Facilitate remote diagnostics and repair with experts guiding field technicians through complex procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Optimize Your Oil & Gas Operations
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Explore how Argus Systems can enhance safety and efficiency in your oil and gas projects.
            </p>
          <Link to="/company" className="btn-primary">
            Get a Custom Solution
          </Link>
        </div>
      </section>
    </div>
  )
}

export default OilGasPage

