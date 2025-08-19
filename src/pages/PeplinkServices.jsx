import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import ParallaxBackground from '@/components/ParallaxBackground.jsx';
import { ArrowRight, Download, Play, Layers, Network, Zap, Shield, Router, Activity, Monitor, Settings } from 'lucide-react';

// Import the long image
import peplinkLongImage from '@/assets/images/peplink-long.png';
import peplinkLogo from '@/assets/logos/peplink-logo.png';

const PeplinkServices = () => {
  const peplinkSolutions = [
    {
      name: 'Balance 20X',
      category: 'Small Business',
      price: 'From $399',
      throughput: '600 Mbps',
      description: 'Dual-WAN router for small offices',
      features: ['2 WAN ports', 'Wi-Fi 6 ready', 'SpeedFusion Hot Failover', 'InControl 2 ready']
    },
    {
      name: 'Balance 310X',
      category: 'Enterprise',
      price: 'From $799',
      throughput: '2.5 Gbps',
      description: 'High-performance SD-WAN gateway',
      features: ['3 WAN ports', 'SpeedFusion Engine', 'Advanced QoS', 'Enterprise security']
    },
    {
      name: 'Balance 580',
      category: 'Data Center',
      price: 'From $1,999',
      throughput: '5 Gbps',
      description: 'Enterprise-grade SD-WAN appliance',
      features: ['8 WAN ports', 'Redundant power', 'High availability', 'Advanced analytics']
    },
    {
      name: 'Pepwave MAX',
      category: 'Mobile',
      price: 'From $1,299',
      throughput: '400 Mbps',
      description: 'Rugged mobile connectivity router',
      features: ['Cellular + Wi-Fi WAN', 'GPS tracking', 'Remote management', 'Vehicle mounting']
    }
  ];

  const datasheets = [
    {
      title: 'Balance Series Overview',
      description: 'Complete product line specifications and comparison',
      fileSize: '3.2 MB',
      type: 'PDF'
    },
    {
      title: 'SpeedFusion Technology',
      description: 'Technical whitepaper on bonding technology',
      fileSize: '2.8 MB',
      type: 'PDF'
    },
    {
      title: 'InControl 2 Platform',
      description: 'Cloud management platform specifications',
      fileSize: '4.1 MB',
      type: 'PDF'
    },
    {
      title: 'Deployment Guide',
      description: 'Best practices for SD-WAN implementation',
      fileSize: '6.3 MB',
      type: 'PDF'
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <SEOHead
        title="Peplink Services"
        description="Professional Peplink SD-WAN solutions, SpeedFusion technology, and unbreakable connectivity for enterprises, mobile, and remote deployments."
        keywords="Peplink services, SD-WAN, SpeedFusion, Balance routers, Pepwave MAX, enterprise networking, bonding technology"
        canonical="/peplink-services"
      />

      {/* Hero Section with Parallax Background */}
      <ParallaxBackground imageSrc={peplinkLongImage} overlayIntensity="strong">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <FadeIn>
              <img
                src={peplinkLogo}
                alt="Peplink"
                className="h-20 w-auto mx-auto mb-8"
              />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                <span className="text-orange-600">Unbreakable</span>
                <span className="block text-white">Connectivity</span>
              </h1>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl leading-relaxed drop-shadow-md">
                Advanced SD-WAN solutions with <span className="zuba-blue">SpeedFusion technology</span> for enterprise-grade network reliability and performance.
              </p>
            </FadeIn>
            <FadeIn delay={600}>
              <Link to="/contact" className="btn-primary bg-orange-600 hover:bg-orange-700 text-white border-orange-600">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </ParallaxBackground>

      {/* Peplink Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Peplink Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade SD-WAN solutions for every deployment scenario
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {peplinkSolutions.map((solution, index) => (
              <FadeIn key={solution.name} delay={200 * (index + 1)}>
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-orange-100 font-medium mb-1">{solution.category}</div>
                        <h3 className="text-2xl font-bold mb-2">{solution.name}</h3>
                        <div className="text-orange-100 font-medium">{solution.throughput}</div>
                      </div>
                      <Router className="h-12 w-12 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                    <div className="space-y-3 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-gray-100 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white text-gray-700 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:bg-orange-50">
                      Learn More
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Management Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  <span className="text-orange-600">InControl 2</span> Management
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Comprehensive cloud-based management platform for monitoring, configuring, and optimizing your entire network infrastructure from anywhere.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-700">
                    <Activity className="h-5 w-5 text-orange-500 mr-3" />
                    Real-time network monitoring and analytics
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Settings className="h-5 w-5 text-orange-500 mr-3" />
                    Centralized configuration management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Shield className="h-5 w-5 text-orange-500 mr-3" />
                    Advanced security and compliance tools
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Zap className="h-5 w-5 text-orange-500 mr-3" />
                    Automated load balancing and optimization
                  </li>
                </ul>
                <Link to="/contact" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center">
                  Schedule Demo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </FadeIn>
            </div>
            <div className="lg:col-span-6">
              <FadeIn delay={400} direction="right">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                      <p className="text-gray-700 text-lg">InControl 2 Demo</p>
                      <p className="text-gray-500 text-sm">Interactive dashboard preview</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Peplink Management Console</h3>
                    <p className="text-gray-600">Centralized network control and monitoring interface</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 text-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">SpeedFusion Technology</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Revolutionary bonding technology that combines multiple internet connections into a single, unbreakable network
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={200}>
              <div className="text-center">
                <div className="h-16 w-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Layers className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">WAN Bonding</h3>
                <p className="text-gray-600">
                  Combine multiple internet connections for increased bandwidth and redundancy
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="text-center">
                <div className="h-16 w-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Hot Failover</h3>
                <p className="text-gray-600">
                  Seamless switching between connections with zero packet loss
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={600}>
              <div className="text-center">
                <div className="h-16 w-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Load Balancing</h3>
                <p className="text-gray-600">
                  Intelligent traffic distribution for optimal performance
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Datasheets Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Technical Documentation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access comprehensive specifications, deployment guides, and technical resources
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {datasheets.map((sheet, index) => (
              <FadeIn key={sheet.title} delay={100 * (index + 1)}>
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <Download className="h-8 w-8 text-orange-500 group-hover:text-orange-600 transition-colors" />
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">{sheet.type}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors text-gray-900">
                    {sheet.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{sheet.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{sheet.fileSize}</span>
                    <span className="group-hover:text-orange-600 transition-colors">Download →</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 text-gray-900">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Network</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the power of unbreakable connectivity with Peplink SD-WAN solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Request Quote
              </button>
              <Link to="/contact" className="border-2 border-orange-500 hover:bg-orange-500 hover:text-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Schedule Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default PeplinkServices;