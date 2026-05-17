// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = [
  { label:'Home', to:'/' }, { label:'Services', to:'/services' },
  { label:'About', to:'/about' }, { label:'Contact', to:'/contact' },
]
const serviceLinks = ['ESG Consulting','Environmental Audits','Net Zero Strategy','Carbon Tracking','Water Management','Waste Management']
const socials = ['LinkedIn','Twitter','YouTube','Instagram']

export default function Footer() {
  return (
    <footer style={{ background:'#080d1a', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth:1200,margin:'0 auto',padding:'64px 24px 32px' }}>
        <div style={{ display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1.5fr',gap:40,marginBottom:48 }} className="footer-grid">

          {/* Brand */}
          <div>
            <Link to="/" style={{ display:'inline-flex',alignItems:'center',gap:10,textDecoration:'none',marginBottom:16 }}>
              <div style={{ width:36,height:36,borderRadius:10,background:'linear-gradient(135deg,#10b981,#059669)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 12px rgba(16,185,129,0.25)' }}>
                <Leaf size={17} color="white" strokeWidth={2.5}/>
              </div>
              <div>
                <span style={{ fontFamily:'Playfair Display,serif',fontWeight:700,color:'white',fontSize:17 }}>Swami</span>
                <span style={{ fontFamily:'Playfair Display,serif',fontWeight:700,color:'#34d399',fontSize:17 }}>environment</span>
              </div>
            </Link>
            <p style={{ color:'#6b7280',fontSize:13,lineHeight:1.7,marginBottom:20 }}>
              India's trusted partner for ESG consulting, environmental intelligence, and sustainability transformation.
            </p>
            <div style={{ display:'flex',gap:8 }}>
              {socials.map(name=>(
                <a key={name} href="#" style={{ padding:'6px 12px',borderRadius:8,border:'1px solid rgba(255,255,255,0.1)',color:'#6b7280',fontSize:11,fontWeight:500,textDecoration:'none' }}>{name}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color:'white',fontSize:13,fontWeight:600,marginBottom:20,letterSpacing:'0.05em' }}>Quick Links</h4>
            <ul style={{ listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:12 }}>
              {quickLinks.map(l=>(
                <li key={l.to}><Link to={l.to} style={{ color:'#6b7280',fontSize:13,textDecoration:'none' }}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color:'white',fontSize:13,fontWeight:600,marginBottom:20,letterSpacing:'0.05em' }}>Our Services</h4>
            <ul style={{ listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:12 }}>
              {serviceLinks.map(s=>(
                <li key={s}><Link to="/services" style={{ color:'#6b7280',fontSize:13,textDecoration:'none' }}>{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color:'white',fontSize:13,fontWeight:600,marginBottom:20,letterSpacing:'0.05em' }}>Contact</h4>
            <div style={{ display:'flex',flexDirection:'column',gap:16 }}>
              <div style={{ display:'flex',gap:12,alignItems:'flex-start' }}>
                <MapPin size={14} color="#10b981" style={{ flexShrink:0,marginTop:2 }}/>
                <span style={{ color:'#6b7280',fontSize:13,lineHeight:1.6 }}>SCO 112, Sector 34-A,<br/>Chandigarh — 160022, India</span>
              </div>
              <div style={{ display:'flex',gap:12,alignItems:'center' }}>
                <Phone size={14} color="#10b981" style={{ flexShrink:0 }}/>
                <a href="tel:+911722345678" style={{ color:'#6b7280',fontSize:13,textDecoration:'none' }}>+91 172 234 5678</a>
              </div>
              <div style={{ display:'flex',gap:12,alignItems:'center' }}>
                <Mail size={14} color="#10b981" style={{ flexShrink:0 }}/>
                <a href="mailto:info@swamienvironment.com" style={{ color:'#6b7280',fontSize:13,textDecoration:'none' }}>info@swamienvironment.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)',paddingTop:24,display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16 }}>
          <p style={{ color:'#4b5563',fontSize:12,margin:0 }}>© {new Date().getFullYear()} Swamienvironment Pvt. Ltd. All rights reserved.</p>
          <div style={{ display:'flex',gap:20 }}>
            {['Privacy Policy','Terms of Service','Cookie Policy'].map(item=>(
              <a key={item} href="#" style={{ color:'#4b5563',fontSize:12,textDecoration:'none' }}>{item}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr !important;}}`}</style>
    </footer>
  )
}