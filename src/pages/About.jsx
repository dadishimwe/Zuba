import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, ChevronUp, Award, Users, Globe, Shield, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { COMPANY_INFO } from '@/constants/company.js'
import fullLogo from '@/assets/logos/zubabroadbandfull.png'

const About = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const teamMembers = [
    {
      name: "Robert Fogler",
      role: "CEO",
      bio: "Visionary leader with extensive experience in telecommunications and satellite technology. Driving Zuba Broadband's mission to connect the unconnected across Africa and beyond.",
      linkedin: "https://linkedin.com/in/robert-fogler",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Fred Rwigamba",
      role: "CFO, COO",
      bio: "Strategic financial and operational leader with deep expertise in scaling technology companies. Overseeing Zuba Broadband's growth and operational excellence across multiple markets.",
      linkedin: "https://linkedin.com/in/fred-rwigamba",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Roland Dunee",
      role: "Network and Cybersecurity Manager",
      bio: "Cybersecurity expert and network architect with specialized knowledge in satellite communications security. Ensuring robust, secure connectivity solutions for enterprise clients.",
      linkedin: "https://linkedin.com/in/roland-dunee",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Amanda Umutoni",
      role: "Sales and Commercial Manager",
      bio: "Dynamic sales leader with proven track record in B2B technology sales. Building strong client relationships and driving commercial success across diverse market segments.",
      linkedin: "https://linkedin.com/in/amanda-umutoni",
      image: "/api/placeholder/300/300"
    }
  ]

  const faqs = [
    {
      question: "What makes Zuba Broadband different from other internet providers?",
      answer: "As authorized Starlink and Peplink resellers, we specialize in satellite internet and SD-WAN solutions for challenging environments. We provide comprehensive support from design to deployment, with 99.9% uptime guarantee and 24/7 technical support."
    },
    {
      question: "How quickly can Starlink internet be installed?",
      answer: "Starlink Residential can often be self-installed within hours. For business and specialized installations, our certified technicians typically complete deployment within 1-2 weeks, depending on complexity and location."
    },
    {
      question: "Do you provide service in remote or maritime locations?",
      answer: "Yes! We specialize in connectivity for remote locations, maritime vessels, aviation, and emergency services. Starlink's satellite constellation provides coverage virtually anywhere on Earth."
    },
    {
      question: "What kind of speeds can I expect with Starlink?",
      answer: "Speeds vary by service type: Residential (25-100 Mbps), Business (40-220 Mbps), Maritime (50-200 Mbps), and Aviation (up to 350 Mbps). All services feature low latency (20-60ms) suitable for real-time applications."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Absolutely! We provide 24/7 technical support, proactive monitoring, firmware updates, and maintenance services. Our average response time is under 4 hours for all support requests."
    }
  ]

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src={fullLogo} 
              alt="Zuba Broadband Technology" 
              className="h-20 w-auto mx-auto mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="zuba-blue">Zuba Broadband</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            {COMPANY_INFO.description} With <span className="zuba-accent">{COMPANY_INFO.stats.yearsInBusiness} years</span> of experience, 
            we've served <span className="zuba-blue">{COMPANY_INFO.stats.customersSatisfied} customers</span> across <span className="zuba-accent">{COMPANY_INFO.stats.coverageAreas}+ locations</span> worldwide, delivering <span className="zuba-accent">reliable connectivity</span> where it matters most.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-lg">
              <MapPin className="h-5 w-5 text-blue-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Address</p>
                <p className="text-sm text-gray-600">{COMPANY_INFO.contact.address.street}, {COMPANY_INFO.contact.address.city}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Phone className="h-5 w-5 text-blue-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Phone</p>
                <p className="text-sm text-gray-600">{COMPANY_INFO.contact.phone}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Mail className="h-5 w-5 text-blue-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-sm text-gray-600">{COMPANY_INFO.contact.sales}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Our Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-sm">01</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Satellite Internet Solutions</h3>
              </div>
              <p className="text-gray-600 mb-8">
                Authorized Starlink reseller providing high-speed satellite internet for residential, 
                business, maritime, and aviation applications. Global coverage with low-latency connectivity.
              </p>
              
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-sm">02</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">SD-WAN Networking</h3>
              </div>
              <p className="text-gray-600">
                Certified Peplink partner offering advanced SD-WAN solutions, load balancing, 
                and unbreakable connectivity through SpeedFusion technology.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-sm">03</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Installation</h3>
              </div>
              <p className="text-gray-600 mb-8">
                Expert installation and configuration services by certified technicians. 
                From site surveys to network optimization, we ensure optimal performance.
              </p>
              
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-sm">04</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">24/7 Support & Monitoring</h3>
              </div>
              <p className="text-gray-600">
                Continuous monitoring, proactive maintenance, and round-the-clock technical support 
                with {COMPANY_INFO.stats.responseTime} average response time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Certifications & Partnerships</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {COMPANY_INFO.certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900 text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Meet the Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                {/* Square Image */}
                <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center w-full h-full">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                
                {/* Team Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  {/* LinkedIn Link */}
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Got questions about our connectivity solutions? We've got answers.
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg bg-white">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About