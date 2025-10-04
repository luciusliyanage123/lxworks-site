export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="section py-10 text-sm text-slate/80 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} LX Works. All rights reserved.</p>
        <p>Private AI • Micro-LLMs • Automation</p>
      </div>
    </footer>
  )
}
