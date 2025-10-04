import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const plays = [
  { title:'Lead Follow-up in 60s', slug:'lead-followup-60s' },
  { title:'Invoice Chase Bot', slug:'invoice-chase-bot' },
  { title:'Support Desk 2.0', slug:'support-desk-2-0' },
]

export default function Page() {
  return (
    <>
      <Navbar />
      <section className="section pt-12 pb-20">
        <h1 className="h2">Playbooks</h1>
        <p className="p mt-3">Proven, reusable automation patterns we implement and tailor to your stack.</p>
        <ul className="mt-8 grid md:grid-cols-3 gap-6">
          {plays.map(p => (
            <li key={p.slug} className="card p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="p mt-2">Open to see the exact steps.</p>
              <Link href={`/playbooks/${p.slug}`} className="inline-block mt-4 text-primary">View blueprint</Link>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </>
  )
}
