import React from 'react';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import { 
  Accessibility, 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  Monitor, 
  Keyboard, 
  Mouse, 
  Smartphone,
  CheckCircle,
  AlertCircle,
  Clock,
  Mail,
  Phone
} from 'lucide-react';

const AccessibilityStatement = () => {
  const lastUpdated = 'December 15, 2024';

  const wcagCriteria = [
    {
      level: 'A',
      status: 'Compliant',
      color: 'green',
      description: 'Basic accessibility requirements met',
      examples: [
        'Images have alternative text',
        'Content is keyboard accessible',
        'Sufficient color contrast ratios',
        'No seizure-inducing content'
      ]
    },
    {
      level: 'AA',
      status: 'Mostly Compliant',
      color: 'blue',
      description: 'Enhanced accessibility features implemented',
      examples: [
        'Enhanced contrast ratios (4.5:1 minimum)',
        'Resizable text up to 200%',
        'Multiple ways to navigate content',
        'Consistent navigation and identification'
      ]
    },
    {
      level: 'AAA',
      status: 'Partially Compliant',
      color: 'amber',
      description: 'Advanced accessibility features in progress',
      examples: [
        'Highest contrast ratios (7:1)',
        'Sign language interpretation (planned)',
        'Context-sensitive help',
        'Advanced error prevention'
      ]
    }
  ];

  const assistiveTechnologies = [
    {
      icon: Eye,
      name: 'Screen Readers',
      description: 'Full compatibility with NVDA, JAWS, and VoiceOver',
      features: [
        'Semantic HTML structure',
        'ARIA labels and descriptions',
        'Proper heading hierarchy',
        'Descriptive link text'
      ]
    },
    {
      icon: Keyboard,
      name: 'Keyboard Navigation',
      description: 'Complete functionality without mouse interaction',
      features: [
        'Tab order follows logical flow',
        'Skip links for main content',
        'Visible focus indicators',
        'Keyboard shortcuts available'
      ]
    },
    {
      icon: Monitor,
      name: 'Voice Control',
      description: 'Compatible with Dragon NaturallySpeaking and similar tools',
      features: [
        'Voice-friendly navigation',
        'Clear element labels',
        'Predictable interface behavior',
        'Minimal voice command conflicts'
      ]
    },
    {
      icon: Smartphone,
      name: 'Mobile Accessibility',
      description: 'Optimized for mobile screen readers and touch interfaces',
      features: [
        'Touch target minimum 44px',
        'Gesture alternatives provided',
        'Mobile screen reader support',
        'Responsive design principles'
      ]
    }
  ];

  const userNeeds = [
    {
      icon: Eye,
      category: 'Visual Impairments',
      accommodations: [
        'High contrast mode available',
        'Screen reader compatibility',
        'Scalable fonts up to 200%',
        'Alternative text for images',
        'Color is not the only information indicator'
      ]
    },
    {
      icon: Ear,
      category: 'Hearing Impairments',
      accommodations: [
        'Captions for video content',
        'Visual alerts and notifications',
        'Text alternatives for audio',
        'Sign language interpretation (planned)',
        'Written contact options available'
      ]
    },
    {
      icon: Hand,
      category: 'Motor Impairments',
      accommodations: [
        'Large click targets (minimum 44px)',
        'Keyboard-only navigation',
        'Extended timeout options',
        'Drag and drop alternatives',
        'Voice control compatibility'
      ]
    },
    {
      icon: Brain,
      category: 'Cognitive Impairments',
      accommodations: [
        'Clear, simple language',
        'Consistent navigation patterns',
        'Error prevention and correction',
        'Context-sensitive help',
        'Distraction-free reading mode'
      ]
    }
  ];

  const getStatusColor = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-700 border-green-200',
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      amber: 'bg-amber-100 text-amber-700 border-amber-200'
    };
    return colors[color] || colors.blue;
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Compliant':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'Mostly Compliant':
        return <CheckCircle className="h-5 w-5 text-blue-600" />;
      case 'Partially Compliant':
        return <AlertCircle className="h-5 w-5 text-amber-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="bg-background">
      <SEOHead
        title="Accessibility Statement"
        description="Zuba Broadband Technology's commitment to web accessibility. Learn about our WCAG compliance, assistive technology support, and accessibility features."
        keywords="accessibility statement, WCAG compliance, assistive technology, screen reader, keyboard navigation, web accessibility"
        canonical="/legal/accessibility-statement"
      />

      {/* Header Section */}
      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Accessibility className="h-6 w-6 text-blue-600" />
                </div>
                <h1 className="mb-0">Accessibility Statement</h1>
              </div>
              <p className="text-large max-w-2xl mx-auto text-muted-foreground">
                We are committed to ensuring our website and services are accessible to everyone, 
                regardless of ability or technology used.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 text-small text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Accessibility Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            
            <FadeIn delay={100}>
              <section className="mb-12">
                <h2>Our Commitment to Accessibility</h2>
                <p>
                  Zuba Broadband Technology is committed to providing internet connectivity solutions 
                  that are accessible to all users. We believe that everyone should have equal access 
                  to information and functionality, and we work continuously to improve the accessibility 
                  of our website and services.
                </p>
                <p>
                  This statement reflects our efforts to ensure our website conforms to the 
                  Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards published 
                  by the World Wide Web Consortium (W3C).
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={200}>
              <section className="mb-12">
                <h2>WCAG 2.1 Compliance Status</h2>
                <p className="mb-6">
                  Our website aims to conform to WCAG 2.1 standards at various levels. 
                  Here's our current compliance status:
                </p>

                <div className="grid gap-6">
                  {wcagCriteria.map((criteria, index) => (
                    <div key={index} className="card-hover rounded-lg p-6 bg-card">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {getStatusIcon(criteria.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="font-medium text-foreground">WCAG 2.1 Level {criteria.level}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(criteria.color)}`}>
                              {criteria.status}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-4">{criteria.description}</p>
                          <div>
                            <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {criteria.examples.map((example, i) => (
                                <li key={i}>• {example}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={300}>
              <section className="mb-12">
                <h2>Assistive Technology Support</h2>
                <p className="mb-6">
                  Our website is designed to work with a wide range of assistive technologies 
                  and adaptive strategies. We test regularly with the following:
                </p>

                <div className="grid gap-6">
                  {assistiveTechnologies.map((tech, index) => (
                    <div key={index} className="border border-border rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <tech.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground mb-2">{tech.name}</h3>
                          <p className="text-muted-foreground mb-4">{tech.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {tech.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={400}>
              <section className="mb-12">
                <h2>Accessibility Features by User Need</h2>
                <p className="mb-6">
                  We've designed our website to accommodate various accessibility needs:
                </p>

                <div className="space-y-6">
                  {userNeeds.map((need, index) => (
                    <div key={index} className="card-hover rounded-lg p-6 bg-card">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                          <need.icon className="h-5 w-5 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground mb-3">{need.category}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {need.accommodations.map((accommodation, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{accommodation}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={500}>
              <section className="mb-12">
                <h2>Keyboard Navigation Guide</h2>
                <p>Our website is fully navigable using only a keyboard. Here are the key shortcuts:</p>

                <div className="bg-muted rounded-lg p-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Basic Navigation</h4>
                      <ul className="space-y-2 text-sm">
                        <li><kbd className="px-2 py-1 bg-background rounded text-xs font-mono">Tab</kbd> - Move forward through links and form elements</li>
                        <li><kbd className="px-2 py-1 bg-background rounded text-xs font-mono">Shift + Tab</kbd> - Move backward through elements</li>
                        <li><kbd className="px-2 py-1 bg-background rounded text-xs font-mono">Enter</kbd> - Activate links and buttons</li>
                        <li><kbd className="px-2 py-1 bg-background rounded text-xs font-mono">Space</kbd> - Activate buttons and checkboxes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Advanced Navigation</h4>
                      <ul className="space-y-2 text-sm">
                        <li><kbd className="px-2 py-1 bg-background rounded text-xs font-mono">Alt + 1</kbd> - Skip to main content</li>
                        <li><kbd className="px-2 py-1 bg-background rounded text-xs font-mono">Alt + 2</kbd> - Skip to navigation</li>
                        <li><kbd className="px-2 py-1 bg-background rounded text-xs font-mono">Esc</kbd> - Close modals and menus</li>
                        <li><kbd className="px-2 py-1 bg-background rounded text-xs font-mono">Arrow Keys</kbd> - Navigate within menus</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={600}>
              <section className="mb-12">
                <h2>Known Limitations</h2>
                <p>
                  While we strive for full accessibility, we acknowledge some current limitations 
                  and are actively working to address them:
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-6">
                  <h4 className="font-medium text-amber-900 mb-3">Areas for Improvement</h4>
                  <ul className="text-amber-800 space-y-2">
                    <li>• Some third-party embedded content may not be fully accessible</li>
                    <li>• Complex interactive elements are being enhanced for better screen reader support</li>
                    <li>• Video content is being updated with comprehensive captions and transcripts</li>
                    <li>• Some PDF documents are being converted to accessible formats</li>
                  </ul>
                  <p className="text-amber-800 text-sm mt-4 mb-0">
                    <strong>Timeline:</strong> We aim to address these limitations by Q2 2025.
                  </p>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={700}>
              <section className="mb-12">
                <h2>Third-Party Content</h2>
                <p>
                  Some content on our website is provided by third-party services. While we work 
                  to ensure these services meet our accessibility standards, some may have limitations:
                </p>
                <ul>
                  <li><strong>Payment Processing:</strong> Stripe payment forms meet WCAG 2.1 AA standards</li>
                  <li><strong>Customer Support:</strong> Intercom chat widget includes keyboard navigation</li>
                  <li><strong>Maps and Location Services:</strong> Alternative text descriptions provided</li>
                  <li><strong>Video Content:</strong> YouTube embeds include captions when available</li>
                </ul>
                <p>
                  If you encounter accessibility issues with third-party content, please contact us 
                  and we'll work to provide alternative access methods.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={800}>
              <section className="mb-12">
                <h2>Testing and Feedback</h2>
                <h3>8.1 Regular Testing</h3>
                <p>We conduct regular accessibility testing using:</p>
                <ul>
                  <li>Automated testing tools (axe-core, WAVE)</li>
                  <li>Manual testing with screen readers (NVDA, JAWS, VoiceOver)</li>
                  <li>Keyboard-only navigation testing</li>
                  <li>Color contrast and visual testing</li>
                  <li>User testing with people with disabilities</li>
                </ul>

                <h3>8.2 Continuous Improvement</h3>
                <p>
                  Accessibility is an ongoing process. We regularly review and update our website 
                  based on user feedback, technological advances, and evolving accessibility standards.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={900}>
              <section className="mb-12">
                <h2>Accessibility Support and Feedback</h2>
                <p>
                  We welcome feedback about the accessibility of our website. If you encounter 
                  accessibility barriers or have suggestions for improvement, please contact us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="card-hover rounded-lg p-6 bg-card">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-2">Email Support</h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          accessibility@zubabroadband.com
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Response within 48 hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card-hover rounded-lg p-6 bg-card">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-2">Phone Support</h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          1-800-ZUBA-NET (ext. 3)
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Mon-Fri 8AM-6PM (TTY available)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                  <h4 className="font-medium text-blue-900 mb-2">What to Include in Your Feedback</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• The page or section where you encountered the issue</li>
                    <li>• A description of what happened and what you expected</li>
                    <li>• The assistive technology or browser you were using</li>
                    <li>• Your contact information if you'd like a response</li>
                  </ul>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={1000}>
              <section className="mb-12">
                <h2>Accessibility Resources</h2>
                <p>
                  For more information about web accessibility and assistive technologies:
                </p>
                <ul>
                  <li><a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">W3C Web Accessibility Initiative</a></li>
                  <li><a href="https://webaim.org/" target="_blank" rel="noopener noreferrer">WebAIM - Web Accessibility in Mind</a></li>
                  <li><a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer">Americans with Disabilities Act Information</a></li>
                  <li><a href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer">Section 508 Compliance Guidelines</a></li>
                </ul>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                  <h4 className="font-medium text-green-900 mb-2">Our Promise</h4>
                  <p className="text-green-800 text-sm mb-0">
                    We are committed to making our website and services accessible to everyone. 
                    Accessibility is not just about compliance—it's about creating an inclusive 
                    experience that enables all users to access the connectivity solutions they need.
                  </p>
                </div>
              </section>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityStatement;