import { Link } from 'react-router-dom'
import { COMPANY_INFO } from '@/constants/company.js'
import fullLogo from '@/assets/logos/zubabroadbandfull.png'
import BorderDesign from './BorderDesign.jsx'
import { Phone, Mail, MapPin, Shield, Award, Globe, Zap } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200/50 bg-gradient-to-br from-gray-50 to-white shadow-lg">
      <div className="max-w-6xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link to="/" className="mb-4 block group">
              <img 
                src={fullLogo} 
                alt="Zuba Broadband Technology" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-muted-foreground text-small mb-6 max-w-md leading-relaxed">
              Authorized <span className="zuba-blue font-medium">Starlink</span> and <span className="zuba-blue font-medium">Peplink</span> reseller providing <span className="zuba-accent font-medium">enterprise-grade</span> satellite internet and SD-WAN solutions for businesses, government, and remote operations worldwide.
            </p>
            <div className="text-small text-muted-foreground mb-6 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-zuba-accent" />
                <span className="font-medium">Phone:</span> {COMPANY_INFO.contact.phone}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zuba-accent" />
                <span className="font-medium">Email:</span> {COMPANY_INFO.contact.email}
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-zuba-accent" />
                <span className="font-medium">Support:</span> 24/7 Technical Support
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-zuba-accent" />
                <span className="font-medium">Response:</span> Emergency &lt; 1 hour
              </div>
            </div>
            <div className="text-small text-muted-foreground">
              <div className="font-medium mb-2 text-zuba-blue">Certifications & Partnerships:</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Award className="h-3 w-3 text-zuba-accent" />
                  Authorized Starlink Reseller
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-3 w-3 text-zuba-accent" />
                  Certified Peplink Partner
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-3 w-3 text-zuba-accent" />
                  FCC Licensed Installation Teams
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-3 w-3 text-zuba-accent" />
                  Remote Location Specialists
                </div>
              </div>
            </div>
          </div>

          {/* Connectivity Solutions */}
          <div>
            <h6 className="font-semibold text-zuba-blue mb-4 text-lg">Connectivity Solutions</h6>
            <ul className="space-y-3 text-small text-muted-foreground">
              <li>
                <Link to="/starlink-services" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Starlink Satellite Internet
                </Link>
              </li>
              <li>
                <Link to="/starlink-services" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Starlink Maritime
                </Link>
              </li>
              <li>
                <Link to="/starlink-services" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Starlink Aviation
                </Link>
              </li>
              <li>
                <Link to="/peplink-services" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Peplink SD-WAN
                </Link>
              </li>
              <li>
                <Link to="/peplink-services" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  SpeedFusion Bonding
                </Link>
              </li>
              <li>
                <Link to="/peplink-services" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Multi-WAN Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Hybrid Connectivity
                </Link>
              </li>
            </ul>
          </div>

          {/* Professional Services */}
          <div>
            <h6 className="font-semibold text-zuba-blue mb-4 text-lg">Professional Services</h6>
            <ul className="space-y-3 text-small text-muted-foreground">
              <li>
                <Link to="/services" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Site Surveys & Planning
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Professional Installation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Network Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  24/7 Monitoring
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Technical Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Emergency Response
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Consultation Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry Solutions */}
          <div>
            <h6 className="font-semibold text-zuba-blue mb-4 text-lg">Industry Solutions</h6>
            <ul className="space-y-3 text-small text-muted-foreground">
              <li>
                <Link to="/solutions/banking-finance" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Banking & Finance
                </Link>
              </li>
              <li>
                <Link to="/solutions/hospitality" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Hotels & Hospitality
                </Link>
              </li>
              <li>
                <Link to="/solutions/education" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Education
                </Link>
              </li>
              <li>
                <Link to="/solutions/government" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Government
                </Link>
              </li>
              <li>
                <Link to="/solutions/restaurants-cafes" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Restaurants & Cafes
                </Link>
              </li>
              <li>
                <Link to="/solutions/manufacturing-industrial" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="font-semibold text-zuba-blue mb-4 text-lg">Company</h6>
            <ul className="space-y-3 text-small text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/legal/terms-of-service" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy-policy" className="hover:text-zuba-accent transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-zuba-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Service Level Information Only */}
        <div className="pt-8 border-t border-gray-200/50">
          {/* Service Level Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-small font-medium text-foreground">24/7 Emergency Support</span>
              </div>
              <p className="text-small text-muted-foreground">Critical issue response within 1 hour, anywhere in the world</p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-small font-medium text-foreground">Global Coverage</span>
              </div>
              <p className="text-small text-muted-foreground">Starlink satellite internet available in 100+ countries worldwide</p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-small font-medium text-foreground">Expert Installation</span>
              </div>
              <p className="text-small text-muted-foreground">FCC licensed technicians with remote location expertise</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Border Design */}
      <BorderDesign />
    </footer>
  );
};

export default Footer;