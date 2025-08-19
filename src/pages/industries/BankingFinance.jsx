import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import ParallaxBackground from '@/components/ParallaxBackground.jsx';
import { ArrowRight, CreditCard, Shield, Lock, TrendingUp, CheckCircle, Users, Clock, DollarSign, Building, Zap, Globe } from 'lucide-react';
import bankingImage from '@/assets/images/banking-long.jpg';

const BankingFinance = () => {
  const solutions = [
    {
      title: 'Trading Floor Connectivity',
      description: 'Ultra-low latency connections for high-frequency trading operations',
      features: ['Sub-5ms latency', 'Redundant fiber + Starlink backup', '99.999% uptime SLA', 'Market data feeds integration']
    },
    {
      title: 'Branch Network Security',
      description: 'Secure, encrypted connections between headquarters and branch locations',
      features: ['PCI DSS Level 1 compliance', 'End-to-end encryption', 'VPN tunneling', 'Intrusion detection systems']
    },
    {
      title: 'Digital Banking Infrastructure',
      description: 'Reliable backend connectivity for mobile and online banking platforms',
      features: ['Load balancing', 'DDoS protection', 'API gateway security', 'Real-time transaction processing']
    },
    {
      title: 'Regulatory Compliance',
      description: 'Network solutions designed to meet financial industry regulations',
      features: ['SOX compliance', 'GDPR data protection', 'Audit trail logging', 'Data residency controls']
    }
  ];

  const caseStudies = [
    {
      title: 'Regional Bank Transformation',
      client: 'Mid-Atlantic Community Bank',
      challenge: 'A regional bank with 45 branches needed to upgrade from legacy T1 lines to support modern digital banking services while maintaining PCI compliance.',
      solution: 'Deployed Peplink SD-WAN solution with Starlink backup at each branch, creating a secure mesh network with centralized management through InControl 2.',
      results: [
        '85% reduction in connectivity costs',
        '99.97% uptime achieved across all branches',
        'PCI DSS audit passed with zero findings',
        '50% faster transaction processing times'
      ],
      technologies: ['Peplink Balance 310X', 'Starlink Business', 'InControl 2 Management']
    },
    {
      title: 'Fintech Startup Scaling',
      client: 'PayFlow Technologies',
      challenge: 'A rapidly growing fintech startup needed scalable, secure infrastructure to support their payment processing platform serving 10,000+ merchants.',
      solution: 'Implemented enterprise-grade Starlink connectivity with Peplink load balancing across multiple data centers, ensuring uninterrupted service during traffic spikes.',
      results: [
        '300% transaction volume growth supported',
        'Zero downtime during Black Friday peak',
        'SOC 2 Type II certification achieved',
        '60% improvement in API response times'
      ],
      technologies: ['Starlink Business Priority', 'Peplink Balance 580', 'Advanced QoS']
    }
  ];

  const complianceStandards = [
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'SOX', description: 'Sarbanes-Oxley Act compliance' },
    { name: 'GDPR', description: 'General Data Protection Regulation' },
    { name: 'FFIEC', description: 'Federal Financial Institutions Examination Council' },
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'NIST', description: 'National Institute of Standards and Technology' }
  ];

  return (
    <div className="bg-background">
      <SEOHead
        title="Banking & Finance Satellite Internet Solutions | PCI DSS Compliant | Zuba Broadband"
        description="Secure, PCI DSS compliant satellite internet solutions for banks, credit unions & fintech. Ultra-low latency trading floors & secure branch connectivity with Starlink & Peplink."
        keywords="banking internet solutions, PCI DSS compliant internet, trading floor connectivity, bank satellite internet, financial institution networking, secure banking infrastructure, fintech connectivity solutions"
        canonical="/solutions/banking-finance"
        modifiedDate="2024-12-15"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Banking & Finance Connectivity Solutions",
          "description": "Secure, PCI DSS compliant satellite internet and SD-WAN solutions for financial institutions",
          "provider": {
            "@type": "Organization",
            "name": "Zuba Broadband Technology",
            "hasCredential": ["Authorized Starlink Reseller", "Certified Peplink Partner", "PCI DSS Level 1 Compliance"]
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
            "description": "Secure satellite internet and SD-WAN for financial institutions",
            "eligibleCustomerType": "Business"
          }
        }}
      />

      {/* Hero Section with Parallax Background */}
      <ParallaxBackground imageSrc={bankingImage}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center text-white">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                    <span className="zuba-accent">Banking</span> & Finance
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl leading-relaxed">
                    Secure, <span className="text-orange-400 font-semibold">PCI DSS compliant</span> connectivity solutions for financial institutions, trading floors, and fintech operations.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white">
                Mission-critical network infrastructure designed for financial institutions requiring the highest levels of <span className="text-orange-400 font-semibold">security, compliance, and reliability</span>.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white hover:bg-white/90 text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center">
                  Request Compliance Assessment
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

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tailored Financial Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive networking solutions designed specifically for the unique requirements of financial institutions.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={200 * (index + 1)}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
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

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
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
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Regulatory Compliance</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our solutions are designed to meet the strictest financial industry regulations and standards.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <FadeIn key={standard.name} delay={100 * (index + 1)}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Financial Operations</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Partner with Zuba Broadband to implement bank-grade connectivity solutions that meet the highest security and compliance standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Schedule Security Consultation
              </Link>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Download Compliance Guide
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default BankingFinance;