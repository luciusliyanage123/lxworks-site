import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Navbar />
      <section className="section pt-12 pb-20">
        <h1 className="h2">Invoice Chase Bot</h1>
        <p className="p mt-3 max-w-2xl">Polite, consistent invoice follow-ups synced with Xero/Stripe/Sheets; tone-controlled escalation.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="card p-6">
            <h3 className="font-semibold">Outcomes</h3>
            <ul className="p mt-2 list-disc pl-5 space-y-1">
              <li>DSO −15–30%</li><li>On-time payments +20–35%</li><li>2–4 hrs/week saved</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Stack</h3>
            <p className="p mt-2">n8n · Xero/Stripe/Sheets · Email/SMS · FastAPI templates · optional Ollama</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Who it’s for</h3>
            <p className="p mt-2">SMBs where this workflow drives revenue and saves time.</p>
          </div>
        </div>

        <div className="card p-6 mt-6">
          <h3 className="font-semibold">Workflow</h3>
          <ol className="p mt-2 list-decimal pl-5 space-y-1">
            <li>Sync open invoices daily.</li><li>Segment friendly/due/overdue.</li><li>Send reminders; escalate gently.</li><li>Handoff disputes to humans with context.</li><li>Stop when paid; update ledger.</li>
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
