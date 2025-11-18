import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-medium tracking-tight text-white group-hover:opacity-80 transition-opacity">ARGUS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/products" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Capabilities
            </Link>
            <Link to="/aerial" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Aerial
            </Link>
            <Link to="/maritime" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Maritime
            </Link>
            <Link to="/company" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Mission
            </Link>
            <Link to="/company" className="btn-primary py-2 px-4 text-xs">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 py-8 px-4 flex flex-col space-y-6">
            <Link to="/products" className="text-lg font-medium text-white hover:text-gray-300">
              Capabilities
            </Link>
            <Link to="/aerial" className="text-lg font-medium text-white hover:text-gray-300">
              Aerial
            </Link>
            <Link to="/maritime" className="text-lg font-medium text-white hover:text-gray-300">
              Maritime
            </Link>
            <Link to="/company" className="text-lg font-medium text-white hover:text-gray-300">
              Mission
            </Link>
            <Link to="/company" className="btn-primary text-center justify-center">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

