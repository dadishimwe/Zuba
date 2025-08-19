import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import ParallaxBackground from '@/components/ParallaxBackground.jsx';
import { ArrowRight, Hotel, Wifi, Users, Star, CheckCircle, MapPin, Clock, Smartphone, Tv, Coffee, Mountain } from 'lucide-react';
import hotelImage from '@/assets/images/hotel-long.jpg';

const Hospitality = () => {
  const solutions = [
    {
      title: 'Guest Wi-Fi Excellence',
      description: 'High-speed, reliable internet access that exceeds guest expectations',
      features: ['Up to 1Gbps speeds per room', 'Seamless device connectivity', 'Captive portal customization', 'Usage analytics and controls']
    },
    {
      title: 'Property Management Systems',
      description: 'Reliable connectivity for hotel operations and management software',
      features: ['PMS integration support', 'Reservation system connectivity', 'Key card system reliability', 'Housekeeping app connectivity']
    },
    {
      title: 'Point-of-Sale Solutions',
      description: 'Secure, fast connections for restaurant, spa, and retail operations',
      features: ['Payment processing reliability', 'Inventory management systems', 'Staff scheduling applications', 'Guest billing integration']
    },
    {
      title: 'Remote Location Coverage',
      description: 'Satellite connectivity for luxury lodges and remote destinations',
      features: ['Global satellite coverage', 'Weather-resistant equipment', 'Backup connectivity options', 'Remote monitoring capabilities']
    }
  ];

  const caseStudies = [
    {
      title: 'Luxury Safari Lodge Network',
      client: 'African Wildlife Resorts',
      challenge: 'A chain of 12 luxury safari lodges across remote locations in Kenya and Tanzania needed reliable internet for guests and operations, despite being hundreds of miles from any terrestrial infrastructure.',
      solution: 'Deployed Starlink Maritime terminals at each lodge with Peplink routers for load balancing and failover. Implemented guest portal system with usage controls and premium bandwidth options.',
      results: [
        '99.5% guest satisfaction with internet connectivity',
        '300% increase in direct bookings through online presence',
        'Operational efficiency improved by 45%',
        'Real-time wildlife tracking system implementation'
      ],
      technologies: ['Starlink Maritime', 'Peplink MAX BR1 Pro', 'UniFi Access Points']
    },
    {
      title: 'Boutique Hotel Chain Upgrade',
      client: 'Heritage Hotels Collection',
      challenge: 'A 25-property boutique hotel chain needed to upgrade from unreliable DSL connections to support modern guest expectations and cloud-based property management systems.',
      solution: 'Implemented Starlink Business with Peplink SD-WAN across all properties, creating a unified network with centralized management and guest portal branding.',
      results: [
        'Guest Wi-Fi complaints reduced by 92%',
        'TripAdvisor ratings improved from 3.8 to 4.6 stars',
        'Cloud PMS response times improved by 70%',
        'Staff productivity increased with reliable mobile apps'
      ],
      technologies: ['Starlink Business', 'Peplink Balance 20X', 'Custom Guest Portal']
    }
  ];

  const guestExperience = [
    { icon: Smartphone, title: 'Mobile First', description: 'Optimized for smartphone and tablet usage' },
    { icon: Tv, title: 'Streaming Ready', description: '4K streaming capability in every room' },
    { icon: Coffee, title: 'Lobby Connectivity', description: 'High-capacity shared spaces' },
    { icon: Star, title: 'Premium Tiers', description: 'Upsell opportunities with faster speeds' }
  ];

  return (
    <div className="bg-background">
      <SEOHead
        title="Hospitality Connectivity Solutions"
        description="Premium guest Wi-Fi and operational connectivity for hotels, resorts, lodges, and hospitality venues. Enhance guest experience with reliable internet."
        keywords="hotel wifi, guest internet, hospitality connectivity, resort internet, lodge wifi, property management systems"
        canonical="/solutions/hospitality"
      />

      {/* Hero Section with Parallax Background */}
      <ParallaxBackground imageSrc={hotelImage}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center text-white">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                  <Hotel className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    <span className="zuba-accent">Hotels</span> & Hospitality
                  </h1>
                  <p className="text-lg text-white font-medium">Premium Guest Experience</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white">
                Transform your guest experience with <span className="text-orange-400 font-semibold">enterprise-grade Wi-Fi</span> and operational connectivity that exceeds expectations and drives positive reviews.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white hover:bg-white/90 text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center">
                  Enhance Guest Experience
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <button className="border-2 border-white hover:bg-white hover:text-foreground text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                  Guest Wi-Fi Demo
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </ParallaxBackground>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Hospitality Technology Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive connectivity solutions designed to enhance guest experience and streamline operations.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={200 * (index + 1)}>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Experience Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Modern Guest Expectations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Today's travelers expect seamless connectivity. Our solutions deliver internet that rivals home broadband speeds.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guestExperience.map((feature, index) => (
              <FadeIn key={feature.title} delay={150 * (index + 1)}>
                <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Hospitality Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our connectivity solutions have transformed guest experiences and operational efficiency.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.title} delay={300 * (index + 1)}>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-amber-600 text-white">
                      <Mountain className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-amber-600 font-medium">{study.client}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Star className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-amber-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Guest Experience</h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Partner with Zuba Broadband to deliver the premium connectivity experience your guests expect and deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Schedule Property Assessment
              </Link>
              <button className="border-2 border-white hover:bg-white hover:text-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                View Guest Portal Demo
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Hospitality;