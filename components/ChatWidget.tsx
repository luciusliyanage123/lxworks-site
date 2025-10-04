'use client'
import { useEffect, useRef, useState } from 'react'
type Msg = { role:'user'|'assistant', content:string }

export default function ChatWidget(){
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([{ role:'assistant', content:'Hi! I’m the LX Works assistant. Ask me about private AI, pricing, or how we deploy.' }])
  const inputRef = useRef<HTMLInputElement>(null)

  async function send(text:string){
    setMessages(p=>[...p, {role:'user', content:text}]); setLoading(true)
    try {
      const r = await fetch('/api/chat', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ messages:[{role:'user', content:text}] }) })
      const data = await r.json()
      setMessages(p=>[...p, {role:'assistant', content: data.reply ?? 'Thanks!'}])
    } catch { setMessages(p=>[...p, {role:'assistant', content:'Sorry, backend unreachable.'}]) }
    finally { setLoading(false) }
  }
  function onSubmit(e:any){ e.preventDefault(); const v=inputRef.current?.value?.trim(); if(!v) return; inputRef.current!.value=''; send(v) }

  useEffect(()=>{ const k=(e:KeyboardEvent)=>{ if(e.key==='Escape') setOpen(false) }; window.addEventListener('keydown',k); return ()=>window.removeEventListener('keydown',k)},[])

  return (<>
    <button onClick={()=>setOpen(true)} className="fixed bottom-6 right-6 btn-primary shadow-soft">Chat with LX Works</button>
    {open && (<div className="fixed inset-0 z-50 flex items-end md:items-center md:justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={()=>setOpen(false)} />
      <div className="relative w-full md:max-w-md md:rounded-2xl bg-navy/90 backdrop-blur border border-white/10 p-4 md:p-6 mx-0 md:mx-4">
        <div className="flex items-center justify-between"><h3 className="text-lg font-semibold">LX Works Assistant</h3><button className="btn-ghost" onClick={()=>setOpen(false)}>Close</button></div>
        <div className="mt-4 h-[50vh] md:h-80 overflow-y-auto space-y-3 pr-1">
          {messages.map((m,i)=>(<div key={i} className={`p-3 rounded-xl max-w-[85%] ${m.role==='user'?'bg-primary/20 ml-auto':'bg-white/5'}`}>
            <div className="text-xs opacity-70">{m.role==='user'?'You':'Assistant'}</div>
            <div className="mt-1 whitespace-pre-wrap leading-relaxed">{m.content}</div>
          </div>))}
          {loading && <div className="text-sm text-slate/80">Thinking…</div>}
        </div>
        <form onSubmit={onSubmit} className="mt-4 flex gap-2">
          <input ref={inputRef} className="flex-1 bg-white/5 rounded-xl px-4 py-3 outline-none border border-white/10" placeholder="Ask about pricing, on-prem, niches…" />
          <button className="btn-primary" type="submit" disabled={loading}>Send</button>
        </form>
      </div>
    </div>)}
  </>)
}
