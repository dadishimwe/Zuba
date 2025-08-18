import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import ParallaxBackground from '@/components/ParallaxBackground.jsx';
import { ArrowRight, Download, Play, Satellite, Globe, Zap, Shield, Signal, Wifi, Monitor } from 'lucide-react';

// Import the long image
import starlinkLongImage from '@/assets/images/starlink-long.png';
import starlinkLightLogo from '@/assets/logos/starlink-light-logo.png';

const StarlinkServices = () => {
  const starlinkPlans = [
    {
      name: 'Starlink Residential',
      price: '$120/month',
      speed: 'Up to 200 Mbps',
      description: 'High-speed broadband internet for homes',
      features: ['No data caps', 'Easy self-installation', '30-day trial', 'Suitable for 4K streaming']
    },
    {
      name: 'Starlink Business',
      price: '$250/month',
      speed: 'Up to 350 Mbps',
      description: 'Priority connectivity for businesses',
      features: ['Lower latency', 'Higher upload speeds', 'Priority support', 'Business-grade reliability']
    },
    {
      name: 'Starlink Maritime',
      price: '$5,000/month',
      speed: 'Up to 350 Mbps',
      description: 'Global connectivity for vessels',
      features: ['Ocean coverage', 'Multiple beam switching', 'Weather resilient', 'Real-time tracking']
    },
    {
      name: 'Starlink Aviation',
      price: 'Custom pricing',
      speed: 'Up to 350 Mbps', 
      description: 'In-flight Wi-Fi for aircraft',
      features: ['Global flight routes', 'Low latency', 'Easy installation', 'Regulatory compliance']
    }
  ];

  const datasheets = [
    {
      title: 'Starlink Standard Kit',
      description: 'Complete specifications for residential Starlink kit',
      fileSize: '2.4 MB',
      type: 'PDF'
    },
    {
      title: 'Starlink Business Kit',
      description: 'Enterprise-grade Starlink specifications',
      fileSize: '3.1 MB',
      type: 'PDF'
    },
    {
      title: 'Starlink Maritime Kit',
      description: 'Marine-grade hardware specifications',
      fileSize: '4.2 MB',
      type: 'PDF'
    },
    {
      title: 'Installation Guide',
      description: 'Step-by-step installation instructions',
      fileSize: '5.8 MB',
      type: 'PDF'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <SEOHead
        title="Starlink Services"
        description="Comprehensive Starlink satellite internet solutions for residential, business, maritime, and aviation applications. High-speed, low-latency connectivity anywhere."
        keywords="Starlink services, satellite internet, Starlink residential, Starlink business, Starlink maritime, Starlink aviation"
        canonical="/starlink-services"
      />

      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <FadeIn>
              <img
                src={starlinkLightLogo}
                alt="Starlink"
                className="h-20 w-auto mx-auto mb-8"
              />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                <span className="text-white">Starlink</span>
                <span className="block text-gray-300">Satellite Internet</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                High-speed, low-latency satellite internet for reliable connectivity anywhere on Earth. From residential to enterprise, maritime to aviation applications.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <Link to="/contact" className="btn-primary bg-white text-gray-900 hover:bg-gray-100">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Starlink Plans */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Starlink Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the right Starlink solution for your connectivity needs
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {starlinkPlans.map((plan, index) => (
              <FadeIn key={plan.name} delay={200 * (index + 1)}>
                <div className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 group">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <div className="text-blue-100 font-medium">{plan.speed}</div>
                      </div>
                      <Signal className="h-12 w-12 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-6 leading-relaxed">{plan.description}</p>
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white text-gray-300 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:bg-gray-700">
                      Get Quote
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Video Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Manage with <span className="text-blue-400">Intelligence</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Our advanced dashboard provides real-time monitoring, performance analytics, and intelligent management of your Starlink network.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <Monitor className="h-5 w-5 text-blue-400 mr-3" />
                    Real-time performance monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Wifi className="h-5 w-5 text-blue-400 mr-3" />
                    Network optimization tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Shield className="h-5 w-5 text-blue-400 mr-3" />
                    Security and access controls
                  </li>
                </ul>
                <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center">
                  Request Demo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </FadeIn>
            </div>
            <div className="lg:col-span-6">
              <FadeIn delay={400} direction="right">
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
                  <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-300 text-lg">Dashboard Demo Video</p>
                      <p className="text-gray-500 text-sm">Coming Soon</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">Starlink Management Dashboard</h3>
                    <p className="text-gray-400">Comprehensive network monitoring and control interface</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Datasheets Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download detailed specifications and installation guides for all Starlink products
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {datasheets.map((sheet, index) => (
              <FadeIn key={sheet.title} delay={100 * (index + 1)}>
                <div className="bg-black border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <Download className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">{sheet.type}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {sheet.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{sheet.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{sheet.fileSize}</span>
                    <span className="group-hover:text-blue-400 transition-colors">Download →</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Connect?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started with Starlink today and experience the future of satellite internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200">
                Order Now
              </button>
              <Link to="/contact" className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200">
                Contact Sales
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default StarlinkServices;