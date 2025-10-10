import { Link } from 'react-router-dom'
import { Heart, Stethoscope, Shield, Users, ArrowRight } from 'lucide-react'

const HealthcarePage = () => {
  return (
    <div style={{ backgroundColor: 'var(--concrete-light)' }}>
      {/* Hero Section */}
      <section className="hero-gradient text-pure-white py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--carbon-black) 0%, var(--graphite-gray) 100%)', color: 'var(--pure-white)' }}>
        <img src="/images/healthcare-banner.jpg" alt="Healthcare Industry Banner" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Healthcare Solutions
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Transforming patient care and medical operations with hands-free visual intelligence for healthcare professionals.
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
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>Innovating Healthcare Delivery</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
              The healthcare sector faces increasing demands for efficiency, accuracy, and patient safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Complex Procedures</h3>
              <p className="text-concrete-light leading-relaxed">
                Performing intricate medical procedures requires precision and access to real-time patient data.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Remote Consultations</h3>
              <p className="text-concrete-light leading-relaxed">
                Providing effective remote care can be challenging without direct visual interaction and data.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Data Access & Documentation</h3>
              <p className="text-concrete-light leading-relaxed">
                Efficiently accessing and documenting patient information while maintaining sterile conditions is critical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-graphite text-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Argus Solutions for Healthcare</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Our smart glasses provide hands-free visual intelligence, transforming patient care and medical operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <Stethoscope className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Remote Consultations & Training</h3>
              <p className="text-concrete-light leading-relaxed">
                Enable hands-free remote consultations, allowing specialists to guide local staff or conduct virtual rounds.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Surgical & Procedural Guidance</h3>
              <p className="text-concrete-light leading-relaxed">
                Overlay critical patient data and procedural guides directly into the surgeon's field of view.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Secure Data Access & Documentation</h3>
              <p className="text-concrete-light leading-relaxed">
                Access patient records and document procedures hands-free, ensuring sterile environments and data security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Advance Healthcare with Argus
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Discover how Argus Systems can revolutionize patient care and medical operations.
            </p>
          <Link to="/company" className="btn-primary">
            Get a Custom Solution
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HealthcarePage

