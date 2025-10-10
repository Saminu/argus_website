import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-graphite text-pure-white py-12" style={{ backgroundColor: 'var(--graphite-gray)', color: 'var(--pure-white)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/images/argus-logo.png" alt="Argus Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold">ARGUS</span>
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--concrete-light)' }}>
              Open-source smart glasses and visual intelligence platform empowering frontline workers worldwide.
            </p>
            <p className="text-xs" style={{ color: 'var(--concrete-light)' }}>
              © 2025 Argus Systems. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solutions/automotive" className="hover:text-signal-orange transition-colors" style={{ color: 'var(--concrete-light)' }}>Automotive</Link></li>
              <li><Link to="/solutions/oil-gas" className="hover:text-signal-orange transition-colors" style={{ color: 'var(--concrete-light)' }}>Oil & Gas</Link></li>
              <li><Link to="/solutions/warehousing" className="hover:text-signal-orange transition-colors" style={{ color: 'var(--concrete-light)' }}>Warehousing</Link></li>
              <li><Link to="/solutions/manufacturing" className="hover:text-signal-orange transition-colors" style={{ color: 'var(--concrete-light)' }}>Manufacturing</Link></li>
              <li><Link to="/solutions/healthcare" className="hover:text-signal-orange transition-colors" style={{ color: 'var(--concrete-light)' }}>Healthcare</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/company" className="hover:text-signal-orange transition-colors" style={{ color: 'var(--concrete-light)' }}>About Us</Link></li>
              <li><Link to="/products" className="hover:text-signal-orange transition-colors" style={{ color: 'var(--concrete-light)' }}>Products</Link></li>
              <li><Link to="/resources" className="hover:text-signal-orange transition-colors" style={{ color: 'var(--concrete-light)' }}>Resources</Link></li>
              <li><Link to="/company" className="hover:text-signal-orange transition-colors" style={{ color: 'var(--concrete-light)' }}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
