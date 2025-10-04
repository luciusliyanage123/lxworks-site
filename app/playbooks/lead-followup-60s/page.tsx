import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Navbar />
      <section className="section pt-12 pb-20">
        <h1 className="h2">Lead Follow-up in 60s</h1>
        <p className="p mt-3 max-w-2xl">WhatsApp/SMS auto-reply, scoring, calendar links, reminders, and revive nudges.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="card p-6">
            <h3 className="font-semibold">Outcomes</h3>
            <ul className="p mt-2 list-disc pl-5 space-y-1">
              <li>Lead→Booking +20–40%</li><li>First response < 60s</li><li>No-shows −25–50%</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Stack</h3>
            <p className="p mt-2">n8n · Twilio (WhatsApp/SMS) · Calendly/Google Cal · FastAPI · SQLite/HubSpot · optional Ollama</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Who it’s for</h3>
            <p className="p mt-2">SMBs where this workflow drives revenue and saves time.</p>
          </div>
        </div>

        <div className="card p-6 mt-6">
          <h3 className="font-semibold">Workflow</h3>
          <ol className="p mt-2 list-decimal pl-5 space-y-1">
            <li>Capture lead via webhook (form/DM).</li><li>Enrich + score (0–100); branch scripts.</li><li>Reply in <60s with branded tone + calendar link.</li><li>Confirm & remind.</li><li>Revive at 24–72h; escalate to human.</li>
          </ol>
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/contact" className="btn-primary">Book a Demo</Link>
          <Link href="/playbooks" className="btn-ghost">All Playbooks</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
