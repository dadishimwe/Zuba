import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import ParallaxBackground from '@/components/ParallaxBackground.jsx';
import { ArrowRight, Factory, Settings, Shield, Zap, CheckCircle, Cpu, Database, Network, Gauge, Wrench, Truck } from 'lucide-react';
import industrialImage from '@/assets/images/industrial-long.jpg';

const Manufacturing = () => {
  const solutions = [
    {
      title: 'Industrial IoT Networks',
      description: 'Robust connectivity for sensors, machinery, and automated systems across your facility',
      features: ['Low-latency sensor networks', 'Industrial-grade equipment support', 'Real-time data collection', 'Edge computing integration']
    },
    {
      title: 'Manufacturing Execution Systems',
      description: 'Reliable connections for MES, ERP, and production management software',
      features: ['Real-time production tracking', 'Quality control system integration', 'Inventory management connectivity', 'Supply chain optimization']
    },
    {
      title: 'Remote Site Connectivity',
      description: 'Satellite internet for manufacturing facilities in remote or challenging locations',
      features: ['Global coverage capability', 'Weather-resistant installations', 'Backup connectivity options', 'Remote monitoring and diagnostics']
    },
    {
      title: 'OT Network Security',
      description: 'Secure operational technology networks protecting critical manufacturing processes',
      features: ['Network segmentation', 'Industrial firewall deployment', 'Secure remote access', 'Compliance with industry standards']
    }
  ];

  const caseStudies = [
    {
      title: 'Smart Factory Implementation',
      client: 'Precision Manufacturing Corp',
      challenge: 'A precision parts manufacturer needed to implement Industry 4.0 technologies across three facilities, including real-time machine monitoring, predictive maintenance, and automated quality control systems.',
      solution: 'Deployed Starlink Enterprise with Peplink SD-WAN to create a secure, high-speed network supporting 500+ IoT sensors, machine vision systems, and cloud-based analytics platforms with redundant connectivity.',
      results: [
        '35% reduction in unplanned downtime',
        '92% improvement in defect detection accuracy',
        'Real-time visibility across all production lines',
        '28% increase in overall equipment effectiveness (OEE)'
      ],
      technologies: ['Starlink Enterprise', 'Peplink Balance 580', 'Industrial IoT Gateway']
    },
    {
      title: 'Remote Mining Operation Network',
      client: 'Mountain Ridge Mining',
      challenge: 'A mining operation in remote Colorado needed reliable connectivity for safety systems, equipment monitoring, and compliance reporting, located 200+ miles from the nearest fiber infrastructure.',
      solution: 'Implemented ruggedized Starlink Maritime with industrial-grade Peplink routers, creating a resilient network supporting critical safety systems, real-time equipment telemetry, and regulatory compliance reporting.',
      results: [
        '99.5% safety system uptime achieved',
        'Real-time equipment health monitoring implemented',
        'Compliance reporting automated and streamlined',
        '40% reduction in maintenance response times'
      ],
      technologies: ['Starlink Maritime', 'Peplink MAX BR1 Pro', 'Industrial Safety Systems']
    }
  ];

  const industryFeatures = [
    { icon: Cpu, title: 'IoT Integration', description: 'Connect thousands of industrial sensors and devices' },
    { icon: Database, title: 'Data Analytics', description: 'Real-time insights from production data' },
    { icon: Shield, title: 'OT Security', description: 'Protect critical operational technology systems' },
    { icon: Gauge, title: 'Performance Monitoring', description: 'Track OEE and production metrics in real-time' }
  ];

  const complianceStandards = [
    { name: 'IEC 62443', description: 'Industrial Automation and Control Systems Security' },
    { name: 'ISO 27001', description: 'Information Security Management Systems' },
    { name: 'NIST Framework', description: 'Cybersecurity Framework for Critical Infrastructure' },
    { name: 'IEC 61850', description: 'Communication Protocols for Intelligent Electronic Devices' }
  ];

  return (
    <div className="bg-background">
      <SEOHead
        title="Manufacturing & Industrial Connectivity"
        description="Industrial-grade internet solutions for manufacturing, IoT networks, remote facilities, and operational technology systems. Secure, reliable connectivity for Industry 4.0."
        keywords="industrial internet, manufacturing connectivity, IoT networks, factory wifi, operational technology, industrial automation, remote manufacturing"
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
                  <p className="text-lg text-white font-medium">Industry 4.0 <span className="text-orange-400 font-semibold">Connectivity</span></p>
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

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industrial Technology Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From smart sensors to enterprise systems, our connectivity solutions support every aspect of modern manufacturing.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={200 * (index + 1)}>
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0" />
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
                See how our industrial connectivity solutions have transformed manufacturing operations and efficiency.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.title} delay={300 * (index + 1)}>
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gray-700 text-white">
                      <Wrench className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-gray-600 font-medium">{study.client}</p>
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
                            <CheckCircle className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
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

      {/* Compliance Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industrial Standards Compliance</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our solutions are designed to meet critical industrial and cybersecurity standards.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <FadeIn key={standard.name} delay={100 * (index + 1)}>
                <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{standard.name}</h3>
                  <p className="text-sm text-gray-600">{standard.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-700 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Manufacturing Operations</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Partner with Zuba Broadband to implement industrial-grade connectivity that enables smart manufacturing and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-gray-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Schedule Facility Assessment
              </Link>
              <button className="border-2 border-white hover:bg-white hover:text-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Download Industrial IoT Guide
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;