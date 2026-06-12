import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Koda Launch AI Privacy Policy — how we collect, use, and protect your information.',
  alternates: { canonical: 'https://kodalaunch.com/privacy' },
  robots: { index: true, follow: true },
  openGraph: { title: 'Privacy Policy — Koda Launch AI', url: 'https://kodalaunch.com/privacy' },
  twitter: { title: 'Privacy Policy — Koda Launch AI' },
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16" style={{ color: 'var(--color-ink)' }}>
      <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
      <p className="text-sm mb-12" style={{ color: 'var(--color-ink-soft)' }}>Last updated: May 11, 2026</p>

      <div className="space-y-10 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>Koda Launch AI ("Koda Launch AI," "we," "our," or "us") respects your privacy and is committed to protecting the information you share with us.</p>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>This Privacy Policy explains how we collect, use, store, disclose, and protect information when you use the Koda Launch AI website, applications, software, APIs, and related services (collectively, the "Services").</p>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>By using the Services, you consent to the practices described in this Privacy Policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">2. Information We Collect</h2>

          <h3 className="font-semibold mt-4 mb-2">Account Information</h3>
          <p style={{ color: 'var(--color-ink-soft)' }}>When you create an account, we may collect your name, email address, authentication identifiers, account preferences, and subscription status. Authentication services may be provided through third-party providers such as Clerk.</p>

          <h3 className="font-semibold mt-4 mb-2">Golf and Performance Data</h3>
          <p style={{ color: 'var(--color-ink-soft)' }}>We may collect golf-related information you provide or upload, including:</p>
          <ul className="list-disc list-inside mt-2 space-y-1" style={{ color: 'var(--color-ink-soft)' }}>
            <li>Session and shot data</li>
            <li>Launch monitor metrics</li>
            <li>Practice history and drill activity</li>
            <li>Swing analysis information and performance trends</li>
            <li>Coaching interactions, AI prompts and responses</li>
            <li>Uploaded images, videos, or files</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Payment Information</h3>
          <p style={{ color: 'var(--color-ink-soft)' }}>Payments are processed by third-party payment processors such as Stripe. Koda Launch AI does not store full payment card information on our servers.</p>

          <h3 className="font-semibold mt-4 mb-2">Device and Usage Information</h3>
          <p style={{ color: 'var(--color-ink-soft)' }}>We may automatically collect your IP address, browser type, device information, operating system, referring URLs, usage activity, log data, crash reports, and session information.</p>

          <h3 className="font-semibold mt-4 mb-2">Cookies and Similar Technologies</h3>
          <p style={{ color: 'var(--color-ink-soft)' }}>We may use cookies and similar technologies to maintain login sessions, remember preferences, improve functionality, analyze usage patterns, and improve performance and reliability. You may be able to control cookies through your browser settings.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">3. How We Use Information</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>We may use collected information to:</p>
          <ul className="list-disc list-inside mt-3 space-y-1" style={{ color: 'var(--color-ink-soft)' }}>
            <li>Provide and operate the Services</li>
            <li>Authenticate users and process subscriptions and payments</li>
            <li>Deliver AI-generated coaching and insights</li>
            <li>Analyze golf performance data</li>
            <li>Improve platform functionality and develop new features</li>
            <li>Monitor performance and reliability</li>
            <li>Provide customer support and communicate service updates</li>
            <li>Detect fraud, abuse, or security incidents</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>We may also use anonymized or aggregated data for analytics, research, product improvement, and internal model optimization.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">4. AI Processing and Automated Systems</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>Koda Launch AI may use artificial intelligence systems and third-party AI providers to process prompts, golf-related data, uploaded content, and interactions in order to generate insights, recommendations, summaries, and coaching-related outputs.</p>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>AI-generated outputs may not always be accurate or complete. You acknowledge that information submitted through the Services may be processed by automated systems and third-party infrastructure providers.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">5. How We Share Information</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>We do not sell your personal information.</p>

          <h3 className="font-semibold mt-4 mb-2">Service Providers</h3>
          <p style={{ color: 'var(--color-ink-soft)' }}>We may share information with trusted third-party providers that help operate the Services, including Clerk for authentication, Stripe for payment processing, cloud hosting providers, analytics providers, AI and infrastructure providers, and customer support tools. These providers may access information only as necessary to provide services on our behalf.</p>

          <h3 className="font-semibold mt-4 mb-2">Legal Requirements</h3>
          <p style={{ color: 'var(--color-ink-soft)' }}>We may disclose information if required to comply with applicable laws, respond to lawful requests, protect rights or safety, investigate fraud or abuse, or enforce agreements.</p>

          <h3 className="font-semibold mt-4 mb-2">Business Transfers</h3>
          <p style={{ color: 'var(--color-ink-soft)' }}>If Koda Launch AI is involved in a merger, acquisition, financing, restructuring, or sale of assets, information may be transferred as part of that transaction.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">6. Data Retention</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>We retain information for as long as reasonably necessary to provide the Services, maintain platform functionality, comply with legal obligations, resolve disputes, enforce agreements, and protect the security and integrity of the Services.</p>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>Users may request account deletion by contacting <a href="mailto:support@kodalaunch.com" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>support@kodalaunch.com</a>. Deletion requests may not result in immediate or complete removal of all information, including backups, logs, aggregated analytics data, or information retained for legal, security, or operational purposes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">7. Data Security</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>We implement reasonable administrative, technical, and organizational measures intended to protect information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security. You use the Services at your own risk.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">8. Your Rights and Choices</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>Depending on your jurisdiction, you may have rights related to your personal information, including the right to:</p>
          <ul className="list-disc list-inside mt-3 space-y-1" style={{ color: 'var(--color-ink-soft)' }}>
            <li>Access certain information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of certain information</li>
            <li>Object to certain processing activities</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          <p className="mt-3" style={{ color: 'var(--color-ink-soft)' }}>To exercise requests related to your information, contact <a href="mailto:support@kodalaunch.com" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>support@kodalaunch.com</a>. We may need to verify your identity before processing requests.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">9. Third-Party Services and Links</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>The Services may contain links to or integrations with third-party websites, services, or platforms. Koda Launch AI is not responsible for the privacy practices, content, or policies of third parties. Your interactions with third-party services are governed by their respective terms and privacy policies.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">10. Children's Privacy</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>The Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that information has been collected from a child under 13, we may delete such information.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">11. International Users</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>If you access the Services from outside the United States, you understand that information may be transferred to and processed in the United States. By using the Services, you consent to such transfers.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">12. Changes to This Privacy Policy</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>We may update this Privacy Policy from time to time. If material changes are made, we may provide notice through the Services or by other appropriate means. Continued use of the Services after updates become effective constitutes acceptance of the revised Privacy Policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">13. Contact Information</h2>
          <p style={{ color: 'var(--color-ink-soft)' }}>If you have questions about this Privacy Policy or our data practices, contact:</p>
          <p className="mt-3 font-semibold">Koda Launch AI</p>
          <p style={{ color: 'var(--color-ink-soft)' }}>Email: <a href="mailto:support@kodalaunch.com" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>support@kodalaunch.com</a></p>
          <p style={{ color: 'var(--color-ink-soft)' }}>Website: <a href="https://kodalaunch.com" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>kodalaunch.com</a></p>
        </section>

      </div>
    </main>
  )
}
