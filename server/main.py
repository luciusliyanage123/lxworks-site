from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import os

app = FastAPI(title="LX Works Backend")
origins = os.getenv("ALLOWED_ORIGINS","https://lxworks-site.vercel.app").split(",")
app.add_middleware(CORSMiddleware, allow_origins=[o.strip() for o in origins if o.strip()], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

class ChatMessage(BaseModel):
  role: str
  content: str
class ChatRequest(BaseModel):
  messages: List[ChatMessage]
class ChatResponse(BaseModel):
  reply: str

@app.get("/health")
def health(): return {"ok": True}

def reply_logic(text:str)->str:
  t = text.lower()
  if any(k in t for k in ["price","pricing","cost","setup","monthly"]):
    return "Setup from $2k, hosting from $499/mo, and $500 per fine-tune. On-prem or hosted. Want a tailored quote?"
  return "We build private, secure AI assistants trained on your data (on-prem or hosted). Ask me about playbooks, niches, or deployments."

@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
  user = next((m.content for m in reversed(req.messages) if m.role=='user'), '')
  return ChatResponse(reply=reply_logic(user))

class ContactRequest(BaseModel):
  name: str
  company: str | None = None
  email: str
  website: str | None = None
  message: str | None = None

@app.post("/contact")
def contact(payload: ContactRequest):
  return {"ok": True, "received": payload.model_dump()}
