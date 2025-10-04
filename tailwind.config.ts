import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { primary:'#2a6bff', navy:'#0b1531', ink:'#0b1020', slate:'#9aa9c7' },
      boxShadow: { soft:'0 10px 30px rgba(0,0,0,.25)' },
      borderRadius: { '2xl':'1.25rem' }
    }
  },
  plugins: []
}
export default config
