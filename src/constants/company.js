// Zuba Broadband Technology Company Information
export const COMPANY_INFO = {
  name: "Zuba Broadband Technology",
  tagline: "Connecting the Unconnected",
  description: "Authorized Starlink and Peplink reseller providing satellite internet and SD-WAN solutions for businesses, remote locations, maritime, aviation, and residential customers.",
  
  // Contact Information
  contact: {
    phone: "(+250) 0790 099 777",
    email: "sales@zubabroadband.com",
    support: "support@zubabroadband.com",
    sales: "sales@zubabroadband.com",
    address: {
      street: "KG 569 St",
      city: "Kigali",
      state: "",
      zip: "",
      country: "Rwanda"
    }
  },

  // Service Areas
  serviceAreas: [
    "North America",
    "Maritime International Waters",
    "Remote Industrial Sites",
    "Aviation Routes",
    "Emergency Response Zones"
  ],

  // Certifications and Partnerships
  certifications: [
    "Authorized Starlink Reseller",
    "Certified Peplink Partner",
    "FCC Licensed",
    "ISO 9001:2015 Certified",
    "NATE Tower Technician Certified"
  ],

  // Company Stats
  stats: {
    yearsInBusiness: 8,
    customersSatisfied: "2,500+",
    projectsCompleted: "5,000+",
    uptimeGuarantee: "99.9%",
    coverageAreas: 150,
    responseTime: "< 4 hours"
  },

  // Social Media
  social: {
    linkedin: "https://linkedin.com/company/zuba-broadband",
    twitter: "https://twitter.com/zubabroadband",
    facebook: "https://facebook.com/zubabroadband",
    youtube: "https://youtube.com/@zubabroadband"
  },

  // Service Areas
  serviceAreas: [
    "North America",
    "Europe", 
    "Asia-Pacific",
    "Maritime Global",
    "Aviation Worldwide"
  ]
}

// Starlink Services
export const STARLINK_SERVICES = {
  residential: {
    name: "Starlink Residential",
    speeds: "25-100 Mbps",
    latency: "25-60ms",
    pricing: "Starting at $120/month",
    features: [
      "High-speed internet anywhere",
      "Easy self-installation",
      "No long-term contracts",
      "Weather resistant equipment"
    ]
  },
  business: {
    name: "Starlink Business",
    speeds: "40-220 Mbps",
    latency: "20-40ms", 
    pricing: "Starting at $500/month",
    features: [
      "Priority bandwidth",
      "24/7 customer support",
      "Service level agreements",
      "Advanced networking features"
    ]
  },
  maritime: {
    name: "Starlink Maritime",
    speeds: "50-200 Mbps",
    latency: "20-60ms",
    pricing: "Contact for pricing",
    features: [
      "Global ocean coverage",
      "Maritime-grade equipment",
      "Flexible data plans",
      "Real-time vessel tracking"
    ]
  },
  aviation: {
    name: "Starlink Aviation",
    speeds: "Up to 350 Mbps",
    latency: "20-40ms",
    pricing: "Contact for pricing",
    features: [
      "Gate-to-gate connectivity",
      "Low-profile antenna",
      "Passenger and crew use",
      "Global flight coverage"
    ]
  }
}

// Peplink Solutions
export const PEPLINK_SOLUTIONS = {
  balance: {
    name: "Balance Series",
    description: "Multi-WAN routers for business connectivity",
    models: ["Balance 20X", "Balance 210", "Balance 310X", "Balance 580"],
    features: [
      "Load balancing across multiple connections",
      "Automatic failover",
      "VPN capabilities",
      "Bandwidth monitoring"
    ]
  },
  max: {
    name: "MAX Series",
    description: "Mobile connectivity solutions",
    models: ["MAX BR1 Pro 5G", "MAX HD4", "MAX Transit"],
    features: [
      "5G/LTE connectivity", 
      "GPS tracking",
      "Rugged design",
      "Remote management"
    ]
  },
  speedFusion: {
    name: "SpeedFusion Technology",
    description: "Bonding technology for unbreakable connectivity",
    features: [
      "Bandwidth bonding",
      "WAN smoothing",
      "Hot failover",
      "Forward error correction"
    ]
  }
}

// Industries Served
export const INDUSTRIES = {
  maritime: {
    name: "Maritime",
    description: "Reliable connectivity for vessels at sea",
    solutions: ["Starlink Maritime", "Peplink MAX series", "Network design"],
    caseStudies: ["Fishing fleet connectivity", "Cruise ship internet"]
  },
  aviation: {
    name: "Aviation", 
    description: "In-flight connectivity solutions",
    solutions: ["Starlink Aviation", "Ground operations", "Passenger Wi-Fi"],
    caseStudies: ["Corporate jet connectivity", "Charter airline solutions"]
  },
  remote: {
    name: "Remote Sites",
    description: "Connectivity for isolated locations",
    solutions: ["Starlink Business", "Backup connectivity", "Network infrastructure"],
    caseStudies: ["Mining operations", "Construction sites"]
  },
  emergency: {
    name: "Emergency Services",
    description: "Critical communications infrastructure",
    solutions: ["Rapid deployment", "Mobile command centers", "Backup systems"],
    caseStudies: ["Disaster response", "Emergency medical services"]
  },
  residential: {
    name: "Residential",
    description: "High-speed internet for homes",
    solutions: ["Starlink Residential", "Home networking", "Technical support"],
    caseStudies: ["Rural home connectivity", "Urban backup internet"]
  },
  business: {
    name: "Business Enterprise", 
    description: "Scalable connectivity solutions",
    solutions: ["Starlink Business", "SD-WAN", "Managed services"],
    caseStudies: ["Multi-location retail", "Remote office connectivity"]
  }
}

// Navigation Structure
export const NAVIGATION = [
  { name: "Home", path: "/", preview: "Hero and company overview" },
  { name: "Services", path: "/services", preview: "Starlink and Peplink offerings" },
  { name: "Solutions", path: "/solutions", preview: "Industry-specific connectivity" },
  { name: "About", path: "/about", preview: "Company information and team" },
  { name: "Case Studies", path: "/case-studies", preview: "Success stories and projects" },
  { name: "Contact", path: "/contact", preview: "Get in touch and request quote" }
]