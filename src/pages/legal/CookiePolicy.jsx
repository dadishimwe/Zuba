import React from 'react';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import { Cookie, Settings, Eye, BarChart3, Target, Clock } from 'lucide-react';

const CookiePolicy = () => {
  const lastUpdated = 'December 15, 2024';

  const cookieTypes = [
    {
      icon: Settings,
      name: 'Essential Cookies',
      color: 'green',
      description: 'Required for basic website functionality and cannot be disabled.',
      examples: [
        'Session management and authentication',
        'Security and fraud prevention',
        'Load balancing and performance',
        'Cookie consent preferences'
      ],
      retention: 'Session or up to 1 year',
      canDisable: false
    },
    {
      icon: BarChart3,
      name: 'Analytics Cookies',
      color: 'blue',
      description: 'Help us understand how visitors interact with our website.',
      examples: [
        'Google Analytics for traffic analysis',
        'Page views and user journeys',
        'Site performance monitoring',
        'Error tracking and reporting'
      ],
      retention: 'Up to 26 months',
      canDisable: true
    },
    {
      icon: Target,
      name: 'Marketing Cookies',
      color: 'purple',
      description: 'Used to deliver personalized content and measure advertising effectiveness.',
      examples: [
        'Social media integration',
        'Newsletter signup tracking',
        'Campaign performance measurement',
        'Remarketing and retargeting'
      ],
      retention: 'Up to 24 months',
      canDisable: true
    },
    {
      icon: Eye,
      name: 'Functional Cookies',
      color: 'orange',
      description: 'Remember your preferences and enhance your user experience.',
      examples: [
        'Language and region preferences',
        'Theme and layout settings',
        'Form data and user inputs',
        'Customer support chat history'
      ],
      retention: 'Up to 12 months',
      canDisable: true
    }
  ];

  const thirdPartyCookies = [
    {
      provider: 'Google Analytics',
      purpose: 'Website analytics and performance monitoring',
      cookies: ['_ga', '_ga_*', '_gid', '_gat'],
      retention: '26 months',
      privacyPolicy: 'https://policies.google.com/privacy'
    },
    {
      provider: 'Google Tag Manager',
      purpose: 'Tag and script management',
      cookies: ['_gtm'],
      retention: 'Session',
      privacyPolicy: 'https://policies.google.com/privacy'
    },
    {
      provider: 'Stripe',
      purpose: 'Payment processing and fraud prevention',
      cookies: ['__stripe_mid', '__stripe_sid'],
      retention: '1 year',
      privacyPolicy: 'https://stripe.com/privacy'
    },
    {
      provider: 'Intercom',
      purpose: 'Customer support chat functionality',
      cookies: ['intercom-*'],
      retention: '9 months',
      privacyPolicy: 'https://www.intercom.com/legal/privacy'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-600 border-green-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-background">
      <SEOHead
        title="Cookie Policy"
        description="Cookie Policy for Zuba Broadband Technology. Learn about the cookies we use, how they work, and how to manage your cookie preferences."
        keywords="cookie policy, website cookies, tracking, analytics, privacy preferences"
        canonical="/legal/cookie-policy"
      />

      {/* Header Section */}
      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Cookie className="h-6 w-6 text-amber-600" />
                </div>
                <h1 className="mb-0">Cookie Policy</h1>
              </div>
              <p className="text-large max-w-2xl mx-auto text-muted-foreground">
                This policy explains how we use cookies and similar technologies on our website to enhance your experience and improve our services.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 text-small text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cookie Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            
            <FadeIn delay={100}>
              <section className="mb-12">
                <h2>What Are Cookies?</h2>
                <p>
                  Cookies are small text files stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your 
                  preferences, analyzing site usage, and enabling certain functionality.
                </p>
                <p>
                  Cookies can be "session cookies" (deleted when you close your browser) or 
                  "persistent cookies" (remain on your device for a specified period). They can 
                  also be "first-party cookies" (set by our website) or "third-party cookies" 
                  (set by external services we use).
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={200}>
              <section className="mb-12">
                <h2>Types of Cookies We Use</h2>
                <p className="mb-8">
                  We use different types of cookies for various purposes. Here's a detailed breakdown:
                </p>

                <div className="grid gap-6">
                  {cookieTypes.map((type, index) => (
                    <div key={index} className="card-hover rounded-lg p-6 bg-card">
                      <div className="flex items-start gap-4">
                        <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${getColorClasses(type.color)}`}>
                          <type.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium text-foreground">{type.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              type.canDisable 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                              {type.canDisable ? 'Optional' : 'Required'}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-4">{type.description}</p>
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-sm font-medium text-foreground mb-2">Examples:</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                {type.examples.map((example, i) => (
                                  <li key={i}>• {example}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">
                                <strong>Retention:</strong> {type.retention}
                              </span>
                              <span className="text-muted-foreground">
                                <strong>Can disable:</strong> {type.canDisable ? 'Yes' : 'No'}
                              </span>
                            </div>
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
                <h2>Third-Party Cookies</h2>
                <p className="mb-6">
                  We work with trusted third-party services that may set their own cookies. 
                  These partners help us provide better services and analyze website performance.
                </p>

                <div className="space-y-4">
                  {thirdPartyCookies.map((provider, index) => (
                    <div key={index} className="border border-border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-medium text-foreground">{provider.provider}</h3>
                          <p className="text-muted-foreground text-sm">{provider.purpose}</p>
                        </div>
                        <a 
                          href={provider.privacyPolicy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 text-sm font-medium"
                        >
                          Privacy Policy →
                        </a>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-foreground">Cookie Names:</span>
                          <div className="text-muted-foreground mt-1">
                            {provider.cookies.join(', ')}
                          </div>
                        </div>
                        <div>
                          <span className="font-medium text-foreground">Retention Period:</span>
                          <div className="text-muted-foreground mt-1">{provider.retention}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={400}>
              <section className="mb-12">
                <h2>Managing Your Cookie Preferences</h2>
                <p>You have several options to control cookies on our website:</p>

                <h3>3.1 Cookie Consent Banner</h3>
                <p>
                  When you first visit our website, you'll see a cookie consent banner where you can:
                </p>
                <ul>
                  <li>Accept all cookies for the best experience</li>
                  <li>Customize your preferences by cookie type</li>
                  <li>Accept only essential cookies</li>
                  <li>Learn more about each cookie category</li>
                </ul>

                <h3>3.2 Browser Settings</h3>
                <p>You can also manage cookies through your browser settings:</p>
                <ul>
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>

                <h3>3.3 Opt-Out Tools</h3>
                <p>For specific third-party cookies, you can use these opt-out tools:</p>
                <ul>
                  <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><strong>Advertising Cookies:</strong> <a href="http://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
                  <li><strong>Network Advertising:</strong> <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">NAI Opt-Out Tool</a></li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-6">
                  <h4 className="font-medium text-amber-900 mb-2">Important Note</h4>
                  <p className="text-amber-800 text-sm mb-0">
                    Disabling certain cookies may affect website functionality. Essential cookies 
                    are required for basic site operation and cannot be disabled. If you disable 
                    analytics cookies, we won't be able to improve our services based on usage data.
                  </p>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={500}>
              <section className="mb-12">
                <h2>How Long Do Cookies Last?</h2>
                <p>Different cookies have different retention periods:</p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left font-medium">Cookie Type</th>
                        <th className="border border-border p-3 text-left font-medium">Retention Period</th>
                        <th className="border border-border p-3 text-left font-medium">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3">Session Cookies</td>
                        <td className="border border-border p-3">Until browser closes</td>
                        <td className="border border-border p-3">Basic functionality and security</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Essential Persistent</td>
                        <td className="border border-border p-3">Up to 1 year</td>
                        <td className="border border-border p-3">Authentication and preferences</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Analytics Cookies</td>
                        <td className="border border-border p-3">Up to 26 months</td>
                        <td className="border border-border p-3">Website performance analysis</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Marketing Cookies</td>
                        <td className="border border-border p-3">Up to 24 months</td>
                        <td className="border border-border p-3">Personalization and advertising</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={600}>
              <section className="mb-12">
                <h2>Cookies and Your Privacy</h2>
                <p>We are committed to protecting your privacy while using cookies:</p>

                <h3>5.1 Data Minimization</h3>
                <ul>
                  <li>We only collect data necessary for the specified purpose</li>
                  <li>Personal information is anonymized when possible</li>
                  <li>We regularly review and delete unnecessary data</li>
                </ul>

                <h3>5.2 Security Measures</h3>
                <ul>
                  <li>Cookies are secured using encryption where appropriate</li>
                  <li>We use secure transmission protocols (HTTPS)</li>
                  <li>Access to cookie data is restricted to authorized personnel</li>
                </ul>

                <h3>5.3 Compliance</h3>
                <ul>
                  <li>We comply with GDPR, CCPA, and other privacy regulations</li>
                  <li>Cookie consent is obtained before non-essential cookies are set</li>
                  <li>You can withdraw consent at any time</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={700}>
              <section className="mb-12">
                <h2>Updates to This Cookie Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our 
                  practices, technology, or legal requirements. When we make significant changes:
                </p>
                <ul>
                  <li>We'll update the "Last Updated" date at the top of this policy</li>
                  <li>We'll notify you via email or website notification</li>
                  <li>We may request renewed consent for new cookie types</li>
                  <li>Previous cookie preferences will be honored until you make new choices</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={800}>
              <section className="mb-12">
                <h2>Contact Us About Cookies</h2>
                <p>
                  If you have questions about our use of cookies or want to exercise your rights 
                  regarding cookie data, please contact us:
                </p>
                <div className="bg-muted rounded-lg p-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Privacy Team</h4>
                      <p className="text-small text-muted-foreground mb-0">
                        Email: privacy@zubabroadband.com<br />
                        Subject: "Cookie Policy Inquiry"<br />
                        Response Time: Within 48 hours
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Cookie Preferences</h4>
                      <p className="text-small text-muted-foreground mb-0">
                        You can also manage your cookie preferences<br />
                        by visiting our <a href="#" className="text-primary hover:text-primary/80">Cookie Settings</a> page<br />
                        or clearing your browser's cookie data.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                  <h4 className="font-medium text-blue-900 mb-2">Quick Actions</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="btn-secondary text-sm">
                      <Settings className="h-4 w-4" />
                      Manage Cookie Preferences
                    </button>
                    <button className="btn-secondary text-sm">
                      <Eye className="h-4 w-4" />
                      View Privacy Policy
                    </button>
                  </div>
                </div>
              </section>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;