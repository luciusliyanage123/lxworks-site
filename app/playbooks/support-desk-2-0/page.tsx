import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Navbar />
      <section className="section pt-12 pb-20">
        <h1 className="h2">Support Desk 2.0</h1>
        <p className="p mt-3 max-w-2xl">Private RAG support bot with multi-channel delivery, human handoff, and CSAT insights.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="card p-6">
            <h3 className="font-semibold">Outcomes</h3>
            <ul className="p mt-2 list-disc pl-5 space-y-1">
              <li>Instant first response</li><li>30–60% AI deflection</li><li>+10–20% CSAT</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Stack</h3>
            <p className="p mt-2">FastAPI · Chroma/Qdrant · Mistral/Llama · Next.js widget · n8n · PostHog/Metabase</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Who it’s for</h3>
            <p className="p mt-2">SMBs where this workflow drives revenue and saves time.</p>
          </div>
        </div>

        <div className="card p-6 mt-6">
          <h3 className="font-semibold">Workflow</h3>
          <ol className="p mt-2 list-decimal pl-5 space-y-1">
            <li>Ingest docs → vector DB.</li><li>Answer with citations + confidence.</li><li>Serve via chat/email/WhatsApp.</li><li>Low confidence → handoff with context.</li><li>Log topics, deflection, CSAT.</li>
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
