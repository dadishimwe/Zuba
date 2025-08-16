import { Satellite, Network, Globe, Users, FileText, Phone, Zap, Shield, Signal, Router } from 'lucide-react';

export const NAVIGATION_DATA = {
  services: {
    title: 'Services',
    description: 'Professional satellite internet and SD-WAN solutions',
    keyPoints: [
      'Starlink satellite internet installation',
      'Peplink SD-WAN and bonding solutions'
    ],
    icon: Satellite,
    color: 'blue',
    expandedContent: {
      title: 'Our Core Services',
      subtitle: 'Professional connectivity solutions for any environment',
      sections: [
        {
          title: 'Starlink Solutions',
          icon: Signal,
          links: [
            { title: 'Residential Internet', href: '/starlink-services', description: 'High-speed home connectivity' },
            { title: 'Business Solutions', href: '/starlink-services', description: 'Enterprise-grade satellite internet' },
            { title: 'Maritime Connectivity', href: '/starlink-services', description: 'Ocean-wide coverage for vessels' },
            { title: 'Aviation Internet', href: '/starlink-services', description: 'In-flight Wi-Fi solutions' }
          ]
        },
        {
          title: 'Peplink SD-WAN',
          icon: Router,
          links: [
            { title: 'SpeedFusion Bonding', href: '/peplink-services', description: 'Unbreakable multi-WAN connectivity' },
            { title: 'Enterprise Routers', href: '/peplink-services', description: 'Business-grade networking equipment' },
            { title: 'Mobile Solutions', href: '/peplink-services', description: 'Vehicle and portable connectivity' },
            { title: 'InControl Management', href: '/peplink-services', description: 'Cloud-based network control' }
          ]
        },
        {
          title: 'Support Services',
          icon: Shield,
          links: [
            { title: 'Professional Installation', href: '/services', description: 'Expert setup and configuration' },
            { title: '24/7 Technical Support', href: '/contact', description: 'Round-the-clock assistance' },
            { title: 'Network Design', href: '/services', description: 'Custom connectivity planning' },
            { title: 'Maintenance Plans', href: '/services', description: 'Ongoing system optimization' }
          ]
        }
      ],
      cta: {
        title: 'Ready to get started?',
        description: 'Contact our experts for a free consultation',
        button: 'Get Free Quote',
        href: '/contact'
      },
      image: 'https://via.placeholder.com/400x300/F0F0F0/808080?text=Services+Overview'
    }
  },
  solutions: {
    title: 'Solutions',
    description: 'Enterprise solutions by industry vertical',
    keyPoints: [
      'Banking, hospitality, education, and government',
      'Industry-specific compliance and requirements'
    ],
    icon: Globe,
    color: 'green',
    expandedContent: {
      title: 'Enterprise Industry Solutions',
      subtitle: 'Specialized connectivity solutions for specific business verticals',
      sections: [
        {
          title: 'Financial & Professional Services',
          icon: Globe,
          links: [
            { title: 'Banking & Finance', href: '/solutions/banking-finance', description: 'Secure connectivity for financial institutions' },
            { title: 'Insurance Companies', href: '/solutions', description: 'Reliable networks for claims and operations' },
            { title: 'Professional Services', href: '/solutions', description: 'Law firms, accounting, and consulting' },
            { title: 'Government & Public Safety', href: '/solutions/government', description: 'Secure, compliant connectivity' }
          ]
        },
        {
          title: 'Public & Service Sectors',
          icon: Network,
          links: [
            { title: 'Hotels & Hospitality', href: '/solutions/hospitality', description: 'Guest Wi-Fi and operational systems' },
            { title: 'Schools & Universities', href: '/solutions/education', description: 'Educational technology infrastructure' },
            { title: 'Manufacturing & Industrial', href: '/solutions/manufacturing-industrial', description: 'Industrial IoT and automation' },
            { title: 'Restaurants & Cafes', href: '/solutions/restaurants-cafes', description: 'POS systems and customer Wi-Fi' }
          ]
        }
      ],
      cta: {
        title: 'Industry-specific solution?',
        description: 'Our experts understand your industry requirements',
        button: 'Discuss Your Industry',
        href: '/contact'
      },
      image: 'https://via.placeholder.com/400x300/F0F0F0/808080?text=Enterprise+Solutions'
    }
  },
  about: {
    title: 'About',
    description: 'Learn about our expertise and certifications',
    keyPoints: [
      'Authorized Starlink and Peplink reseller',
      'Expert team with proven track record'
    ],
    icon: Users,
    color: 'purple',
    expandedContent: {
      title: 'About Zuba Broadband',
      subtitle: 'Your trusted partner for satellite and SD-WAN connectivity',
      sections: [
        {
          title: 'Our Expertise',
          icon: Shield,
          links: [
            { title: 'Company Overview', href: '/about', description: 'Our mission and vision' },
            { title: 'Certifications', href: '/about', description: 'Industry certifications and partnerships' },
            { title: 'Track Record', href: '/about', description: 'Successful deployments worldwide' },
            { title: 'Team Expertise', href: '/about', description: 'Experienced connectivity professionals' }
          ]
        },
        {
          title: 'Why Choose Us',
          icon: Zap,
          links: [
            { title: 'Authorized Partner', href: '/about', description: 'Official Starlink and Peplink reseller' },
            { title: 'Global Reach', href: '/about', description: 'Worldwide deployment capabilities' },
            { title: 'Expert Support', href: '/about', description: '24/7 technical assistance' },
            { title: 'Proven Results', href: '/about', description: 'Thousands of successful installations' }
          ]
        }
      ],
      cta: {
        title: 'Want to learn more?',
        description: 'Discover how we can solve your connectivity challenges',
        button: 'Learn About Us',
        href: '/about'
      },
      image: 'https://via.placeholder.com/400x300/F0F0F0/808080?text=About+Us'
    }
  },
  blog: {
    title: 'Blog',
    description: 'Industry insights and technical articles',
    keyPoints: [
      'Case studies and success stories',
      'Technical guides and best practices'
    ],
    icon: FileText,
    color: 'orange',
    expandedContent: {
      title: 'Latest Insights',
      subtitle: 'Stay updated with industry trends and technical knowledge',
      sections: [
        {
          title: 'Recent Articles',
          icon: FileText,
          links: [
            { title: 'Starlink Maritime Revolution', href: '/blog/1', description: 'How satellite internet transforms ocean connectivity' },
            { title: 'Peplink SD-WAN Benefits', href: '/blog/2', description: 'Unbreakable connectivity for enterprises' },
            { title: 'Remote Site Connectivity', href: '/blog/3', description: 'Antarctica research station case study' },
            { title: 'Aviation Internet Future', href: '/blog/4', description: 'In-flight Wi-Fi innovations' }
          ]
        },
        {
          title: 'Categories',
          icon: Network,
          links: [
            { title: 'Case Studies', href: '/blog', description: 'Real-world implementation stories' },
            { title: 'Technical Guides', href: '/blog', description: 'Installation and configuration help' },
            { title: 'Industry News', href: '/blog', description: 'Latest connectivity developments' },
            { title: 'Best Practices', href: '/blog', description: 'Expert tips and recommendations' }
          ]
        }
      ],
      cta: {
        title: 'Stay informed',
        description: 'Subscribe to our newsletter for the latest updates',
        button: 'Read Our Blog',
        href: '/blog'
      },
      image: 'https://via.placeholder.com/400x300/F0F0F0/808080?text=Blog+Insights'
    }
  },
  contact: {
    title: 'Contact',
    description: 'Get in touch with our experts',
    keyPoints: [
      '24/7 support and consultation',
      'Free quotes and system design'
    ],
    icon: Phone,
    color: 'red',
    expandedContent: {
      title: 'Get In Touch',
      subtitle: 'Our experts are ready to help with your connectivity needs',
      sections: [
        {
          title: 'Contact Options',
          icon: Phone,
          links: [
            { title: 'Request Quote', href: '/contact', description: 'Free consultation and pricing' },
            { title: 'Technical Support', href: '/contact', description: '24/7 assistance for existing customers' },
            { title: 'Sales Inquiry', href: '/contact', description: 'Speak with our connectivity experts' },
            { title: 'Partnership Opportunities', href: '/contact', description: 'Become a reseller partner' }
          ]
        },
        {
          title: 'Support Resources',
          icon: Shield,
          links: [
            { title: 'Emergency Support', href: '/contact', description: 'Critical issue resolution' },
            { title: 'Installation Scheduling', href: '/contact', description: 'Book professional installation' },
            { title: 'Training Programs', href: '/contact', description: 'Learn to manage your systems' },
            { title: 'Documentation', href: '/contact', description: 'Access technical resources' }
          ]
        }
      ],
      cta: {
        title: 'Ready to connect?',
        description: 'Contact us today for immediate assistance',
        button: 'Contact Us Now',
        href: '/contact'
      },
      image: 'https://via.placeholder.com/400x300/F0F0F0/808080?text=Contact+Support'
    }
  }
};