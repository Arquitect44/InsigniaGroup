import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Insignia Group',
  description: 'Terms of Service for Insignia Group - Legal terms and conditions for using our website and services.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="pt-24">
      <Section background="white" containerSize="lg">
        <Container>
          <div className="max-w-4xl mx-auto py-12 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Effective Date: October 25, 2025</p>
            <p className="text-gray-600 mb-12">Last Updated: October 25, 2025</p>

            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to Insignia Group. These Terms of Service (&quot;Terms,&quot; &quot;Agreement&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Insignia Group (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of our website, including any content, functionality, and services offered on or through our website (collectively, the &quot;Site&quot;).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing or using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use the Site.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site following the posting of revised Terms constitutes your acceptance of such changes.
                </p>
              </section>

              {/* Company Information */}
              <section className="mb-10 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">2. Company Information</h2>
                <div className="text-gray-700 leading-relaxed">
                  <p className="mb-2"><strong>Insignia Group</strong></p>
                  <p className="mb-2">122-03 14th Avenue</p>
                  <p className="mb-2">College Point, NY 11356</p>
                  <p className="mb-2">Phone: (718) 366-6789</p>
                  <p className="mb-2">Email: info@insigniagroup.com</p>
                </div>
              </section>

              {/* Description of Services */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">3. Description of Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Insignia Group is a vertically integrated real estate development company based in New York City. Through the Site, we provide:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Information about our real estate development projects and portfolio</li>
                  <li>Details about our vertically integrated services including construction, property management, and hotel operations</li>
                  <li>Contact mechanisms for inquiries regarding development partnerships, joint ventures, investment opportunities, and property management</li>
                  <li>Information about our subsidiaries: Jun&apos;s Construction, Super Plumbing & Building Supply, and Insignia Group Hotel Assets</li>
                  <li>General corporate information and news</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  The Site is informational in nature and does not constitute an offer to sell or solicitation of an offer to buy any securities or real estate. All business relationships and transactions are subject to separate, specific agreements.
                </p>
              </section>

              {/* User Eligibility */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">4. User Eligibility and Account Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By using the Site, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>You are at least 18 years of age</li>
                  <li>You have the legal capacity to enter into these Terms</li>
                  <li>You will provide accurate, current, and complete information when submitting inquiries or forms</li>
                  <li>You will maintain the accuracy of such information</li>
                  <li>Your use of the Site complies with all applicable laws and regulations</li>
                </ul>
              </section>

              {/* Acceptable Use */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">5. Acceptable Use Policy</h2>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">5.1 Permitted Uses</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may use the Site only for lawful purposes and in accordance with these Terms. Specifically, you may:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Access and view content on the Site</li>
                  <li>Submit inquiries through provided contact forms</li>
                  <li>Request information about our services, properties, and opportunities</li>
                  <li>Print or download content for personal, non-commercial use</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">5.2 Prohibited Uses</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree NOT to use the Site:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                  <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
                  <li>To engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site</li>
                  <li>To introduce any viruses, Trojan horses, worms, logic bombs, or other malicious or technologically harmful material</li>
                  <li>To attempt to gain unauthorized access to any portion of the Site, other accounts, computer systems, or networks</li>
                  <li>To scrape, data mine, or use automated systems to collect information from the Site without permission</li>
                  <li>To interfere with or disrupt the Site or servers or networks connected to the Site</li>
                  <li>To submit false, misleading, or fraudulent information through contact forms or other submissions</li>
                  <li>To use the Site for any commercial purpose without our express written authorization</li>
                </ul>
              </section>

              {/* Intellectual Property Rights */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">6. Intellectual Property Rights</h2>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">6.1 Our Intellectual Property</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, audio, design, selection, arrangement, and the &quot;look and feel&quot;) are owned by Insignia Group, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Insignia Group name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Insignia Group or its affiliates. You must not use such marks without our prior written permission. All other names, logos, product and service names, designs, and slogans on the Site are the trademarks of their respective owners.
                </p>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">6.2 Limited License</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Access and use the Site for personal, non-commercial purposes</li>
                  <li>Print or download individual pages for personal reference</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This license does not include the right to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Modify, reproduce, distribute, or create derivative works based on the Site or its content</li>
                  <li>Use any content for commercial purposes without our written authorization</li>
                  <li>Remove or alter any copyright, trademark, or other proprietary notices</li>
                  <li>Transfer the license to any third party</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">6.3 User Submissions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Any information, materials, or communications you submit to us through the Site, including but not limited to contact forms, inquiries, feedback, suggestions, or ideas (collectively, &quot;Submissions&quot;), will be treated as non-confidential and non-proprietary.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By making a Submission, you grant us a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such Submission in any media for any purpose, including but not limited to responding to your inquiry and improving our services.
                </p>
              </section>

              {/* Privacy */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">7. Privacy and Data Protection</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using the Site, you consent to our collection and use of personal information as set forth in our Privacy Policy.
                </p>
              </section>

              {/* Third-Party Links */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">8. Third-Party Websites and Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Site may contain links to third-party websites and services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Jun&apos;s Construction (junsconstruction.com)</li>
                  <li>AVID Hotels by IHG</li>
                  <li>Service providers and business partners</li>
                  <li>Social media platforms</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These links are provided for your convenience only. We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with your use of any third-party websites or services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
                </p>
              </section>

              {/* Disclaimers */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">9. Disclaimers and Warranties</h2>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">9.1 No Investment Advice</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The information provided on the Site is for general informational purposes only and does not constitute investment advice, financial advice, trading advice, or any other sort of advice. You should not treat any of the Site&apos;s content as a substitute for professional financial or legal advice. All investment and business decisions involve risk and should be made only after consultation with qualified professionals.
                </p>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">9.2 No Securities Offering</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nothing on the Site constitutes an offer to sell, or a solicitation of an offer to buy, any securities, real estate, or investment opportunities. Any such offers or solicitations will be made only through definitive offering documents that contain important information about risks, fees, and expenses.
                </p>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">9.3 Accuracy of Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we strive to provide accurate and up-to-date information on the Site, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the Site.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Project information, including but not limited to project status, timelines, specifications, and renderings, is subject to change without notice. Images and renderings are for illustrative purposes only and may not reflect final construction.
                </p>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">9.4 AS-IS and AS-AVAILABLE Basis</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  THE SITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, INSIGNIA GROUP DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  WE DO NOT WARRANT THAT:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>The Site will function uninterrupted, secure, or available at any particular time or location</li>
                  <li>Any errors or defects will be corrected</li>
                  <li>The Site is free of viruses or other harmful components</li>
                  <li>The results of using the Site will meet your requirements</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">9.5 Forward-Looking Statements</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Site may contain forward-looking statements regarding future projects, developments, or business plans. These statements are subject to risks and uncertainties and actual results may differ materially. We undertake no obligation to update forward-looking statements.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT SHALL INSIGNIA GROUP, ITS AFFILIATES, SUBSIDIARIES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Your access to or use of or inability to access or use the Site</li>
                  <li>Any conduct or content of any third party on the Site</li>
                  <li>Any content obtained from the Site</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION EXCEED ONE HUNDRED DOLLARS ($100.00).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
                </p>
              </section>

              {/* Indemnification */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">11. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to defend, indemnify, and hold harmless Insignia Group and its subsidiaries, affiliates, officers, directors, employees, agents, licensors, and service providers from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney&apos;s fees) arising from:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Your use of and access to the Site</li>
                  <li>Your violation of any term of these Terms</li>
                  <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                  <li>Any claim that your Submissions caused damage to a third party</li>
                  <li>Any content you post or transmit through the Site</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  This indemnification obligation will survive the termination of these Terms and your use of the Site.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">12. Governing Law and Jurisdiction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms and any dispute or claim arising out of or related to these Terms or the Site shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree that any legal action or proceeding arising out of or relating to these Terms or the Site shall be brought exclusively in the federal or state courts located in New York County, New York. You consent to the personal jurisdiction of such courts and waive any objection to venue in such courts.
                </p>
              </section>

              {/* Dispute Resolution */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">13. Dispute Resolution</h2>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">13.1 Informal Resolution</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Before filing a formal legal claim, you agree to first contact us to attempt to resolve the dispute informally. We will attempt to resolve the dispute informally by contacting you via email. If a dispute is not resolved within 30 days of submission, you or we may bring a formal proceeding.
                </p>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">13.2 Class Action Waiver</h3>
                <p className="text-gray-700 leading-relaxed">
                  YOU AND INSIGNIA GROUP AGREE THAT ANY PROCEEDINGS TO RESOLVE DISPUTES WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. If for any reason a claim proceeds in court rather than through alternative dispute resolution, YOU AND INSIGNIA GROUP EACH WAIVE ANY RIGHT TO A JURY TRIAL.
                </p>
              </section>

              {/* Termination */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">14. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to terminate or suspend your access to the Site immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Upon termination, your right to use the Site will immediately cease. If you wish to terminate your access to the Site, you may simply discontinue using the Site.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>

              {/* Severability */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">15. Severability and Waiver</h2>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">15.1 Severability</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If any provision of these Terms is held to be invalid, illegal, or unenforceable under applicable law, such provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its intent, or if such modification is not possible, such provision shall be severed from these Terms. The validity, legality, and enforceability of the remaining provisions shall not be affected or impaired.
                </p>

                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">15.2 Waiver</h3>
                <p className="text-gray-700 leading-relaxed">
                  No waiver by the Company of any term or condition set forth in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition. Any failure to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
                </p>
              </section>

              {/* Entire Agreement */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">16. Entire Agreement</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms, together with our Privacy Policy and any other legal notices or agreements published by us on the Site, constitute the entire agreement between you and Insignia Group concerning your use of the Site and supersede all prior agreements and understandings, whether written or oral, regarding the subject matter.
                </p>
              </section>

              {/* Assignment */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">17. Assignment</h2>
                <p className="text-gray-700 leading-relaxed">
                  You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. Any attempt by you to assign or transfer these Terms without such consent will be null and void. We may freely assign or transfer these Terms without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties and their respective successors and permitted assigns.
                </p>
              </section>

              {/* Force Majeure */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">18. Force Majeure</h2>
                <p className="text-gray-700 leading-relaxed">
                  We shall not be liable for any failure or delay in performing our obligations under these Terms where such failure or delay results from any cause beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
                </p>
              </section>

              {/* Electronic Communications */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">19. Electronic Communications</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By using the Site, you consent to receiving electronic communications from us. These communications may include notices about your account and information concerning or related to the Site. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including that such communications be in writing.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">20. Questions and Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions, concerns, or complaints regarding these Terms, please contact us at:
                </p>
                <div className="text-gray-700 leading-relaxed">
                  <p className="mb-2"><strong>Insignia Group</strong></p>
                  <p className="mb-2">122-03 14th Avenue</p>
                  <p className="mb-2">College Point, NY 11356</p>
                  <p className="mb-2">Phone: (718) 366-6789</p>
                  <p className="mb-2">Email: info@insigniagroup.com</p>
                </div>
              </section>

              {/* Acknowledgment */}
              <section className="mb-10 bg-[#d4a574]/10 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Acknowledgment</h2>
                <p className="text-gray-700 leading-relaxed">
                  BY USING THE SITE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE THE SITE.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
