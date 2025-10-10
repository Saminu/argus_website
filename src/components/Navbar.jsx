import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)

  return (
    <nav className="bg-carbon-black text-pure-white sticky top-0 z-50 shadow-lg" style={{ backgroundColor: 'var(--carbon-black)', color: 'var(--pure-white)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src="/images/argus-logo-updated.png" alt="Argus Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold tracking-tight">ARGUS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center space-x-1 hover:text-signal-orange transition-colors font-semibold"
                style={{ color: isSolutionsOpen ? 'var(--signal-orange)' : 'inherit' }}
              >
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-graphite-gray rounded-sm shadow-xl py-2 z-50" style={{ backgroundColor: 'var(--graphite-gray)' }}>
                  <Link
                    to="/solutions"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="block px-4 py-2 hover:bg-carbon-black transition-colors"
                    style={{ color: 'var(--pure-white)' }}
                  >
                    All Solutions
                  </Link>
                  <Link
                    to="/solutions/automotive"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="block px-4 py-2 hover:bg-carbon-black transition-colors"
                    style={{ color: 'var(--pure-white)' }}
                  >
                    Automotive
                  </Link>
                  <Link
                    to="/solutions/oil-gas"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="block px-4 py-2 hover:bg-carbon-black transition-colors"
                    style={{ color: 'var(--pure-white)' }}
                  >
                    Oil & Gas
                  </Link>
                  <Link
                    to="/solutions/warehousing"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="block px-4 py-2 hover:bg-carbon-black transition-colors"
                    style={{ color: 'var(--pure-white)' }}
                  >
                    Warehousing
                  </Link>
                  <Link
                    to="/solutions/manufacturing"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="block px-4 py-2 hover:bg-carbon-black transition-colors"
                    style={{ color: 'var(--pure-white)' }}
                  >
                    Manufacturing
                  </Link>
                  <Link
                    to="/solutions/healthcare"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="block px-4 py-2 hover:bg-carbon-black transition-colors"
                    style={{ color: 'var(--pure-white)' }}
                  >
                    Healthcare
                  </Link>
                </div>
              )}
            </div>
            <Link to="/products" className="hover:text-signal-orange transition-colors font-semibold">
              Products
            </Link>
            <Link to="/resources" className="hover:text-signal-orange transition-colors font-semibold">
              Resources
            </Link>
            <Link to="/company" className="hover:text-signal-orange transition-colors font-semibold">
              Company
            </Link>
            <Link to="/company" className="btn-primary text-sm">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-sm hover:bg-graphite-gray transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div>
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center justify-between w-full px-4 py-2 hover:bg-graphite-gray transition-colors font-semibold"
              >
                <span>Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSolutionsOpen && (
                <div className="pl-8 space-y-2 mt-2">
                  <Link
                    to="/solutions"
                    onClick={() => { setIsOpen(false); setIsSolutionsOpen(false); }}
                    className="block px-4 py-2 hover:bg-graphite-gray transition-colors"
                  >
                    All Solutions
                  </Link>
                  <Link
                    to="/solutions/automotive"
                    onClick={() => { setIsOpen(false); setIsSolutionsOpen(false); }}
                    className="block px-4 py-2 hover:bg-graphite-gray transition-colors"
                  >
                    Automotive
                  </Link>
                  <Link
                    to="/solutions/oil-gas"
                    onClick={() => { setIsOpen(false); setIsSolutionsOpen(false); }}
                    className="block px-4 py-2 hover:bg-graphite-gray transition-colors"
                  >
                    Oil & Gas
                  </Link>
                  <Link
                    to="/solutions/warehousing"
                    onClick={() => { setIsOpen(false); setIsSolutionsOpen(false); }}
                    className="block px-4 py-2 hover:bg-graphite-gray transition-colors"
                  >
                    Warehousing
                  </Link>
                  <Link
                    to="/solutions/manufacturing"
                    onClick={() => { setIsOpen(false); setIsSolutionsOpen(false); }}
                    className="block px-4 py-2 hover:bg-graphite-gray transition-colors"
                  >
                    Manufacturing
                  </Link>
                  <Link
                    to="/solutions/healthcare"
                    onClick={() => { setIsOpen(false); setIsSolutionsOpen(false); }}
                    className="block px-4 py-2 hover:bg-graphite-gray transition-colors"
                  >
                    Healthcare
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:bg-graphite-gray transition-colors font-semibold"
            >
              Products
            </Link>
            <Link
              to="/resources"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:bg-graphite-gray transition-colors font-semibold"
            >
              Resources
            </Link>
            <Link
              to="/company"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:bg-graphite-gray transition-colors font-semibold"
            >
              Company
            </Link>
            <Link
              to="/company"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 bg-signal-orange text-pure-white font-bold rounded-sm text-center mx-4"
              style={{ backgroundColor: 'var(--signal-orange)', color: 'var(--pure-white)' }}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

