import { Link } from 'react-router-dom'
import { Users, Briefcase, Map, Mail, Phone, ArrowRight } from 'lucide-react'

const CompanyPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--concrete-light)' }}>
      {/* Hero Section */}
      <section className="hero-gradient text-pure-white py-32" style={{ background: 'linear-gradient(135deg, var(--carbon-black) 0%, var(--graphite-gray) 100%)', color: 'var(--pure-white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              About Argus Systems
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Pioneering open-source visual intelligence for the frontline workforce.
            </p>
            <Link to="/company" className="btn-primary">
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>Our Vision & Mission</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
              We believe in empowering every frontline worker with secure, transparent, and customizable visual intelligence solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Our Mission</h3>
              <p className="text-concrete-light leading-relaxed">
                To democratize access to advanced visual intelligence technology, fostering innovation and collaboration through an open-source ecosystem.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Our Vision</h3>
              <p className="text-concrete-light leading-relaxed">
                To be the global leader in open-source smart glasses and visual intelligence platforms, transforming industries and improving lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-graphite text-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Meet the Team</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              A dedicated group of engineers, designers, and industry experts committed to open innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder for team members */}
            <div className="card text-center">
              <Users className="h-16 w-16 mx-auto mb-4" style={{ color: 'var(--signal-orange)' }} />
              <h3 className="text-2xl font-bold text-pure-white mb-2">John Doe</h3>
              <p className="text-concrete-light">CEO & Founder</p>
            </div>
            <div className="card text-center">
              <Briefcase className="h-16 w-16 mx-auto mb-4" style={{ color: 'var(--signal-orange)' }} />
              <h3 className="text-2xl font-bold text-pure-white mb-2">Jane Smith</h3>
              <p className="text-concrete-light">CTO</p>
            </div>
            <div className="card text-center">
              <Map className="h-16 w-16 mx-auto mb-4" style={{ color: 'var(--signal-orange)' }} />
              <h3 className="text-2xl font-bold text-pure-white mb-2">Peter Jones</h3>
              <p className="text-concrete-light">Head of Product</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-24 bg-dark text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
            Have questions or want to learn more? Reach out to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:info@argussystems.com" className="btn-primary">
              <Mail className="h-5 w-5 mr-2" /> Email Us
            </a>
            <a href="tel:+1-800-ARGUS-AI" className="btn-secondary">
              <Phone className="h-5 w-5 mr-2" /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CompanyPage

