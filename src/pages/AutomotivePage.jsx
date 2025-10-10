import { Link } from 'react-router-dom'
import { Car, Wrench, Shield, TrendingUp, ArrowRight } from 'lucide-react'

const AutomotivePage = () => {
  return (
    <div style={{ backgroundColor: 'var(--concrete-light)' }}>
      {/* Hero Section */}
      <section className="hero-gradient text-pure-white py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--carbon-black) 0%, var(--graphite-gray) 100%)', color: 'var(--pure-white)' }}>
        <img src="/images/automotive-banner.jpg" alt="Automotive Industry Banner" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Automotive Solutions
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Empowering automotive professionals with hands-free visual intelligence for assembly, quality control, and maintenance.
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
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>Addressing Automotive Challenges</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
              The automotive industry demands precision, efficiency, and safety. Argus Smart Glasses provide solutions to common pain points.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Complex Assembly</h3>
              <p className="text-concrete-light leading-relaxed">
                Navigating intricate assembly lines requires constant attention and access to detailed instructions.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Quality Control</h3>
              <p className="text-concrete-light leading-relaxed">
                Ensuring every component meets rigorous standards is critical but often time-consuming.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Remote Diagnostics</h3>
              <p className="text-concrete-light leading-relaxed">
                Diagnosing issues in the field or remotely can be challenging without visual context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-graphite text-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Argus Solutions for Automotive</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Our smart glasses integrate seamlessly into your workflows, providing hands-free access to vital information.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <Wrench className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Guided Assembly</h3>
              <p className="text-concrete-light leading-relaxed">
                Overlay digital instructions onto physical components, reducing errors and training time.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Visual Quality Checks</h3>
              <p className="text-concrete-light leading-relaxed">
                Perform hands-free inspections with real-time data capture and AI-powered anomaly detection.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Remote Expert Support</h3>
              <p className="text-concrete-light leading-relaxed">
                Connect technicians with off-site experts for immediate visual assistance and problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Drive Innovation in Automotive
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Discover how Argus Systems can revolutionize your automotive operations. Contact us for a tailored solution.
            </p>
          <Link to="/company" className="btn-primary">
            Get a Custom Solution
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AutomotivePage

