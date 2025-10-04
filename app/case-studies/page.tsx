import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CaseStudies from '@/components/CaseStudies'

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="section pt-12">
        <h1 className="h2">Case Studies</h1>
        <p className="p mt-3">Deep dives into representative builds.</p>
      </div>
      <CaseStudies />
      <Footer />
    </>
  )
}
