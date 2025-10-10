import { Link } from 'react-router-dom'
import { BookOpen, Newspaper, Users, Video, ArrowRight } from 'lucide-react'

const ResourcesPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--concrete-light)' }}>
      {/* Hero Section */}
      <section className="hero-gradient text-pure-white py-32" style={{ background: 'linear-gradient(135deg, var(--carbon-black) 0%, var(--graphite-gray) 100%)', color: 'var(--pure-white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Resources
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Access a wealth of knowledge, documentation, and community support to maximize your Argus experience.
            </p>
            <Link to="/company" className="btn-primary">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>Explore Our Knowledge Hub</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
              Find everything from technical documentation to insightful case studies and blog posts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card group">
              <div className="w-16 h-16 bg-signal-orange rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-3">Documentation</h3>
              <p className="text-concrete-light leading-relaxed">
                Comprehensive guides and API references for developers and system integrators.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 bg-signal-orange rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Newspaper className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-3">Case Studies</h3>
              <p className="text-concrete-light leading-relaxed">
                Real-world examples of how Argus Systems is transforming industries.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 bg-signal-orange rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-3">Tutorials & Videos</h3>
              <p className="text-concrete-light leading-relaxed">
                Step-by-step video guides and tutorials for getting started and advanced usage.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 bg-signal-orange rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-3">Community Forum</h3>
              <p className="text-concrete-light leading-relaxed">
                Engage with other users and developers, share insights, and get support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-graphite text-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Join Our Growing Community</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Argus is more than just a product; it's a vibrant community of innovators and problem-solvers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Contribute to Open Source</h3>
              <p className="text-concrete-light leading-relaxed">
                Help us build the future of visual intelligence. Contribute code, documentation, or ideas to our open-source projects.
              </p>
              <Link to="#" className="text-signal-orange flex items-center mt-4 hover:underline">
                Learn How to Contribute <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Attend Workshops & Events</h3>
              <p className="text-concrete-light leading-relaxed">
                Participate in our online and in-person workshops, webinars, and community events to learn and connect.
              </p>
              <Link to="#" className="text-signal-orange flex items-center mt-4 hover:underline">
                View Upcoming Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Need More Information?
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
            Our team is here to help. Reach out for personalized support or detailed inquiries.
          </p>
          <Link to="/company" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ResourcesPage

