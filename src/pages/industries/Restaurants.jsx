import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import ParallaxBackground from '@/components/ParallaxBackground.jsx';
import { ArrowRight, Coffee, Wifi, Users, Star, CheckCircle, MapPin, Clock, Smartphone, Tv, Mountain } from 'lucide-react';
import restaurantImage from '@/assets/images/restaurant-long.jpg';
import analyticsImage from '@/assets/images/solutions/speed-test.png';
import captivePortalImage from '@/assets/images/solutions/cafe-captiveportal-long.png';
import customerExperienceImage from '@/assets/images/solutions/QoS-square.png';

const Restaurants = () => {
  const solutions = [
    {
      title: 'Analytics & Insights',
      description: 'Detailed customer behavior data and visit pattern analysis to drive business decisions and improve customer engagement.',
      features: [
        'Customer behavior analytics and insights',
        'Visit pattern analysis and reporting',
        'Real-time business intelligence dashboards',
        'Marketing campaign effectiveness tracking'
      ],
      image: analyticsImage,
      imageAlt: 'Analytics and insights for restaurant business intelligence'
    },
    {
      title: 'Captive Portal Solutions',
      description: 'Branded guest access with marketing integration and time management for enhanced customer experience.',
      features: [
        'Custom branded guest Wi-Fi portals',
        'Marketing integration and lead capture',
        'Time-based access management',
        'Social media integration and engagement'
      ],
      image: captivePortalImage,
      imageAlt: 'Captive portal solutions for restaurant guest access'
    },
    {
      title: 'Customer Experience Enhancement',
      description: 'WiFi solutions that drive engagement and repeat visits with seamless connectivity and interactive features.',
      features: [
        'Seamless guest connectivity experience',
        'Interactive customer engagement features',
        'Loyalty program integration',
        'Enhanced customer satisfaction metrics'
      ],
      image: customerExperienceImage,
      imageAlt: 'Customer experience enhancement for restaurants'
    }
  ];

  const caseStudies = [
    {
      title: 'Multi-Location Restaurant Chain',
      client: 'Urban Dining Group',
      challenge: 'A restaurant chain with 12 locations needed to implement customer engagement solutions and business intelligence while maintaining reliable operations connectivity.',
      solution: 'Deployed analytics and insights platform with captive portal solutions and customer experience enhancement across all locations.',
      results: [
        '25% increase in customer return visits',
        '40% improvement in marketing campaign effectiveness',
        'Enhanced customer satisfaction scores',
        'Streamlined operations with reliable connectivity'
      ],
      technologies: ['Analytics Platform', 'Captive Portal Solutions', 'Customer Engagement Tools']
    },
    {
      title: 'Boutique Cafe Digital Transformation',
      client: 'Artisan Coffee Co.',
      challenge: 'A boutique cafe needed to modernize their customer experience with digital engagement while maintaining the authentic atmosphere.',
      solution: 'Implemented customer experience enhancement solutions with branded captive portal and analytics integration.',
      results: [
        '50% increase in social media engagement',
        'Improved customer dwell time and satisfaction',
        'Enhanced brand recognition and loyalty',
        'Streamlined operations with reliable connectivity'
      ],
      technologies: ['Customer Experience Solutions', 'Branded Portal', 'Analytics Integration']
    }
  ];

  const hospitalityFeatures = [
    { icon: Smartphone, title: 'Mobile First', description: 'Optimized for smartphone and tablet usage' },
    { icon: Tv, title: 'Streaming Ready', description: '4K streaming capability for entertainment' },
    { icon: Coffee, title: 'Guest Engagement', description: 'Interactive customer experience features' },
    { icon: Star, title: 'Business Intelligence', description: 'Data-driven insights and analytics' }
  ];

  return (
    <div className="bg-background">
      <SEOHead
        title="Restaurant & Cafe Connectivity Solutions"
        description="Customer engagement and business intelligence solutions for restaurants and cafes. Analytics, captive portals, and enhanced customer experience."
        keywords="restaurant wifi, cafe connectivity, customer engagement, business intelligence, captive portal, restaurant analytics"
        canonical="/solutions/restaurants"
      />

      {/* Hero Section with Parallax Background */}
      <ParallaxBackground imageSrc={restaurantImage} overlayIntensity="strong">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center text-white">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md shadow-lg">
                  <Coffee className="h-8 w-8 text-white drop-shadow-sm" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                    Restaurants & Cafes
                  </h1>
                  <p className="text-lg text-white font-medium">Customer Engagement & Business Intelligence</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white drop-shadow-md">
                Keep your restaurant running smoothly with reliable connectivity for <span className="text-orange-400 font-semibold">POS systems, online ordering, guest Wi-Fi, and multi-location management</span>.
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
                        <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
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
                See how our connectivity solutions have transformed customer engagement and business operations.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.title} delay={300 * (index + 1)}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
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
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your <span className="zuba-accent">Customer Experience</span></h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Partner with us to create engaging customer experiences and drive business growth with intelligent connectivity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Get Started Today
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Restaurants;