
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_PATH = path.join(__dirname, '../public/models/tunnel_points.json');

// Ensure directory exists
const dir = path.dirname(OUTPUT_PATH);
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const points = [];

// Helper functions
const rand = () => Math.random() * 2 - 1; // -1 to 1

// Jet Colormap implementation (Blue -> Cyan -> Green -> Yellow -> Red)
// val is 0.0 to 1.0
function getJetColor(val) {
    let r = 0, g = 0, b = 0;

    // Clamp
    val = Math.max(0, Math.min(1, val));

    if (val < 0.25) {
        // Blue to Cyan
        r = 0;
        g = val * 4;
        b = 1;
    } else if (val < 0.5) {
        // Cyan to Green
        r = 0;
        g = 1;
        b = 1 - (val - 0.25) * 4;
    } else if (val < 0.75) {
        // Green to Yellow
        r = (val - 0.5) * 4;
        g = 1;
        b = 0;
    } else {
        // Yellow to Red
        r = 1;
        g = 1 - (val - 0.75) * 4;
        b = 0;
    }

    return [r, g, b];
}

function generateSegment(start, end, width, height, density = 4) {
    const dx = end[0] - start[0];
    const dy = end[1] - start[1]; // Elevation change
    const dz = end[2] - start[2];

    const length = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const steps = Math.ceil(length * density); // Steps along the path

    const stepX = dx / steps;
    const stepY = dy / steps;
    const stepZ = dz / steps;

    // Perpendicular vectors for ring generation
    // Simplified: assuming tunnel mostly horizontal, so Up is Y
    // For vertical shafts this needs better math properly, but for drifts it's fine.

    for (let i = 0; i <= steps; i++) {
        const cx = start[0] + stepX * i;
        const cy = start[1] + stepY * i;
        const cz = start[2] + stepZ * i;

        // Ring generation
        const ringSteps = 60;
        for (let j = 0; j < ringSteps; j++) {
            const angle = (j / ringSteps) * Math.PI * 2;

            // Basic Shape: Rectangle with rounded corners (squircle-ish) or Ellipse
            // Let's do a noisy box profile

            let rx = Math.cos(angle);
            let ry = Math.sin(angle);

            // Boxify
            // x goes from -width/2 to width/2
            // y goes from 0 to height

            // Map circle to box profile roughly
            let px = rx * (width / 2);
            let py = ry * (height / 2) + (height / 2); // Centered vertically around height/2

            // Floor flattening
            if (Math.sin(angle) < -0.5) {
                py = 0; // Flat floor
                // Add detail to floor (tracks)
                if (Math.abs(px) < width * 0.3 && Math.random() > 0.5) {
                    py += 0.1; // Raised track bed
                }
            }

            // Roughness
            px += rand() * 0.2;
            py += rand() * 0.2;

            // World coords
            const wx = cx + px;
            const wy = cy + py;
            const wz = cz; // Approximated, technically should rotate based on segment dir

            // Coloring based on X coordinate (global heatmap)
            // Map X from -20 to 120
            const colorVal = (wx + 20) / 140;
            const [r, g, b] = getJetColor(colorVal);

            // Intensity variation (fake lighting/AO)
            const intensity = 0.6 + Math.random() * 0.4;

            points.push([
                parseFloat(wx.toFixed(3)),
                parseFloat(wy.toFixed(3)),
                parseFloat(wz.toFixed(3)),
                parseFloat((r * intensity).toFixed(3)),
                parseFloat((g * intensity).toFixed(3)),
                parseFloat((b * intensity).toFixed(3))
            ]);
        }
    }
}

console.log("Generating complex tunnel system...");

// Define Segments (Start [x,y,z], End [x,y,z], W, H)
const segments = [
    // Main Loop
    { s: [0, 0, 0], e: [0, 0, 80], w: 5, h: 4 }, // Left Hall
    { s: [0, 0, 80], e: [60, 0, 80], w: 5, h: 4 }, // Back Hall
    { s: [60, 0, 80], e: [60, 0, 0], w: 5, h: 4 }, // Right Hall
    { s: [60, 0, 0], e: [0, 0, 0], w: 5, h: 4 }, // Front Hall (Closing loop)

    // Crosscut
    { s: [0, 0, 40], e: [60, 0, 40], w: 4, h: 3.5 },

    // Dead end branch
    { s: [60, 0, 20], e: [90, 0, 20], w: 4, h: 3 },

    // Ramp down (Spiral-ish start)
    { s: [30, 0, 80], e: [30, -5, 110], w: 4.5, h: 4 },

    // Alcoves / Equipment bays
    { s: [15, 0, 0], e: [15, 0, -10], w: 6, h: 4 }, // Bay 1
];

segments.forEach(seg => {
    // Generate segment
    generateSegment(seg.s, seg.e, seg.w, seg.h);

    // Generate connections (corners) to fill gaps
    // A simple sphere of points at start and end joints can help, 
    // but pure high density segments usually overlap enough visually.
});


// Add some "Scanned Objects" (Machinery, rubble piles)
for (let i = 0; i < 20; i++) {
    const cx = Math.random() * 60;
    const cz = Math.random() * 80;
    const cy = 0.5;

    // Pile of rocks
    for (let j = 0; j < 200; j++) {
        const px = cx + rand() * 1.5;
        const pz = cz + rand() * 1.5;
        const py = cy + Math.abs(rand()) * 1;

        // Heatmap color
        const colorVal = (px + 20) / 140;
        const [r, g, b] = getJetColor(colorVal);

        points.push([px, py, pz, r, g, b]);
    }
}

const jsonContent = JSON.stringify(points);
fs.writeFileSync(OUTPUT_PATH, jsonContent);

console.log(`Generated ${points.length} points.`);
console.log(`Saved to ${OUTPUT_PATH}`);
