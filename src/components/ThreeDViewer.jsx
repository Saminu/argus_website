import React, { useEffect, useRef, useState } from 'react';
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, PointsCloudSystem, Color4, Color3 } from '@babylonjs/core';
import { Maximize, Minimize, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const ThreeDViewer = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Create engine
        const engine = new Engine(canvasRef.current, true);

        let scene = null;

        // Create scene
        const createScene = async () => {
            scene = new Scene(engine);
            scene.clearColor = new Color4(0.05, 0.05, 0.05, 1);
            sceneRef.current = scene;

            // Camera
            // Position camera inside/near entrance
            const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2, 10, new Vector3(0, 0, 0), scene);
            camera.attachControl(canvasRef.current, true);
            camera.wheelPrecision = 50;
            camera.minZ = 0.1;
            cameraRef.current = camera;

            // Adjust camera to look down the tunnel
            camera.position = new Vector3(30, 40, 40); // Bird's eyeish view
            camera.setTarget(new Vector3(30, 0, 40)); // Center of the map roughly

            // Light
            new HemisphericLight("light", new Vector3(0, 1, 0), scene);

            try {
                const response = await fetch('/models/tunnel_points.json');
                const data = await response.json();

                // Create a point cloud system
                const pcs = new PointsCloudSystem("pcs", 1, scene);

                // Add points
                pcs.addPoints(data.length, (particle, i) => {
                    const p = data[i];
                    // [x, y, z, r, g, b]
                    particle.position = new Vector3(p[0], p[1], p[2]);
                    particle.color = new Color4(p[3], p[4], p[5], 1);
                });

                await pcs.buildMeshAsync();

            } catch (error) {
                console.error("Failed to load point cloud data:", error);
            }

            return scene;
        };

        createScene().then((createdScene) => {
            scene = createdScene;
            engine.runRenderLoop(() => {
                if (scene) scene.render();
            });
        });

        const handleResize = () => {
            engine.resize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (scene) scene.dispose();
            engine.dispose();
        };
    }, []);

    // Controls Handlers
    const handleZoomIn = () => {
        if (cameraRef.current) {
            cameraRef.current.radius -= 5;
            if (cameraRef.current.radius < 2) cameraRef.current.radius = 2;
        }
    };

    const handleZoomOut = () => {
        if (cameraRef.current) {
            cameraRef.current.radius += 5;
        }
    };

    const handleResetView = () => {
        if (cameraRef.current) {
            // Reset to Bird's Eye View
            // We can't set position directly if we want smooth radius reset, but let's just snap for now
            cameraRef.current.setPosition(new Vector3(30, 40, 40));
            cameraRef.current.setTarget(new Vector3(30, 0, 40));
        }
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    // Update state on actual fullscreen change (esc key)
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);


    return (
        <div ref={containerRef} className="relative w-full h-[600px] bg-neutral-900 group">
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', outline: 'none' }} />

            {/* Info Panel */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white p-4 rounded-lg pointer-events-none backdrop-blur-sm border border-white/10">
                <h3 className="font-bold text-lg mb-1">Mining Tunnel Beta</h3>
                <p className="text-sm text-gray-300">Underground Lidar Mapping</p>
                <div className="mt-2 text-xs text-gray-400">
                    <div>Points: ~100,000</div>
                    <div>Length: 100m</div>
                    <div>Source: Argus Scout V2</div>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button onClick={handleResetView} className="p-2 bg-black/70 text-white rounded-lg hover:bg-neutral-700 transition-colors backdrop-blur-sm border border-white/10" title="Reset View">
                    <RotateCcw size={20} />
                </button>
                <button onClick={handleZoomIn} className="p-2 bg-black/70 text-white rounded-lg hover:bg-neutral-700 transition-colors backdrop-blur-sm border border-white/10" title="Zoom In">
                    <ZoomIn size={20} />
                </button>
                <button onClick={handleZoomOut} className="p-2 bg-black/70 text-white rounded-lg hover:bg-neutral-700 transition-colors backdrop-blur-sm border border-white/10" title="Zoom Out">
                    <ZoomOut size={20} />
                </button>
                <div className="h-px bg-white/20 my-1"></div>
                <button onClick={toggleFullscreen} className="p-2 bg-emerald-600/90 text-white rounded-lg hover:bg-emerald-500 transition-colors backdrop-blur-sm shadow-lg shadow-emerald-900/20" title="Toggle Fullscreen">
                    {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                </button>
            </div>
        </div>
    );
};

export default ThreeDViewer;
