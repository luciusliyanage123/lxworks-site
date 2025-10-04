import Image from 'next/image'
const logos = ['/vendors/openai.svg','/vendors/anthropic.svg','/images/logo3.svg','/images/logo4.svg','/images/logo5.svg']
export default function LogoStrip() {
  return (
    <section className="section py-10 opacity-90">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
        {logos.map((src,i)=>(
          <div key={i} className="flex items-center justify-center opacity-80">
            <Image src={src} alt={`logo ${i}`} width={140} height={48} />
          </div>
        ))}
      </div>
    </section>
  )
}
