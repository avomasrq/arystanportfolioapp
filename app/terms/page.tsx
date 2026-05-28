export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 lg:px-8 py-24">
      <div className="max-w-3xl mx-auto space-y-16">

        <div>
          <a href="/" className="text-white/40 text-sm hover:text-white/70 transition-colors">
            ← Back
          </a>
          <h1 className="text-5xl md:text-6xl font-bold mt-8 tracking-tight">
            Terms, Privacy & Cookies
          </h1>
          <p className="text-white/40 text-sm mt-4">Last updated: May 2025</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Terms of Use</h2>
          <p className="text-white/70 leading-relaxed">
            By accessing this website, you agree to use it for lawful purposes only. All content on this site — including text, design, and media — is the intellectual property of Arystan Tanekov and may not be reproduced or redistributed without written permission.
          </p>
          <p className="text-white/70 leading-relaxed">
            Consultation bookings made through this site are subject to availability and do not constitute a binding contract until confirmed. We reserve the right to decline or cancel any booking at our discretion.
          </p>
          <p className="text-white/70 leading-relaxed">
            This site is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Privacy Policy</h2>
          <p className="text-white/70 leading-relaxed">
            We respect your privacy. When you submit a consultation request or contact us directly, we collect only the information you voluntarily provide (such as your name and email address). This data is used solely to respond to your inquiry and is never sold or shared with third parties without your explicit consent.
          </p>
          <p className="text-white/70 leading-relaxed">
            We may use third-party services (such as Calendly) to facilitate bookings. These services have their own privacy policies, and we encourage you to review them.
          </p>
          <p className="text-white/70 leading-relaxed">
            You have the right to request access to, correction of, or deletion of any personal data we hold about you. To do so, contact us at{' '}
            <a href="mailto:arystan909@yahoo.com" className="underline hover:text-white transition-colors">
              arystan909@yahoo.com
            </a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p className="text-white/70 leading-relaxed">
            This site uses minimal cookies necessary for basic functionality and anonymous analytics (via Vercel Analytics). These cookies do not identify you personally and are used only to understand how visitors interact with the site so we can improve the experience.
          </p>
          <p className="text-white/70 leading-relaxed">
            You can disable cookies in your browser settings at any time. Doing so may affect certain features of the site.
          </p>
        </section>

        <div className="pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs">
            © 2025 Arystan Tanekov. All rights reserved.
          </p>
        </div>

      </div>
    </main>
  )
}
