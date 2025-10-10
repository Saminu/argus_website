import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SolutionsPage from './pages/SolutionsPage'
import ProductsPage from './pages/ProductsPage'
import ResourcesPage from './pages/ResourcesPage'
import CompanyPage from './pages/CompanyPage'
import AutomotivePage from './pages/AutomotivePage'
import OilGasPage from './pages/OilGasPage'
import WarehousingPage from './pages/WarehousingPage'
import ManufacturingPage from './pages/ManufacturingPage'
import HealthcarePage from './pages/HealthcarePage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/automotive" element={<AutomotivePage />} />
            <Route path="/solutions/oil-gas" element={<OilGasPage />} />
            <Route path="/solutions/warehousing" element={<WarehousingPage />} />
            <Route path="/solutions/manufacturing" element={<ManufacturingPage />} />
            <Route path="/solutions/healthcare" element={<HealthcarePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/company" element={<CompanyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

