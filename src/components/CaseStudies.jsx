// src/components/CaseStudies.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react'

const cases = [
  {
    id:1, title:'Smart City ESG Project', location:'Chandigarh, India', year:'2023',
    tag:'Urban Sustainability', tagColor:'#10b981', tagBg:'rgba(16,185,129,0.15)',
    summary:'Partnered with the Chandigarh Smart City Mission to develop a comprehensive ESG framework, integrating real-time environmental monitoring, green building standards, and citizen engagement tools.',
    outcomes:['32% reduction in city carbon footprint','ESG score improved from 54 → 81','ISO 14001 certification achieved'],
    gradient:'linear-gradient(135deg,#064e3b,#0a0f1e)', emoji:'🏙️',
  },
  {
    id:2, title:'Climate Risk Analysis', location:'Maharashtra, India', year:'2022',
    tag:'Climate Advisory', tagColor:'#38bdf8', tagBg:'rgba(56,189,248,0.15)',
    summary:'Conducted a TCFD-aligned physical and transitional climate risk assessment for a major agri-business conglomerate, identifying material risks and developing a 10-year climate adaptation strategy.',
    outcomes:['₹280Cr of climate risk quantified','Adopted by board as strategic priority','Published first climate report'],
    gradient:'linear-gradient(135deg,#0c4a6e,#0a0f1e)', emoji:'🌊',
  },
  {
    id:3, title:'Waste Reduction Initiative', location:'Pune Industrial Estate', year:'2024',
    tag:'Circular Economy', tagColor:'#fbbf24', tagBg:'rgba(251,191,36,0.15)',
    summary:'Designed and implemented a zero-waste-to-landfill program for a cluster of 18 manufacturing units, deploying circular economy principles and digital waste tracking.',
    outcomes:['94% landfill diversion achieved','₹4.2Cr in resource recovery value','Replicated across 3 more clusters'],
    gradient:'linear-gradient(135deg,#78350f,#0a0f1e)', emoji:'♻️',
  },
]

function CaseCard({ cs, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity:0,y:28 }} whileInView={{ opacity:1,y:0 }}
      viewport={{ once:true,margin:'-60px' }} transition={{ duration:0.6,delay:index*0.15 }}
      onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      style={{ borderRadius:20,overflow:'hidden',cursor:'pointer',height:400,position:'relative' }}
    >
      {/* Background */}
      <div style={{ position:'absolute',inset:0,background:cs.gradient }}/>
      <div style={{ position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:160,opacity:0.08,pointerEvents:'none',userSelect:'none' }}>{cs.emoji}</div>

      {/* Front */}
      <AnimatePresence>
        {!hovered && (
          <motion.div key="front" initial={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.2 }}
            style={{ position:'absolute',inset:0,padding:28,display:'flex',flexDirection:'column',justifyContent:'flex-end' }}>
            <span style={{ display:'inline-block',padding:'5px 12px',borderRadius:8,background:cs.tagBg,color:cs.tagColor,fontSize:11,fontWeight:700,marginBottom:12,border:`1px solid ${cs.tagColor}33`,width:'fit-content' }}>{cs.tag}</span>
            <h3 style={{ fontFamily:'Playfair Display,serif',color:'white',fontSize:22,fontWeight:700,marginBottom:10,lineHeight:1.2 }}>{cs.title}</h3>
            <div style={{ display:'flex',gap:20,color:'#9ca3af',fontSize:12 }}>
              <span style={{ display:'flex',alignItems:'center',gap:4 }}><MapPin size={11}/>{cs.location}</span>
              <span style={{ display:'flex',alignItems:'center',gap:4 }}><Calendar size={11}/>{cs.year}</span>
            </div>
            <div style={{ display:'flex',alignItems:'center',gap:6,marginTop:14,color:cs.tagColor,fontSize:13,fontWeight:500 }}>
              View Case Study <ArrowUpRight size={14}/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back */}
      <AnimatePresence>
        {hovered && (
          <motion.div key="back" initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0 }} transition={{ duration:0.25 }}
            style={{ position:'absolute',inset:0,padding:28,display:'flex',flexDirection:'column',justifyContent:'space-between',background:'rgba(10,15,30,0.96)',borderTop:`3px solid ${cs.tagColor}` }}>
            <div>
              <span style={{ display:'inline-block',padding:'5px 12px',borderRadius:8,background:cs.tagBg,color:cs.tagColor,fontSize:11,fontWeight:700,marginBottom:12,border:`1px solid ${cs.tagColor}33` }}>{cs.tag}</span>
              <h3 style={{ fontFamily:'Playfair Display,serif',color:'white',fontSize:18,fontWeight:700,marginBottom:10 }}>{cs.title}</h3>
              <p style={{ color:'#9ca3af',fontSize:13,lineHeight:1.65,margin:0 }}>{cs.summary}</p>
            </div>
            <div>
              <p style={{ color:'white',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:10 }}>Key Outcomes</p>
              <ul style={{ listStyle:'none',padding:0,margin:'0 0 14px',display:'flex',flexDirection:'column',gap:6 }}>
                {cs.outcomes.map(o=>(
                  <li key={o} style={{ display:'flex',gap:8,color:'#d1d5db',fontSize:12 }}>
                    <span style={{ color:cs.tagColor,flexShrink:0 }}>✓</span>{o}
                  </li>
                ))}
              </ul>
              <span style={{ color:cs.tagColor,fontSize:13,fontWeight:600,display:'flex',alignItems:'center',gap:4 }}>
                Learn More <ArrowUpRight size={13}/>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function CaseStudies() {
  return (
    <section style={{ padding:'90px 24px',background:'white' }}>
      <div style={{ maxWidth:1200,margin:'0 auto' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ textAlign:'center',marginBottom:48 }}>
          <span style={{ display:'inline-block',padding:'6px 14px',borderRadius:999,border:'1px solid rgba(16,185,129,0.4)',background:'rgba(16,185,129,0.06)',color:'#059669',fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:16 }}>Our Work</span>
          <h2 style={{ fontFamily:'Playfair Display,serif',fontSize:38,fontWeight:700,color:'#111827',marginBottom:12 }}>
            Projects That <span style={{ color:'#10b981' }}>Made a Difference</span>
          </h2>
          <p style={{ color:'#6b7280',fontSize:16,maxWidth:480,margin:'0 auto' }}>Hover over each card to explore the full story and outcomes.</p>
        </motion.div>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24 }} className="cases-grid">
          {cases.map((cs,i) => <CaseCard key={cs.id} cs={cs} index={i}/>)}
        </div>
      </div>
      <style>{`@media(max-width:768px){.cases-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}