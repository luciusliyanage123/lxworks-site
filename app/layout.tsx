import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'LX Works — Private AI & Automation',
  description: 'Private AI, Micro-LLMs, and automation for SMBs.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ink text-white antialiased">{children}</body>
    </html>
  )
}
