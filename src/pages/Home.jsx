import { Link } from 'react-router-dom'
import SEOHead from '@/components/SEOHead.jsx'
import FadeIn from '@/components/FadeIn.jsx'
import ParallaxBackground from '@/components/ParallaxBackground.jsx'
import LocationMap from '@/components/LocationMap.jsx'
import { ArrowRight, Satellite, Shield, Globe, Zap } from 'lucide-react'
import { COMPANY_INFO, STARLINK_SERVICES } from '@/constants/company.js'
import fullLogo from '@/assets/logos/zubabroadbandfull.png'
import heroImage from '@/assets/images/hero-long.jpg'
import heroMobileImage from '@/assets/images/hero-mobile.jpg'
import starlinkSmall from '@/assets/images/starlink-small.png'
import starlinkxpeplink from '@/assets/images/starlinkxpeplink.png'
import ctaLongImage from '@/assets/images/cta-long.png'

const Home = () => {
  return (
    <div className="bg-background">
      <SEOHead 
        title="Professional Satellite Internet & SD-WAN Solutions | Connecting the Unconnected"
        description="Authorized Starlink & Peplink reseller providing enterprise satellite internet, SD-WAN solutions & 24/7 support for businesses, maritime, aviation & remote locations worldwide."
        keywords="starlink internet installation, peplink sd-wan solutions, satellite internet reseller, maritime connectivity, aviation internet, remote site connectivity, enterprise satellite internet, starlink business, peplink speedfusion"
        canonical="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "TechnologyProvider",
          "name": "Zuba Broadband Technology",
          "description": "Authorized Starlink & Peplink reseller providing enterprise satellite internet and SD-WAN solutions",
          "url": "https://zubabroadband.com",
          "hasCredential": [
            "Authorized Starlink Reseller",
            "Certified Peplink Partner",
            "FCC Licensed Installation Teams"
          ],
          "areaServed": "Global",
          "serviceType": ["Satellite Internet Installation", "SD-WAN Solutions", "Network Infrastructure"],
          "offers": [
            {
              "@type": "Service",
              "name": "Starlink Satellite Internet Installation",
              "description": "Professional Starlink installation for residential, business, maritime, and aviation applications",
              "areaServed": "Global",
              "serviceType": "Satellite Internet Installation"
            },
            {
              "@type": "Service", 
              "name": "Peplink SD-WAN Solutions",
              "description": "Enterprise-grade SD-WAN and SpeedFusion bonding solutions",
              "areaServed": "Global",
              "serviceType": "SD-WAN Solutions"
            }
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-800-ZUBA-NET",
            "contactType": "customer service",
            "availableLanguage": "English",
            "areaServed": "Global"
          }
        }}
      />
      
      {/* Hero Section with Background Image */}
      <ParallaxBackground imageSrc={heroImage} mobileImageSrc={heroMobileImage}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <h1 className="mb-4 lg:mb-6 text-white text-3xl md:text-4xl lg:text-5xl">
                  Connecting the unconnected with <span className="zuba-accent">reliable satellite internet</span>
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-base lg:text-large mb-6 lg:mb-8 max-w-2xl text-white/90">
                  As an authorized <span className="text-white font-semibold">Starlink</span> and <span className="text-white font-semibold">Peplink</span> reseller, we provide <span className="text-white font-semibold">professional-grade</span> satellite internet and SD-WAN solutions for businesses, maritime, aviation, and remote locations worldwide.
                </p>
              </FadeIn>
              <FadeIn delay={400}>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                  <Link to="/contact" className="btn-primary bg-white text-foreground hover:bg-white/90 text-center">
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-foreground text-center">
                    Explore services
                  </Link>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-5">
              <FadeIn delay={600} direction="right">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 xl:p-12 border border-white/20">
                  {/* Logo Section */}
                  <div className="text-center mb-6 lg:mb-8">
                    <img 
                      src={fullLogo} 
                      alt="Zuba Broadband Technology" 
                      className="h-12 lg:h-16 w-auto mx-auto mb-3 lg:mb-4"
                    />
                    <p className="text-xs lg:text-small text-white/90">
                      Authorized Starlink & Peplink Reseller
                    </p>
                  </div>
                  
                  <div className="space-y-4 lg:space-y-6">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Globe className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white text-sm lg:text-base">Global Coverage</div>
                        <div className="text-xs lg:text-small text-white/80">Worldwide connectivity</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white text-sm lg:text-base">99.9% Uptime</div>
                        <div className="text-xs lg:text-small text-white/80">Enterprise reliability</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Zap className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white text-sm lg:text-base">24/7 Support</div>
                        <div className="text-xs lg:text-small text-white/80">Expert assistance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </ParallaxBackground>

      {/* Starlink Small Image Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <h2 className="mb-6">
                  <span className="zuba-blue">Starlink</span> Satellite Internet
                </h2>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-large mb-8 max-w-2xl">
                  High-speed, low-latency satellite internet that <span className="zuba-accent">connects you anywhere</span> on Earth. From residential to enterprise, maritime to aviation, Starlink delivers <span className="zuba-accent">reliable connectivity</span> where traditional internet can't reach.
                </p>
              </FadeIn>
              <FadeIn delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/starlink-services" className="btn-primary">
                    Explore Starlink
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Get Quote
                  </Link>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-5">
              <FadeIn delay={600} direction="right">
                <div className="flex justify-center">
                  <img 
                    src={starlinkSmall} 
                    alt="Starlink Satellite Internet" 
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Starlink x Peplink Partnership Image */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto container-padding">
          <FadeIn>
            <div className="flex justify-center">
              <img 
                src={starlinkxpeplink} 
                alt="Starlink and Peplink Partnership" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section - Centered with Grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="mb-4">
                Professional satellite <span className="zuba-accent">connectivity solutions</span>
              </h2>
              <p className="text-large max-w-2xl mx-auto">
                From <span className="zuba-accent">high-speed</span> residential internet to <span className="zuba-accent">enterprise</span> maritime solutions, we deliver <span className="zuba-accent">reliable connectivity</span> where traditional internet fails.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Starlink Services */}
            <FadeIn delay={100}>
              <div className="card-hover rounded-lg p-8 bg-card">
              <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-6">
                <Satellite className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="mb-4"><span className="zuba-blue">Starlink</span> Internet</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                High-speed, low-latency satellite internet for any location. Perfect for <span className="zuba-accent">remote work</span>, streaming, and <span className="zuba-accent">critical business operations</span>.
              </p>
              <div className="space-y-2 text-small mb-6">
                <div className="flex justify-between">
                  <span>Residential:</span>
                  <span className="font-medium">{STARLINK_SERVICES.residential.speeds}</span>
                </div>
                <div className="flex justify-between">
                  <span>Business:</span>
                  <span className="font-medium">{STARLINK_SERVICES.business.speeds}</span>
                </div>
                <div className="flex justify-between">
                  <span>Maritime:</span>
                  <span className="font-medium">Global coverage</span>
                </div>
              </div>
              <Link to="/services" className="inline-flex items-center text-foreground text-sm font-medium hover:opacity-80 transition-opacity">
                Learn more
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
              </div>
            </FadeIn>

            {/* Peplink SD-WAN */}
            <FadeIn delay={200}>
              <div className="card-hover rounded-lg p-8 bg-card">
              <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="mb-4"><span className="zuba-blue">Peplink</span> SD-WAN</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <span className="zuba-accent">Unbreakable connectivity</span> with intelligent bonding and seamless failover for <span className="zuba-accent">mission-critical operations</span>.
              </p>
              <div className="space-y-2 text-small mb-6">
                <div>• SpeedFusion Technology</div>
                <div>• Multi-WAN Load Balancing</div>
                <div>• Automatic Failover</div>
                <div>• Centralized Management</div>
              </div>
              <Link to="/solutions" className="inline-flex items-center text-foreground text-sm font-medium hover:opacity-80 transition-opacity">
                Learn more
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
              </div>
            </FadeIn>

            {/* Installation & Support */}
            <FadeIn delay={300}>
              <div className="card-hover rounded-lg p-8 bg-card">
              <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="mb-4"><span className="zuba-accent">Expert</span> Installation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <span className="zuba-accent">Professional installation</span> and 24/7 technical support from certified technicians with years of experience.
              </p>
              <div className="space-y-2 text-small mb-6">
                <div>• Certified Technicians</div>
                <div>• Site Surveys & Optimization</div>
                <div>• 24/7 Monitoring</div>
                <div>• {COMPANY_INFO.stats.responseTime} Response Time</div>
              </div>
              <Link to="/contact" className="inline-flex items-center text-foreground text-sm font-medium hover:opacity-80 transition-opacity">
                Get support
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section - Right Aligned */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <FadeIn direction="left">
                <div className="bg-background rounded-2xl p-8 lg:p-12">
                  <div className="text-center">
                    <div className="text-4xl font-semibold text-foreground mb-2">
                      {COMPANY_INFO.stats.customersSatisfied}
                    </div>
                    <div className="text-muted-foreground mb-6">Satisfied customers worldwide</div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xl font-medium text-foreground">{COMPANY_INFO.stats.uptimeGuarantee}</div>
                        <div className="text-small text-muted-foreground">Uptime</div>
                      </div>
                      <div>
                        <div className="text-xl font-medium text-foreground">{COMPANY_INFO.stats.coverageAreas}+</div>
                        <div className="text-small text-muted-foreground">Locations</div>
                      </div>
                      <div>
                        <div className="text-xl font-medium text-foreground">{COMPANY_INFO.stats.yearsInBusiness}</div>
                        <div className="text-small text-muted-foreground">Years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn delay={200}>
                <h2 className="mb-4">Trusted by thousands worldwide</h2>
                <p className="text-large mb-8">
                  Our track record speaks for itself. From small businesses to large enterprises, maritime operations to remote research stations, we've delivered reliable connectivity solutions across the globe.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Industry-leading uptime guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-muted-foreground">Global coverage in 150+ locations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-muted-foreground">8+ years of satellite expertise</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Left Aligned */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <FadeIn>
                <h2 className="mb-4">Why choose Zuba Broadband?</h2>
                <p className="text-large mb-8">
                  We combine cutting-edge technology with expert support to deliver reliable connectivity solutions for any environment.
                </p>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <Globe className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="mb-2">Global Coverage</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Connect anywhere on Earth, even the most remote locations where traditional internet fails.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="mb-2">Unbreakable Connectivity</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Leverage SD-WAN technology for seamless failover and intelligent traffic management.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-6">
              <FadeIn delay={400}>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="mb-2">Expert Support</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        24/7 technical assistance from certified professionals with years of satellite experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <Satellite className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="mb-2">High Performance</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Experience low-latency, high-speed internet optimized for business-critical applications.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <LocationMap />

      {/* Trusted Partners Section */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="mb-4">Trusted Technology Partners</h2>
              <p className="text-large max-w-2xl mx-auto text-muted-foreground">
                We partner with industry leaders to deliver the most reliable and innovative connectivity solutions.
              </p>
            </div>
          </FadeIn>
          
          {/* Infinite Sliding Logos */}
          <div className="relative">
            <div className="flex animate-slide-left">
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-0 shrink-0">
                <div className="flex items-center gap-16 px-8">
                  <div className="text-2xl font-bold text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
                    Starlink
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
                    Peplink
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
                    SpaceX
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
                    Ubiquiti Networks
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
                    SonicWall
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
                    Cambium Networks
                  </div>
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-0 shrink-0">
                <div className="flex items-center gap-16 px-8">
                  <div className="text-2xl font-bold text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
                    Starlink
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
                    Peplink
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
                    SpaceX
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
                    Ubiquiti Networks
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
                    SonicWall
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground/70 hover:text-foreground transition-colors duration-300">
                    Cambium Networks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <ParallaxBackground imageSrc={ctaLongImage}>
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="mb-4 text-white">
            Ready to get <span className="zuba-accent">connected</span>?
          </h2>
          <p className="text-large mb-8 text-white">
            Contact us today for a free consultation and discover how we can <span className="zuba-accent">transform</span> your connectivity.
          </p>
          <Link to="/contact" className="btn-primary bg-zuba-accent hover:bg-zuba-accent-dark text-white border-zuba-accent">
            Get started today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ParallaxBackground>
    </div>
  )
}

export default Home