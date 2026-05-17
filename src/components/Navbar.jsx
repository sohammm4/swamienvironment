// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About',    to: '/about' },
  { label: 'Contact',  to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])
  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  const S = {
    header: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled || menuOpen ? 'rgba(10,15,30,0.97)' : 'transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
      borderBottom: scrolled || menuOpen ? '1px solid rgba(255,255,255,0.07)' : 'none',
      transition: 'all 0.4s ease',
    },
    nav: { maxWidth: 1200, margin: '0 auto', padding: '0 24px' },
    row: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 },
    logo: { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' },
    logoBox: {
      width: 38, height: 38, borderRadius: 10,
      background: 'linear-gradient(135deg,#10b981,#059669)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 4px 16px rgba(16,185,129,0.35)',
    },
    ul: { display: 'flex', listStyle: 'none', gap: 4, margin: 0, padding: 0 },
    cta: {
      padding: '10px 22px', borderRadius: 10, background: '#10b981',
      color: 'white', fontWeight: 600, fontSize: 14, textDecoration: 'none',
      boxShadow: '0 4px 16px rgba(16,185,129,0.3)',
    },
  }

  return (
    <header style={S.header}>
      <nav style={S.nav}>
        <div style={S.row}>
          <Link to="/" style={S.logo}>
            <div style={S.logoBox}><Leaf size={18} color="white" strokeWidth={2.5} /></div>
            <div>
              <span style={{ fontFamily:'Playfair Display,serif', fontWeight:700, color:'white', fontSize:18 }}>Swami</span>
              <span style={{ fontFamily:'Playfair Display,serif', fontWeight:700, color:'#34d399', fontSize:18 }}>environment</span>
            </div>
          </Link>

          <ul style={S.ul} className="sw-desktop">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} style={{
                  padding:'8px 16px', borderRadius:10, fontWeight:500, fontSize:14,
                  textDecoration:'none', transition:'all 0.2s',
                  color: isActive(link.to) ? '#34d399' : '#d1d5db',
                  background: isActive(link.to) ? 'rgba(16,185,129,0.1)' : 'transparent',
                  border: isActive(link.to) ? '1px solid rgba(16,185,129,0.2)' : '1px solid transparent',
                }}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <Link to="/contact" style={S.cta} className="sw-desktop">Get Started</Link>

          <button onClick={() => setMenuOpen(v=>!v)} className="sw-mobile"
            style={{ background:'none', border:'none', cursor:'pointer', color:'white', padding:8 }}>
            {menuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity:0,height:0 }} animate={{ opacity:1,height:'auto' }} exit={{ opacity:0,height:0 }}
            style={{ background:'rgba(10,15,30,0.98)', borderTop:'1px solid rgba(255,255,255,0.06)', overflow:'hidden' }}>
            <div style={{ padding:'16px 24px', display:'flex', flexDirection:'column', gap:8 }}>
              {navLinks.map(link => (
                <Link key={link.to} to={link.to} style={{
                  padding:'12px 16px', borderRadius:10, fontWeight:500, fontSize:14, textDecoration:'none',
                  color: isActive(link.to) ? '#34d399' : '#d1d5db',
                  background: isActive(link.to) ? 'rgba(16,185,129,0.1)' : 'transparent',
                }}>{link.label}</Link>
              ))}
              <Link to="/contact" style={{ padding:'12px 16px', borderRadius:10, background:'#10b981', color:'white', fontWeight:600, fontSize:14, textDecoration:'none', textAlign:'center', marginTop:8 }}>Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .sw-mobile { display: none !important; }
        @media (max-width: 768px) {
          .sw-desktop { display: none !important; }
          .sw-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}