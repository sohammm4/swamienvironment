// src/components/About.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const stats = [
  { value:'200+', label:'Projects Delivered' },
  { value:'50+',  label:'Satisfied Clients' },
  { value:'15+',  label:'Years of Expertise' },
  { value:'40+',  label:'Expert Consultants' },
]

const milestones = [
  { year:'2009', title:'Founded', desc:'Established in Chandigarh with focus on environmental impact assessments.' },
  { year:'2013', title:'ESG Division', desc:'Launched dedicated ESG consulting practice for corporate clients across India.' },
  { year:'2018', title:'Digital Tools', desc:'Introduced proprietary digital ESG analytics and carbon tracking platforms.' },
  { year:'2022', title:'Net Zero Practice', desc:'Established Net Zero Strategy division helping 30+ companies set science-based targets.' },
  { year:'2024', title:'National Leader', desc:"Recognized as one of India's top ESG and environmental consulting firms." },
]

const highlights = [
  'ISO 14001 certified environmental management',
  'GRI & SASB reporting framework experts',
  'Partnerships with IIT and global research institutions',
  'Government-approved EIA consultants',
]

export default function About() {
  return (
    <section style={{ padding:'90px 24px', background:'white' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        {/* Top grid */}
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'start',marginBottom:80 }} className="about-grid">

          {/* Left */}
          <motion.div initial={{ opacity:0,x:-24 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.65 }}>
            <span style={{ display:'inline-block',padding:'6px 14px',borderRadius:999,border:'1px solid rgba(16,185,129,0.4)',background:'rgba(16,185,129,0.06)',color:'#059669',fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:16 }}>
              About Us
            </span>
            <h2 style={{ fontFamily:'Playfair Display,serif',fontSize:38,fontWeight:700,color:'#111827',marginBottom:20,lineHeight:1.2 }}>
              Committed to a{' '}
              <span style={{ color:'#10b981' }}>Greener</span>,<br/>More Responsible Future
            </h2>
            <p style={{ color:'#6b7280',fontSize:15,lineHeight:1.75,marginBottom:16 }}>
              Swamienvironment is a premier environmental and ESG consultancy headquartered in India. For over 15 years, we've partnered with corporations, governments, and development agencies to embed sustainability at the core of decision-making.
            </p>
            <p style={{ color:'#6b7280',fontSize:15,lineHeight:1.75,marginBottom:28 }}>
              Our multidisciplinary team of environmental scientists, ESG analysts, and sustainability strategists combines deep technical expertise with practical business acumen — delivering solutions that are both scientifically rigorous and commercially viable.
            </p>
            <ul style={{ listStyle:'none',padding:0,margin:'0 0 28px',display:'flex',flexDirection:'column',gap:12 }}>
              {highlights.map(item=>(
                <li key={item} style={{ display:'flex',alignItems:'center',gap:10 }}>
                  <CheckCircle2 size={17} color="#10b981" style={{ flexShrink:0 }}/>
                  <span style={{ color:'#374151',fontSize:14 }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:12,background:'#0a0f1e',color:'white',fontWeight:600,fontSize:14,textDecoration:'none' }}>
              Learn More <ArrowRight size={15}/>
            </Link>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity:0,x:24 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.65,delay:0.15 }}>
            <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:20 }}>
              {stats.map((s,i)=>(
                <motion.div key={s.label} initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
                  style={{ borderRadius:16,border:'1px solid #f3f4f6',background:'#f9fafb',padding:24,textAlign:'center' }}>
                  <p style={{ fontFamily:'Playfair Display,serif',fontWeight:700,fontSize:36,color:'#111827',margin:'0 0 4px' }}>
                    {s.value.replace('+','')}<span style={{ color:'#10b981' }}>{s.value.includes('+') ? '+' : ''}</span>
                  </p>
                  <p style={{ color:'#6b7280',fontSize:13,margin:0 }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
            <div style={{ borderRadius:16,background:'linear-gradient(135deg,#0a0f1e,#111d35)',padding:24 }}>
              <h3 style={{ fontFamily:'Playfair Display,serif',color:'white',fontSize:17,marginBottom:10 }}>Our Vision</h3>
              <p style={{ color:'#9ca3af',fontSize:13,lineHeight:1.7,margin:'0 0 16px' }}>
                A world where every business decision is informed by its environmental and social impact — where sustainability is not a compliance checkbox but a competitive advantage.
              </p>
              <div style={{ display:'flex',alignItems:'center',gap:8 }}>
                <div style={{ width:8,height:8,borderRadius:'50%',background:'#10b981',animation:'pulse 2s infinite' }}/>
                <span style={{ color:'#34d399',fontSize:12,fontWeight:500 }}>Actively pursuing Net Zero by 2030</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div>
          <h3 style={{ fontFamily:'Playfair Display,serif',fontSize:28,fontWeight:700,color:'#111827',textAlign:'center',marginBottom:40 }}>Our Journey</h3>
          <div style={{ position:'relative' }}>
            <div style={{ position:'absolute',left:'50%',top:0,bottom:0,width:2,background:'linear-gradient(to bottom,#a7f3d0,#10b981,#a7f3d0)',transform:'translateX(-50%)' }} className="timeline-line"/>
            <div style={{ display:'flex',flexDirection:'column',gap:24 }}>
              {milestones.map((m,i)=>(
                <motion.div key={m.year} initial={{ opacity:0,x:i%2===0?-20:20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true,margin:'-40px' }} transition={{ duration:0.5,delay:i*0.08 }}
                  style={{ display:'flex',justifyContent:i%2===0?'flex-start':'flex-end' }} className="timeline-item">
                  <div style={{ width:'45%',borderRadius:14,border:'1px solid #f3f4f6',background:'white',padding:20,boxShadow:'0 2px 8px rgba(0,0,0,0.06)' }} className="timeline-card">
                    <span style={{ display:'inline-block',padding:'4px 10px',borderRadius:8,background:'#10b981',color:'white',fontWeight:700,fontSize:12,marginBottom:8 }}>{m.year}</span>
                    <h4 style={{ fontFamily:'Playfair Display,serif',color:'#111827',fontSize:15,marginBottom:6 }}>{m.title}</h4>
                    <p style={{ color:'#6b7280',fontSize:13,lineHeight:1.6,margin:0 }}>{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .about-grid{ grid-template-columns:1fr !important; gap:32px !important; }
          .timeline-line{ display:none; }
          .timeline-item{ justify-content:flex-start !important; }
          .timeline-card{ width:100% !important; }
        }
      `}</style>
    </section>
  )
}