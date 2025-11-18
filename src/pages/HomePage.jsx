import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Globe, Plane, Waves, Target, Radio, Crosshair, Cpu, Eye, Lock } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import SEO from '../components/SEO'

const HomePage = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const videoSrc = 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/09bac38b-b5f7-4498-99f5-4ed0ea3d2d03/default.jobtemplate.hls.m3u8'

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(videoSrc)
      hls.attachMedia(video)

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.log('Auto-play prevented:', e))
      })

      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS error:', data)
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('Fatal network error encountered, try to recover')
              hls.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('Fatal media error encountered, try to recover')
              hls.recoverMediaError()
              break
            default:
              console.error('Fatal error, cannot recover')
              hls.destroy()
              break
          }
        }
      })

      return () => {
        hls.destroy()
      }
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      video.src = videoSrc
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(console.error)
      })
    } else {
      console.error('HLS is not supported in this browser')
    }
  }, [])

  return (
    <>
      <SEO
        title="ARGUS - AI-Enabled Precision Mass & Autonomous Systems"
        description="We provide AI-enabled precision mass and autonomous systems across defense and security. Building the operating system for the modern battlefield."
        keywords="defense AI, precision mass, autonomous systems, defense technology, AI security, software-defined defense"
        image="https://argus.global/images/argus-logo-updated.png"
        url="https://argus.global/"
      />
      <div className="bg-black min-h-screen font-sans text-white selection:bg-white selection:text-black">

        {/* Hero Section */}
        <section className="hero-minimal relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            {/* Abstract geometric background could go here, for now just pure black */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-medium mb-8 tracking-tighter leading-tight">
              Artificial Intelligence<br />
              <span className="text-subtle">to Protect Democracies</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-400 font-light">
              We provide AI-enabled precision mass and autonomous systems across defense and security.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/products" className="btn-primary group">
                <span>Our Capabilities</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/company" className="btn-secondary group">
                <span>Mission & Values</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Cinematic Video Section */}
        <section className="w-full bg-black relative">
          <div className="w-full h-[80vh] relative overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover opacity-60 grayscale"
              controls={false}
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/smart-glasses-poster.png"
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 z-20">
              <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">Live System Feed // Anonymized</p>
            </div>
          </div>
        </section>

        {/* Strategic Pillars */}
        <section className="py-32 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-16">
              <div className="card group">
                <div className="mb-8">
                  <Cpu className="h-8 w-8 text-white mb-4" strokeWidth={1} />
                  <h3 className="text-2xl font-medium mb-4 text-white">Software-Defined</h3>
                </div>
                <p className="leading-relaxed text-gray-400 text-lg font-light">
                  Hardware is a commodity. Intelligence is the differentiator. We retrofit existing platforms with state-of-the-art AI to extend their operational relevance.
                </p>
              </div>

              <div className="card group">
                <div className="mb-8">
                  <Eye className="h-8 w-8 text-white mb-4" strokeWidth={1} />
                  <h3 className="text-2xl font-medium mb-4 text-white">Information Superiority</h3>
                </div>
                <p className="leading-relaxed text-gray-400 text-lg font-light">
                  In the modern battlespace, data is the weapon. Our systems process sensor data on-device, delivering real-time situational awareness without latency.
                </p>
              </div>

              <div className="card group">
                <div className="mb-8">
                  <Lock className="h-8 w-8 text-white mb-4" strokeWidth={1} />
                  <h3 className="text-2xl font-medium mb-4 text-white">Sovereign & Secure</h3>
                </div>
                <p className="leading-relaxed text-gray-400 text-lg font-light">
                  Built on open standards for complete transparency. We ensure that critical defense infrastructure remains under sovereign control, free from black boxes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Minimalist Stats */}
        <section className="py-32 bg-off-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
              <div>
                <div className="text-5xl font-light mb-2 text-white">100%</div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Open Architecture</p>
              </div>
              <div>
                <div className="text-5xl font-light mb-2 text-white">5+</div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Nations Supported</p>
              </div>
              <div>
                <div className="text-5xl font-light mb-2 text-white">24/7</div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Autonomous Ops</p>
              </div>
              <div>
                <div className="text-5xl font-light mb-2 text-white">∞</div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Scalability</p>
              </div>
            </div>
          </div>
        </section>

        {/* Autonomous Assets Section */}
        <section className="py-32 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-xl">
                Autonomous Systems for Multi-Domain Operations
              </h2>
              <Link to="/drones" className="btn-secondary mt-8 md:mt-0">
                View Platforms
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              <div className="bg-black p-12 hover:bg-white/5 transition-colors duration-500 group cursor-pointer">
                <div className="flex justify-between items-start mb-12">
                  <Plane className="h-6 w-6 text-gray-500 group-hover:text-white transition-colors" strokeWidth={1} />
                  <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                </div>
                <h3 className="text-3xl font-medium mb-4">Air Superiority</h3>
                <p className="text-gray-400 font-light">
                  AI-enabled air dominance. Our software stack transforms legacy airframes and next-gen drones into cognitive assets capable of autonomous decision-making in GPS-denied environments.
                </p>
              </div>

              <div className="bg-black p-12 hover:bg-white/5 transition-colors duration-500 group cursor-pointer">
                <div className="flex justify-between items-start mb-12">
                  <Waves className="h-6 w-6 text-gray-500 group-hover:text-white transition-colors" strokeWidth={1} />
                  <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                </div>
                <h3 className="text-3xl font-medium mb-4">Maritime Intelligence</h3>
                <p className="text-gray-400 font-light">
                  Deploying neural networks at the edge to secure sovereign waters. From autonomous surface vessels to deep-sea monitoring, ensuring continuous situational awareness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-black text-white border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
              Join the Mission
            </h2>
            <p className="text-xl mb-12 leading-relaxed text-gray-400 font-light max-w-2xl mx-auto">
              We are looking for engineers and operators who share our conviction that democratic values are worth protecting.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/company" className="btn-primary">
                View Open Roles
              </Link>
              <Link to="/products" className="btn-secondary">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage
