'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-ink/80 backdrop-blur border-b border-white/10">
      <nav className="section flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="LX Works" width={36} height={36} className="rounded-md" />
          <span className="text-lg font-semibold tracking-wide">LX Works</span>
        </Link>
        <button className="md:hidden btn-ghost" onClick={()=>setOpen(!open)}>Menu</button>
        <ul className={`md:flex gap-6 items-center ${open ? 'flex flex-col absolute top-full left-0 w-full bg-ink/95 p-6 border-t border-white/10' : 'hidden md:flex'}`}>
          <li><Link href="/case-studies" className="hover:opacity-80">Case Studies</Link></li>
          <li><Link href="/playbooks" className="hover:opacity-80">Playbooks</Link></li>
          <li><Link href="/about" className="hover:opacity-80">About</Link></li>
          <li><Link href="/contact" className="btn-primary">Book a Demo</Link></li>
        </ul>
      </nav>
    </header>
  )
}
