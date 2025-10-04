import { ArrowRight } from './icons'
const services = [
  { title:'Private AI Assistants', desc:'On-prem or hosted Micro-LLMs trained on your data and brand tone.' },
  { title:'Data & Fine-Tuning', desc:'Ingestion (PDF, site scrape), vector search, supervised & LoRA tuning.' },
  { title:'Dashboards & APIs', desc:'FastAPI + Next.js dashboards, widgets, CRMs, webhooks (Zapier/n8n).' },
  { title:'Compliance & Security', desc:'Audit logs, RBAC, encryption at rest & in transit.' },
]
export default function Services() {
  return (
    <section className="section py-16">
      <h2 className="h2">Capabilities</h2>
      <p className="p mt-3 max-w-2xl">Everything you need to deploy production-grade private AI.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {services.map((s,i)=>(
          <div key={i} className="card p-6 hover:translate-y-[-2px] transition">
            <div className="text-xl font-semibold">{s.title}</div>
            <p className="p mt-2">{s.desc}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-primary">
              <span className="text-sm">Learn more</span><ArrowRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
