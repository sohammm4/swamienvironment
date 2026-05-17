// src/components/Hero.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, BarChart3, Droplets, Wind, Globe, TrendingDown, ChevronDown } from 'lucide-react'

function FloatingCard({ icon: Icon, label, value, color, style }) {
  return (
    <div style={{
      position:'absolute', background:'rgba(255,255,255,0.07)',
      backdropFilter:'blur(12px)', border:'1px solid rgba(255,255,255,0.12)',
      borderRadius:16, padding:'12px 16px', display:'flex', alignItems:'center',
      gap:12, minWidth:160, boxShadow:'0 8px 32px rgba(0,0,0,0.3)', ...style
    }}>
      <div style={{ width:36,height:36,borderRadius:10,background:color+'22',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
        <Icon size={17} color={color} />
      </div>
      <div>
        <p style={{ color:'white',fontWeight:700,fontSize:15,margin:0,lineHeight:1 }}>{value}</p>
        <p style={{ color:'#9ca3af',fontSize:11,margin:'4px 0 0',lineHeight:1 }}>{label}</p>
      </div>
    </div>
  )
}

const fadeUp = (delay=0) => ({
  hidden:{ opacity:0, y:28 },
  show:{ opacity:1, y:0, transition:{ duration:0.7, delay, ease:[0.25,0.46,0.45,0.94] } }
})

export default function Hero() {
  return (
    <section style={{
      minHeight:'100vh', display:'flex', alignItems:'center',
      background:'linear-gradient(135deg, #0a0f1e 0%, #0d1526 50%, #111d35 100%)',
      position:'relative', overflow:'hidden', paddingTop:70,
    }}>
      {/* Blobs */}
      <div style={{ position:'absolute',top:'-10%',right:'-5%',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',pointerEvents:'none' }}/>
      <div style={{ position:'absolute',bottom:'-15%',left:'-5%',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',pointerEvents:'none' }}/>
      {/* Grid */}
      <div style={{ position:'absolute',inset:0,opacity:0.04,backgroundImage:'linear-gradient(rgba(16,185,129,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(16,185,129,0.8) 1px,transparent 1px)',backgroundSize:'60px 60px',pointerEvents:'none' }}/>

      <div style={{ maxWidth:1200,margin:'0 auto',padding:'80px 24px',width:'100%',position:'relative',zIndex:1 }}>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center' }} className="hero-grid">

          {/* Left */}
          <motion.div initial="hidden" animate="show" variants={{ show:{ transition:{ staggerChildren:0.12 } } }}>
            <motion.div variants={fadeUp(0)}>
              <span style={{
                display:'inline-flex',alignItems:'center',gap:8,
                padding:'6px 14px',borderRadius:999,
                border:'1px solid rgba(16,185,129,0.35)',background:'rgba(16,185,129,0.1)',
                color:'#34d399',fontSize:11,fontWeight:700,letterSpacing:'0.1em',
                textTransform:'uppercase',marginBottom:20,
              }}>
                <Leaf size={11}/> ESG & Environmental Solutions
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp(0.08)} style={{
              fontFamily:'Playfair Display,serif',fontSize:56,fontWeight:800,
              color:'white',lineHeight:1.15,marginBottom:24,margin:'0 0 24px',
            }}>
              Engineering{' '}
              <span style={{ background:'linear-gradient(135deg,#10b981,#34d399)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
                Sustainable
              </span>
              <br/>Solutions for Tomorrow
            </motion.h1>

            <motion.p variants={fadeUp(0.16)} style={{ color:'#9ca3af',fontSize:17,lineHeight:1.7,marginBottom:32,maxWidth:480,margin:'0 0 32px' }}>
              Helping businesses transform through ESG intelligence, environmental consulting, and science-based sustainability strategies that drive measurable impact.
            </motion.p>

            <motion.div variants={fadeUp(0.24)} style={{ display:'flex',gap:16,flexWrap:'wrap',marginBottom:48 }}>
              <Link to="/services" style={{
                display:'inline-flex',alignItems:'center',gap:8,
                padding:'14px 28px',borderRadius:12,background:'#10b981',
                color:'white',fontWeight:600,fontSize:14,textDecoration:'none',
                boxShadow:'0 8px 24px rgba(16,185,129,0.35)',transition:'all 0.2s',
              }}>
                Explore Services <ArrowRight size={16}/>
              </Link>
              <Link to="/contact" style={{
                display:'inline-flex',alignItems:'center',gap:8,
                padding:'14px 28px',borderRadius:12,
                border:'1px solid rgba(255,255,255,0.15)',
                color:'white',fontWeight:600,fontSize:14,textDecoration:'none',
              }}>
                Contact Us
              </Link>
            </motion.div>

            <motion.div variants={fadeUp(0.32)} style={{ display:'flex',gap:32,flexWrap:'wrap',paddingTop:24,borderTop:'1px solid rgba(255,255,255,0.08)' }}>
              {[{value:'200+',label:'Projects Completed'},{value:'50+',label:'Corporate Clients'},{value:'15+',label:'Years Experience'},{value:'98%',label:'Client Satisfaction'}].map(s=>(
                <div key={s.label}>
                  <p style={{ fontFamily:'Playfair Display,serif',fontWeight:700,color:'white',fontSize:26,margin:0 }}>{s.value}</p>
                  <p style={{ color:'#6b7280',fontSize:12,margin:'4px 0 0' }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Globe + Floating Cards */}
          <motion.div
            initial={{ opacity:0,scale:0.92 }} animate={{ opacity:1,scale:1 }}
            transition={{ duration:0.9,delay:0.2 }}
            style={{ position:'relative',height:520,display:'flex',alignItems:'center',justifyContent:'center' }}
          >
            {/* Globe */}
            <div style={{ position:'relative',width:280,height:280 }}>
              <div style={{ position:'absolute',inset:0,borderRadius:'50%',border:'1px solid rgba(16,185,129,0.2)' }}/>
              <div style={{ position:'absolute',inset:16,borderRadius:'50%',border:'1px solid rgba(16,185,129,0.12)' }}/>
              <div style={{ position:'absolute',inset:32,borderRadius:'50%',border:'1px solid rgba(16,185,129,0.08)' }}/>
              <div style={{
                position:'absolute',inset:48,borderRadius:'50%',
                background:'linear-gradient(135deg,rgba(16,185,129,0.15),rgba(16,185,129,0.05))',
                border:'1px solid rgba(16,185,129,0.2)',
                display:'flex',alignItems:'center',justifyContent:'center',
                boxShadow:'0 0 60px rgba(16,185,129,0.1)',
              }}>
                <Globe size={80} color="#10b981" strokeWidth={1} style={{ opacity:0.7 }}/>
              </div>
            </div>

            {/* Floating Cards */}
            <FloatingCard icon={BarChart3} label="ESG Score" value="87/100" color="#10b981" style={{ top:40,left:-20,animation:'float1 7s ease-in-out infinite' }}/>
            <FloatingCard icon={TrendingDown} label="Carbon Reduced" value="-42%" color="#34d399" style={{ top:80,right:-20,animation:'float2 9s ease-in-out 1.5s infinite' }}/>
            <FloatingCard icon={Droplets} label="Water Saved" value="1.2M L" color="#38bdf8" style={{ bottom:100,left:-30,animation:'float3 8s ease-in-out 3s infinite' }}/>
            <FloatingCard icon={Wind} label="Air Quality" value="Good" color="#a78bfa" style={{ bottom:40,right:0,animation:'float1 6s ease-in-out 2s infinite' }}/>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div animate={{ y:[0,6,0] }} transition={{ duration:2,repeat:Infinity }}
        style={{ position:'absolute',bottom:32,left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:4,color:'#4b5563' }}>
        <span style={{ fontSize:10,letterSpacing:'0.15em',textTransform:'uppercase' }}>Scroll</span>
        <ChevronDown size={16}/>
      </motion.div>

      <style>{`
        @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes float3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @media(max-width:768px){
          .hero-grid{ grid-template-columns:1fr !important; }
          h1{ font-size:36px !important; }
        }
      `}</style>
    </section>
  )
}