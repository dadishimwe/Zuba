import { Link } from 'react-router-dom'
import SEOHead from '@/components/SEOHead.jsx'
import FadeIn from '@/components/FadeIn.jsx'
import ParallaxBackground from '@/components/ParallaxBackground.jsx'
import LocationMap from '@/components/LocationMap.jsx'
import { ArrowRight, Satellite, Shield, Globe, Zap } from 'lucide-react'
import { COMPANY_INFO, STARLINK_SERVICES } from '@/constants/company.js'
import zubaLightLogo from '@/assets/logos/zuba-light-logo.png'
import heroImage from '@/assets/images/hero-long.jpg'
import heroMobileImage from '@/assets/images/hero-mobile.jpg'
import starlinkSmall from '@/assets/images/starlink-small.png'
import starlinkxpeplink from '@/assets/images/starlinkxpeplink.png'
import ctaLongImage from '@/assets/images/cta-long.png'

// Import partner logos
import starlinkLogo from '@/assets/logos/starlink-logo.png'
import peplinkLogo from '@/assets/logos/peplink-logo.png'
import bkLogo from '@/assets/logos/BK logo.png'
import starbucksLogo from '@/assets/logos/Starbucks (1).png'
import milleCollinesLogo from '@/assets/logos/Mille Collines Logo.png'
import primeInsuranceLogo from '@/assets/logos/Prime Insurance.png'
import oldMutualLogo from '@/assets/logos/Old Mutual.png'
import akageraAviationLogo from '@/assets/logos/Akagera Aviation Logo.png'
import carnegieMellonLogo from '@/assets/logos/Carnegie Mellon Logo.png'
import gasmethLogo from '@/assets/logos/Gasmeth Logo.jpeg'
import armadaLogo from '@/assets/logos/Armada Logo.png'
import brdLogo from '@/assets/logos/BRD Logo.png'
import starlinkLightLogo from '@/assets/logos/starlink-light-logo.png'

const Home = () => {
  const partnerLogos = [
    starlinkLogo,
    peplinkLogo,
    bkLogo,
    starbucksLogo,
    milleCollinesLogo,
    primeInsuranceLogo,
    oldMutualLogo,
    akageraAviationLogo,
    carnegieMellonLogo,
    gasmethLogo,
    armadaLogo,
    brdLogo
  ]

  return (
    <div className="bg-background">
      <SEOHead 
        title="Zuba Broadband Technology - Authorized Starlink & Peplink Reseller"
        description="Professional satellite internet and SD-WAN solutions for businesses, maritime, aviation, and remote locations. Authorized Starlink and Peplink reseller."
        keywords="starlink installation, peplink sd-wan, satellite internet, enterprise connectivity, remote location internet"
        canonical="/"
      />

      {/* Hero Section */}
      <ParallaxBackground imageSrc={heroImage} mobileImageSrc={heroMobileImage}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <img
                  src={zubaLightLogo}
                  alt="Zuba Broadband Technology"
                  className="h-16 w-auto mb-8"
                />
              </FadeIn>
              <FadeIn delay={200}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                  Connecting the <span className="zuba-accent">Unconnected</span>
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-base lg:text-large mb-6 lg:mb-8 max-w-2xl text-white/90">
                  As an authorized <span className="text-white font-semibold">Starlink</span> and <span className="text-white font-semibold">Peplink</span> reseller, we provide <span className="text-white font-semibold">professional-grade</span> satellite internet and SD-WAN solutions for businesses, maritime, aviation, and remote locations worldwide.
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
                  <div className="text-center mb-6">
                    <img
                      src={zubaLightLogo}
                      alt="Zuba Broadband Technology"
                      className="h-12 w-auto mx-auto mb-4"
                    />
                    <p className="text-xs text-white/90">
                      Authorized Starlink & Peplink Reseller
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white">Global Coverage</div>
                        <div className="text-small text-white/70">Worldwide connectivity</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white">99.9% Uptime</div>
                        <div className="text-small text-white/70">Enterprise reliability</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white">24/7 Support</div>
                        <div className="text-small text-white/70">Expert assistance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </ParallaxBackground>

      {/* Starlink Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="zuba-blue">Starlink</span> Satellite Internet
                </h2>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-large mb-8">
                  High-speed, low-latency satellite internet for <span className="zuba-accent">reliable connectivity</span> anywhere on Earth. Perfect for businesses, remote locations, maritime, and aviation applications.
                </p>
              </FadeIn>
              <FadeIn delay={400}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>25-220 Mbps download speeds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Low latency (20-40ms)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Global coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Professional installation</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={600}>
                <Link to="/starlink-services" className="btn-primary mt-8">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </FadeIn>
            </div>
            <div>
              <FadeIn delay={600} direction="right">
                <img
                  src={starlinkSmall}
                  alt="Starlink Satellite Internet"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Starlink x Peplink Section */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="zuba-blue">Starlink</span> + <span className="zuba-accent">Peplink</span> = <span className="zuba-accent">Unbreakable</span> Connectivity
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-large max-w-3xl mx-auto">
                Combine the power of Starlink satellite internet with Peplink's advanced SD-WAN technology for enterprise-grade reliability and performance.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={400}>
            <img
              src={starlinkxpeplink}
              alt="Starlink and Peplink Integration"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </FadeIn>
        </div>
      </section>

      {/* Trusted Technology Partners */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted Technology Partners</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-large max-w-3xl mx-auto">
                We partner with industry leaders to deliver the most reliable and advanced connectivity solutions.
              </p>
            </FadeIn>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-slide-left">
              {/* First set of logos */}
              {partnerLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <img
                    src={logo}
                    alt={`Partner Logo ${index + 1}`}
                    className="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partnerLogos.map((logo, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8">
                  <img
                    src={logo}
                    alt={`Partner Logo ${index + 1}`}
                    className="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zuba Broadband */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Zuba Broadband?</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-large max-w-3xl mx-auto">
                We combine cutting-edge technology with expert service to deliver connectivity solutions that keep your business connected, anywhere in the world.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={200}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Satellite className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Authorized Reseller</h3>
                <p className="text-muted-foreground">
                  Official Starlink and Peplink partner with direct access to the latest technology and support.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Global Coverage</h3>
                <p className="text-muted-foreground">
                  Satellite internet available in 100+ countries with local installation and support teams.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Enterprise Reliability</h3>
                <p className="text-muted-foreground">
                  99.9% uptime guarantee with 24/7 monitoring and emergency response capabilities.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <LocationMap />

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