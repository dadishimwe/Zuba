import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import ParallaxBackground from '@/components/ParallaxBackground.jsx';
import { ArrowRight, CreditCard, Shield, Lock, Monitor, Building, CheckCircle, Users, Clock, Globe, Zap, Activity } from 'lucide-react';
import bankingImage from '@/assets/images/banking-long.jpg';
import secureNetworkImage from '@/assets/images/solutions/internet-secure-square.png';
import vpnImage from '@/assets/images/solutions/peplink-vpn.png';
import monitoringImage from '@/assets/images/solutions/24:7-square.png';

const BankingFinance = () => {
  const solutions = [
    {
      title: 'Secure Network Infrastructure',
      description: 'Enterprise-grade security protocols protecting sensitive financial data with military-grade encryption and advanced threat detection systems.',
      features: [
        'Military-grade encryption protocols',
        'Advanced threat detection and prevention',
        'Multi-layer security architecture',
        'Real-time security monitoring and alerts'
      ],
      image: secureNetworkImage,
      imageAlt: 'Secure banking network infrastructure'
    },
    {
      title: 'VPN Solutions',
      description: 'Encrypted connections for secure remote access and branch connectivity, ensuring data integrity across all financial operations.',
      features: [
        'End-to-end encryption for all data transmission',
        'Secure remote access for employees',
        'Branch office connectivity solutions',
        'Compliance with financial security standards'
      ],
      image: vpnImage,
      imageAlt: 'VPN connectivity for banking operations'
    },
    {
      title: '24/7 Network Monitoring',
      description: 'Continuous surveillance ensuring zero-tolerance for downtime with proactive monitoring and instant alert systems.',
      features: [
        'Real-time network performance monitoring',
        'Automated alert systems for issues',
        'Proactive maintenance scheduling',
        'Instant failover capabilities'
      ],
      image: monitoringImage,
      imageAlt: '24/7 network monitoring dashboard'
    }
  ];

  const caseStudies = [
    {
      title: 'Multi-National Bank Network Upgrade',
      client: 'Global Financial Institution',
      challenge: 'A major international bank needed to upgrade their network infrastructure across 50+ branches while maintaining strict security compliance and zero downtime requirements.',
      solution: 'Implemented enterprise-grade secure network infrastructure with encrypted VPN solutions and 24/7 monitoring across all locations.',
      results: [
        '100% compliance with financial security standards',
        'Zero downtime during implementation',
        '50% improvement in network performance',
        'Enhanced security posture across all branches'
      ],
      technologies: ['Enterprise Security Protocols', 'Encrypted VPN Solutions', '24/7 Monitoring Systems']
    },
    {
      title: 'Investment Firm Connectivity Solution',
      client: 'Regional Investment Bank',
      challenge: 'An investment firm required ultra-secure connectivity for their trading operations with real-time data access and failover capabilities.',
      solution: 'Deployed secure network infrastructure with redundant connections and continuous monitoring for mission-critical operations.',
      results: [
        '99.99% uptime for trading operations',
        'Real-time data access across all systems',
        'Instant failover during network issues',
        'Enhanced trading platform performance'
      ],
      technologies: ['Secure Network Infrastructure', 'Redundant Connectivity', 'Real-time Monitoring']
    }
  ];

  return (
    <div className="bg-background">
      <SEOHead
        title="Banking & Finance Connectivity Solutions"
        description="Secure, PCI DSS compliant network infrastructure and VPN solutions for financial institutions, trading floors, and fintech operations."
        keywords="banking connectivity, financial network security, VPN solutions, network monitoring, financial compliance, trading floor connectivity"
        canonical="/solutions/banking-finance"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Banking & Finance Connectivity Solutions",
          "description": "Secure, PCI DSS compliant network infrastructure and VPN solutions for financial institutions",
          "provider": {
            "@type": "Organization",
            "name": "Zuba Broadband Technology",
            "hasCredential": ["Authorized Reseller", "Certified Partner", "PCI DSS Level 1 Compliance"]
          },
          "areaServed": "Global",
          "serviceType": "Financial Institution Connectivity",
          "audience": {
            "@type": "Audience",
            "name": "Banks, Credit Unions, Fintech Companies"
          },
          "hasCredential": "PCI DSS Level 1 Compliance",
          "offers": {
            "@type": "Offer",
            "name": "Banking Connectivity Solutions",
            "description": "Secure network infrastructure and VPN for financial institutions",
            "eligibleCustomerType": "Business"
          }
        }}
      />

      {/* Hero Section with Parallax Background */}
      <ParallaxBackground imageSrc={bankingImage} overlayIntensity="strong">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center text-white">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md shadow-lg">
                  <CreditCard className="h-8 w-8 text-white drop-shadow-sm" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                    <span className="zuba-accent">Banking</span> & Finance
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl leading-relaxed drop-shadow-md">
                    Mission-Critical Security & Reliability
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white drop-shadow-md">
                Secure, compliant connectivity solutions designed for financial institutions requiring the highest levels of <span className="text-orange-400 font-semibold">security, compliance, and reliability</span>.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white hover:bg-white/90 text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center">
                  Request Security Assessment
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <button className="border-2 border-white hover:bg-white hover:text-foreground text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                  Download Security Whitepaper
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
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
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

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world implementations demonstrating the impact of our financial connectivity solutions.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.title} delay={300 * (index + 1)}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-600 text-white">
                      <Building className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-blue-600 font-medium">{study.client}</p>
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
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
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
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your <span className="zuba-accent">Financial Operations</span></h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Partner with us for banking-grade connectivity solutions that meet the strictest security and compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Schedule Security Assessment
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default BankingFinance;