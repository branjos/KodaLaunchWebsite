import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Koda Launch AI Terms and Conditions — read our terms of service before using the platform.',
  alternates: { canonical: 'https://kodalaunch.com/terms' },
  robots: { index: true, follow: true },
  openGraph: { title: 'Terms and Conditions — Koda Launch AI', url: 'https://kodalaunch.com/terms' },
  twitter: { title: 'Terms and Conditions — Koda Launch AI' },
}

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16" style={{ color: 'var(--color-ink)' }}>
      <h1 className="text-4xl font-extrabold mb-2">Terms and Conditions</h1>
      <p className="text-sm mb-12" style={{ color: 'var(--color-ink-soft)' }}>Last updated: May 11, 2026</p>

      <div className="space-y-10 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold mb-3">1. Agreement to Terms</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>Welcome to Koda Launch AI ("Koda Launch AI," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of the Koda Launch AI website, applications, APIs, software, and related services (collectively, the "Services").</p>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>By creating an account, accessing, or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Services.</p>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>You represent that you are at least 13 years old. If you are under the age of 18, you represent that you have permission from a parent or legal guardian to use the Services. The Services are not intended for children under 13 years of age.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">2. Description of Services</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>Koda Launch AI provides golf-related analytics, coaching insights, AI-generated recommendations, training tools, session analysis, shot tracking, practice guidance, and related features designed to help users better understand and improve their golf performance.</p>
          <ul className="list-disc list-inside mt-3 space-y-1" style={{ color: 'var(--color-ink-soft)' }}>
            <li>AI-generated coaching feedback</li>
            <li>Practice and drill recommendations</li>
            <li>Session and shot analysis</li>
            <li>Data visualizations and performance insights</li>
            <li>Personalized golf-related content</li>
            <li>Community or sharing features</li>
            <li>Subscription-based premium functionality</li>
          </ul>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>We may modify, suspend, or discontinue any part of the Services at any time without liability.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">3. Accounts</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>To use certain features, you may be required to create an account. You agree to:</p>
          <ul className="list-disc list-inside mt-3 space-y-1" style={{ color: 'var(--color-ink-soft)' }}>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Promptly update any account information</li>
            <li>Be responsible for all activities under your account</li>
          </ul>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>You may not share your account, use another person's account, attempt to gain unauthorized access to the Services, or use automated systems to scrape or abuse the platform. We reserve the right to suspend or terminate accounts that violate these Terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">4. Subscriptions and Billing</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>Certain features of the Services may require a paid subscription. By subscribing to a paid plan, you authorize recurring billing through our payment provider. Subscriptions may renew automatically unless canceled before the renewal date.</p>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>You may cancel your subscription at any time. Cancellation will take effect at the end of the current billing period. Except where required by law, subscription fees are non-refundable. We reserve the right to modify subscription pricing with reasonable notice before changes take effect.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">5. AI-Generated Content and Coaching Disclaimer</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>Koda Launch AI uses artificial intelligence and automated systems to generate recommendations, insights, summaries, and coaching-related content. You acknowledge and agree that:</p>
          <ul className="list-disc list-inside mt-3 space-y-1" style={{ color: 'var(--color-ink-soft)' }}>
            <li>AI-generated outputs may be inaccurate, incomplete, or inappropriate</li>
            <li>The Services are provided for informational and educational purposes only</li>
            <li>Koda Launch AI does not guarantee performance improvement or specific results</li>
            <li>You are solely responsible for evaluating and applying any advice or recommendations</li>
            <li>Koda Launch AI is not a substitute for professional golf instruction, medical advice, or professional athletic training</li>
          </ul>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>Use of any drills, swing changes, training routines, or recommendations is at your own risk.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">6. User Content</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>You may upload or submit information including swing data, session information, videos or images, practice notes, messages or prompts, and performance metrics ("User Content"). You retain ownership of your User Content.</p>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>By submitting User Content, you grant Koda Launch AI a worldwide, non-exclusive, royalty-free license to host, store, process, reproduce, and use the content solely for operating the Services, improving functionality, generating analytics and insights, training and improving internal systems in anonymized or aggregated form, and providing customer support.</p>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>You represent that you own or have rights to your User Content, that your content does not violate any laws or third-party rights, and that it does not contain malicious code or harmful material. We reserve the right to remove content that violates these Terms.</p>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>Users may request account deletion by contacting <a href="mailto:support@kodalaunch.com" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>support@kodalaunch.com</a>. We may retain certain information as required by law or for legitimate business purposes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">7. Acceptable Use</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>You agree not to:</p>
          <ul className="list-disc list-inside mt-3 space-y-1" style={{ color: 'var(--color-ink-soft)' }}>
            <li>Use the Services for unlawful purposes</li>
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Interfere with platform security or stability</li>
            <li>Upload viruses or malicious software</li>
            <li>Abuse APIs or automated systems</li>
            <li>Circumvent usage limits or subscription restrictions</li>
            <li>Use the Services to harass, threaten, or harm others</li>
            <li>Misrepresent AI-generated outputs as professional advice</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">8. Intellectual Property</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>The Services, including software, branding, logos, designs, text, graphics, AI systems, and related materials, are owned by Koda Launch AI or its licensors and are protected by intellectual property laws. Except as expressly permitted, you may not copy or redistribute platform content, modify or create derivative works, use our branding without written permission, or commercialize any part of the Services. Koda Launch AI and related logos are trademarks or pending trademarks of Koda Launch AI.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">9. Privacy</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>Your use of the Services is also governed by our Privacy Policy. By using the Services, you consent to the collection and processing of data as described in the Privacy Policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">10. Third-Party Services</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>The Services may integrate with or rely upon third-party providers, including authentication providers, payment processors, analytics tools, hosting providers, and AI providers. These providers may include services such as Clerk for authentication and Stripe for payment processing.</p>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>Koda Launch AI is not responsible for third-party services, products, availability, security incidents, outages, or policies. Your use of third-party services may also be governed by separate terms and privacy policies maintained by those providers.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">11. Availability and Beta Features</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>The Services may contain beta, experimental, or preview functionality. We do not guarantee continuous uptime, error-free operation, compatibility with all devices or launch monitors, or availability of any specific feature. Features may change significantly over time.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">12. Disclaimer of Warranties</h2>
          <p className="uppercase text-sm" style={{ color: 'var(--color-ink-soft)' }}>The Services are provided "as is" and "as available" without warranties of any kind, express or implied. To the maximum extent permitted by law, Koda Launch AI disclaims all warranties, including merchantability, fitness for a particular purpose, non-infringement, accuracy or reliability of outputs, and uninterrupted or error-free operation. We do not guarantee that use of the Services will improve golf performance or produce any specific outcome.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">13. Limitation of Liability</h2>
          <p className="uppercase text-sm" style={{ color: 'var(--color-ink-soft)' }}>To the maximum extent permitted by law, Koda Launch AI shall not be liable for indirect or consequential damages, lost profits or revenue, loss of data, personal injury, property damage, or decisions made based on AI outputs or recommendations. In no event shall Koda Launch AI's total liability exceed the amount paid by you to Koda Launch AI during the twelve (12) months preceding the claim. Some jurisdictions do not allow certain limitations, so portions of this section may not apply to you.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">14. Indemnification</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>You agree to defend, indemnify, and hold harmless Koda Launch AI and its affiliates, officers, employees, and contractors from claims, damages, liabilities, costs, and expenses arising from your use of the Services, your User Content, your violation of these Terms, or your violation of any law or third-party rights.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">15. Termination</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>We may suspend or terminate your access to the Services at any time, with or without notice, if you violate these Terms, we suspect fraudulent or abusive behavior, required by law, or continued operation becomes impractical. Upon termination, your access rights immediately end, certain data may be deleted, and sections intended to survive termination will remain in effect.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">16. Governing Law</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>These Terms shall be governed by and construed under the laws of the State of Delaware, without regard to conflict of law principles. Any disputes arising from these Terms or the Services shall be resolved in the state or federal courts located in Delaware, and you consent to the jurisdiction of such courts.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">17. Changes to Terms</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>We may update these Terms from time to time. If material changes are made, we may provide notice through the Services or by email. Continued use of the Services after updated Terms become effective constitutes acceptance of the revised Terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">18. Contact Information</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>If you have questions regarding these Terms, contact:</p>
          <p className="mt-3 font-semibold">Koda Launch AI</p>
          <p style={{ color: 'var(--color-ink-soft)' }}>Email: <a href="mailto:support@kodalaunch.com" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>support@kodalaunch.com</a></p>
          <p style={{ color: 'var(--color-ink-soft)' }}>Website: <a href="https://kodalaunch.com" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>kodalaunch.com</a></p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">19. Data Accuracy</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>You acknowledge that golf performance metrics, launch monitor data, AI analysis, and related insights may vary between devices, environments, and data sources. Koda Launch AI does not guarantee the accuracy, calibration, or consistency of third-party hardware or imported datasets.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">20. Entire Agreement</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>These Terms, together with any policies referenced herein, constitute the entire agreement between you and Koda Launch AI regarding the Services and supersede any prior agreements or understandings. If any provision of these Terms is found unenforceable, the remaining provisions shall remain in full force and effect.</p>
        </section>

      </div>
    </main>
  )
}
