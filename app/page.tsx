import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoStrip from '@/components/LogoStrip'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Playbooks from '@/components/Playbooks'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
const ChatWidget = dynamic(()=>import('@/components/ChatWidget'), { ssr:false })

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Services />
      <CaseStudies compact />
      <Playbooks heroStyle />
      <Footer />
      <ChatWidget />
    </>
  )
}
