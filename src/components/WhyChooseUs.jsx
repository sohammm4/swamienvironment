// src/components/WhyChooseUs.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Leaf, BarChart3, Users, Clock, Award } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'End-to-End Safety & ESG',
    desc: 'From safety audits to ESG reporting — we handle everything under one roof so you never need multiple vendors.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
  },
  {
    icon: Users,
    title: 'Dedicated Expert Team',
    desc: 'Our team of certified safety officers, environmental scientists, and ESG analysts bring deep domain expertise to every project.',
    color: '#38bdf8',
    bg: 'rgba(56,189,248,0.1)',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Approach',
    desc: 'Every recommendation is backed by real data, industry benchmarks, and science-based frameworks like GRI, SASB, and TCFD.',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.1)',
  },
  {
    icon: Clock,
    title: '24-Hour Response',
    desc: 'We guarantee a response to every enquiry within 24 business hours — because your time and business continuity matter.',
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.1)',
  },
  {
    icon: Leaf,
    title: 'Built for Indian Industry',
    desc: 'We understand Indian regulatory frameworks — MoEFCC, SEBI BRSR, Factory Act — and help you stay compliant effortlessly.',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.1)',
  },
  {
    icon: Award,
    title: 'ISO & International Standards',
    desc: 'We implement ISO 14001, ISO 45001, and ISO 9001 — helping you achieve internationally recognized certifications.',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.1)',
  },
]

export default function WhyChooseUs() {
  return (
    <section style={{ padding:'90px 24px', background:'#0a0f1e', position:'relative', overflow:'hidden' }}>
      {/* Background blob */}
      <div style={{ position:'absolute',top:'-10%',left:'-5%',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(16,185,129,0.07) 0%,transparent 70%)',pointerEvents:'none' }}/>
      <div style={{ position:'absolute',bottom:'-10%',right:'-5%',width:400,height:400,borderRadius:'50%',background:'radial-gradient(circle,rgba(167,139,250,0.06) 0%,transparent 70%)',pointerEvents:'none' }}/>

      <div style={{ maxWidth:1200,margin:'0 auto',position:'relative',zIndex:1 }}>

        {/* Header */}
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ textAlign:'center',marginBottom:60 }}>
          <span style={{ display:'inline-block',padding:'6px 14px',borderRadius:999,border:'1px solid rgba(16,185,129,0.3)',background:'rgba(16,185,129,0.1)',color:'#34d399',fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:16 }}>
            Why Choose Us
          </span>
          <h2 style={{ fontFamily:'Playfair Display,serif',fontSize:42,fontWeight:700,color:'white',marginBottom:16,lineHeight:1.2 }}>
            The Swamienvironment{' '}
            <span style={{ background:'linear-gradient(135deg,#10b981,#34d399)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
              Advantage
            </span>
          </h2>
          <p style={{ color:'#9ca3af',fontSize:17,maxWidth:580,margin:'0 auto',lineHeight:1.7 }}>
            We don't just consult — we partner with you to build a safer, more sustainable, and more responsible business from the ground up.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:24,marginBottom:56 }}>
          {reasons.map((r,i) => {
            const Icon = r.icon
            return (
              <motion.div key={r.title}
                initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }}
                viewport={{ once:true,margin:'-40px' }} transition={{ duration:0.55,delay:i*0.08 }}
                style={{
                  borderRadius:16,border:'1px solid rgba(255,255,255,0.07)',
                  background:'rgba(255,255,255,0.03)',padding:28,
                  transition:'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.border = `1px solid ${r.color}33`
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 16px 40px ${r.color}15`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ width:50,height:50,borderRadius:14,background:r.bg,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:18 }}>
                  <Icon size={23} color={r.color} strokeWidth={1.8}/>
                </div>
                <h3 style={{ fontFamily:'Playfair Display,serif',color:'white',fontSize:17,fontWeight:600,marginBottom:10 }}>{r.title}</h3>
                <p style={{ color:'#9ca3af',fontSize:14,lineHeight:1.75,margin:0 }}>{r.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
          style={{ textAlign:'center' }}>
          <Link to="/contact" style={{
            display:'inline-flex',alignItems:'center',gap:8,
            padding:'14px 32px',borderRadius:12,background:'#10b981',
            color:'white',fontWeight:600,fontSize:15,textDecoration:'none',
            boxShadow:'0 8px 24px rgba(16,185,129,0.3)',
          }}>
            Start Your Journey With Us <ArrowRight size={16}/>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}