import { Link } from 'react-router-dom'
import { Truck, Package, Scan, TrendingUp, ArrowRight } from 'lucide-react'

const WarehousingPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--concrete-light)' }}>
      {/* Hero Section */}
      <section className="hero-gradient text-pure-white py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--carbon-black) 0%, var(--graphite-gray) 100%)', color: 'var(--pure-white)' }}>
        <img src="/images/warehousing-banner.jpg" alt="Warehousing Industry Banner" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Warehousing Solutions
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Optimizing logistics and inventory management with hands-free visual intelligence for enhanced efficiency and accuracy.
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
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--carbon-black)' }}>Streamlining Warehouse Operations</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--graphite-gray)' }}>
              Warehousing and logistics face constant pressure to increase speed, accuracy, and cost-efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Picking Errors</h3>
              <p className="text-concrete-light leading-relaxed">
                Manual picking processes are prone to human error, leading to mis-shipments and returns.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Inventory Discrepancies</h3>
              <p className="text-concrete-light leading-relaxed">
                Inaccurate inventory counts can lead to stockouts, overstocking, and operational delays.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-pure-white mb-4">Inefficient Workflows</h3>
              <p className="text-concrete-light leading-relaxed">
                Workers often juggle handheld devices, paper lists, and physical tasks, reducing efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-graphite text-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Argus Solutions for Warehousing</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Our smart glasses provide hands-free visual guidance, transforming picking, packing, and inventory tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <Package className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Visual Picking Guidance</h3>
              <p className="text-concrete-light leading-relaxed">
                Overlay picking instructions directly in the worker's field of view, reducing errors and improving speed.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <Scan className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Real-time Inventory Updates</h3>
              <p className="text-concrete-light leading-relaxed">
                Automate inventory scanning and updates, ensuring accurate stock levels and reducing discrepancies.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-steel-blue rounded-sm flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-pure-white" />
              </div>
              <h3 className="text-2xl font-bold text-pure-white mb-4">Logistics Optimization</h3>
              <p className="text-concrete-light leading-relaxed">
                Streamline routing, packing, and shipping processes with hands-free data access and navigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Transform Your Warehouse Operations
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: 'var(--concrete-light)' }}>
              Discover how Argus Systems can enhance efficiency and accuracy in your warehousing and logistics.
            </p>
          <Link to="/company" className="btn-primary">
            Get a Custom Solution
          </Link>
        </div>
      </section>
    </div>
  )
}

export default WarehousingPage

