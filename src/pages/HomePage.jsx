import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'
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
        video.play().catch(console.error)
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
        title="ARGUS - Wearable Intelligence Built for Frontline Workers"
        description="Rugged smart glasses powered by on-device AI models that deliver real-time insights, hands-free. Empower your workforce with vision intelligence that works anywhere."
        keywords="wearable intelligence, smart glasses, on-device AI, frontline workers, vision intelligence, rugged smart glasses, real-time insights, hands-free technology"
        image="https://argus.global/images/argus-logo-updated.png"
        url="https://argus.global/"
      />
      <div style={{ backgroundColor: 'var(--concrete-light)' }}>
      <section className="hero-gradient text-pure-white py-32" style={{ background: 'linear-gradient(135deg, var(--carbon-black) 0%, var(--graphite-gray) 100%)', color: 'var(--pure-white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-sm" style={{ backgroundColor: 'var(--graphite-gray)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <span className="text-sm font-bold tracking-wide">NEXT-GENERATION WEARABLE INTELLIGENCE</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Wearable Intelligence.<br />Built for Frontline Workers.
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Rugged smart glasses powered by on-device AI models that deliver real-time insights, hands-free. Empower your workforce with vision intelligence that works anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/products" className="btn-primary">
                <span>Explore Devices & AI</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/company" className="btn-secondary">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Video Section */}
      <section className="w-full bg-carbon-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-10 text-center text-pure-white">See Argus in Action</h2>
          <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              controls
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/smart-glasses-poster.png"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: 'var(--concrete-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--steel-blue)' }}>100%</div>
              <p className="text-sm font-medium" style={{ color: 'var(--graphite-gray)' }}>Open Source</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--steel-blue)' }}>5+</div>
              <p className="text-sm font-medium" style={{ color: 'var(--graphite-gray)' }}>Industries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--steel-blue)' }}>24/7</div>
              <p className="text-sm font-medium" style={{ color: 'var(--graphite-gray)' }}>Hands-Free Operation</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--steel-blue)' }}>∞</div>
              <p className="text-sm font-medium" style={{ color: 'var(--graphite-gray)' }}>Custom Applications</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: 'var(--concrete-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>
            The Open Alternative to <span style={{ color: 'var(--steel-blue)' }}>Meta Ray-Ban</span>            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
              Break free from closed ecosystems. Argus Systems delivers enterprise-grade smart glasses with complete transparency, customization, and community control.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 rounded-sm flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--steel-blue)' }}>
                <Shield className="h-8 w-8" style={{ color: 'var(--pure-white)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--pure-white)' }}>Open & Secure</h3>
              <p className="leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
                Fully open-source platform built for defense and public safety. Complete transparency with privacy and compliance by design.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 rounded-sm flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--steel-blue)' }}>
                <Zap className="h-8 w-8" style={{ color: 'var(--pure-white)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--pure-white)' }}>Composable & Customizable</h3>
              <p className="leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
                Build custom applications tailored to your needs. Developers can create mission-critical solutions without vendor lock-in.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 rounded-sm flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--steel-blue)' }}>
                <Globe className="h-8 w-8" style={{ color: 'var(--pure-white)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--pure-white)' }}>Community-Driven Innovation</h3>
              <p className="leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
                Join a global community building the future of visual intelligence. Access growing ecosystem of open-source applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-pure-white" style={{ backgroundColor: 'var(--carbon-black)', color: 'var(--pure-white)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
            Join the open-source revolution in visual intelligence. Experience the power of hands-free technology with complete control and transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/company" className="btn-primary">
              Request a Demo
            </Link>
            <Link to="/products" className="btn-secondary">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default HomePage
