const products = [
  {
    id: 1,
    name: "Marble Run Builder",
    description: "Build intricate marble tracks with wooden pieces. Watch gravity and physics in action as marbles race through your custom course.",
    price: 45,
    ageGroup: "6+",
    delivery: "Singapore & Malaysia",
    image: "marble-run.jpg",
    features: [
      "26 wooden track pieces",
      "5 glass marbles",
      "Design guide included",
      "Teaches gravity & momentum",
      "Sustainable wood finish"
    ]
  },
  {
    id: 2,
    name: "Gear Logic Puzzle",
    description: "Interlocking wooden gears that teach mechanical engineering. Arrange gears to complete circuits and solve logic challenges.",
    price: 38,
    ageGroup: "7+",
    delivery: "Singapore & Malaysia",
    image: "gear-logic.jpg",
    features: [
      "12 interlocking gears",
      "3 difficulty levels",
      "Problem-solving focus",
      "Fine motor development",
      "Non-toxic wood stain"
    ]
  },
  {
    id: 3,
    name: "Bridge Engineering Kit",
    description: "Design and build wooden bridges. Test load-bearing capacity with included weights. Learn structural engineering principles.",
    price: 52,
    ageGroup: "8+",
    delivery: "Singapore & Malaysia",
    image: "bridge-kit.jpg",
    features: [
      "40 structural pieces",
      "Testing weights included",
      "3 challenge cards",
      "Engineering blueprints",
      "Promotes spatial thinking"
    ]
  },
  {
    id: 4,
    name: "Pulley System Trainer",
    description: "Learn simple machines through hands-on pulley experiments. Build different pulley configurations to understand mechanical advantage.",
    price: 42,
    ageGroup: "7+",
    delivery: "Singapore & Malaysia",
    image: "pulley-trainer.jpg",
    features: [
      "5 wooden pulley blocks",
      "Natural fiber rope",
      "Experiment guide",
      "Physics fundamentals",
      "Eco-friendly materials"
    ]
  },
  {
    id: 5,
    name: "Catapult Constructor",
    description: "Build and calibrate your own wooden catapult. Experiment with angles, force, and projectile motion through play.",
    price: 35,
    ageGroup: "6+",
    delivery: "Singapore & Malaysia",
    image: "catapult.jpg",
    features: [
      "Fully wooden construction",
      "Adjustable angle base",
      "Target game included",
      "Physics in motion",
      "Safe foam projectiles"
    ]
  },
  {
    id: 6,
    name: "Balance Scale Explorer",
    description: "Learn measurement, weights, and equilibrium. Includes calibrated wooden weights and experiment cards.",
    price: 40,
    ageGroup: "5+",
    delivery: "Singapore & Malaysia",
    image: "balance-scale.jpg",
    features: [
      "Precision balance beam",
      "12 calibrated weights",
      "Experiment worksheets",
      "Math & physics combined",
      "Child-safe design"
    ]
  },
  {
    id: 7,
    name: "Pendulum Oscillator",
    description: "Explore wave motion and periodic movement. Adjustable pendulum lengths show how frequency changes with design.",
    price: 36,
    ageGroup: "7+",
    delivery: "Singapore & Malaysia",
    image: "pendulum.jpg",
    features: [
      "Adjustable arm lengths",
      "Sand trail maker included",
      "Wave pattern cards",
      "Rhythms & patterns",
      "Handcrafted hardwood"
    ]
  },
  {
    id: 8,
    name: "Inclined Plane Lab",
    description: "Build ramps at different angles and measure how slopes affect motion. Includes rolling balls and measurement tools.",
    price: 44,
    ageGroup: "6+",
    delivery: "Singapore & Malaysia",
    image: "inclined-plane.jpg",
    features: [
      "4 adjustable ramp angles",
      "Speed measurement guide",
      "3 test balls",
      "Friction experiments",
      "Natural wood finish"
    ]
  },
  {
    id: 9,
    name: "Lever & Load Tester",
    description: "Understand mechanical advantage with adjustable lever arms. Test how fulcrum position affects lifting power.",
    price: 39,
    ageGroup: "6+",
    delivery: "Singapore & Malaysia",
    image: "lever-tester.jpg",
    features: [
      "Adjustable fulcrum",
      "Load testing weights",
      "Challenge cards",
      "Simple machines mastery",
      "Durable construction"
    ]
  },
  {
    id: 10,
    name: "Whirligig Spinner",
    description: "Build spinning contraptions. Explore rotational motion, balance, and air resistance through creative design.",
    price: 33,
    ageGroup: "5+",
    delivery: "Singapore & Malaysia",
    image: "whirligig.jpg",
    features: [
      "Wooden rotor components",
      "Design variation guides",
      "Light materials for flight",
      "Aerodynamics learning",
      "Hours of experimentation"
    ]
  },
  {
    id: 11,
    name: "Tower Stacking Challenge",
    description: "Precision-cut blocks for tower building. Learn stability, center of gravity, and structural integrity through playful stacking.",
    price: 37,
    ageGroup: "4+",
    delivery: "Singapore & Malaysia",
    image: "tower-stacking.jpg",
    features: [
      "42 graduated wooden blocks",
      "Challenge difficulty levels",
      "Gravity concepts",
      "Fine motor skills",
      "Safe rounded edges"
    ]
  },
  {
    id: 12,
    name: "Wheel & Axle Workshop",
    description: "Build rolling machines with different wheel sizes. Discover how wheel ratios affect speed and power.",
    price: 48,
    ageGroup: "7+",
    delivery: "Singapore & Malaysia",
    image: "wheel-axle.jpg",
    features: [
      "6 wheel size variations",
      "Axle assembly kit",
      "Speed comparison guide",
      "Machine efficiency",
      "Fully assembled option available"
    ]
  },
  {
    id: 13,
    name: "Ramp & Roll Race Track",
    description: "Design competitive courses for wooden balls. Experiment with track angles, walls, and loops.",
    price: 55,
    ageGroup: "6+",
    delivery: "Singapore & Malaysia",
    image: "ramp-race.jpg",
    features: [
      "Modular track sections",
      "2 racing balls",
      "Loop & jump pieces",
      "Competitive play",
      "Engineering challenges"
    ]
  },
  {
    id: 14,
    name: "Friction & Grip Experiment Kit",
    description: "Test different surface textures and their effect on motion. Build understanding of friction through hands-on discovery.",
    price: 41,
    ageGroup: "6+",
    delivery: "Singapore & Malaysia",
    image: "friction-kit.jpg",
    features: [
      "8 different surface textures",
      "Ramp base included",
      "Measurement cards",
      "Real-world physics",
      "Eco-friendly materials"
    ]
  },
  {
    id: 15,
    name: "Compound Machines Builder",
    description: "Combine multiple simple machines into one complex system. Advanced STEM challenge for young engineers.",
    price: 65,
    ageGroup: "8+",
    delivery: "Singapore & Malaysia",
    image: "compound-machines.jpg",
    features: [
      "Lever, pulley & gear combo",
      "Engineering blueprint set",
      "3 challenge projects",
      "Advanced concepts",
      "Premium wood quality"
    ]
  }
];
