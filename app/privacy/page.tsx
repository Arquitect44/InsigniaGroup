import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Insignia Group',
  description: 'Privacy Policy for Insignia Group - Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="pt-24">
      <Section background="white" containerSize="lg">
        <Container>
          <div className="max-w-4xl mx-auto py-12 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Effective Date: October 25, 2025</p>
            <p className="text-gray-600 mb-12">Last Updated: October 25, 2025</p>

            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Insignia Group (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the &quot;Site&quot;).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Please read this Privacy Policy carefully. By using the Site, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy applies to information we collect through the Site and in email, text, and other electronic communications sent through or in connection with the Site.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-10 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">2. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions or concerns regarding this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="text-gray-700 leading-relaxed">
                  <p className="mb-2"><strong>Insignia Group</strong></p>
                  <p className="mb-2">122-03 14th Avenue</p>
                  <p className="mb-2">College Point, NY 11356</p>
                  <p className="mb-2">Phone: (718) 366-6789</p>
                  <p className="mb-2">Email: cl@junsconstruction.com</p>
                </div>
              </section>

              {/* Information We Collect */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">3. Information We Collect</h2>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">3.1 Information You Provide to Us</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Submit a contact form or inquiry through the Site</li>
                  <li>Request information about our services or properties</li>
                  <li>Subscribe to our newsletters or communications</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The personal information we may collect includes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Telephone number</li>
                  <li>Company name and business information</li>
                  <li>Inquiry type and related details</li>
                  <li>Any other information you choose to provide in your communications with us</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">3.2 Information Automatically Collected</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you access the Site, we may automatically collect certain information about your device and usage patterns, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>IP address and general geographic location</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Device type and identifiers</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Clickstream data and navigation patterns</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">3.3 Cookies and Tracking Technologies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. Cookies are small data files stored on your device that help us improve your experience, understand usage patterns, and facilitate certain functionalities.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Types of cookies we use:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><strong>Essential Cookies:</strong> Necessary for the Site to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the Site</li>
                  <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of the Site.
                </p>
              </section>

              {/* How We Use Your Information */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">4. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for various purposes, including to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Respond to your inquiries and provide customer service</li>
                  <li>Process and fulfill your requests for information about our properties and services</li>
                  <li>Communicate with you about development opportunities, partnerships, or investment opportunities</li>
                  <li>Send you marketing communications and updates (with your consent where required)</li>
                  <li>Improve and optimize the Site and user experience</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Detect, prevent, and address technical issues or security vulnerabilities</li>
                  <li>Comply with legal obligations and enforce our terms and policies</li>
                  <li>Protect our rights, property, and safety, and that of our users and the public</li>
                  <li>Facilitate business transactions, including potential mergers or acquisitions</li>
                </ul>
              </section>

              {/* Legal Basis for Processing */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">5. Legal Basis for Processing (GDPR)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are located in the European Economic Area (EEA), our legal basis for collecting and using your personal information depends on the specific information and context:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><strong>Consent:</strong> You have given us explicit consent to process your information for specific purposes</li>
                  <li><strong>Contract Performance:</strong> Processing is necessary to fulfill a contract with you or take steps at your request before entering into a contract</li>
                  <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests, such as improving our services, marketing, or fraud prevention</li>
                  <li><strong>Legal Obligation:</strong> Processing is necessary to comply with applicable laws and regulations</li>
                </ul>
              </section>

              {/* How We Share Your Information */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">6. How We Share Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information in the following circumstances:
                </p>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">6.1 Service Providers</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information with third-party service providers who perform services on our behalf, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Email service providers and communication platforms</li>
                  <li>Website hosting and maintenance providers</li>
                  <li>Analytics providers</li>
                  <li>Customer relationship management (CRM) systems</li>
                  <li>Form submission processing services (such as Web3Forms)</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">6.2 Subsidiaries and Affiliates</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information with our subsidiaries and affiliated companies, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Jun&apos;s Construction</li>
                  <li>Super Plumbing & Building Supply</li>
                  <li>Insignia Group Hotel Assets (including Insignia Hotel Brooklyn and AVID Hotel Brooklyn)</li>
                  <li>Other entities under common ownership or control</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">6.3 Business Transfers</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company, your information may be transferred as part of that transaction.
                </p>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">6.4 Legal Requirements</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may disclose your information when required by law or in response to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Valid legal processes (subpoenas, court orders, warrants)</li>
                  <li>Requests from government authorities or law enforcement</li>
                  <li>Legal obligations or regulatory requirements</li>
                  <li>Protection of our rights, property, or safety</li>
                  <li>Prevention of fraud or illegal activities</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">6.5 With Your Consent</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may share your information for any other purpose with your explicit consent.
                </p>
              </section>

              {/* Data Security */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">7. Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Encryption of data in transit using SSL/TLS protocols</li>
                  <li>Secure server infrastructure and access controls</li>
                  <li>Regular security assessments and updates</li>
                  <li>Restricted access to personal information on a need-to-know basis</li>
                  <li>Employee training on data protection and privacy practices</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. You transmit information to us at your own risk.
                </p>
              </section>

              {/* Data Retention */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">8. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Retention periods vary based on:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>The nature of the information collected</li>
                  <li>The purpose for which it was collected</li>
                  <li>Legal, regulatory, or contractual obligations</li>
                  <li>Business needs and legitimate interests</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When we no longer need your personal information, we will securely delete or anonymize it in accordance with applicable laws and our data retention policies.
                </p>
              </section>

              {/* Your Privacy Rights */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">9. Your Privacy Rights</h2>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">9.1 General Rights</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your information in a structured, machine-readable format</li>
                  <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
                  <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">9.2 GDPR Rights (EEA Residents)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are located in the European Economic Area, you have additional rights under the General Data Protection Regulation (GDPR):
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Right to lodge a complaint with a supervisory authority</li>
                  <li>Right to object to automated decision-making and profiling</li>
                  <li>Right to data portability between controllers</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">9.3 CCPA Rights (California Residents)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><strong>Right to Know:</strong> Request information about the categories and specific pieces of personal information we have collected</li>
                  <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
                  <li><strong>Right to Opt-Out:</strong> Opt-out of the sale or sharing of your personal information (Note: We do not sell personal information)</li>
                  <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
                  <li><strong>Right to Non-Discrimination:</strong> Not receive discriminatory treatment for exercising your privacy rights</li>
                  <li><strong>Right to Limit:</strong> Limit the use and disclosure of sensitive personal information</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">9.4 Exercising Your Rights</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To exercise any of these rights, please contact us using the information provided in Section 2. We will respond to your request within the timeframe required by applicable law (typically 30 days for GDPR, 45 days for CCPA).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may need to verify your identity before processing your request. We will not discriminate against you for exercising your privacy rights.
                </p>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">9.5 Marketing Communications</h3>
                <p className="text-gray-700 leading-relaxed">
                  You may opt out of receiving marketing communications from us at any time by:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Clicking the &quot;unsubscribe&quot; link in any marketing email</li>
                  <li>Contacting us directly using the information in Section 2</li>
                  <li>Updating your communication preferences if you have an account</li>
                </ul>
              </section>

              {/* Third-Party Links */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">10. Third-Party Websites and Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Site may contain links to third-party websites, including websites of our subsidiaries and partners:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Jun&apos;s Construction (junsconstruction.com)</li>
                  <li>AVID Hotels by IHG</li>
                  <li>Other business partners and service providers</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">11. Children&apos;s Privacy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our Site is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If we become aware that we have collected personal information from a child under 18 without parental consent, we will take steps to delete that information from our servers.
                </p>
              </section>

              {/* International Data Transfers */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">12. International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your information may be transferred to, stored, and processed in the United States or other countries where we or our service providers operate. These countries may have data protection laws that differ from your country of residence.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When we transfer personal information from the EEA to other countries, we use appropriate safeguards such as:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Standard Contractual Clauses approved by the European Commission</li>
                  <li>Adequacy decisions recognizing equivalent data protection</li>
                  <li>Other mechanisms approved under applicable data protection laws</li>
                </ul>
              </section>

              {/* Do Not Track Signals */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">13. Do Not Track Signals</h2>
                <p className="text-gray-700 leading-relaxed">
                  Some web browsers have a &quot;Do Not Track&quot; feature that signals to websites that you do not want your online activities tracked. Currently, our Site does not respond to Do Not Track signals or similar mechanisms. However, you can adjust your browser settings to manage cookies and tracking technologies as described in Section 3.3.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">14. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Posting the updated Privacy Policy on this page</li>
                  <li>Updating the &quot;Last Updated&quot; date at the top of this policy</li>
                  <li>Providing notice through the Site or via email for significant changes</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Your continued use of the Site after any changes indicates your acceptance of the updated Privacy Policy. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              {/* California Shine the Light Law */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">15. California Shine the Light Law</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  California Civil Code Section 1798.83 permits California residents to request information about our disclosure of personal information to third parties for direct marketing purposes. We do not share personal information with third parties for their direct marketing purposes.
                </p>
              </section>

              {/* Nevada Privacy Rights */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">16. Nevada Privacy Rights</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nevada residents have the right to opt out of the sale of certain personal information. We do not sell personal information as defined under Nevada law. If you have questions about our data practices, please contact us using the information in Section 2.
                </p>
              </section>

              {/* Data Breach Notification */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">17. Data Breach Notification</h2>
                <p className="text-gray-700 leading-relaxed">
                  In the event of a data breach that affects your personal information, we will notify you and relevant authorities in accordance with applicable laws. Notification will be provided without undue delay and will include information about the nature of the breach, affected data, and steps being taken to address the breach.
                </p>
              </section>

              {/* Accessibility */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">18. Accessibility</h2>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to ensuring this Privacy Policy is accessible to individuals with disabilities. If you have difficulty accessing any part of this policy, please contact us and we will provide the information in an alternative format.
                </p>
              </section>

              {/* Acknowledgment */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">19. Acknowledgment</h2>
                <p className="text-gray-700 leading-relaxed">
                  By using the Site, you acknowledge that you have read and understood this Privacy Policy and agree to be bound by its terms. If you do not agree to this Privacy Policy, please do not use the Site.
                </p>
              </section>

              {/* Final Contact Section */}
              <section className="mb-10 bg-[#d4a574]/10 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Questions or Concerns?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="text-gray-700 leading-relaxed">
                  <p className="mb-2"><strong>Insignia Group - Privacy Inquiries</strong></p>
                  <p className="mb-2">122-03 14th Avenue, College Point, NY 11356</p>
                  <p className="mb-2">Phone: (718) 366-6789</p>
                  <p className="mb-2">Email: cl@junsconstruction.com</p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
