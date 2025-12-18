export const fleets = {
  skymako: {
    id: 'skymako',
    name: 'The SkyMako™ Ghost-Ray 260',
    tagline: 'Silent. Hover. Strike. The Apex Predator of the Skies.',
    role: 'Long-Range Industrial Scout & Signal Resilience',
    vibe: 'The SkyMako cuts through the air like a blade through water. Designed for operators who need the endurance of a glider but the agility of a helicopter, it doesn\'t just fly; it tracks. Built with shielded avionics, it is designed to maintain link stability and operate where other drones fail.',
    techSpecs: {
      'Wingspan': '2.5 Meters',
      'Body': 'Kevlar/Carbon Composite (Matte Grey Stealth)',
      'Range': '100+ km operational radius',
      'Endurance': '2.5 Hours',
      'Specialty': 'Anti-EMI (Electromagnetic Interference) Shielding'
    },
    keyFeature: {
      title: 'The "Switchblade" Flight Mode',
      description: 'Vertical takeoff using quad-rotors, seamless transition to fixed-wing flight for high-speed cruising. No runway required.'
    },
    images: [
      '/images/fleets/skymako/skymako-1.png',
      '/images/fleets/skymako/skymako-2.png',
      '/images/fleets/skymako/skymako-3.png',
      '/images/fleets/skymako/skymako-4.png',
      '/images/fleets/skymako/skymako-5.png'
    ],
    thumbnail: '/images/fleets/skymako/skymako-1.png'
  },
  barracuda: {
    id: 'barracuda',
    name: 'The Barracuda 260 "Switchblade"',
    tagline: 'Unfold. Launch. Dominate. The Pocket-Sized Powerhouse.',
    role: 'Rapid Deployment & Remote Monitoring',
    vibe: 'If the SkyMako is the ghost, the Barracuda is the knife. Compact, aggressive, and built with a "Quick-Lock" folding geometry, it’s the ultimate tool for rapid response. It fits in the trunk of a sedan and launches in under 120 seconds.',
    techSpecs: {
      'Top Speed': '110 km/h (68 mph)',
      'Deployment Time': '< 2 Minutes (Tool-less assembly)',
      'Material': 'Kevlar "Exoskeleton"',
      'Payload': '1.5kg - 2.5kg (Swappable Nose Cone)',
      'Design': 'V-Tail Aerodynamics for aggressive maneuvering'
    },
    keyFeature: {
      title: 'Quick-Lock Geometry',
      description: 'The only industrial VTOL that breaks down into a backpack-sized case. Unsnap, fold, and move out.'
    },
    images: [
      '/images/fleets/barracuda/barracuda-1.png',
      '/images/fleets/barracuda/barracuda-2.png',
      '/images/fleets/barracuda/barracuda-3.png',
      '/images/fleets/barracuda/barracuda-4.png'
    ],
    thumbnail: '/images/fleets/barracuda/barracuda-1.png'
  },
  leviathan: {
    id: 'leviathan',
    name: 'The Leviathan X8 Heavy-Lift',
    tagline: 'Gravity is just a suggestion. Lift Heavy. Fly Anywhere.',
    role: 'Heavy Logistics & Industrial Transport',
    vibe: 'The Leviathan is the Blue Whale with the attitude of a Bull. It beats the air into submission with eight massive rotors. Designed to move generators up mountains, drop supplies to stranded ships, or deliver heavy machinery to skyscrapers. It is the flying forklift of the future.',
    techSpecs: {
      'Payload Capacity': '100kg (220 lbs)',
      'Max Takeoff Weight': '~240kg',
      'Configuration': 'Coaxial Octocopter (8 Motors)',
      'Wind Resistance': 'Level 7 (Storm Ready)',
      'Safety': 'Triple-Redundant GPS & Motor Failure Protection'
    },
    keyFeature: {
      title: 'Smart-Drop System',
      description: 'Equipped with an electronic cargo hook for mid-air payload release. Hover, drop, and return without ever touching the ground.'
    },
    images: [
      '/images/fleets/leviathan/leviathan-1.png',
      '/images/fleets/leviathan/leviathan-2.jpg',
      '/images/fleets/leviathan/leviathan-3.jpg',
      '/images/fleets/leviathan/leviathan-4.png'
    ],
    thumbnail: '/images/fleets/leviathan/leviathan-1.png'
  },
  orca: {
    id: 'orca',
    name: 'The Orca Pod (Autonomous Sentinel)',
    tagline: 'The Pilot is Optional. The Mission is Permanent.',
    role: '24/7 Automated Security & Perimeter Monitoring',
    vibe: 'The Orca Pod is the hive. It is a ruggedized, weather-sealed "Drone-in-a-Box" system. You don\'t fly it; you command it. Deploy the box, set the schedule, and walk away. It launches, patrols, lands, and recharges automatically—day or night, rain or shine.',
    techSpecs: {
      'Ingress Protection': 'IP55 (Rain, Snow, Dust Proof)',
      'Charging Speed': '10% to 90% in 32 minutes',
      'Drone Sensors': '4K Visual + Thermal Infrared (Night Vision)',
      'Backup Power': '5-Hour Internal Battery for Grid Failures',
      'Control': 'Cloud-based global command center'
    },
    keyFeature: {
      title: 'The "Iron-Shell" Housing',
      description: 'Climate-controlled internals ensure the drone is ready to launch in freezing snow or desert heat. The ultimate "set it and forget it" aerial infrastructure.'
    },
    images: [
      '/images/fleets/orca/orca-1.png',
      '/images/fleets/orca/orca-2.png',
      '/images/fleets/orca/orca-3.png',
      '/images/fleets/orca/orca-4.png'
    ],
    thumbnail: '/images/fleets/orca/orca-1.png'
  },
  hammerhead: {
    id: 'hammerhead',
    name: 'The Hammerhead USV',
    tagline: 'The Surface is Just the Beginning. See What Lies Beneath.',
    role: 'Autonomous Hydrographic Survey & Industrial Marine Drone',
    vibe: 'The SkyMako owns the air; The Hammerhead owns the water. This is not a toy boat. It is a dual-hull, carbon-fiber autonomous laboratory designed to map the unknown. Whether you are scanning a harbor for submerged hazards, inspecting bridge pilings, or hunting for shipwrecks, the Hammerhead glides silently across the surface, using advanced sonar to strip away the water and reveal the floor below in high-definition 3D.',
    techSpecs: {
      'Hull Material': 'Carbon Fiber & Kevlar Composite (Corrosion Proof)',
      'Dimensions': '1.2 Meters (Portable enough for a pickup truck)',
      'Top Speed': '20 km/h (10 Knots)',
      'Endurance': '4 to 6 Hours (Swappable Battery Packs)',
      'Draft': 'Only 15cm (Operates in water too shallow for boats)',
      'Control Range': '2km Radio / Unlimited via 4G Cloud Link',
      'Payload Capacity': '15kg (Enough for heavy multi-beam sonars)'
    },
    keyFeature: {
      title: 'The "Deep-Scan" Sonar Bay',
      description: 'Features a universal "moon pool" designed to mount industry-standard equipment. Drop in a Multi-Beam Echo Sounder to create 3D maps of the riverbed, or a Side-Scan Sonar to find sunken cars, bodies, or contraband.'
    },
    images: [
      '/images/fleets/hammerhead/hammerhead-1.png',
      '/images/fleets/hammerhead/hammerhead-2.png',
      '/images/fleets/hammerhead/hammerhead-3.jpg',
      '/images/fleets/hammerhead/hammerhead-4.png',
      '/images/fleets/hammerhead/hammerhead-5.png'
    ],
    thumbnail: '/images/fleets/hammerhead/hammerhead-1.png'
  },
  piranha: {
    id: 'piranha',
    name: 'The Piranha Scout',
    tagline: 'Small. Agile. Voracious for Data.',
    role: 'Ultra-Portable Man-Portable USV',
    vibe: 'If the Hammerhead is the deep-sea cruiser, The Piranha is the river wolf. It is designed for the places big boats can\'t reach. Shallow creeks, industrial waste ponds, narrow canals, and rocky shorelines. Weighing less than a packed suitcase, you can throw the Piranha into the water from a riverbank, and it immediately starts "eating" data. It is the ultimate tool for the solo hydrographer.',
    techSpecs: {
      'Hull Design': 'High-Stability Trimaran (Carbon Fiber)',
      'Weight': '6kg (Featherweight class)',
      'Dimensions': '90cm Length (Compact)',
      'Top Speed': '6 m/s (Fast enough to fight river currents)',
      'Battery Life': '4 Hours (Standard) / 8 Hours (Long-Range Pack)',
      'Draft': 'Only 10cm (Floats in 4 inches of water)',
      'Comms Range': '2km Radio Link + 4G Cloud Bridge',
      'Payload': 'Swappable "Moon Pool" for Single-Beam Sounders or ADCPs'
    },
    keyFeature: {
      title: 'The "Pocket" Surveyor',
      description: 'Logistics are often the hardest part of a survey. The Piranha eliminates them. No crane, no truck, no ramp. You arrive, pull it out of its case, and launch. It is the rapid-response unit of the marine world.'
    },
    images: [
      '/images/fleets/piranha/piranha-1.png',
      '/images/fleets/piranha/piranha-2.png',
      '/images/fleets/piranha/piranha-3.png',
      '/images/fleets/piranha/piranha-4.jpg'
    ],
    thumbnail: '/images/fleets/piranha/piranha-1.png'
  },
  mantis: {
    id: 'mantis',
    name: 'The Mantis X6 Deep-ROV',
    tagline: 'Pressure is Irrelevant. Descend. Inspect. Recover.',
    role: 'Professional Tethered Underwater ROV',
    vibe: 'The Hammerhead scans the surface; The Mantis goes into the darkness. This is your avatar in the abyss. When the water is too deep for divers, too cold for humans, or too dangerous for life, you send in the Mantis. It is a 6-thruster omni-directional submarine that moves like a spaceship in zero gravity. It doesn\'t just look; with its robotic claw, it reaches out and touches the deep.',
    techSpecs: {
      'Max Depth': '150 Meters (492 ft) – Crush Depth Safety Factor: 200m',
      'Camera': 'Sony 4K UHD Sensor with f/2.5 Wide Angle Lens',
      'Thrusters': '6x High-Torque Industrial Motors (Sand-Proof)',
      'Speed': '2 m/s (4 Knots) in "Sport Mode"',
      'Tether': '150m Kevlar-Reinforced (Breaking force: 100kg)',
      'Claw Force': '100N Clamping Force (Strong enough to lift heavy tools)',
      'Battery': '4-Hour Dive Time (Surface Powered options available)'
    },
    keyFeature: {
      title: 'Omni-Directional "Hover"',
      description: 'The Mantis moves with 6 degrees of freedom. It can hover nose-down to inspect a pipeline on the seafloor, or roll 90 degrees to squeeze through a narrow gap in a sunken barge. It holds its position automatically, fighting the current so you can focus on the video feed.'
    },
    images: [
      '/images/fleets/mantis/mantis-1.png',
      '/images/fleets/mantis/mantis-2.png',
      '/images/fleets/mantis/mantis-3.png',
      '/images/fleets/mantis/mantis-4.png'
    ],
    thumbnail: '/images/fleets/mantis/mantis-1.png'
  }
};
