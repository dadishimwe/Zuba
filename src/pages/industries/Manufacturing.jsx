import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import ParallaxBackground from '@/components/ParallaxBackground.jsx';
import { ArrowRight, Factory, Shield, Lock, Activity, CheckCircle, Users, Clock, Globe, Zap, Monitor } from 'lucide-react';
import industrialImage from '@/assets/images/industrial-long.jpg';
import monitoringImage from '@/assets/images/solutions/24:7-square.png';
import vpnImage from '@/assets/images/solutions/peplink-vpn.png';
import iotImage from '@/assets/images/solutions/IoT-image.jpg';

const Manufacturing = () => {
  const solutions = [
    {
      title: '24/7 Network Monitoring',
      description: 'Continuous oversight preventing costly production downtime with real-time monitoring and proactive alert systems.',
      features: [
        'Real-time network performance monitoring',
        'Proactive alert systems for potential issues',
        'Automated failover and recovery procedures',
        'Comprehensive reporting and analytics'
      ],
      image: monitoringImage,
      imageAlt: '24/7 network monitoring for manufacturing'
    },
    {
      title: 'Site-to-Site VPN',
      description: 'Secure connectivity linking production facilities, warehouses, and offices with encrypted data transmission.',
      features: [
        'Encrypted connections between facilities',
        'Secure data transmission across locations',
        'Centralized network management',
        'Compliance with industrial security standards'
      ],
      image: vpnImage,
      imageAlt: 'Site-to-site VPN for manufacturing facilities'
    },
    {
      title: 'Industrial Network Reliability',
      description: 'Ruggedized solutions supporting modern manufacturing operations with enterprise-grade reliability.',
      features: [
        'Ruggedized equipment for harsh environments',
        'Enterprise-grade reliability and uptime',
        'Scalable network infrastructure',
        'Integration with industrial automation systems'
      ],
      image: iotImage,
      imageAlt: 'Industrial network reliability for manufacturing'
    }
  ];

  const caseStudies = [
    {
      title: 'Automotive Manufacturing Network',
      client: 'Precision Auto Manufacturing',
      challenge: 'A large automotive manufacturing facility needed to implement reliable network infrastructure to support modern production systems while ensuring security and operational continuity.',
      solution: 'Deployed 24/7 network monitoring with site-to-site VPN connectivity and industrial network reliability solutions across all production facilities.',
      results: [
        '99.9% network uptime across all production lines',
        '50% reduction in production downtime',
        'Enhanced security for sensitive manufacturing data',
        'Streamlined operations with centralized management'
      ],
      technologies: ['24/7 Monitoring', 'Site-to-Site VPN', 'Industrial Network Solutions']
    },
    {
      title: 'Multi-Site Manufacturing Operations',
      client: 'Global Manufacturing Corp',
      challenge: 'A manufacturing company with 8 production facilities needed secure, reliable connectivity between all locations while maintaining operational efficiency.',
      solution: 'Implemented comprehensive network monitoring and VPN solutions with industrial-grade reliability across all manufacturing sites.',
      results: [
        'Seamless connectivity between all facilities',
        'Improved production coordination and efficiency',
        'Enhanced data security and compliance',
        'Reduced operational costs through centralized management'
      ],
      technologies: ['Network Monitoring', 'VPN Solutions', 'Industrial Reliability']
    }
  ];

  const industryFeatures = [
    { icon: Monitor, title: 'Real-time Monitoring', description: 'Continuous oversight of network performance' },
    { icon: Shield, title: 'Industrial Security', description: 'Enterprise-grade security for manufacturing' },
    { icon: Activity, title: 'Automation Integration', description: 'Seamless integration with production systems' },
    { icon: Zap, title: 'High Reliability', description: '99.9% uptime for critical operations' }
  ];

  return (
    <div className="bg-background">
      <SEOHead
        title="Manufacturing & Industrial Connectivity Solutions"
        description="Reliable operations and secure communications for manufacturing and industrial facilities. 24/7 monitoring, site-to-site VPN, and industrial network reliability."
        keywords="manufacturing connectivity, industrial internet, factory network, production connectivity, industrial automation, manufacturing technology"
        canonical="/solutions/manufacturing"
      />

      {/* Hero Section with Parallax Background */}
      <ParallaxBackground imageSrc={industrialImage} overlayIntensity="strong">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center text-white">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md shadow-lg">
                  <Factory className="h-8 w-8 text-white drop-shadow-sm" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                    Manufacturing & Industrial
                  </h1>
                  <p className="text-lg text-white font-medium">Reliable Operations & Secure Communications</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white drop-shadow-md">
                Power your smart factory with industrial-grade connectivity solutions supporting <span className="text-orange-400 font-semibold">IoT, automation, and operational technology systems</span>.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white hover:bg-white/90 text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center">
                  Digitize Your Operations
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <button className="border-2 border-white hover:bg-white hover:text-foreground text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                  Industrial IoT Guide
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
                        <CheckCircle className="h-6 w-6 text-gray-600 flex-shrink-0 mt-0.5" />
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

      {/* Industry 4.0 Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industry 4.0 Transformation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enable smart manufacturing with connectivity solutions that support the digital transformation of your operations.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={150 * (index + 1)}>
                <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Manufacturing Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our connectivity solutions have transformed manufacturing operations and improved efficiency.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.title} delay={300 * (index + 1)}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gray-700 text-white">
                      <Factory className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-gray-600 font-medium">{study.client}</p>
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
                            <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
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
      <section className="py-20 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your <span className="zuba-accent">Manufacturing Operations</span></h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Partner with us to implement reliable, secure connectivity solutions that drive manufacturing efficiency and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-gray-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Get Started Today
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;