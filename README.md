# LX Works — Live Deploy Package

This bundle is ready for **Vercel (frontend)** + **Railway (backend)**.

## Env (preset)
- Frontend (Vercel): `BACKEND_URL=https://lxworks-backend.up.railway.app`
- Backend (Railway): `ALLOWED_ORIGINS=https://lxworks-site.vercel.app`

## Local run
### Backend
cd server
python -m venv .venv && .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

### Frontend
npm i
# optional local override:
# $env:BACKEND_URL="http://localhost:8000"
npm run dev

## Deploy
- Push to GitHub
- Railway: root=server/  |  start=`uvicorn main:app --host 0.0.0.0 --port $PORT`
- Vercel: add env `BACKEND_URL` as above
