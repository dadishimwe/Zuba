import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'
import { COMPANY_INFO } from '@/constants/company.js'
import LocationMap from '@/components/LocationMap.jsx'
import ParallaxBackground from '@/components/ParallaxBackground.jsx'

// Import the contact-long image
import contactLongImage from '@/assets/images/contact-long.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  })
  
  const [fieldErrors, setFieldErrors] = useState({})

  const validateField = (name, value) => {
    const errors = {}
    
    switch (name) {
      case 'name':
        if (!value.trim()) errors.name = 'Name is required'
        else if (value.trim().length < 2) errors.name = 'Name must be at least 2 characters'
        break
      case 'email':
        if (!value.trim()) errors.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors.email = 'Please enter a valid email address'
        break
      case 'phone':
        if (value && !/^[\+]?[\d\s\-\(\)]{10,}$/.test(value)) errors.phone = 'Please enter a valid phone number'
        break
      case 'message':
        if (!value.trim()) errors.message = 'Message is required'
        else if (value.trim().length < 10) errors.message = 'Message must be at least 10 characters'
        break
    }
    
    return errors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate all fields
    const errors = {}
    Object.keys(formData).forEach(field => {
      const fieldErrors = validateField(field, formData[field])
      Object.assign(errors, fieldErrors)
    })
    
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }
    
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null })
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', formData)
      
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null })
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        company: '', 
        serviceType: '', 
        message: '' 
      })
      setFieldErrors({})
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false }))
      }, 5000)
      
    } catch (error) {
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: 'Failed to send message. Please try again or call us directly.' 
      })
    }
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      serviceType: value
    }))
  }

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section with Parallax Background */}
      <ParallaxBackground imageSrc={contactLongImage}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-left">
            <h1 className="mb-6 text-white">
              Get in <span className="zuba-accent">Touch</span>
            </h1>
            <p className="text-large mb-8 max-w-2xl text-white">
              Ready to <span className="zuba-accent">transform</span> your connectivity? Our <span className="text-white font-semibold">expert team</span> is here to help you find the <span className="zuba-accent">perfect solution</span> for your needs.
            </p>
          </div>
        </div>
      </ParallaxBackground>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">{COMPANY_INFO.contact.phone}</p>
              <p className="text-blue-600 text-xs">24/7 Emergency Support</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">{COMPANY_INFO.contact.email}</p>
              <p className="text-green-600 text-xs">{COMPANY_INFO.stats.responseTime} Response</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-3">
                {COMPANY_INFO.contact.address.street}<br />
                {COMPANY_INFO.contact.address.city}, {COMPANY_INFO.contact.address.state}
              </p>
              <p className="text-purple-600 text-xs">By Appointment</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <Clock className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Support Hours</h3>
              <p className="text-gray-600 text-sm mb-3">
                24/7 Technical Support<br />
                Business Hours: 8AM-6PM PST
              </p>
              <p className="text-orange-600 text-xs">Always Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Quote</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within {COMPANY_INFO.stats.responseTime}.
            </p>
          </div>

          {/* Status Messages */}
          {formStatus.isSubmitted && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <p className="text-green-800 font-medium">Message sent successfully!</p>
              </div>
              <p className="text-green-700 text-sm mt-1">
                We'll get back to you within {COMPANY_INFO.stats.responseTime}.
              </p>
            </div>
          )}
          
          {formStatus.error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                <p className="text-red-800 font-medium">Error</p>
              </div>
              <p className="text-red-700 text-sm mt-1">{formStatus.error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full ${fieldErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
                {fieldErrors.name && (
                  <p className="text-red-600 text-sm mt-1">{fieldErrors.name}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full ${fieldErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
                {fieldErrors.email && (
                  <p className="text-red-600 text-sm mt-1">{fieldErrors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full ${fieldErrors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
                {fieldErrors.phone && (
                  <p className="text-red-600 text-sm mt-1">{fieldErrors.phone}</p>
                )}
              </div>
              <div>
                <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                  Company/Organization
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Service Interest
              </Label>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="starlink-residential">Starlink Residential</SelectItem>
                  <SelectItem value="starlink-business">Starlink Business</SelectItem>
                  <SelectItem value="starlink-maritime">Starlink Maritime</SelectItem>
                  <SelectItem value="starlink-aviation">Starlink Aviation</SelectItem>
                  <SelectItem value="peplink-sdwan">Peplink SD-WAN</SelectItem>
                  <SelectItem value="network-design">Network Design</SelectItem>
                  <SelectItem value="installation">Installation Services</SelectItem>
                  <SelectItem value="support">Ongoing Support</SelectItem>
                  <SelectItem value="consultation">Free Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                Project Details *
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your connectivity needs, challenges, and requirements..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className={`w-full ${fieldErrors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
              />
              {fieldErrors.message && (
                <p className="text-red-600 text-sm mt-1">{fieldErrors.message}</p>
              )}
            </div>

            <Button 
              type="submit"
              disabled={formStatus.isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 text-lg"
            >
              {formStatus.isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  Get Free Quote & Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* Location Map */}
      <LocationMap />
    </div>
  )
}

export default Contact