// src/components/AboutSwami.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Leaf } from 'lucide-react'

const highlights = [
  'Comprehensive ESG, Safety & Environmental services',
  'Serving corporates, SMEs, and government bodies',
  'Committed to Net Zero and sustainable development',
  'Transparent, science-based, results-driven approach',
]

export default function AboutSwami() {
  return (
    <section style={{ padding:'90px 24px', background:'white', position:'relative', overflow:'hidden' }}>

      <div style={{ maxWidth:1200,margin:'0 auto' }}>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'center' }} className="about-swami-grid">

          {/* Left: Image collage */}
          <motion.div initial={{ opacity:0,x:-24 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}
            style={{ position:'relative' }}>

            {/* Main big image */}
            <div style={{
              width:'100%',height:400,borderRadius:24,overflow:'hidden',
              background:'linear-gradient(135deg,#0a0f1e,#111d35)',
              display:'flex',alignItems:'center',justifyContent:'center',
              position:'relative',boxShadow:'0 20px 60px rgba(0,0,0,0.15)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1473445730015-841f29a9490b?w=800&q=80"
                alt="Environmental consulting"
                style={{ width:'100%',height:'100%',objectFit:'cover',opacity:0.85 }}
              />
              {/* Overlay */}
              <div style={{ position:'absolute',inset:0,background:'linear-gradient(to top,rgba(10,15,30,0.6) 0%,transparent 60%)' }}/>
              {/* Badge on image */}
              <div style={{
                position:'absolute',bottom:24,left:24,
                background:'rgba(16,185,129,0.9)',backdropFilter:'blur(8px)',
                borderRadius:12,padding:'12px 18px',
                display:'flex',alignItems:'center',gap:10,
              }}>
                <Leaf size={18} color="white"/>
                <div>
                  <p style={{ color:'white',fontWeight:700,fontSize:14,margin:0 }}>Swamienvironment</p>
                  <p style={{ color:'rgba(255,255,255,0.8)',fontSize:11,margin:0 }}>ESG & Environmental Solutions</p>
                </div>
              </div>
            </div>

            {/* Small image bottom right */}
            <div style={{
              position:'absolute',bottom:-24,right:-24,
              width:180,height:140,borderRadius:16,overflow:'hidden',
              boxShadow:'0 12px 32px rgba(0,0,0,0.15)',
              border:'4px solid white',
            }}>
              <img
                src="https://images.unsplash.com/photo-1580893246395-52aead8960dc?w=400&q=80"
                alt="Safety services"
                style={{ width:'100%',height:'100%',objectFit:'cover' }}
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y:[0,-8,0] }} transition={{ duration:4,repeat:Infinity,ease:'easeInOut' }}
              style={{
                position:'absolute',top:-20,right:20,
                background:'white',borderRadius:14,padding:'14px 20px',
                boxShadow:'0 8px 32px rgba(0,0,0,0.12)',
                border:'1px solid #f3f4f6',
                display:'flex',alignItems:'center',gap:12,
              }}>
              <div style={{ width:40,height:40,borderRadius:10,background:'#ecfdf5',display:'flex',alignItems:'center',justifyContent:'center' }}>
                <Leaf size={18} color="#10b981"/>
              </div>
              <div>
                <p style={{ fontFamily:'Playfair Display,serif',fontWeight:700,color:'#111827',fontSize:20,margin:0,lineHeight:1 }}>30+</p>
                <p style={{ color:'#6b7280',fontSize:11,margin:'4px 0 0' }}>Services Offered</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div initial={{ opacity:0,x:24 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7,delay:0.15 }}>
            <span style={{ display:'inline-block',padding:'6px 14px',borderRadius:999,border:'1px solid rgba(16,185,129,0.4)',background:'rgba(16,185,129,0.06)',color:'#059669',fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:16 }}>
              About Swamienvironment
            </span>
            <h2 style={{ fontFamily:'Playfair Display,serif',fontSize:38,fontWeight:700,color:'#111827',marginBottom:20,lineHeight:1.2 }}>
              Your Partner in{' '}
              <span style={{ color:'#10b981' }}>Sustainability</span>{' '}
              & Safety Excellence
            </h2>
            <p style={{ color:'#6b7280',fontSize:15,lineHeight:1.8,marginBottom:16 }}>
              <strong style={{ color:'#111827' }}>Swamienvironment</strong> is a dedicated ESG, Safety, and Environmental consultancy built for the challenges of modern Indian industry. We bring together expertise across environmental science, occupational health & safety, ESG strategy, and digital sustainability tools — all under one roof.
            </p>
            <p style={{ color:'#6b7280',fontSize:15,lineHeight:1.8,marginBottom:28 }}>
              Whether you're a large corporation navigating SEBI's BRSR requirements, an SME seeking ISO 45001 certification, or a project site needing qualified safety manpower — Swamienvironment is your trusted partner. We deliver practical, science-based solutions that protect your people, strengthen your compliance, and build long-term value.
            </p>

            {/* Highlights */}
            <ul style={{ listStyle:'none',padding:0,margin:'0 0 32px',display:'flex',flexDirection:'column',gap:12 }}>
              {highlights.map(item => (
                <li key={item} style={{ display:'flex',alignItems:'center',gap:10 }}>
                  <CheckCircle2 size={17} color="#10b981" style={{ flexShrink:0 }}/>
                  <span style={{ color:'#374151',fontSize:14 }}>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ display:'flex',gap:16,flexWrap:'wrap' }}>
              <Link to="/about" style={{
                display:'inline-flex',alignItems:'center',gap:8,
                padding:'13px 26px',borderRadius:12,background:'#0a0f1e',
                color:'white',fontWeight:600,fontSize:14,textDecoration:'none',
              }}>
                Our Story <ArrowRight size={15}/>
              </Link>
              <Link to="/services" style={{
                display:'inline-flex',alignItems:'center',gap:8,
                padding:'13px 26px',borderRadius:12,
                border:'1px solid #e5e7eb',
                color:'#374151',fontWeight:600,fontSize:14,textDecoration:'none',
              }}>
                Our Services <ArrowRight size={15}/>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .about-swami-grid{ grid-template-columns:1fr !important; gap:48px !important; }
        }
      `}</style>
    </section>
  )
}