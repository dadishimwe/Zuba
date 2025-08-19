import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import ParallaxBackground from '@/components/ParallaxBackground.jsx';
import { ArrowRight, GraduationCap, BookOpen, Users, Laptop, CheckCircle, School, Wifi, Globe, Video, Library, Monitor } from 'lucide-react';
import schoolImage from '@/assets/images/school-long.jpg';

const Education = () => {
  const solutions = [
    {
      title: 'Campus-Wide Connectivity',
      description: 'Comprehensive Wi-Fi infrastructure supporting thousands of concurrent users',
      features: ['High-density access point deployment', 'Seamless roaming across campus', 'Guest network isolation', 'Bandwidth management by user type']
    },
    {
      title: 'Distance Learning Platform',
      description: 'Reliable infrastructure for online education and hybrid learning models',
      features: ['Video conferencing optimization', '4K streaming capability', 'Real-time collaboration tools', 'Low-latency interactive applications']
    },
    {
      title: 'Research Network Access',
      description: 'High-speed connections for data-intensive research and academic collaboration',
      features: ['Dedicated research VLANs', 'Inter-institutional connectivity', 'Cloud research platform access', 'Large file transfer optimization']
    },
    {
      title: 'Student Information Systems',
      description: 'Secure, reliable connections for student records and administrative systems',
      features: ['FERPA compliance measures', 'Student portal accessibility', 'Registration system reliability', 'Grade management connectivity']
    }
  ];

  const caseStudies = [
    {
      title: 'Rural University Transformation',
      client: 'Mountain State University',
      challenge: 'A 15,000-student university in rural Colorado struggled with inadequate internet infrastructure that couldn\'t support modern educational technology, online learning platforms, or student expectations for connectivity.',
      solution: 'Implemented a hybrid solution combining Starlink Enterprise with Peplink SD-WAN to create redundant connectivity. Deployed 200+ access points across campus with intelligent load balancing and traffic prioritization.',
      results: [
        '95% student satisfaction with campus Wi-Fi',
        '300% increase in online course offerings',
        'Zero connectivity-related class cancellations',
        '60% improvement in research collaboration capabilities'
      ],
      technologies: ['Starlink Enterprise', 'Peplink Balance 580', 'UniFi Wi-Fi 6 Access Points']
    },
    {
      title: 'K-12 Digital Learning Initiative',
      client: 'Pine Valley School District',
      challenge: 'A rural school district serving 3,500 students across 12 schools needed reliable internet to support a 1:1 device initiative and state-mandated online testing programs.',
      solution: 'Deployed Starlink Business at each school site with centralized management through Peplink InControl. Implemented content filtering, bandwidth allocation, and guest network access for community events.',
      results: [
        '100% successful completion of state online testing',
        '85% increase in student engagement with digital tools',
        'CIPA compliance achieved with integrated filtering',
        'Community Wi-Fi access supporting local families'
      ],
      technologies: ['Starlink Business', 'Peplink Balance 20X', 'SonicWall Content Filtering']
    }
  ];

  const educationBenefits = [
    { icon: Laptop, title: '1:1 Device Support', description: 'Reliable connectivity for every student device' },
    { icon: Video, title: 'Virtual Classrooms', description: 'HD video conferencing and online learning' },
    { icon: Library, title: 'Digital Resources', description: 'Access to online libraries and databases' },
    { icon: Globe, title: 'Global Collaboration', description: 'Connect with classrooms worldwide' }
  ];

  return (
    <div className="bg-background">
      <SEOHead
        title="Education Connectivity Solutions"
        description="Comprehensive internet infrastructure for schools, universities, and educational institutions. Support digital learning, research, and campus-wide connectivity."
        keywords="school internet, university wifi, campus connectivity, education technology, online learning infrastructure, student internet"
        canonical="/solutions/education"
      />

      {/* Hero Section with Parallax Background */}
      <ParallaxBackground imageSrc={schoolImage} overlayIntensity="strong">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center text-white">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md shadow-lg">
                  <GraduationCap className="h-8 w-8 text-white drop-shadow-sm" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                    <span className="zuba-accent">Education</span> Solutions
                  </h1>
                  <p className="text-lg text-white font-medium">Empowering <span className="text-orange-400 font-semibold">Digital Learning</span></p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white drop-shadow-md">
                Comprehensive connectivity solutions that enable <span className="text-orange-400 font-semibold">modern education</span>, from K-12 digital learning initiatives to university research networks.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white hover:bg-white/90 text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center">
                  Transform Your Campus
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <button className="border-2 border-white hover:bg-white hover:text-foreground text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                  Download Education Guide
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"><span className="zuba-accent">Educational Technology</span> Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern education requires <span className="zuba-accent">robust, reliable connectivity</span>. Our solutions support every aspect of digital learning.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={200 * (index + 1)}>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
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

      {/* Digital Learning Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Enabling <span className="zuba-accent">Modern Education</span></h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our connectivity solutions support the <span className="zuba-accent">technologies</span> that make modern education possible.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationBenefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={150 * (index + 1)}>
                <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Educational Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our connectivity solutions have transformed learning environments and educational outcomes.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.title} delay={300 * (index + 1)}>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-green-600 text-white">
                      <School className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-green-600 font-medium">{study.client}</p>
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
                    
                    <div className="pt-4 border-t border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advance Your Educational Mission</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Partner with Zuba Broadband to implement connectivity solutions that support student success and educational innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Schedule Campus Assessment
              </Link>
              <button className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                View Education Resources
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Education;