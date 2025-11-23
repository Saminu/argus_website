import React, { useState } from 'react';
import { useParams, Navigate, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Check, Shield, Zap, Wind, Box, X } from 'lucide-react';
import { fleets } from '../data/fleets';
import { Button } from '@/components/ui/button';

const FleetDetailsPage = () => {
    const { fleetId } = useParams();
    const location = useLocation();
    const [selectedImage, setSelectedImage] = useState(null);
    const fleet = fleets[fleetId];

    if (!fleet) {
        return <Navigate to="/aerial" replace />;
    }

    return (
        <div className="min-h-screen bg-black text-white pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
                {fleet.images && fleet.images[0] ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${fleet.images[0]})` }}
                    />
                ) : (
                    <div className="absolute inset-0 bg-zinc-900 opacity-50" />
                )}

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-block px-3 py-1 mb-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-sm font-mono tracking-wider text-gray-300">
                        {fleet.role}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                        {fleet.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 italic font-light">
                        "{fleet.tagline}"
                    </p>
                </div>
            </section>

            {/* Vibe Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Zap className="w-8 h-8 text-blue-500" />
                            The Vibe
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            {fleet.vibe}
                        </p>
                    </div>
                    <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/10">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Shield className="w-6 h-6 text-blue-500" />
                            Tech Specs
                        </h3>
                        <div className="space-y-4">
                            {Object.entries(fleet.techSpecs).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0">
                                    <span className="text-gray-400 font-mono text-sm">{key}</span>
                                    <span className="text-white font-medium text-right">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Feature Section */}
            <section className="py-20 bg-zinc-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <div className="inline-block p-4 rounded-full bg-blue-500/10 mb-6">
                        <Wind className="w-12 h-12 text-blue-500" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Key Feature</h2>
                    <h3 className="text-2xl text-blue-400 mb-6">{fleet.keyFeature.title}</h3>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        {fleet.keyFeature.description}
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            {fleet.images && fleet.images.length > 1 && (
                <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {fleet.images.slice(1).map((img, index) => (
                            <div
                                key={index}
                                className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img}
                                    alt={`${fleet.name} gallery ${index + 1}`}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 p-2 rounded-full backdrop-blur-sm">
                                        <Box className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* CTA / Navigation */}
            <section className="py-20 px-4 text-center">
                <Link to={location.pathname.includes('maritime') ? "/maritime" : "/aerial"}>
                    <Button variant="outline" size="lg" className="gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back to {location.pathname.includes('maritime') ? "Maritime Fleet" : "Aerial Fleet"}
                    </Button>
                </Link>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full screen view"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                    />
                </div>
            )}
        </div>
    );
};

export default FleetDetailsPage;
