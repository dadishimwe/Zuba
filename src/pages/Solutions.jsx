import { Link } from 'react-router-dom'
import SEOHead from '@/components/SEOHead.jsx'
import FadeIn from '@/components/FadeIn.jsx'
import ParallaxBackground from '@/components/ParallaxBackground.jsx'
import { ArrowRight, CreditCard, Hotel, GraduationCap, Building2, Coffee, Factory, CheckCircle, Shield, Wifi, Monitor, Zap, Users, Clock, Globe } from 'lucide-react'
import { COMPANY_INFO } from '@/constants/company.js'

// Import background images
import hotelImage from '@/assets/images/hotel-long.jpg'
import industrialImage from '@/assets/images/industrial-long.jpg'
import restaurantImage from '@/assets/images/restaurant-long.jpg'
import schoolImage from '@/assets/images/school-long.jpg'
import bankingImage from '@/assets/images/banking-long.jpg'
import governmentImage from '@/assets/images/government-long.png'

const Solutions = () => {
  const industries = [
    {
      id: 'banking-finance',
      name: 'Banking & Finance',
      icon: CreditCard,
      description: 'Secure, reliable connectivity for financial institutions, insurance companies, and fintech operations',
      features: [
        'PCI DSS compliant network infrastructure',
        'Redundant connectivity for trading floors',
        'Secure branch office connections',
        '24/7 uptime for critical financial operations'
      ],
      useCases: [
        'Investment banks with global trading operations',
        'Insurance companies with distributed agents',
        'Credit unions needing secure branch connectivity',
        'Fintech startups requiring reliable internet'
      ],
      backgroundImage: bankingImage
    },
    {
      id: 'hospitality',
      name: 'Hotels & Lodges',
      icon: Hotel,
      description: 'Premium guest Wi-Fi and operational connectivity for hospitality venues worldwide',
      features: [
        'High-capacity guest internet access',
        'Seamless property management systems',
        'Point-of-sale and reservation connectivity',
        'Remote location coverage for luxury lodges'
      ],
      useCases: [
        'Resort hotels with hundreds of guests',
        'Boutique hotels in remote destinations',
        'Safari lodges and eco-resorts',
        'Hotel chains with multiple properties'
      ],
      backgroundImage: hotelImage
    },
    {
      id: 'education',
      name: 'Schools & Universities',
      icon: GraduationCap,
      description: 'Robust internet infrastructure supporting modern educational technology and remote learning',
      features: [
        'High-bandwidth for online learning platforms',
        'Secure student and faculty network access',
        'Campus-wide Wi-Fi coverage',
        'Integration with educational software systems'
      ],
      useCases: [
        'K-12 schools implementing 1:1 device programs',
        'Universities with research data requirements',
        'Remote campuses and field stations',
        'Educational institutions in underserved areas'
      ],
      backgroundImage: schoolImage
    },
    {
      id: 'government',
      name: 'Government & Public Sector',
      icon: Building2,
      description: 'Secure, compliant connectivity solutions for government agencies and public services',
      features: [
        'FedRAMP and government security standards',
        'Redundant connections for mission-critical operations',
        'Secure inter-agency communications',
        'Emergency and disaster response capabilities'
      ],
      useCases: [
        'Municipal offices and public services',
        'Emergency operations centers',
        'Remote government facilities',
        'Public safety and first responder networks'
      ],
      backgroundImage: governmentImage
    },
    {
      id: 'restaurants-cafes',
      name: 'Restaurants & Cafes',
      icon: Coffee,
      description: 'Reliable point-of-sale and guest Wi-Fi solutions for food service businesses',
      features: [
        'Fast, reliable POS system connectivity',
        'Guest Wi-Fi with captive portal options',
        'Kitchen display and ordering systems',
        'Inventory and staff management tools'
      ],
      useCases: [
        'Restaurant chains with multiple locations',
        'Independent cafes and bistros',
        'Food trucks and mobile vendors',
        'Quick-service and fast-casual concepts'
      ],
      backgroundImage: restaurantImage
    },
    {
      id: 'manufacturing-industrial',
      name: 'Manufacturing & Industrial',
      icon: Factory,
      description: 'Industrial-grade connectivity for manufacturing facilities and supply chain operations',
      features: [
        'IoT and sensor network connectivity',
        'ERP and supply chain system integration',
        'Quality control and monitoring systems',
        'Worker safety and communication tools'
      ],
      useCases: [
        'Manufacturing plants with automation systems',
        'Warehouses and distribution centers',
        'Construction and project sites',
        'Industrial facilities in remote locations'
      ],
      backgroundImage: industrialImage
    }
  ]

  return (
    <div className="bg-background">
      <SEOHead 
        title="Enterprise Solutions by Industry"
        description="Specialized enterprise connectivity solutions for banking, hospitality, education, government, restaurants, and manufacturing industries."
        keywords="enterprise connectivity, business internet solutions, industry-specific networking, corporate satellite internet, SD-WAN solutions"
        canonical="/solutions"
      />
      
      {/* Hero Section - Left Aligned */}
      <section className="section-padding pt-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <h1 className="mb-6">
                  <span className="zuba-blue">Enterprise</span> Industry Solutions
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-large mb-8 max-w-2xl">
                  Tailored <span className="zuba-accent">connectivity solutions</span> designed specifically for your industry's <span className="zuba-accent">unique requirements</span> and challenges.
                </p>
              </FadeIn>
              <FadeIn delay={400}>
                <Link to="/contact" className="btn-primary">
                  Discuss Your Industry Needs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </FadeIn>
            </div>
            <div className="lg:col-span-5">
              <FadeIn delay={600} direction="right">
                <div className="bg-muted rounded-2xl p-8 lg:p-12">
                  <h3 className="text-xl font-semibold mb-6">Industries We Serve:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {industries.slice(0, 6).map((industry) => {
                      const Icon = industry.icon;
                      return (
                        <div key={industry.id} className="flex items-center gap-3">
                          <Icon className="h-6 w-6 text-foreground flex-shrink-0" />
                          <span className="font-medium text-foreground text-sm">{industry.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions - Alternating Layout */}
      {industries.map((industry, index) => {
        const Icon = industry.icon;
        const isEven = index % 2 === 0;
        
        // If industry has a background image, use parallax section
        if (industry.backgroundImage) {
          return (
            <section key={industry.id}>
              <ParallaxBackground imageSrc={industry.backgroundImage}>
                <div className="max-w-7xl mx-auto container-padding">
                  <div className="text-center text-white">
                    <FadeIn>
                      <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">{industry.name}</h2>
                      </div>
                      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
                        {industry.description}
                      </p>
                      <Link to={`/solutions/${industry.id}`} className="btn-primary bg-white text-foreground hover:bg-white/90">
                        Explore {industry.name} Solutions
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </FadeIn>
                  </div>
                </div>
              </ParallaxBackground>
              
              {/* Content section below parallax */}
              <section className="section-padding bg-background">
                <div className="max-w-7xl mx-auto container-padding">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                      <FadeIn>
                        <div className="mb-8">
                          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            Key Features
                          </h3>
                          <ul className="space-y-3">
                            {industry.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </FadeIn>
                    </div>
                    
                    <div className="lg:col-span-5">
                      <FadeIn delay={200}>
                        <div className="bg-card rounded-2xl p-8 border border-border">
                          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <Users className="h-5 w-5 text-primary" />
                            Common Use Cases
                          </h3>
                          <div className="space-y-4">
                            {industry.useCases.map((useCase, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                </div>
                                <span className="text-sm text-foreground">{useCase}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-6 pt-6 border-t border-border">
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div>
                                <div className="flex items-center justify-center mb-2">
                                  <Shield className="h-5 w-5 text-primary" />
                                </div>
                                <div className="text-xs text-muted-foreground">Secure</div>
                              </div>
                              <div>
                                <div className="flex items-center justify-center mb-2">
                                  <Zap className="h-5 w-5 text-primary" />
                                </div>
                                <div className="text-xs text-muted-foreground">Fast</div>
                              </div>
                              <div>
                                <div className="flex items-center justify-center mb-2">
                                  <Clock className="h-5 w-5 text-primary" />
                                </div>
                                <div className="text-xs text-muted-foreground">24/7 Support</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          );
        }
        
        // Regular section for industries without background images
        return (
          <section key={industry.id} className={`section-padding ${isEven ? 'bg-background' : 'bg-muted'}`}>
            <div className="max-w-7xl mx-auto container-padding">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
                  <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">{industry.name}</h2>
                    </div>
                    <p className="text-large mb-8 max-w-2xl">
                      {industry.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {industry.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to={`/solutions/${industry.id}`} className="btn-secondary">
                      Explore {industry.name} Solutions
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </FadeIn>
                </div>
                
                <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                  <FadeIn delay={200} direction={isEven ? "right" : "left"}>
                    <div className="bg-card rounded-2xl p-8 border border-border">
                      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Common Use Cases
                      </h3>
                      <div className="space-y-4">
                        {industry.useCases.map((useCase, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <span className="text-sm text-foreground">{useCase}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="flex items-center justify-center mb-2">
                              <Shield className="h-5 w-5 text-primary" />
                            </div>
                            <div className="text-xs text-muted-foreground">Secure</div>
                          </div>
                          <div>
                            <div className="flex items-center justify-center mb-2">
                              <Zap className="h-5 w-5 text-primary" />
                            </div>
                            <div className="text-xs text-muted-foreground">Fast</div>
                          </div>
                          <div>
                            <div className="flex items-center justify-center mb-2">
                              <Clock className="h-5 w-5 text-primary" />
                            </div>
                            <div className="text-xs text-muted-foreground">24/7 Support</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Choose Enterprise Solutions */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Enterprise Solutions?</h2>
              <p className="text-large max-w-3xl mx-auto">
                We understand that every industry has unique connectivity requirements. Our solutions are designed to meet the specific operational, security, and performance needs of your business vertical.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={200}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Industry Compliance</h3>
                <p className="text-muted-foreground">
                  Meet regulatory requirements with solutions designed for your industry's compliance standards.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Custom Configuration</h3>
                <p className="text-muted-foreground">
                  Tailored network configurations optimized for your specific business operations and workflows.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
                <p className="text-muted-foreground">
                  Grow your network infrastructure as your business expands, with flexible scaling options.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Industry Operations?</h2>
            <p className="text-large mb-8">
              Our industry specialists are ready to design a connectivity solution that meets your specific business requirements and operational challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Schedule Industry Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                View Our Technologies
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default Solutions