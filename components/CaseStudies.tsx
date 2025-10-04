import Image from 'next/image'
import Link from 'next/link'

const items = [
  { slug:'cafe-ai', title:'Café Concierge — Orders & Loyalty', img:'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop', summary:'A house-trained chatbot that answers DMs, takes orders, and remembers regulars.'},
  { slug:'roofing-estimator', title:'Roofing Estimator — Quotes in Minutes', img:'https://images.unsplash.com/photo-1531831108325-7fe5b7e16ae9?q=80&w=1200&auto=format&fit=crop', summary:'Job quoting assistant that parses specs, estimates cost, and files reports.'},
  { slug:'accounting-reception', title:'Accounting Reception — Bookings & Summaries', img:'https://images.unsplash.com/photo-1523246191914-216a06ea6ac1?q=80&w=1200&auto=format&fit=crop', summary:'AI receptionist that books calls, routes requests, and drafts summaries.'}
]

export default function CaseStudies({compact=false}:{compact?:boolean}) {
  return (
    <section className="section py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="h2">Selected Work</h2>
          <p className="p mt-3 max-w-2xl">Representative builds showing speed, security, and ROI.</p>
        </div>
        {compact && <Link href="/case-studies" className="btn-ghost">View all</Link>}
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {items.map((it)=>(
          <Link key={it.slug} href={`/case-studies/${it.slug}`} className="card overflow-hidden group">
            <div className="relative h-52">
              <Image src={it.img} alt={it.title} fill className="object-cover group-hover:scale-[1.02] transition" />
            </div>
            <div className="p-5">
              <div className="text-lg font-semibold">{it.title}</div>
              <p className="p mt-2">{it.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
