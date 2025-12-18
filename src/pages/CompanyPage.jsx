import { Link } from 'react-router-dom'
import { Users, Briefcase, Map, Mail, Phone, ArrowRight, Shield, Globe } from 'lucide-react'
import SEO from '../components/SEO'

const CompanyPage = () => {
  return (
    <>
      <SEO
        title="ARGUS Mission - Advancing Autonomy"
        description="We are an autonomous robotics company providing AI-enabled precision mass and autonomous systems to protect critical infrastructure."
        keywords="robotics mission, advancing autonomy, precision mass, AI ethics, industrial security, robotics technology"
        image="https://argus.global/images/argus-logo-updated.png"
        url="https://argus.global/company"
      />
      <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">

        {/* Hero Section */}
        <section className="hero-minimal relative pt-32 pb-20 overflow-hidden border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-medium mb-8 tracking-tighter leading-tight">
                Our Mission<br />
                <span className="text-gray-500">is to Protect.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed text-gray-400 font-light">
                We believe that the future of critical industries requires technological superiority. We build the systems that ensure this advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="py-32 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-24">
              <div>
                <h2 className="text-3xl font-medium mb-8">The Challenge</h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                  The global security landscape has shifted. Authoritarian regimes are leveraging technology to undermine democratic institutions. The speed of conflict has accelerated beyond human cognitive limits.
                </p>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  To preserve efficiency and stability, industries must possess autonomous capabilities that are not just reactive, but predictive and adaptive.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-medium mb-8">Our Response</h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                  Argus Systems is building the software infrastructure for the next generation of intelligent robotics. We reject the notion that AI is inherently dangerous; rather, we believe that responsible, sovereign AI is the ultimate tool for progress.
                </p>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  Our commitment is to open standards, transparency, and the unwavering support of those who defend our freedoms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32 bg-off-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="card group">
                <Shield className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                <h3 className="text-2xl font-medium mb-4">Sovereignty First</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  We build systems that guarantee national control. No backdoors, no black boxes. Complete data sovereignty for our partners.
                </p>
              </div>
              <div className="card group">
                <Globe className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                <h3 className="text-2xl font-medium mb-4">Global Alliance</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  We collaborate exclusively with democratic nations, fostering a technology alliance that strengthens collective security.
                </p>
              </div>
              <div className="card group">
                <Users className="h-8 w-8 text-white mb-6" strokeWidth={1} />
                <h3 className="text-2xl font-medium mb-4">Human-Machine Teaming</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  We design AI to augment human decision-making, not replace it. The human operator remains in the loop for lethal force decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
              Join the Mission
            </h2>
            <p className="text-xl mb-12 leading-relaxed text-gray-400 font-light max-w-2xl mx-auto">
              We are looking for exceptional talent to solve the hardest problems in national security.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:careers@argus.global" className="btn-primary">
                View Open Roles
              </a>
              <a href="mailto:info@argus.global" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CompanyPage

