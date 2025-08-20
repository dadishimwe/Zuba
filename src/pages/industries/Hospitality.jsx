import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import ParallaxBackground from '@/components/ParallaxBackground.jsx';
import { ArrowRight, Hotel, Wifi, Users, Star, CheckCircle, MapPin, Clock, Smartphone, Tv, Coffee, Mountain } from 'lucide-react';
import hotelImage from '@/assets/images/hotel-long.jpg';
import highSpeedImage from '@/assets/images/solutions/speed-test.png';
import qosImage from '@/assets/images/solutions/QoS-square.png';
import iotImage from '@/assets/images/solutions/IoT-long.png';
import lodgeCaseStudyImage from '@/assets/images/case_studies/lodge-case-study.jpg';

const Hospitality = () => {
  const solutions = [
    {
      title: 'High-Speed Internet',
      description: 'Premium connectivity supporting guest satisfaction and operational needs with enterprise-grade bandwidth and reliability.',
      features: [
        'Gigabit-speed connectivity for guest satisfaction',
        'Seamless streaming and video conferencing support',
        'Reliable connectivity for business travelers',
        'Scalable bandwidth to handle peak occupancy'
      ],
      image: highSpeedImage,
      imageAlt: 'High-speed internet connectivity for hotels'
    },
    {
      title: 'Quality of Service Management',
      description: 'Intelligent network separation between staff operations and guest access with prioritized bandwidth allocation.',
      features: [
        'Separate networks for guests and operations',
        'Bandwidth prioritization for critical systems',
        'Guest portal with usage controls',
        'Staff network with enhanced security'
      ],
      image: qosImage,
      imageAlt: 'Quality of service management for hospitality'
    },
    {
      title: 'IoT Control Systems',
      description: 'Centralized management of smart room technology and building automation for enhanced guest experience.',
      features: [
        'Smart room temperature and lighting control',
        'Centralized building management systems',
        'Energy efficiency monitoring and optimization',
        'Integration with guest mobile apps'
      ],
      image: iotImage,
      imageAlt: 'IoT control systems for hospitality'
    }
  ];

  const caseStudies = [
    {
      title: 'Remote Luxury Lodge Connectivity',
      client: 'Mountain Peak Lodge',
      challenge: 'A remote luxury lodge needed to upgrade their infrastructure to provide modern connectivity for guests while maintaining operational efficiency, facing challenges with low speeds and outdated infrastructure.',
      solution: 'Implemented comprehensive connectivity solution with guest and staff network separation, cellular backup systems, SD-WAN technology, and advanced analytics for optimal guest experience.',
      results: [
        'Enhanced guest satisfaction with high-speed connectivity',
        'Improved operational efficiency with staff network separation',
        'Reliable connectivity with cellular backup systems',
        'Advanced analytics for guest behavior insights'
      ],
      technologies: ['Network Separation', 'Cellular Backup', 'SD-WAN Solutions', 'Guest Analytics']
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
      <ParallaxBackground imageSrc={hotelImage} overlayIntensity="strong">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center text-white">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md shadow-lg">
                  <Hotel className="h-8 w-8 text-white drop-shadow-sm" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                    <span className="zuba-accent">Hotels</span> & Hospitality
                  </h1>
                  <p className="text-lg text-white font-medium">Exceptional Guest Experience & Operational Efficiency</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white drop-shadow-md">
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

      {/* Solutions with Alternating Layout */}
      {solutions.map((solution, index) => (
        <section key={solution.title} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <FadeIn>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{solution.title}</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-4">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <FadeIn delay={200}>
                  <div className="relative">
                    <img
                      src={solution.image}
                      alt={solution.imageAlt}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}

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
                Real-world implementations demonstrating the impact of our connectivity solutions in luxury hospitality.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Case Study Content */}
            <FadeIn>
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-orange-600 text-white">
                    <Hotel className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{caseStudies[0].title}</h3>
                    <p className="text-orange-600 font-medium">{caseStudies[0].client}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Challenge</h4>
                    <p className="text-gray-600 leading-relaxed">{caseStudies[0].challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Solution</h4>
                    <p className="text-gray-600 leading-relaxed">{caseStudies[0].solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Results</h4>
                    <ul className="space-y-3">
                      {caseStudies[0].results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudies[0].technologies.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Case Study Image */}
            <FadeIn delay={200}>
              <div className="relative">
                <img
                  src={lodgeCaseStudyImage}
                  alt="Remote Luxury Lodge Connectivity"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Floating stats card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-orange-600">100%</div>
                      <div className="text-xs text-gray-600">Guest Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">24/7</div>
                      <div className="text-xs text-gray-600">Backup Systems</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your <span className="zuba-accent">Guest Experience</span></h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Partner with us to create exceptional guest experiences with reliable, high-speed connectivity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Get Started Today
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Hospitality;