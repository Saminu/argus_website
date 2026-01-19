import React from 'react';
import ThreeDViewer from '../components/ThreeDViewer'; // Adjustable import path based on structure
import { motion } from 'framer-motion';

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-neutral-900 text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                        Interactive Projects
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-3xl">
                        Explore our latest R&D initiatives and deployment case studies. Use the interactive tools below to visualize our data capture and processing capabilities.
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-neutral-800/50 rounded-2xl border border-neutral-700 overflow-hidden shadow-2xl"
                    >
                        <div className="p-6 border-b border-neutral-700 flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-semibold text-white">Underground Tunnel Mapping</h2>
                                <p className="text-emerald-400 text-sm mt-1">Status: Active • Depth: 450m • Resolution: 5cm</p>
                            </div>
                        </div>

                        <div className="w-full">
                            {/* The 3D Viewer Component */}
                            <ThreeDViewer />
                        </div>

                        <div className="p-6 bg-neutral-900/50">
                            <h3 className="text-lg font-medium text-white mb-2">Technical Details</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                This visualization demonstrates a high-density point cloud generated from our autonomous ground vehicle (UGV) fleet in a subterranean mining environment.
                                The dataset consists of over 100,000 processed points, mapping track integrity, wall stability, and potential obstructions in real-time.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
