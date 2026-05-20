// src/components/SafetyServices.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import ServiceCard from './ServiceCard'
import { serviceCategories } from '../data/servicesData'

const safetyCategory = serviceCategories.find(c => c.id === 'safety')

const stats = [
  { value:'100+', label:'Sites Audited' },
  { value:'5K+',  label:'Professionals Trained' },
  { value:'Zero', label:'Incident Goal' },
  { value:'ISO',  label:'45001 & 14001 Experts' },
]

export default function SafetyServices() {
  if (!safetyCategory) return null

  return (
    <section style={{ padding:'90px 24px', background:'#f8fafc', position:'relative', overflow:'hidden' }}>

      {/* Decorative background */}
      <div style={{ position:'absolute',top:0,left:0,right:0,height:6,background:'linear-gradient(90deg,#ef4444,#f87171,#fca5a5)',borderRadius:'0 0 4px 4px' }}/>
      <div style={{ position:'absolute',top:'-10%',right:'-5%',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(239,68,68,0.05) 0%,transparent 70%)',pointerEvents:'none' }}/>

      <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>

        {/* Header */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center', marginBottom:60 }} className="safety-header">
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.65 }}>
            <span style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 14px', borderRadius:999, border:'1px solid rgba(239,68,68,0.3)', background:'rgba(239,68,68,0.08)', color:'#ef4444', fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:16 }}>
              <ShieldCheck size={11}/> Safety Services
            </span>
            <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:38, fontWeight:700, color:'#111827', lineHeight:1.2, marginBottom:16 }}>
              Comprehensive{' '}
              <span style={{ color:'#ef4444' }}>Safety Solutions</span>
              <br/>for Every Industry
            </h2>
            <p style={{ color:'#6b7280', fontSize:16, lineHeight:1.75, marginBottom:28, maxWidth:480 }}>
              From project manpower supply to ISO implementation and fire safety — we deliver end-to-end safety services that protect your people, assets, and reputation.
            </p>
            <Link to="/services" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'13px 26px', borderRadius:12, background:'#ef4444', color:'white', fontWeight:600, fontSize:14, textDecoration:'none', boxShadow:'0 8px 24px rgba(239,68,68,0.3)' }}>
              View All Safety Services <ArrowRight size={15}/>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.65, delay:0.15 }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              {stats.map((s,i) => (
                <motion.div key={s.label} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
                  style={{ borderRadius:16, background:'white', border:'1px solid #f3f4f6', padding:'24px', textAlign:'center', boxShadow:'0 2px 8px rgba(0,0,0,0.05)' }}>
                  <p style={{ fontFamily:'Playfair Display,serif', fontWeight:700, fontSize:34, color:'#111827', margin:'0 0 6px' }}>
                    <span style={{ color:'#ef4444' }}>{s.value}</span>
                  </p>
                  <p style={{ color:'#6b7280', fontSize:13, margin:0 }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Service Cards Grid */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:28 }}>
            <div style={{ width:10, height:10, borderRadius:'50%', background:'#ef4444' }}/>
            <h3 style={{ fontFamily:'Playfair Display,serif', color:'#111827', fontSize:20, fontWeight:600, margin:0 }}>Our Safety Services</h3>
            <div style={{ flex:1, height:1, background:'#e5e7eb' }}/>
            <span style={{ color:'#9ca3af', fontSize:12 }}>{safetyCategory.services.length} services</span>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:18 }}>
            {safetyCategory.services.map((svc, i) => (
              <ServiceCard
                key={svc.id}
                iconName={svc.icon}
                title={svc.title}
                description={svc.description}
                color="red"
                delay={i * 0.05}
                dark={false}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55, delay:0.2 }}
          style={{ marginTop:56, borderRadius:20, padding:'40px 48px', background:'linear-gradient(135deg,#7f1d1d,#991b1b)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:24 }}>
          <div>
            <h3 style={{ fontFamily:'Playfair Display,serif', color:'white', fontSize:24, fontWeight:700, margin:'0 0 8px' }}>Need a Safety Audit or Training?</h3>
            <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, margin:0 }}>Get a free consultation from our certified safety experts.</p>
          </div>
          <Link to="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:12, background:'white', color:'#991b1b', fontWeight:700, fontSize:14, textDecoration:'none', whiteSpace:'nowrap', boxShadow:'0 4px 16px rgba(0,0,0,0.2)' }}>
            Book Free Consultation <ArrowRight size={15}/>
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media(max-width:768px){
          .safety-header{ grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  )
}