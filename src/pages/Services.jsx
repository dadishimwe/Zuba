import { Link } from 'react-router-dom'
import SEOHead from '@/components/SEOHead.jsx'
import FadeIn from '@/components/FadeIn.jsx'
import ParallaxBackground from '@/components/ParallaxBackground.jsx'
import { ArrowRight, Satellite, Wifi, Shield, Zap, Globe, Settings, Users } from 'lucide-react'
import starlinkLong from '@/assets/images/starlink-long.png'
import peplinkLong from '@/assets/images/peplink-long.png'
import ctaLongImage from '@/assets/images/cta-long.png'

const Services = () => {
  const starlinkSolutions = [
    {
      title: 'Flat High-Performance',
      description: 'High-speed internet for large businesses',
      features: ['up to 350 Mbps download speeds', 'Low latency (20-40ms)', 'Static IP options', 'Advanced routing']
    },
    {
      title: 'Starlink Enterprise',
      description: 'Enterprise-grade connectivity for businesses',
      features: ['up to 300 Mbps download speeds', 'low latency (20-40ms)', 'Static IP options', 'Advanced routing']
    },
    {
      title: 'Stalink Standard-Actuated',
      description: 'Reliable connectivity for Medium and small businesses',
      features: ['up to 220 Mbps download speeds', 'Auto-aligning', 'Static IP options', 'Starlink router']
    },
    {
      title: 'Starlink Mini',
      description: 'In-motion connectivity for vehicles',
      features: ['Up to 180 Mbps download speeds', 'Low-latency for real-time applications', 'Vehicle integration', 'Global coverage']
    }
  ]

  const peplinkSolutions = [
    {
      title: 'SpeedFusion Bonding',
      description: 'Combine multiple connections for unbreakable internet',
      features: ['Load balancing across connections', 'Automatic failover', 'Traffic prioritization', 'Real-time monitoring']
    },
    {
      title: 'SD-WAN Solutions',
      description: 'Software-defined wide area networking',
      features: ['Centralized management', 'Application-aware routing', 'Security integration', 'Cost optimization']
    },
    {
      title: 'Multi-WAN Routers',
      description: 'Professional routers for multiple connections',
      features: ['Dual/triple WAN support', 'Advanced QoS', 'VPN capabilities', 'Remote management']
    },
    {
      title: 'InControl 2 Management',
      description: 'Cloud-based network management platform',
      features: ['Centralized monitoring', 'Real-time alerts', 'Configuration management', 'Analytics dashboard']
    }
  ]

  return (
    <div className="bg-background">
      <SEOHead 
        title="Professional Satellite Internet & SD-WAN Services"
        description="Authorized Starlink and Peplink reseller providing enterprise satellite internet, SD-WAN solutions, and professional installation services worldwide."
        keywords="starlink installation, peplink sd-wan, satellite internet services, network solutions, enterprise connectivity"
        canonical="/services"
      />
      
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <h1 className="mb-6">
                  Professional <span className="zuba-accent">Satellite Internet</span> & <span className="zuba-blue">SD-WAN Services</span>
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-large mb-8 max-w-2xl">
                  As authorized <span className="zuba-blue">Starlink</span> and <span className="zuba-blue">Peplink</span> resellers, we provide <span className="zuba-accent">comprehensive connectivity solutions</span> from installation to ongoing support, ensuring your network performs at its <span className="zuba-accent">best</span>.
                </p>
              </FadeIn>
              <FadeIn delay={400}>
                <Link to="/contact" className="btn-primary">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </FadeIn>
            </div>
            <div className="lg:col-span-5">
              <FadeIn delay={600} direction="right">
                <div className="bg-muted rounded-2xl p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-background flex items-center justify-center">
                        <Satellite className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Global Coverage</div>
                        <div className="text-small text-muted-foreground">Worldwide connectivity</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-background flex items-center justify-center">
                        <Shield className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">99.9% Uptime</div>
                        <div className="text-small text-muted-foreground">Enterprise reliability</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-background flex items-center justify-center">
                        <Zap className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">24/7 Support</div>
                        <div className="text-small text-muted-foreground">Expert assistance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Starlink Solutions with Parallax Background */}
      <ParallaxBackground imageSrc={starlinkLong} overlayIntensity="strong">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center text-white">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md shadow-lg">
                  <Satellite className="h-8 w-8 text-white drop-shadow-sm" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                  Starlink Satellite Internet
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90 drop-shadow-md">
                High-speed, low-latency satellite internet that connects you anywhere on Earth. From residential to enterprise, maritime to aviation.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <Link to="/starlink-services" className="btn-primary bg-white text-foreground hover:bg-white/90">
                Explore Starlink Solutions
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </ParallaxBackground>

      {/* Starlink Solutions Details */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {starlinkSolutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={200 * (index + 1)}>
                <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Peplink Solutions with Parallax Background */}
      <ParallaxBackground imageSrc={peplinkLong} overlayIntensity="strong">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center text-white">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md shadow-lg">
                  <Wifi className="h-8 w-8 text-white drop-shadow-sm" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                  Peplink SD-WAN Solutions
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90 drop-shadow-md">
                Advanced SD-WAN and SpeedFusion bonding technology for unbreakable connectivity and intelligent traffic management.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <Link to="/peplink-services" className="btn-primary bg-white text-foreground hover:bg-white/90">
                Explore Peplink Solutions
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </ParallaxBackground>

      {/* Peplink Solutions Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {peplinkSolutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={200 * (index + 1)}>
                <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Services</h2>
              <p className="text-large max-w-3xl mx-auto">
                From initial consultation to ongoing support, our expert team ensures your connectivity solution is optimized for your specific needs.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={200}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Site Survey & Planning</h3>
                <p className="text-muted-foreground">
                  Comprehensive site assessment and network planning to ensure optimal performance and coverage.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional Installation</h3>
                <p className="text-muted-foreground">
                  Certified technicians handle installation, configuration, and testing for reliable deployment.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock technical support and monitoring to keep your network running smoothly.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <ParallaxBackground imageSrc={ctaLongImage} overlayIntensity="strong">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">Ready to Get <span className="zuba-accent">Connected</span>?</h2>
            <p className="text-large mb-8 text-white drop-shadow-md">
              Our connectivity experts are ready to <span className="zuba-accent">design the perfect solution</span> for your needs. Get started with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-zuba-accent hover:bg-zuba-accent-dark text-white border-zuba-accent">
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/solutions" className="btn-secondary border-white text-white hover:bg-white hover:text-foreground">
                View Solutions
              </Link>
            </div>
          </FadeIn>
        </div>
      </ParallaxBackground>
    </div>
  )
}

export default Services