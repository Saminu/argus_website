import { Link } from 'react-router-dom'
import { ArrowRight, Factory, FlaskConical, Truck, Stethoscope, Car, Lightbulb } from 'lucide-react'

const SolutionsPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--concrete-light)' }}>
      {/* Hero Section */}
      <section className="hero-gradient text-pure-white py-32" style={{ background: 'linear-gradient(135deg, var(--carbon-black) 0%, var(--graphite-gray) 100%)', color: 'var(--pure-white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Industry Solutions
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Argus Systems empowers frontline workers across diverse industries with hands-free visual intelligence and open-source flexibility.
            </p>
            <Link to="/company" className="btn-primary">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>Solutions for Every Challenge</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
              From enhancing safety in hazardous environments to streamlining complex manufacturing processes, Argus delivers tailored visual intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/solutions/automotive" className="card group">
              <div className="w-16 h-16 bg-signal-orange rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Car className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-3">Automotive</h3>
              <p className="text-concrete-light leading-relaxed">
                Connected vehicle assembly, quality control, and remote diagnostics.
              </p>
            </Link>

            <Link to="/solutions/oil-gas" className="card group">
              <div className="w-16 h-16 bg-signal-orange rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FlaskConical className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-3">Oil & Gas</h3>
              <p className="text-concrete-light leading-relaxed">
                Safety compliance, remote inspections, and maintenance in hazardous environments.
              </p>
            </Link>

            <Link to="/solutions/warehousing" className="card group">
              <div className="w-16 h-16 bg-signal-orange rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-3">Warehousing</h3>
              <p className="text-concrete-light leading-relaxed">
                Visual picking guidance, inventory management, and logistics optimization.
              </p>
            </Link>

            <Link to="/solutions/manufacturing" className="card group">
              <div className="w-16 h-16 bg-signal-orange rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Factory className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-3">Manufacturing</h3>
              <p className="text-concrete-light leading-relaxed">
                Assembly instructions, quality assurance, and remote expert collaboration.
              </p>
            </Link>

            <Link to="/solutions/healthcare" className="card group">
              <div className="w-16 h-16 bg-signal-orange rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-3">Healthcare</h3>
              <p className="text-concrete-light leading-relaxed">
                Remote consultations, hands-free data access, and surgical assistance.
              </p>
            </Link>

            <Link to="/products" className="card group">
              <div className="w-16 h-16 bg-signal-orange rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-3">Explore All Products</h3>
              <p className="text-concrete-light leading-relaxed">
                Discover how Argus Smart Glasses and the Visual Intelligence Platform can transform your operations.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Argus */}
      <section className="py-24 bg-graphite text-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Why Choose Argus for Your Industry?</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Our open-source approach provides unparalleled flexibility, security, and community support, tailored to your specific industry needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-signal-orange rounded-sm flex items-center justify-center mb-6">
                <ArrowRight className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Customizable Workflows</h3>
              <p className="text-concrete-light leading-relaxed">
                Adapt our platform to your unique operational requirements with open APIs and a flexible architecture.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-signal-orange rounded-sm flex items-center justify-center mb-6">
                <ArrowRight className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Enhanced Safety & Compliance</h3>
              <p className="text-concrete-light leading-relaxed">
                Improve worker safety and ensure regulatory compliance with real-time visual guidance and data capture.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-signal-orange rounded-sm flex items-center justify-center mb-6">
                <ArrowRight className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Increased Efficiency</h3>
              <p className="text-concrete-light leading-relaxed">
                Streamline operations, reduce errors, and boost productivity with hands-free access to critical information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Find Your Solution?
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
            Contact our sales team to discuss how Argus Systems can be tailored to your industry's specific needs.
          </p>
          <Link to="/company" className="btn-primary">
            Get a Custom Solution
          </Link>
        </div>
      </section>
    </div>
  )
}

export default SolutionsPage

