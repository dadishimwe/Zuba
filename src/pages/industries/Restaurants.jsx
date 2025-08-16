import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import ParallaxBackground from '@/components/ParallaxBackground.jsx';
import { ArrowRight, Utensils, CreditCard, Wifi, Users, CheckCircle, Coffee, Smartphone, ShoppingCart, TrendingUp, Clock, MapPin } from 'lucide-react';
import restaurantImage from '@/assets/images/restaurant-long.jpg';

const Restaurants = () => {
  const solutions = [
    {
      title: 'Point-of-Sale Reliability',
      description: 'Uninterrupted connectivity for payment processing and order management systems',
      features: ['99.9% payment uptime guarantee', 'Multiple connection redundancy', 'Real-time transaction processing', 'EMV and contactless payment support']
    },
    {
      title: 'Guest Wi-Fi & Marketing',
      description: 'Premium guest internet with integrated marketing and analytics capabilities',
      features: ['Customizable splash pages', 'Social media integration', 'Customer analytics and insights', 'Bandwidth management and controls']
    },
    {
      title: 'Online Ordering Systems',
      description: 'Seamless connectivity for delivery apps and online ordering platforms',
      features: ['Multi-platform integration', 'Real-time order synchronization', 'Kitchen display system support', 'Third-party delivery app connectivity']
    },
    {
      title: 'Multi-Location Management',
      description: 'Centralized network management for restaurant chains and franchises',
      features: ['Unified network monitoring', 'Centralized menu updates', 'Cross-location reporting', 'Standardized guest experience']
    }
  ];

  const caseStudies = [
    {
      title: 'Farm-to-Table Restaurant Chain',
      client: 'Green Valley Bistros',
      challenge: 'A 12-location farm-to-table restaurant chain needed reliable connectivity to support their POS systems, online ordering, and guest Wi-Fi while maintaining their sustainable, local brand image.',
      solution: 'Implemented Starlink Business with Peplink load balancing at each location, creating a mesh network with centralized management. Added custom guest portal featuring local farm partnerships and seasonal menu updates.',
      results: [
        '99.8% POS system uptime across all locations',
        '40% increase in online ordering revenue',
        '65% guest Wi-Fi engagement with local content',
        'Real-time inventory sync between kitchen and suppliers'
      ],
      technologies: ['Starlink Business', 'Peplink Balance 20X', 'Custom Guest Portal']
    },
    {
      title: 'Coffee Shop Network Expansion',
      client: 'Mountain Peak Coffee Co.',
      challenge: 'A growing coffee chain expanding into rural mountain towns needed reliable internet for mobile payments, loyalty programs, and remote work-friendly Wi-Fi that would attract digital nomads.',
      solution: 'Deployed Starlink Residential with Peplink routers at each mountain location, creating work-friendly environments with dedicated high-speed zones and integrated loyalty app connectivity.',
      results: [
        '200% increase in average customer dwell time',
        'Mobile payment adoption increased to 85%',
        'Loyalty program engagement up 120%',
        'Remote worker customer base grew by 300%'
      ],
      technologies: ['Starlink Residential', 'Peplink Balance 30 LTE', 'Loyalty App Integration']
    }
  ];

  const hospitalityFeatures = [
    { icon: CreditCard, title: 'Seamless Payments', description: 'Never lose a sale due to connectivity issues' },
    { icon: ShoppingCart, title: 'Order Management', description: 'Real-time sync across all ordering platforms' },
    { icon: TrendingUp, title: 'Business Analytics', description: 'Data-driven insights for better decisions' },
    { icon: Users, title: 'Guest Experience', description: 'High-speed Wi-Fi that keeps customers happy' }
  ];

  return (
    <div className="bg-background">
      <SEOHead
        title="Restaurant & Cafe Connectivity Solutions"
        description="Reliable internet solutions for restaurants, cafes, and food service businesses. POS systems, guest Wi-Fi, and online ordering connectivity."
        keywords="restaurant wifi, cafe internet, POS connectivity, food service technology, guest wifi restaurant, online ordering systems"
        canonical="/solutions/restaurants"
      />

      {/* Hero Section with Parallax Background */}
      <ParallaxBackground imageSrc={restaurantImage}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center text-white">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    Restaurants & Cafes
                  </h1>
                  <p className="text-lg text-white/90 font-medium">Connected Dining Experience</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Keep your restaurant running smoothly with reliable connectivity for POS systems, online ordering, guest Wi-Fi, and multi-location management.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white hover:bg-white/90 text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center">
                  Boost Your Restaurant Tech
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <button className="border-2 border-white hover:bg-white hover:text-foreground text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                  View POS Solutions
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Restaurant Technology Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From quick-service to fine dining, our connectivity solutions support every aspect of modern restaurant operations.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={200 * (index + 1)}>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
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

      {/* Restaurant Technology Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Modern Restaurant Operations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Today's customers expect seamless digital experiences. Our solutions ensure your technology never gets in the way of great service.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hospitalityFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={150 * (index + 1)}>
                <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Restaurant Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our connectivity solutions have improved operations and customer satisfaction for restaurants and cafes.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.title} delay={300 * (index + 1)}>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-orange-600 text-white">
                      <Coffee className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-orange-600 font-medium">{study.client}</p>
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
                            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-orange-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Serve Up Better Technology</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Partner with Zuba Broadband to implement connectivity solutions that keep your restaurant running smoothly and your customers happy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Schedule Restaurant Assessment
              </Link>
              <button className="border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                View POS Integration Guide
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Restaurants;