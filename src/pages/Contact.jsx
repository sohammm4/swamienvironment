// src/pages/Contact.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react'

function FormField({ label, id, type='text', placeholder, value, onChange, required, rows }) {
  const [focused, setFocused] = useState(false)
  const Tag = rows ? 'textarea' : 'input'
  return (
    <div style={{ marginBottom:0 }}>
      <label htmlFor={id} style={{ display:'block',color:'#d1d5db',fontSize:13,fontWeight:500,marginBottom:8 }}>
        {label} {required && <span style={{ color:'#34d399' }}>*</span>}
      </label>
      <Tag id={id} type={type} placeholder={placeholder} value={value} onChange={onChange}
        onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
        required={required} rows={rows}
        style={{
          width:'100%',background:'rgba(255,255,255,0.05)',
          border:`1px solid ${focused ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.1)'}`,
          borderRadius:12,padding:'12px 16px',color:'white',fontSize:14,
          outline:'none',resize:'none',fontFamily:'DM Sans,sans-serif',
          boxShadow: focused ? '0 0 0 3px rgba(16,185,129,0.15)' : 'none',
          transition:'all 0.2s',
        }}
      />
    </div>
  )
}

const contactInfo = [
  { icon:MapPin,  label:'Our Office',  value:'SCO 112, Sector 34-A, Chandigarh — 160022, India', href:null },
  { icon:Phone,   label:'Phone',        value:'+91 172 234 5678', href:'tel:+911722345678' },
  { icon:Mail,    label:'Email',        value:'info@swamienvironment.com', href:'mailto:info@swamienvironment.com' },
  { icon:Clock,   label:'Office Hours', value:'Mon – Sat: 9:00 AM – 6:00 PM IST', href:null },
]

export default function Contact() {
  const [form, setForm] = useState({ name:'',email:'',subject:'',message:'' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(p=>({...p,[e.target.id]:e.target.value}))
  const handleSubmit = async e => {
    e.preventDefault(); setLoading(true)
    await new Promise(r=>setTimeout(r,1400))
    setLoading(false); setSubmitted(true)
  }

  return (
    <div style={{ minHeight:'100vh',background:'#0a0f1e',paddingTop:90,paddingBottom:80 }}>
      <div style={{ maxWidth:1100,margin:'0 auto',padding:'0 24px' }}>

        {/* Header */}
        <motion.div initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.65 }} style={{ textAlign:'center',marginBottom:56 }}>
          <span style={{ display:'inline-block',padding:'6px 14px',borderRadius:999,border:'1px solid rgba(16,185,129,0.3)',background:'rgba(16,185,129,0.1)',color:'#34d399',fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:16 }}>Contact Us</span>
          <h1 style={{ fontFamily:'Playfair Display,serif',fontSize:44,fontWeight:700,color:'white',marginBottom:14,lineHeight:1.2 }}>
            Let's Start a <span style={{ background:'linear-gradient(135deg,#10b981,#34d399)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>Conversation</span>
          </h1>
          <p style={{ color:'#9ca3af',fontSize:16,maxWidth:500,margin:'0 auto',lineHeight:1.7 }}>
            Whether you need a quick ESG audit or a long-term sustainability partner — reach out and we'll respond within one business day.
          </p>
        </motion.div>

        <div style={{ display:'grid',gridTemplateColumns:'3fr 2fr',gap:32,alignItems:'start' }} className="contact-grid">

          {/* Form */}
          <motion.div initial={{ opacity:0,x:-24 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.65,delay:0.1 }}
            style={{ borderRadius:20,border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.03)',padding:36 }}>
            {submitted ? (
              <div style={{ textAlign:'center',padding:'48px 0' }}>
                <div style={{ width:64,height:64,borderRadius:'50%',background:'rgba(16,185,129,0.15)',border:'1px solid rgba(16,185,129,0.3)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px' }}>
                  <CheckCircle2 size={30} color="#34d399"/>
                </div>
                <h3 style={{ fontFamily:'Playfair Display,serif',color:'white',fontSize:22,marginBottom:10 }}>Message Sent!</h3>
                <p style={{ color:'#9ca3af',fontSize:14,marginBottom:20 }}>Our team will get back to you within one business day.</p>
                <button onClick={()=>{setSubmitted(false);setForm({name:'',email:'',subject:'',message:''})}}
                  style={{ padding:'10px 22px',borderRadius:10,border:'1px solid rgba(16,185,129,0.3)',background:'transparent',color:'#34d399',fontSize:13,fontWeight:600,cursor:'pointer' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:'flex',flexDirection:'column',gap:20 }}>
                <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:20 }} className="form-row">
                  <FormField id="name"    label="Full Name"     placeholder="Your name"           value={form.name}    onChange={handleChange} required/>
                  <FormField id="email"   label="Email Address" placeholder="you@company.com"     type="email" value={form.email} onChange={handleChange} required/>
                </div>
                <FormField id="subject" label="Subject" placeholder="e.g. ESG Audit Enquiry"    value={form.subject} onChange={handleChange} required/>
                <FormField id="message" label="Message" placeholder="Tell us about your project..." value={form.message} onChange={handleChange} rows={6} required/>
                <button type="submit" disabled={loading} style={{
                  display:'flex',alignItems:'center',justifyContent:'center',gap:8,
                  padding:'14px',borderRadius:12,background:'#10b981',border:'none',
                  color:'white',fontWeight:600,fontSize:14,cursor:'pointer',
                  boxShadow:'0 8px 24px rgba(16,185,129,0.3)',opacity:loading?0.7:1,
                  transition:'all 0.2s',fontFamily:'DM Sans,sans-serif',
                }}>
                  {loading ? 'Sending…' : <><Send size={15}/>Send Message</>}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity:0,x:24 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.65,delay:0.15 }}
            style={{ display:'flex',flexDirection:'column',gap:16 }}>
            {contactInfo.map(info=>{
              const Icon = info.icon
              const content = (
                <div style={{ display:'flex',gap:16,alignItems:'flex-start',borderRadius:14,border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.03)',padding:20 }}>
                  <div style={{ width:40,height:40,borderRadius:10,background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                    <Icon size={16} color="#34d399"/>
                  </div>
                  <div>
                    <p style={{ color:'#6b7280',fontSize:11,margin:'0 0 4px',textTransform:'uppercase',letterSpacing:'0.05em' }}>{info.label}</p>
                    <p style={{ color:'#e5e7eb',fontSize:13,lineHeight:1.6,margin:0 }}>{info.value}</p>
                  </div>
                </div>
              )
              return info.href
                ? <a key={info.label} href={info.href} style={{ textDecoration:'none',display:'block' }}>{content}</a>
                : <div key={info.label}>{content}</div>
            })}

            <div style={{ borderRadius:14,border:'1px solid rgba(16,185,129,0.2)',background:'rgba(16,185,129,0.05)',padding:20 }}>
              <p style={{ color:'#6ee7b7',fontSize:13,lineHeight:1.7,margin:0 }}>
                <strong>⚡ Quick response guarantee:</strong> All enquiries receive an initial response within 24 business hours.
              </p>
            </div>

            <div style={{ borderRadius:14,border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.03)',padding:20 }}>
              <p style={{ color:'#9ca3af',fontSize:13,fontWeight:500,marginBottom:12 }}>Connect With Us</p>
              <div style={{ display:'flex',gap:8,flexWrap:'wrap' }}>
                {['LinkedIn','Twitter','YouTube'].map(name=>(
                  <a key={name} href="#" style={{ padding:'8px 14px',borderRadius:8,border:'1px solid rgba(255,255,255,0.1)',color:'#9ca3af',fontSize:12,fontWeight:500,textDecoration:'none' }}>{name}</a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .contact-grid{ grid-template-columns:1fr !important; }
          .form-row{ grid-template-columns:1fr !important; }
        }
      `}</style>
    </div>
  )
}