import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section pt-16 pb-20 md:pt-24 md:pb-28 relative gradient">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate/90">Automation • AI • Ops</div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
          Build an automation engine that prints time &amp; profit.
        </h1>
        <p className="p mt-5">
          LX Works audits your workflows, deploys AI + automation, and maintains it. Start with a 45-minute AI Ops Audit.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">Book Free Audit Call</Link>
          <Link href="/playbooks" className="btn-ghost">Explore Playbooks</Link>
        </div>
        <p className="p mt-4 text-sm">Avg. setup in 14 days • Cancel anytime • Perth-based</p>
      </div>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-40 blur-[120px] rounded-full"
             style={{background:'radial-gradient(circle, rgba(42,107,255,.35) 0%, rgba(11,16,32,0) 60%)'}}/>
      </div>
    </section>
  )
}
