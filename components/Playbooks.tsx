import Link from 'next/link'
const plays = [
  { slug:'lead-followup-60s', title:'Lead Follow-up in 60s', desc:'WhatsApp → score → calendar → auto-confirm → reminder → revive no-shows.'},
  { slug:'invoice-chase-bot', title:'Invoice Chase Bot', desc:'Xero/Stripe/Sheets sync → gentle reminders → escalate with tone control.'},
  { slug:'support-desk-2-0', title:'Support Desk 2.0', desc:'RAG bot on your docs → multi-channel → human handoff → CSAT insights.'},
]
export default function Playbooks({heroStyle=false}:{heroStyle?:boolean}) {
  return (
    <section className="section py-16">
      <div className={`rounded-2xl ${heroStyle ? 'bg-gradient-to-br from-primary/15 to-white/5 border border-white/10' : ''}`}>
        <div className="p-6 md:p-10">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="h2">Playbooks</h2>
              <p className="p mt-3 max-w-2xl">Proven, reusable automation patterns we implement and tailor to your stack.</p>
            </div>
            <a href="/playbooks" className="btn-ghost">All playbooks</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {plays.map((p)=>(
              <a key={p.slug} href={`/playbooks/${p.slug}`} className="card p-6 hover:translate-y-[-2px] transition">
                <div className="text-xl font-semibold">{p.title}</div>
                <p className="p mt-2">{p.desc}</p>
                <span className="mt-4 inline-block text-primary">View blueprint</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
