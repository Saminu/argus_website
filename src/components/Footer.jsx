import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-xs">A</span>
              </div>
              <span className="text-xl font-medium tracking-tight">ARGUS</span>
            </div>
            <p className="text-sm text-gray-500 max-w-md mb-8 leading-relaxed">
              Artificial intelligence to protect our democracies. We build software-defined defense systems that ensure information superiority in the modern battlespace.
            </p>
            <p className="text-xs text-gray-600 font-mono">
              © 2025 Argus Systems. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-sm text-white mb-6 uppercase tracking-widest">Capabilities</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/products" className="hover:text-white transition-colors">Software-Defined Defense</Link></li>
              <li><Link to="/aerial" className="hover:text-white transition-colors">Aerial Systems</Link></li>
              <li><Link to="/maritime" className="hover:text-white transition-colors">Maritime Systems</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm text-white mb-6 uppercase tracking-widest">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/company" className="hover:text-white transition-colors">Mission</Link></li>
              <li><Link to="/company" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/company" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
