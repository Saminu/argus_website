import { Link } from 'react-router-dom'
import { Factory, Wrench, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react'

const ManufacturingPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--concrete-light)' }}>
      {/* Hero Section */}
      <section className="hero-gradient text-pure-white py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--carbon-black) 0%, var(--graphite-gray) 100%)', color: 'var(--pure-white)' }}>
        <img src="/images/manufacturing-banner.jpg" alt="Manufacturing Industry Banner" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Manufacturing Solutions
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Driving efficiency and precision in manufacturing with hands-free visual intelligence for assembly, inspection, and training.
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
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>Optimizing Modern Manufacturing</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
              The manufacturing sector demands continuous innovation to maintain competitiveness and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Complex Assembly</h3>
              <p className="text-concrete-light leading-relaxed">
                As products become more intricate, assembly processes require greater precision and guidance.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Quality Assurance</h3>
              <p className="text-concrete-light leading-relaxed">
                Ensuring every product meets stringent quality standards is crucial but can be resource-intensive.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Worker Training</h3>
              <p className="text-concrete-light leading-relaxed">
                Onboarding new employees and upskilling existing ones for complex tasks is a continuous challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-graphite text-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Argus Solutions for Manufacturing</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Our smart glasses provide hands-free visual intelligence, transforming production lines and worker efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <Wrench className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Guided Assembly & Repair</h3>
              <p className="text-concrete-light leading-relaxed">
                Provide step-by-step visual instructions directly in the worker's field of view, reducing errors and speeding up tasks.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Quality Inspection</h3>
              <p className="text-concrete-light leading-relaxed">
                Enable hands-free quality checks with AR overlays highlighting critical points and automated data capture.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Remote Expert Collaboration</h3>
              <p className="text-concrete-light leading-relaxed">
                Connect factory workers with remote experts for real-time visual assistance, minimizing downtime and travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Innovate Your Manufacturing Process
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Discover how Argus Systems can enhance efficiency and precision in your manufacturing operations.
            </p>
          <Link to="/company" className="btn-primary">
            Get a Custom Solution
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ManufacturingPage

