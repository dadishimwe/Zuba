export const BLOG_TAGS = [
  { name: 'All Posts', slug: 'all', color: 'bg-gray-200 text-gray-800' },
  { name: 'Maritime', slug: 'maritime', color: 'bg-blue-100 text-blue-700' },
  { name: 'Aviation', slug: 'aviation', color: 'bg-purple-100 text-purple-700' },
  { name: 'Emergency', slug: 'emergency', color: 'bg-red-100 text-red-700' },
  { name: 'Business', slug: 'business', color: 'bg-green-100 text-green-700' },
  { name: 'Technical', slug: 'technical', color: 'bg-yellow-100 text-yellow-700' },
  { name: 'Case Studies', slug: 'case-studies', color: 'bg-indigo-100 text-indigo-700' },
  { name: 'Remote', slug: 'remote', color: 'bg-orange-100 text-orange-700' },
  { name: 'Rural', slug: 'rural', color: 'bg-teal-100 text-teal-700' },
];

export const AUTHORS = {
  john_doe: {
    name: 'John Doe',
    title: 'Connectivity Expert',
    avatar: 'https://via.placeholder.com/150/F0F0F0/808080?text=JD',
    bio: 'John specializes in satellite communication systems and network design for challenging environments.'
  },
  jane_smith: {
    name: 'Jane Smith',
    title: 'SD-WAN Architect',
    avatar: 'https://via.placeholder.com/150/F0F0F0/808080?text=JS',
    bio: 'Jane is a certified Peplink expert, focusing on unbreakable connectivity solutions for enterprises.'
  },
  alex_chen: {
    name: 'Alex Chen',
    title: 'Field Operations Lead',
    avatar: 'https://via.placeholder.com/150/F0F0F0/808080?text=AC',
    bio: 'Alex leads our installation teams, ensuring optimal performance and rapid deployment in remote areas.'
  },
  sarah_jones: {
    name: 'Sarah Jones',
    title: 'Maritime Solutions Specialist',
    avatar: 'https://via.placeholder.com/150/F0F0F0/808080?text=SJ',
    bio: 'Sarah has extensive experience in maritime satellite internet, providing solutions for global fleets.'
  },
  mike_davis: {
    name: 'Mike Davis',
    title: 'Aviation Connectivity Engineer',
    avatar: 'https://via.placeholder.com/150/F0F0F0/808080?text=MD',
    bio: 'Mike focuses on high-speed, low-latency internet solutions for commercial and private aviation.'
  },
  emily_white: {
    name: 'Emily White',
    title: 'Rural Broadband Advocate',
    avatar: 'https://via.placeholder.com/150/F0F0F0/808080?text=EW',
    bio: 'Emily is passionate about bringing reliable internet to underserved rural communities.'
  },
  david_brown: {
    name: 'David Brown',
    title: 'Emergency Response Coordinator',
    avatar: 'https://via.placeholder.com/150/F0F0F0/808080?text=DB',
    bio: 'David specializes in rapid deployment communication systems for disaster relief and emergency services.'
  },
  lisa_green: {
    name: 'Lisa Green',
    title: 'Network Security Analyst',
    avatar: 'https://via.placeholder.com/150/F0F0F0/808080?text=LG',
    bio: 'Lisa ensures the security and integrity of our network solutions, protecting client data.'
  }
};

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Starlink Maritime: Revolutionizing Connectivity at Sea',
    excerpt: 'Discover how Starlink Maritime is transforming global shipping, offshore operations, and luxury yachting with high-speed, low-latency internet.',
    image: 'https://via.placeholder.com/800x450/F0F0F0/808080?text=Starlink+Maritime',
    author: AUTHORS.sarah_jones,
    date: '2024-07-19',
    readingTime: '7 min read',
    tags: ['maritime', 'case-studies'],
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Peplink SD-WAN: Unbreakable Connectivity for Enterprises',
    excerpt: 'Learn how Peplink\'s SpeedFusion technology ensures seamless, unbreakable internet connections for businesses, even in challenging environments.',
    image: 'https://via.placeholder.com/800x450/F0F0F0/808080?text=Peplink+SD-WAN',
    author: AUTHORS.jane_smith,
    date: '2024-07-15',
    readingTime: '6 min read',
    tags: ['technical', 'business'],
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Connecting Remote Research Stations in Antarctica',
    excerpt: 'A case study on how Zuba Broadband deployed Starlink to provide critical internet access to a remote scientific outpost in extreme conditions.',
    image: 'https://via.placeholder.com/800x450/F0F0F0/808080?text=Antarctica+Research',
    author: AUTHORS.alex_chen,
    date: '2024-07-10',
    readingTime: '8 min read',
    tags: ['remote', 'case-studies'],
    isFeatured: false,
  },
  {
    id: '4',
    title: 'The Future of In-Flight Wi-Fi with Starlink Aviation',
    excerpt: 'Explore how Starlink Aviation is setting new standards for passenger and operational connectivity on commercial and private jets.',
    image: 'https://via.placeholder.com/800x450/F0F0F0/808080?text=Starlink+Aviation',
    author: AUTHORS.mike_davis,
    date: '2024-07-05',
    readingTime: '7 min read',
    tags: ['aviation'],
    isFeatured: false,
  },
  {
    id: '5',
    title: 'Ensuring Business Continuity with Multi-WAN Solutions',
    excerpt: 'Discover strategies for maintaining uninterrupted internet access for your business using Peplink\'s multi-WAN and failover capabilities.',
    image: 'https://via.placeholder.com/800x450/F0F0F0/808080?text=Business+Continuity',
    author: AUTHORS.john_doe,
    date: '2024-06-28',
    readingTime: '5 min read',
    tags: ['business', 'technical'],
    isFeatured: false,
  },
  {
    id: '6',
    title: 'Rapid Deployment: Emergency Connectivity for Disaster Zones',
    excerpt: 'How Zuba Broadband provides critical communication infrastructure to areas affected by natural disasters, enabling faster relief efforts.',
    image: 'https://via.placeholder.com/800x450/F0F0F0/808080?text=Emergency+Response',
    author: AUTHORS.david_brown,
    date: '2024-06-20',
    readingTime: '6 min read',
    tags: ['emergency', 'case-studies'],
    isFeatured: false,
  },
  {
    id: '7',
    title: 'Bridging the Digital Divide: Starlink for Rural Communities',
    excerpt: 'Addressing the challenges of internet access in rural areas and how Starlink is providing a viable, high-speed solution for homes and small businesses.',
    image: 'https://via.placeholder.com/800x450/F0F0F0/808080?text=Rural+Internet',
    author: AUTHORS.emily_white,
    date: '2024-06-12',
    readingTime: '7 min read',
    tags: ['rural'],
    isFeatured: false,
  },
  {
    id: '8',
    title: 'Optimizing Network Performance with Peplink InControl',
    excerpt: 'A deep dive into Peplink InControl, the cloud-based management platform that simplifies network monitoring and configuration for IT professionals.',
    image: 'https://via.placeholder.com/800x450/F0F0F0/808080?text=Peplink+InControl',
    author: AUTHORS.lisa_green,
    date: '2024-06-01',
    readingTime: '5 min read',
    tags: ['technical'],
    isFeatured: false,
  }
];

// Blog post content data
export const BLOG_CONTENT = {
  '1': {
    sections: [
      {
        title: 'The Maritime Connectivity Challenge',
        content: `For decades, maritime operations have struggled with reliable internet connectivity. Traditional satellite solutions were expensive, slow, and often unreliable in harsh weather conditions. Ship operators, crew members, and passengers had to accept that being at sea meant being disconnected from the digital world.

This connectivity gap affected everything from operational efficiency and crew morale to passenger satisfaction and safety communications. Maritime companies were paying premium prices for subpar internet services that couldn't meet modern business needs.`
      },
      {
        title: 'Starlink Maritime: A Game-Changing Solution',
        content: `Starlink Maritime represents a revolutionary leap forward in ocean connectivity. Unlike traditional geostationary satellites positioned 35,000 kilometers above Earth, Starlink's low Earth orbit (LEO) constellation operates at just 550 kilometers altitude, dramatically reducing latency and improving performance.

The system delivers download speeds of up to 350 Mbps and upload speeds of up to 40 Mbps, with latency as low as 20-40ms. This performance rivals terrestrial broadband connections, enabling real-time applications previously impossible at sea.`
      },
      {
        title: 'Real-World Impact: Case Studies',
        content: `**Commercial Shipping Fleet**

A major shipping company operating 50+ vessels across global routes implemented Starlink Maritime across their fleet. The results were immediate and transformative:

• **Operational Efficiency:** Real-time cargo tracking and route optimization increased fuel efficiency by 15%
• **Crew Satisfaction:** High-speed internet access improved crew retention by 30%
• **Safety:** Enhanced weather data and emergency communications capabilities
• **Cost Savings:** Reduced communication costs by 60% compared to previous satellite solution

**Luxury Yacht Operations**

Premium yacht charters now offer guests the same internet experience they enjoy on land. Video conferencing, streaming, and social media sharing are seamless, even in remote ocean locations. This has become a significant competitive advantage in the luxury maritime market.`
      }
    ]
  },
  '2': {
    sections: [
      {
        title: 'Understanding SD-WAN Technology',
        content: `Software-Defined Wide Area Networking (SD-WAN) represents a paradigm shift in how businesses approach network connectivity. Traditional WAN solutions relied on expensive MPLS connections that were inflexible and costly to deploy and maintain.

Peplink's SD-WAN solution revolutionizes this approach by intelligently combining multiple internet connections - including cellular, satellite, fiber, and DSL - into a single, unified network that's more reliable than any individual connection.`
      },
      {
        title: 'SpeedFusion Technology: The Core Innovation',
        content: `At the heart of Peplink's solution is SpeedFusion technology, which creates encrypted tunnels between devices and intelligently distributes traffic across multiple WAN connections. This ensures:

• **Unbreakable Connectivity:** If one connection fails, traffic seamlessly continues over remaining links
• **Increased Bandwidth:** Multiple connections are bonded together for higher throughput
• **Reduced Latency:** Intelligent path selection ensures optimal performance
• **Enhanced Security:** All traffic is encrypted end-to-end`
      },
      {
        title: 'Enterprise Implementation Success Stories',
        content: `**Multi-Site Retail Chain**

A national retail chain with 200+ locations implemented Peplink SD-WAN to ensure consistent point-of-sale operations. Results included:

• 99.99% uptime across all locations
• 40% reduction in connectivity costs
• Centralized network management and monitoring
• Seamless failover during primary connection outages

**Remote Manufacturing Facility**

A manufacturing plant in rural Montana needed reliable connectivity for IoT sensors and real-time production monitoring. Peplink's solution combined Starlink satellite with cellular backup, delivering enterprise-grade reliability in a challenging location.`
      }
    ]
  }
};