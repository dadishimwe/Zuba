import React from 'react';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import { Shield, AlertTriangle, FileText, Clock } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = 'December 15, 2024';

  return (
    <div className="bg-background">
      <SEOHead
        title="Terms of Service"
        description="Terms of Service for Zuba Broadband Technology. Read our legal terms, conditions, and service agreements for satellite internet and networking solutions."
        keywords="terms of service, legal agreement, satellite internet terms, service conditions"
        canonical="/legal/terms-of-service"
      />

      {/* Header Section */}
      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto container-padding">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h1 className="mb-0">Terms of Service</h1>
              </div>
              <p className="text-large max-w-2xl mx-auto text-muted-foreground">
                These Terms of Service govern your use of Zuba Broadband Technology's services and website.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 text-small text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Terms Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            
            {/* Important Notice */}
            <FadeIn delay={100}>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-amber-900 font-medium mb-2">Important Legal Agreement</h3>
                    <p className="text-amber-800 text-sm mb-0">
                      By accessing or using our services, you agree to be bound by these Terms of Service. 
                      If you do not agree to these terms, please do not use our services.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <section className="mb-12">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing, browsing, or using the Zuba Broadband Technology website or services, 
                  you acknowledge that you have read, understood, and agree to be bound by these Terms of Service 
                  and our Privacy Policy. These terms apply to all visitors, users, and others who access or use our services.
                </p>
                <p>
                  We reserve the right to update these terms at any time. We will notify users of any material 
                  changes via email or through our website. Your continued use of our services after such 
                  modifications constitutes acceptance of the updated terms.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={300}>
              <section className="mb-12">
                <h2>2. Description of Services</h2>
                <p>
                  Zuba Broadband Technology provides satellite internet connectivity solutions, including but not limited to:
                </p>
                <ul>
                  <li>Starlink satellite internet installation and support</li>
                  <li>Peplink SD-WAN and networking solutions</li>
                  <li>Professional network design and consultation</li>
                  <li>Technical support and maintenance services</li>
                  <li>Equipment sales and leasing</li>
                  <li>Remote monitoring and management services</li>
                </ul>
                <p>
                  Our services are designed for businesses, maritime vessels, aviation, remote locations, 
                  and residential customers requiring reliable internet connectivity.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={400}>
              <section className="mb-12">
                <h2>3. Service Level Agreements</h2>
                <h3>3.1 Installation Services</h3>
                <p>
                  Installation timelines are estimates and may vary based on equipment availability, 
                  weather conditions, site accessibility, and permit requirements. We commit to:
                </p>
                <ul>
                  <li>Professional installation by FCC-licensed technicians</li>
                  <li>Pre-installation site surveys when required</li>
                  <li>Post-installation testing and optimization</li>
                  <li>Comprehensive documentation and training</li>
                </ul>

                <h3>3.2 Support Services</h3>
                <p>
                  We provide 24/7 technical support with the following response times:
                </p>
                <ul>
                  <li>Critical issues: Response within 1 hour</li>
                  <li>High priority issues: Response within 4 hours</li>
                  <li>Standard issues: Response within 24 hours</li>
                  <li>General inquiries: Response within 48 hours</li>
                </ul>

                <h3>3.3 Uptime Guarantees</h3>
                <p>
                  We strive for 99.9% service availability. Service credits may apply for extended outages 
                  caused by our equipment or services, excluding force majeure events, third-party provider 
                  issues, or customer-caused problems.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={500}>
              <section className="mb-12">
                <h2>4. Customer Responsibilities</h2>
                <p>Customers are responsible for:</p>
                <ul>
                  <li>Providing accurate installation site information</li>
                  <li>Ensuring safe access to installation locations</li>
                  <li>Obtaining necessary permits and approvals</li>
                  <li>Maintaining power supply to equipment</li>
                  <li>Protecting equipment from damage and unauthorized access</li>
                  <li>Following usage guidelines and acceptable use policies</li>
                  <li>Timely payment of invoices and fees</li>
                  <li>Notifying us of service issues or changes to contact information</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={600}>
              <section className="mb-12">
                <h2>5. Payment Terms</h2>
                <h3>5.1 Pricing and Billing</h3>
                <p>
                  Service pricing is based on the agreed quote or service agreement. Billing cycles 
                  are typically monthly, with payments due within 30 days of invoice date.
                </p>

                <h3>5.2 Late Payments</h3>
                <p>
                  Late payments may result in service suspension and additional fees. We reserve the 
                  right to charge interest on overdue amounts at a rate of 1.5% per month.
                </p>

                <h3>5.3 Refunds and Cancellations</h3>
                <p>
                  Installation fees are generally non-refundable once work has commenced. Monthly 
                  service fees may be prorated for mid-cycle cancellations with 30 days notice.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={700}>
              <section className="mb-12">
                <h2>6. Equipment and Warranty</h2>
                <h3>6.1 Equipment Ownership</h3>
                <p>
                  Unless specified otherwise, equipment remains the property of Zuba Broadband Technology 
                  during the service term. Upon service termination, equipment must be returned in good condition.
                </p>

                <h3>6.2 Warranty Coverage</h3>
                <p>
                  We provide warranty coverage as specified by equipment manufacturers. This typically includes:
                </p>
                <ul>
                  <li>Starlink equipment: Manufacturer's limited warranty</li>
                  <li>Peplink equipment: Manufacturer's warranty plus our service guarantee</li>
                  <li>Installation work: 1-year warranty on workmanship</li>
                  <li>Free replacement of defective equipment during warranty period</li>
                </ul>

                <h3>6.3 Equipment Damage</h3>
                <p>
                  Customers are liable for equipment damage caused by negligence, misuse, or acts of nature. 
                  Replacement costs will be charged at current market rates.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={800}>
              <section className="mb-12">
                <h2>7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Zuba Broadband Technology's liability is limited to 
                  the amount paid for services in the preceding 12 months. We are not liable for:
                </p>
                <ul>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Business interruption or lost profits</li>
                  <li>Third-party service provider outages</li>
                  <li>Force majeure events (weather, natural disasters, etc.)</li>
                  <li>Customer negligence or misuse of equipment</li>
                  <li>Regulatory changes affecting service availability</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={900}>
              <section className="mb-12">
                <h2>8. Privacy and Data Protection</h2>
                <p>
                  We are committed to protecting your privacy and personal information. Our data practices 
                  are detailed in our Privacy Policy. Key points include:
                </p>
                <ul>
                  <li>We collect only necessary information for service provision</li>
                  <li>Customer data is protected with industry-standard security measures</li>
                  <li>We do not sell personal information to third parties</li>
                  <li>Network monitoring is performed only for service optimization and support</li>
                  <li>Data retention policies comply with applicable regulations</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={1000}>
              <section className="mb-12">
                <h2>9. Intellectual Property</h2>
                <p>
                  All content on our website and in our services, including text, graphics, logos, and software, 
                  is protected by intellectual property laws. Customers may not:
                </p>
                <ul>
                  <li>Reproduce or distribute our proprietary content</li>
                  <li>Reverse engineer our software or systems</li>
                  <li>Use our trademarks without written permission</li>
                  <li>Interfere with or attempt to bypass our security measures</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={1100}>
              <section className="mb-12">
                <h2>10. Termination</h2>
                <h3>10.1 Termination by Customer</h3>
                <p>
                  Customers may terminate services with 30 days written notice. Early termination may 
                  result in equipment return requirements and applicable fees.
                </p>

                <h3>10.2 Termination by Company</h3>
                <p>
                  We may terminate services immediately for:
                </p>
                <ul>
                  <li>Non-payment of fees</li>
                  <li>Violation of acceptable use policies</li>
                  <li>Fraudulent activity</li>
                  <li>Breach of these terms</li>
                  <li>Illegal use of services</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={1200}>
              <section className="mb-12">
                <h2>11. Dispute Resolution</h2>
                <p>
                  Disputes will be resolved through the following process:
                </p>
                <ol>
                  <li><strong>Direct Communication:</strong> Initial attempt to resolve through customer service</li>
                  <li><strong>Management Review:</strong> Escalation to management level for formal review</li>
                  <li><strong>Mediation:</strong> Voluntary mediation through agreed neutral third party</li>
                  <li><strong>Arbitration:</strong> Binding arbitration in accordance with local laws</li>
                </ol>
                <p>
                  These terms are governed by the laws of the jurisdiction where services are provided.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={1300}>
              <section className="mb-12">
                <h2>12. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted rounded-lg p-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Legal Department</h4>
                      <p className="text-small text-muted-foreground mb-0">
                        Email: legal@zubabroadband.com<br />
                        Phone: 1-800-ZUBA-NET<br />
                        Business Hours: Mon-Fri 8AM-6PM
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Mailing Address</h4>
                      <p className="text-small text-muted-foreground mb-0">
                        Zuba Broadband Technology<br />
                        Legal Department<br />
                        [Address Line 1]<br />
                        [City, State ZIP]
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

export default TermsOfService;