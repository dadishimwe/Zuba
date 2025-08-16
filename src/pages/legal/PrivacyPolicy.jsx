import React from 'react';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import { Shield, Eye, Lock, Globe, AlertTriangle, Clock } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = 'December 15, 2024';

  return (
    <div className="bg-background">
      <SEOHead
        title="Privacy Policy"
        description="Privacy Policy for Zuba Broadband Technology. Learn how we collect, use, and protect your personal information in compliance with GDPR and privacy regulations."
        keywords="privacy policy, data protection, GDPR compliance, personal information, data privacy"
        canonical="/legal/privacy-policy"
      />

      {/* Header Section */}
      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h1 className="mb-0">Privacy Policy</h1>
              </div>
              <p className="text-large max-w-2xl mx-auto text-muted-foreground">
                We are committed to protecting your privacy and personal information. This policy explains how we collect, use, and safeguard your data.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 text-small text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            
            {/* Quick Summary */}
            <FadeIn delay={100}>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
                <div className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-blue-900 font-medium mb-2">Privacy at a Glance</h3>
                    <ul className="text-blue-800 text-sm space-y-1 mb-0 list-disc list-inside">
                      <li>We collect only necessary information for service provision</li>
                      <li>Your data is never sold to third parties</li>
                      <li>We use industry-standard security measures</li>
                      <li>You have full control over your personal information</li>
                      <li>We comply with GDPR, CCPA, and other privacy regulations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <section className="mb-12">
                <h2>1. Information We Collect</h2>
                <h3>1.1 Information You Provide</h3>
                <p>We collect information you directly provide when you:</p>
                <ul>
                  <li><strong>Request Services:</strong> Name, contact information, business details, installation address</li>
                  <li><strong>Create an Account:</strong> Username, password, email address, phone number</li>
                  <li><strong>Contact Support:</strong> Communication history, technical details, service preferences</li>
                  <li><strong>Make Payments:</strong> Billing information (processed securely by third-party providers)</li>
                  <li><strong>Subscribe to Updates:</strong> Email address, communication preferences</li>
                </ul>

                <h3>1.2 Information Automatically Collected</h3>
                <p>When you use our services, we may automatically collect:</p>
                <ul>
                  <li><strong>Website Analytics:</strong> IP address, browser type, pages visited, time spent</li>
                  <li><strong>Network Performance:</strong> Connection speeds, uptime statistics, usage patterns</li>
                  <li><strong>Device Information:</strong> Equipment serial numbers, firmware versions, configuration settings</li>
                  <li><strong>Location Data:</strong> Installation coordinates (for service delivery only)</li>
                  <li><strong>Cookies and Tracking:</strong> Website preferences, session data, analytics cookies</li>
                </ul>

                <h3>1.3 Information from Third Parties</h3>
                <p>We may receive information from:</p>
                <ul>
                  <li><strong>Service Partners:</strong> Starlink, Peplink, and other technology partners</li>
                  <li><strong>Payment Processors:</strong> Transaction confirmations and billing status</li>
                  <li><strong>Public Records:</strong> Business registration, property ownership (for commercial installations)</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={300}>
              <section className="mb-12">
                <h2>2. How We Use Your Information</h2>
                <p>We use collected information for the following purposes:</p>
                
                <h3>2.1 Service Provision</h3>
                <ul>
                  <li>Installing and configuring satellite internet equipment</li>
                  <li>Monitoring network performance and troubleshooting issues</li>
                  <li>Providing technical support and customer service</li>
                  <li>Processing payments and managing billing</li>
                  <li>Scheduling maintenance and service appointments</li>
                </ul>

                <h3>2.2 Communication</h3>
                <ul>
                  <li>Sending service notifications and alerts</li>
                  <li>Responding to inquiries and support requests</li>
                  <li>Providing updates about new services or features</li>
                  <li>Sending newsletters and educational content (with consent)</li>
                </ul>

                <h3>2.3 Legal and Compliance</h3>
                <ul>
                  <li>Complying with legal obligations and regulations</li>
                  <li>Responding to lawful government requests</li>
                  <li>Protecting against fraud and unauthorized access</li>
                  <li>Enforcing our Terms of Service</li>
                </ul>

                <h3>2.4 Business Operations</h3>
                <ul>
                  <li>Analyzing service performance and customer satisfaction</li>
                  <li>Improving our products and services</li>
                  <li>Planning network capacity and coverage</li>
                  <li>Training support staff and technicians</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={400}>
              <section className="mb-12">
                <h2>3. Information Sharing and Disclosure</h2>
                <p>We do not sell your personal information. We may share information in the following circumstances:</p>

                <h3>3.1 Service Partners</h3>
                <ul>
                  <li><strong>Starlink/SpaceX:</strong> Account information for service activation and support</li>
                  <li><strong>Peplink:</strong> Technical data for warranty and support services</li>
                  <li><strong>Installation Contractors:</strong> Contact and location information for service delivery</li>
                </ul>

                <h3>3.2 Service Providers</h3>
                <ul>
                  <li><strong>Payment Processors:</strong> Billing information for transaction processing</li>
                  <li><strong>Cloud Services:</strong> Data hosting and backup services</li>
                  <li><strong>Analytics Providers:</strong> Anonymized website usage data</li>
                </ul>

                <h3>3.3 Legal Requirements</h3>
                <p>We may disclose information when required by law or to:</p>
                <ul>
                  <li>Comply with legal process (subpoenas, court orders)</li>
                  <li>Protect our rights and property</li>
                  <li>Ensure user safety and prevent fraud</li>
                  <li>Cooperate with law enforcement investigations</li>
                </ul>

                <h3>3.4 Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, customer information 
                  may be transferred as part of the business transaction.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={500}>
              <section className="mb-12">
                <h2>4. Data Security</h2>
                <p>We implement comprehensive security measures to protect your information:</p>

                <h3>4.1 Technical Safeguards</h3>
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure socket layer (SSL) for all web communications</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Multi-factor authentication for administrative access</li>
                  <li>Network monitoring and intrusion detection systems</li>
                </ul>

                <h3>4.2 Physical Safeguards</h3>
                <ul>
                  <li>Secure data centers with restricted access</li>
                  <li>Environmental controls and backup power systems</li>
                  <li>Surveillance and security personnel</li>
                </ul>

                <h3>4.3 Administrative Safeguards</h3>
                <ul>
                  <li>Employee background checks and security training</li>
                  <li>Access controls based on job responsibilities</li>
                  <li>Regular security policy updates and compliance audits</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={600}>
              <section className="mb-12">
                <h2>5. Your Privacy Rights</h2>
                <p>You have the following rights regarding your personal information:</p>

                <h3>5.1 Access and Portability</h3>
                <ul>
                  <li>Request copies of your personal information</li>
                  <li>Receive data in a structured, machine-readable format</li>
                  <li>Transfer data to another service provider</li>
                </ul>

                <h3>5.2 Correction and Updates</h3>
                <ul>
                  <li>Update incorrect or incomplete information</li>
                  <li>Modify communication preferences</li>
                  <li>Change account settings and security preferences</li>
                </ul>

                <h3>5.3 Deletion and Restriction</h3>
                <ul>
                  <li>Request deletion of personal information (subject to legal requirements)</li>
                  <li>Restrict processing for specific purposes</li>
                  <li>Object to certain uses of your information</li>
                </ul>

                <h3>5.4 Communication Choices</h3>
                <ul>
                  <li>Opt out of marketing communications</li>
                  <li>Manage cookie preferences</li>
                  <li>Control notification settings</li>
                </ul>

                <p>
                  <strong>Exercising Your Rights:</strong> Contact our privacy team at privacy@zubabroadband.com 
                  or use our online privacy portal to submit requests.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={700}>
              <section className="mb-12">
                <h2>6. Cookies and Tracking Technologies</h2>
                <p>We use cookies and similar technologies to enhance your experience:</p>

                <h3>6.1 Types of Cookies</h3>
                <ul>
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Performance Cookies:</strong> Analytics and site optimization</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Personalized content and advertising (with consent)</li>
                </ul>

                <h3>6.2 Managing Cookies</h3>
                <p>You can control cookie settings through:</p>
                <ul>
                  <li>Your browser settings and preferences</li>
                  <li>Our cookie consent banner</li>
                  <li>Opt-out tools for specific analytics services</li>
                </ul>

                <p>
                  Note: Disabling essential cookies may affect website functionality and service quality.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={800}>
              <section className="mb-12">
                <h2>7. Data Retention</h2>
                <p>We retain information for different periods based on data type and purpose:</p>

                <h3>7.1 Customer Account Data</h3>
                <ul>
                  <li><strong>Active Accounts:</strong> Duration of service relationship</li>
                  <li><strong>Closed Accounts:</strong> 7 years for billing and tax purposes</li>
                  <li><strong>Support Records:</strong> 3 years for service quality and training</li>
                </ul>

                <h3>7.2 Technical Data</h3>
                <ul>
                  <li><strong>Network Performance:</strong> 2 years for optimization and troubleshooting</li>
                  <li><strong>Security Logs:</strong> 1 year for incident investigation</li>
                  <li><strong>Website Analytics:</strong> 26 months (Google Analytics standard)</li>
                </ul>

                <h3>7.3 Legal and Compliance</h3>
                <ul>
                  <li><strong>Financial Records:</strong> 7 years (IRS and tax requirements)</li>
                  <li><strong>Legal Communications:</strong> Duration of legal obligation</li>
                  <li><strong>Regulatory Filings:</strong> As required by applicable regulations</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={900}>
              <section className="mb-12">
                <h2>8. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your residence. 
                  We ensure appropriate safeguards are in place:
                </p>
                <ul>
                  <li>Standard contractual clauses approved by data protection authorities</li>
                  <li>Adequacy decisions for countries with equivalent protection</li>
                  <li>Binding corporate rules for international service providers</li>
                  <li>Your explicit consent for specific transfers</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={1000}>
              <section className="mb-12">
                <h2>9. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children. If we become aware that we have collected 
                  information from a child under 13, we will take steps to delete it promptly.
                </p>
                <p>
                  Parents or guardians who believe their child has provided personal information should 
                  contact us immediately at privacy@zubabroadband.com.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={1100}>
              <section className="mb-12">
                <h2>10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy periodically to reflect changes in our practices, 
                  technology, or legal requirements. We will:
                </p>
                <ul>
                  <li>Post the updated policy on our website</li>
                  <li>Update the "Last Updated" date</li>
                  <li>Notify customers of material changes via email</li>
                  <li>Obtain consent for significant changes affecting your rights</li>
                </ul>
                <p>
                  We encourage you to review this policy regularly to stay informed about how we 
                  protect your information.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={1200}>
              <section className="mb-12">
                <h2>11. Contact Information</h2>
                <p>
                  For privacy-related questions, concerns, or requests, please contact us:
                </p>
                <div className="bg-muted rounded-lg p-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Privacy Team</h4>
                      <p className="text-small text-muted-foreground mb-0">
                        Email: privacy@zubabroadband.com<br />
                        Phone: 1-800-ZUBA-NET (ext. 2)<br />
                        Response Time: Within 48 hours
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Data Protection Officer</h4>
                      <p className="text-small text-muted-foreground mb-0">
                        Email: dpo@zubabroadband.com<br />
                        Mailing Address:<br />
                        Privacy Department<br />
                        Zuba Broadband Technology<br />
                        [Address Line 1]<br />
                        [City, State ZIP]
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                  <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-green-900 font-medium mb-2">Your Privacy Matters</h4>
                      <p className="text-green-800 text-sm mb-0">
                        We're committed to transparency and protecting your privacy rights. 
                        Don't hesitate to reach out with any questions or concerns about how we handle your data.
                      </p>
                    </div>
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

export default PrivacyPolicy;