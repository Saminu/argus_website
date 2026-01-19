import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LandingPageV2 from './pages/LandingPageV2'
import SolutionsPage from './pages/SolutionsPage'
import ProductsPage from './pages/ProductsPage'
import ResourcesPage from './pages/ResourcesPage'
import CompanyPage from './pages/CompanyPage'
import AutomotivePage from './pages/AutomotivePage'
import OilGasPage from './pages/OilGasPage'
import WarehousingPage from './pages/WarehousingPage'
import ManufacturingPage from './pages/ManufacturingPage'
import HealthcarePage from './pages/HealthcarePage'
import AerialPage from './pages/AerialPage'
import FleetDetailsPage from './pages/FleetDetailsPage'
import MaritimePage from './pages/MaritimePage'
import ProjectsPage from './pages/ProjectsPage'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <>
      <ScrollToTop />
      <div className={isLandingPage ? "" : "min-h-screen flex flex-col"}>
        {!isLandingPage && <Navbar />}
        <main className={isLandingPage ? "" : "flex-grow"}>
          <Routes>
            <Route path="/" element={<LandingPageV2 />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/automotive" element={<AutomotivePage />} />
            <Route path="/solutions/oil-gas" element={<OilGasPage />} />
            <Route path="/solutions/warehousing" element={<WarehousingPage />} />
            <Route path="/solutions/manufacturing" element={<ManufacturingPage />} />
            <Route path="/solutions/healthcare" element={<HealthcarePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/aerial" element={<AerialPage />} />
            <Route path="/aerial/:fleetId" element={<FleetDetailsPage />} />
            <Route path="/maritime" element={<MaritimePage />} />
            <Route path="/maritime/:fleetId" element={<FleetDetailsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* Legacy route redirect or handle 404 if needed, for now just removing /drones */}
          </Routes>
        </main>
        {!isLandingPage && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

