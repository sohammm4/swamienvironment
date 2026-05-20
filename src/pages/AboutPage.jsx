// src/pages/AboutPage.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Users, Award, Globe, Heart } from 'lucide-react'
import About from '../components/About'
import vikasPhoto from '../assets/vikas.jpg'

const values = [
  { icon: Globe,  title: 'Environmental Integrity', desc: 'We hold science above opinion — every recommendation is evidence-based and independently verifiable.' },
  { icon: Users,  title: 'Stakeholder Inclusion',   desc: 'True sustainability accounts for all voices, from local communities to global investors.' },
  { icon: Award,  title: 'Excellence & Rigor',      desc: 'We set high standards for ourselves — internationally benchmarked and continuously improving.' },
  { icon: Heart,  title: 'Long-term Thinking',      desc: 'We optimise for decades, not quarters — building sustainable businesses that stand the test of time.' },
]

const team = [
  { name: 'Vikas Patil', role: 'Founder & CEO',            initials: 'VP', color: '#10b981', photo: vikasPhoto },
  { name: 'Soham Patil', role: 'Design & Analytical Lead', initials: 'SP', color: '#a78bfa', photo: null },
]

export default function AboutPage() {
  return (
    <div style={{ minHeight:'100vh', background:'white' }}>

      {/* Page Header */}
      <div style={{ background:'#0a0f1e', paddingTop:120, paddingBottom:64 }}>
        <motion.div initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.65 }}
          style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
          <span style={{ display:'inline-block',padding:'6px 14px',borderRadius:999,border:'1px solid rgba(16,185,129,0.3)',background:'rgba(16,185,129,0.1)',color:'#34d399',fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:16 }}>
            About Us
          </span>
          <h1 style={{ fontFamily:'Playfair Display,serif',fontSize:44,fontWeight:700,color:'white',marginBottom:16,lineHeight:1.2 }}>
            Built on Passion for a{' '}
            <span style={{ background:'linear-gradient(135deg,#10b981,#34d399)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
              Greener Future
            </span>
          </h1>
          <p style={{ color:'#9ca3af',fontSize:17,maxWidth:600,margin:'0 auto',lineHeight:1.7 }}>
            We are sustainability advocates, safety experts, and environmental consultants — united by a commitment to a healthier planet and more responsible business.
          </p>
        </motion.div>
      </div>

      {/* About Component */}
      <About />

      {/* Our Values */}
      <section style={{ padding:'90px 24px', background:'#f9fafb' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ textAlign:'center',marginBottom:48 }}>
            <h2 style={{ fontFamily:'Playfair Display,serif',fontSize:32,fontWeight:700,color:'#111827',marginBottom:12 }}>Our Core Values</h2>
            <p style={{ color:'#6b7280',fontSize:15,maxWidth:500,margin:'0 auto' }}>
              These principles guide every engagement, every recommendation, and every team decision.
            </p>
          </motion.div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:24 }}>
            {values.map((v,i) => {
              const Icon = v.icon
              return (
                <motion.div key={v.title} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.09 }}
                  style={{ borderRadius:16,background:'white',border:'1px solid #f3f4f6',padding:24 }}>
                  <div style={{ width:44,height:44,borderRadius:12,background:'#ecfdf5',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16 }}>
                    <Icon size={20} color="#059669"/>
                  </div>
                  <h3 style={{ fontFamily:'Playfair Display,serif',fontWeight:600,color:'#111827',fontSize:15,marginBottom:8 }}>{v.title}</h3>
                  <p style={{ color:'#6b7280',fontSize:13,lineHeight:1.7,margin:0 }}>{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={{ padding:'90px 24px', background:'white' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ textAlign:'center',marginBottom:48 }}>
            <h2 style={{ fontFamily:'Playfair Display,serif',fontSize:32,fontWeight:700,color:'#111827',marginBottom:12 }}>Leadership Team</h2>
            <p style={{ color:'#6b7280',fontSize:15,maxWidth:500,margin:'0 auto' }}>
              Driven by expertise, guided by purpose — meet the people behind Swamienvironment.
            </p>
          </motion.div>

          <div style={{ display:'flex',justifyContent:'center',gap:32,flexWrap:'wrap' }}>
            {team.map((member,i) => (
              <motion.div key={member.name} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.15 }}
                style={{ borderRadius:20,border:'1px solid #f3f4f6',background:'white',padding:36,textAlign:'center',width:280,boxShadow:'0 4px 24px rgba(0,0,0,0.08)',transition:'all 0.3s' }}>

                {/* Avatar — photo or initials */}
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{
                      width:110, height:110, borderRadius:20,
                      objectFit:'cover', objectPosition:'top',
                      margin:'0 auto 20px', display:'block',
                      border:`3px solid ${member.color}44`,
                      boxShadow:`0 8px 24px ${member.color}33`,
                    }}
                  />
                ) : (
                  <div style={{
                    width:110, height:110, borderRadius:20,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontFamily:'Playfair Display,serif', fontWeight:700, fontSize:32,
                    margin:'0 auto 20px',
                    background:`linear-gradient(135deg,${member.color}22,${member.color}44)`,
                    border:`3px solid ${member.color}44`,
                    color:member.color,
                    boxShadow:`0 8px 24px ${member.color}22`,
                  }}>
                    {member.initials}
                  </div>
                )}

                <h3 style={{ fontFamily:'Playfair Display,serif',fontWeight:700,color:'#111827',fontSize:18,marginBottom:6 }}>{member.name}</h3>
                <p style={{ color:'#6b7280',fontSize:14,margin:0 }}>{member.role}</p>

                {member.role.includes('Founder') && (
                  <span style={{ display:'inline-block',marginTop:12,padding:'4px 14px',borderRadius:999,background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.3)',color:'#10b981',fontSize:11,fontWeight:700 }}>
                    🌿 Founder
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}