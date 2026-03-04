import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPageV3.css';
import heroBg from '../assets/hero-drone-v3.png';
import { Shield, Target, Zap, Activity, Cpu, Globe, Crosshair, ArrowRight } from 'lucide-react';

const LandingPageV3 = () => {
    useEffect(() => {
        // Any initialization logic can go here
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="argus-v3-container">
            {/* Navigation */}
            <nav className="argus-v3-nav">
                <Link to="/" className="argus-v3-logo">
                    ARGUS <span style={{ color: '#666', fontSize: '0.8em' }}>SYSTEMS</span>
                </Link>
                <div className="argus-v3-nav-links">
                    <Link to="/products" className="argus-v3-nav-link">Platform</Link>
                    <Link to="/solutions" className="argus-v3-nav-link">Mission</Link>
                    <Link to="/company" className="argus-v3-nav-link">Intelligence</Link>
                    <a href="mailto:contact@argusai.uk" className="argus-v3-nav-link" style={{ color: 'var(--argus-accent)' }}>Contact</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="argus-v3-hero">
                <img src={heroBg} alt="Autonomous Drone" className="argus-v3-hero-bg" />
                <div className="argus-v3-hero-content">
                    <h1 className="argus-v3-hero-title">
                        Autonomous<br />Intelligence<br />
                        <span style={{ fontSize: '0.5em', letterSpacing: '0.3em', display: 'block', marginTop: '1rem', color: 'var(--argus-accent)' }}>For Modern Robotics</span>
                    </h1>
                    <p className="argus-v3-hero-subtitle">
                        Software-defined superiority for complex environments. We provide AI-enabled precision mass and autonomous systems.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/products" className="argus-v3-btn">
                            View Platforms
                        </Link>
                        <a href="mailto:contact@argusai.uk" className="argus-v3-btn" style={{ background: 'transparent', color: 'white', border: '1px solid white' }}>
                            Contact Sales
                        </a>
                    </div>
                </div>
            </section>

            {/* Features / Highlights */}
            <section className="argus-v3-features">
                <div className="argus-v3-section-header">
                    <h2 className="argus-v3-section-title">Core Capabilities</h2>
                </div>
                <div className="argus-v3-features-grid">
                    <div className="argus-v3-feature-card">
                        <div style={{ marginBottom: '1.5rem', color: 'var(--argus-accent)' }}><Cpu size={40} /></div>
                        <h3 className="argus-v3-feature-title">Modular Systems</h3>
                        <p className="argus-v3-feature-desc">
                            Hardware agnostic architecture allowing rapid integration with existing platforms and sensors.
                        </p>
                    </div>
                    <div className="argus-v3-feature-card">
                        <div style={{ marginBottom: '1.5rem', color: 'var(--argus-accent)' }}><Globe size={40} /></div>
                        <h3 className="argus-v3-feature-title">Global Awareness</h3>
                        <p className="argus-v3-feature-desc">
                            Real-time sensor fusion providing unmatched situational awareness across all domains.
                        </p>
                    </div>
                    <div className="argus-v3-feature-card">
                        <div style={{ marginBottom: '1.5rem', color: 'var(--argus-accent)' }}><Zap size={40} /></div>
                        <h3 className="argus-v3-feature-title">Information Superiority</h3>
                        <p className="argus-v3-feature-desc">
                            Edge computing capabilities processing terabytes of data to deliver actionable intelligence in milliseconds.
                        </p>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section className="argus-v3-news">
                <div className="argus-v3-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                    <h2 className="argus-v3-section-title">Latest Intel</h2>
                    <Link to="/resources" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View All <ArrowRight size={16} /></Link>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} style={{ padding: '2rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                            <div>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>14.02.2026</span>
                                <h4 style={{ color: 'white', fontSize: '1.2rem', margin: 0 }}>Strategic Partnership Announced with Defense Lab {item}</h4>
                            </div>
                            <ArrowRight size={20} color="rgba(255,255,255,0.3)" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Simple Footer */}
            <footer style={{ padding: '4rem 3rem', background: 'black', borderTop: '1px solid #222', display: 'flex', justifyContent: 'space-between', color: '#666' }}>
                <div>
                    <h4 style={{ color: 'white', marginBottom: '1rem' }}>ARGUS SYSTEMS</h4>
                    <p style={{ fontSize: '0.9rem' }}>© 2026 Argus Systems. All rights reserved.</p>
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Privacy</a>
                    <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Terms</a>
                    <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Contact</a>
                </div>
            </footer>
        </div>
    );
};

export default LandingPageV3;
