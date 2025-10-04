import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <section className="section pt-12 pb-20">
        <h1 className="h2">Accounting Reception — Bookings & Summaries</h1>
        <p className="p mt-3 max-w-2xl">Reception agent that books calls, routes tickets, and drafts meeting notes. HubSpot + n8n automations.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="card p-6"><h3 className="text-lg font-semibold">Problem</h3><p className="p mt-2">Describe the baseline workflow and constraints.</p></div>
          <div className="card p-6"><h3 className="text-lg font-semibold">Solution</h3><p className="p mt-2">Architecture: ingestion → RAG → controller → UI.</p></div>
          <div className="card p-6"><h3 className="text-lg font-semibold">Stack</h3><p className="p mt-2">Ollama/LM Studio · FastAPI · Next.js · PostgreSQL/SQLite · n8n</p></div>
          <div className="card p-6"><h3 className="text-lg font-semibold">Outcome</h3><p className="p mt-2">KPIs (response time, CSAT, lead close rate) improved.</p></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Software We Used</h3>
            <ul className="p mt-2 list-disc pl-5 space-y-1">
              <li>Frontend: Next.js (chat widget), Tailwind</li>
              <li>Backend: FastAPI (routing, guardrails)</li>
              <li>Vector: Chroma / Qdrant (private RAG)</li>
              <li>Models: Mistral/Llama (self-host) or OpenAI / Anthropic (hosted)</li>
              <li>Automation: n8n (CRM sync, reminders)</li>
              <li>Observability: PostHog / Metabase</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Vendors & Options</h3>
            <p className="p mt-2">We recommend open-weights for on-prem privacy. For hosted, we integrate with OpenAI and Anthropic when latency and accuracy are critical.</p>
            <div className="flex items-center gap-6 mt-4 opacity-80">
              <img src="/vendors/openai.svg" alt="OpenAI" className="h-8" />
              <img src="/vendors/anthropic.svg" alt="Anthropic" className="h-8" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
