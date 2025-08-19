import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import ParallaxBackground from '@/components/ParallaxBackground.jsx';
import { ArrowRight, GraduationCap, BookOpen, Users, Monitor, Shield, CheckCircle, Globe, Zap, Activity, Wifi } from 'lucide-react';
import schoolImage from '@/assets/images/school-long.jpg';
import filteringImage from '@/assets/images/solutions/filtering-square.png';
import qosImage from '@/assets/images/solutions/QoS-square.png';
import studentComputerImage from '@/assets/images/solutions/student-computer.jpg';

const Education = () => {
  const solutions = [
    {
      title: 'Content Filtering',
      description: 'Age-appropriate internet access with comprehensive educational safety controls and customizable filtering policies.',
      features: [
        'Age-appropriate content filtering',
        'Customizable filtering policies by grade level',
        'Real-time content analysis and blocking',
        'Comprehensive reporting and monitoring'
      ],
      image: filteringImage,
      imageAlt: 'Content filtering for educational environments'
    },
    {
      title: 'Quality of Service & Bandwidth Allocation',
      description: 'Prioritized network resources for learning applications with intelligent bandwidth management.',
      features: [
        'Prioritized bandwidth for educational applications',
        'Intelligent traffic management for learning tools',
        'Optimized performance for online learning platforms',
        'Scalable bandwidth allocation based on usage'
      ],
      image: qosImage,
      imageAlt: 'Quality of service management for education'
    },
    {
      title: 'Academic Network Management',
      description: 'Optimized connectivity supporting modern educational technology with centralized management.',
      features: [
        'Centralized network management for IT staff',
        'Integration with educational software platforms',
        'Secure access for students and faculty',
        'Real-time monitoring and analytics'
      ],
      image: studentComputerImage,
      imageAlt: 'Academic network management for modern education'
    }
  ];

  const caseStudies = [
    {
      title: 'University Campus Network Modernization',
      client: 'State University System',
      challenge: 'A large university system needed to upgrade their network infrastructure to support modern educational technology while ensuring student safety and optimal learning experiences.',
      solution: 'Implemented comprehensive content filtering, quality of service management, and academic network management across all campuses.',
      results: [
        'Enhanced student safety with advanced content filtering',
        'Improved learning application performance by 60%',
        'Streamlined IT management across multiple campuses',
        'Increased student engagement with reliable connectivity'
      ],
      technologies: ['Content Filtering', 'QoS Management', 'Network Management']
    },
    {
      title: 'K-12 School District Digital Transformation',
      client: 'Metropolitan School District',
      challenge: 'A school district with 25 schools needed to implement 1:1 device programs while maintaining safe internet access and optimal learning conditions.',
      solution: 'Deployed educational-focused connectivity solutions with comprehensive safety controls and performance optimization.',
      results: [
        'Successful 1:1 device program implementation',
        '100% compliance with educational safety requirements',
        'Improved teacher productivity with reliable tools',
        'Enhanced student learning outcomes'
      ],
      technologies: ['Educational Connectivity', 'Safety Controls', 'Performance Optimization']
    }
  ];

  const educationBenefits = [
    { icon: Shield, title: 'Safe Learning', description: 'Comprehensive content filtering and safety controls' },
    { icon: Monitor, title: 'Digital Tools', description: 'Optimized performance for educational applications' },
    { icon: Users, title: 'Collaboration', description: 'Enhanced group learning and virtual classrooms' },
    { icon: Activity, title: 'Analytics', description: 'Insights into learning technology usage' }
  ];

  return (
    <div className="bg-background">
      <SEOHead
        title="Education Connectivity Solutions"
        description="Safe, educational-focused connectivity for schools and universities. Content filtering, bandwidth management, and academic network solutions."
        keywords="school internet, university connectivity, educational wifi, content filtering, student safety, academic network"
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
                  <p className="text-lg text-white font-medium">Safe, Educational-Focused Connectivity</p>
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
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
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
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-green-600 text-white">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-green-600 font-medium">{study.client}</p>
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
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your <span className="zuba-accent">Learning Environment</span></h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Partner with us to create safe, reliable, and high-performance connectivity solutions for modern education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Get Started Today
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Education;