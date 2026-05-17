// src/components/Services.jsx
// Safety Services are shown in a dedicated section below — excluded from these tabs
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Leaf, Droplets, Recycle, Globe, Monitor } from 'lucide-react'
import { serviceCategories } from '../data/servicesData'
import ServiceCard from './ServiceCard'

// Exclude 'safety' — it has its own dedicated section on the homepage
const filteredCategories = serviceCategories.filter(c => c.id !== 'safety')

const catIcons = {
  esg: BarChart3, environmental: Leaf,
  water: Droplets, waste: Recycle, climate: Globe, digital: Monitor,
}

const catAccent = {
  esg:'#10b981', environmental:'#2dd4bf',
  water:'#60a5fa', waste:'#fbbf24', climate:'#38bdf8', digital:'#a78bfa',
}

export default function Services() {
  const [activeTab, setActiveTab] = useState(filteredCategories[0].id)
  const activeCategory = filteredCategories.find(c => c.id === activeTab)
  const accent = catAccent[activeTab] || '#10b981'

  return (
    <section style={{ padding:'90px 24px', background:'#0a0f1e', position:'relative' }}>
      <div style={{ position:'absolute',top:0,right:0,width:400,height:400,borderRadius:'50%',background:'radial-gradient(circle,rgba(16,185,129,0.06) 0%,transparent 70%)',pointerEvents:'none' }}/>

      <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>

        {/* Header */}
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ textAlign:'center', marginBottom:48 }}>
          <span style={{ display:'inline-block',padding:'6px 14px',borderRadius:999,border:'1px solid rgba(16,185,129,0.3)',background:'rgba(16,185,129,0.1)',color:'#34d399',fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:16 }}>
            What We Do
          </span>
          <h2 style={{ fontFamily:'Playfair Display,serif',fontSize:42,fontWeight:700,color:'white',marginBottom:16,lineHeight:1.2 }}>
            Comprehensive{' '}
            <span style={{ background:'linear-gradient(135deg,#10b981,#34d399)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
              ESG & Environmental
            </span>
            <br/>Service Portfolio
          </h2>
          <p style={{ color:'#9ca3af',fontSize:17,maxWidth:580,margin:'0 auto',lineHeight:1.7 }}>
            From strategic consulting to digital analytics — we cover every dimension of your sustainability journey.
          </p>
        </motion.div>

        {/* Tabs */}
        <div style={{ display:'flex',flexWrap:'wrap',justifyContent:'center',gap:10,marginBottom:40 }}>
          {filteredCategories.map(cat => {
            const Icon = catIcons[cat.id] || Leaf
            const active = activeTab === cat.id
            const acc = catAccent[cat.id] || '#10b981'
            return (
              <button key={cat.id} onClick={() => setActiveTab(cat.id)} style={{
                display:'inline-flex',alignItems:'center',gap:8,
                padding:'9px 18px',borderRadius:12,fontWeight:500,fontSize:13,cursor:'pointer',
                transition:'all 0.2s',
                border: active ? 'none' : '1px solid rgba(255,255,255,0.1)',
                background: active ? acc : 'transparent',
                color: active ? 'white' : '#9ca3af',
                boxShadow: active ? `0 4px 16px ${acc}44` : 'none',
              }}>
                <Icon size={13}/>{cat.category}
              </button>
            )
          })}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-8 }} transition={{ duration:0.3 }}
            style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:20 }}>
            {activeCategory.services.map((svc,i) => (
              <ServiceCard key={svc.id} iconName={svc.icon} title={svc.title} description={svc.description} color={activeCategory.color} delay={i*0.06}/>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div style={{ textAlign:'center',marginTop:48 }}>
          <Link to="/services" style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'13px 28px',borderRadius:12,border:`1px solid ${accent}66`,color:accent,fontWeight:600,fontSize:14,textDecoration:'none' }}>
            View All Services <ArrowRight size={16}/>
          </Link>
        </div>
      </div>
    </section>
  )
}