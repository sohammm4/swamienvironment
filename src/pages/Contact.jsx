// src/pages/Contact.jsx — Connected to Backend API
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react'

const SERVICES = [
  'ESG Consulting','ESG Reporting','ESG Compliance','Sustainability Strategy',
  'Project Manpower Consultant','Safety External Audit','Corporate Safety Trainings',
  'Safety Inspection','Fire Safety Audit & Trainings','ISO Implementation',
  'Safety Equipment Supply','Fire Extinguisher Refilling','Web Development',
  'Safety Signages & Poster Design','Environmental Impact Assessment',
  'Air Quality Monitoring','Environmental Audits','Site Assessment',
  'Wastewater Management','Water Conservation','Smart Water Systems',
  'Recycling Solutions','Industrial Waste Management','Circular Economy Solutions',
  'Net Zero Strategy','Carbon Footprint Analysis','Renewable Energy Consulting',
  'ESG Dashboard','Carbon Tracking','Sustainability Analytics',
  'Other / General Enquiry',
]

function Field({ label, id, type='text', placeholder, value, onChange, required, rows, children }) {
  const [focused, setFocused] = useState(false)
  const Tag = rows ? 'textarea' : (children ? 'select' : 'input')
  return (
    <div>
      <label htmlFor={id} style={{ display:'block',color:'#d1d5db',fontSize:13,fontWeight:500,marginBottom:8 }}>
        {label} {required && <span style={{ color:'#34d399' }}>*</span>}
      </label>
      <Tag id={id} type={type} placeholder={placeholder} value={value} onChange={onChange}
        onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
        required={required} rows={rows}
        style={{
          width:'100%',background:'rgba(255,255,255,0.05)',
          border:`1px solid ${focused?'rgba(16,185,129,0.5)':'rgba(255,255,255,0.1)'}`,
          borderRadius:12,padding:'12px 16px',color:'white',fontSize:14,
          outline:'none',resize:'none',fontFamily:'DM Sans,sans-serif',
          boxShadow:focused?'0 0 0 3px rgba(16,185,129,0.15)':'none',
          transition:'all 0.2s',
        }}>
        {children}
      </Tag>
    </div>
  )
}

const contactInfo = [
  { icon:Phone,  label:'Phone',        value:'+91 93236 78528',             href:'tel:+919323678528' },
  { icon:Mail,   label:'Email',        value:'swamienvironment1@gmail.com', href:'mailto:swamienvironment1@gmail.com' },
  { icon:Clock,  label:'Office Hours', value:'Mon – Sat: 9:00 AM – 6:00 PM IST', href:null },
]

export default function Contact() {
  const [form, setForm] = useState({
    name:'', email:'', phone:'', companyName:'',
    serviceType:'', subject:'', message:'',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')

  const handleChange = e => setForm(p=>({...p,[e.target.id]:e.target.value}))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://swamienvironment-backend-1.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Could not connect to server. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight:'100vh',background:'#0a0f1e',paddingTop:90,paddingBottom:80 }}>
      <div style={{ maxWidth:1100,margin:'0 auto',padding:'0 24px' }}>

        {/* Header */}
        <motion.div initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.65 }} style={{ textAlign:'center',marginBottom:56 }}>
          <span style={{ display:'inline-block',padding:'6px 14px',borderRadius:999,border:'1px solid rgba(16,185,129,0.3)',background:'rgba(16,185,129,0.1)',color:'#34d399',fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:16 }}>Book a Consultation</span>
          <h1 style={{ fontFamily:'Playfair Display,serif',fontSize:44,fontWeight:700,color:'white',marginBottom:14,lineHeight:1.2 }}>
            Let's Start a{' '}
            <span style={{ background:'linear-gradient(135deg,#10b981,#34d399)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>Conversation</span>
          </h1>
          <p style={{ color:'#9ca3af',fontSize:16,maxWidth:500,margin:'0 auto',lineHeight:1.7 }}>
            Fill in your details and we'll get back to you within 24 business hours.
          </p>
        </motion.div>

        <div style={{ display:'grid',gridTemplateColumns:'3fr 2fr',gap:32,alignItems:'start' }} className="contact-grid">

          {/* Form */}
          <motion.div initial={{ opacity:0,x:-24 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.65,delay:0.1 }}
            style={{ borderRadius:20,border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.03)',padding:36 }}>

            {submitted ? (
              <div style={{ textAlign:'center',padding:'48px 0' }}>
                <div style={{ width:70,height:70,borderRadius:'50%',background:'rgba(16,185,129,0.15)',border:'1px solid rgba(16,185,129,0.3)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px' }}>
                  <CheckCircle2 size={34} color="#34d399"/>
                </div>
                <h3 style={{ fontFamily:'Playfair Display,serif',color:'white',fontSize:24,marginBottom:10 }}>Booking Received! 🎉</h3>
                <p style={{ color:'#9ca3af',fontSize:14,marginBottom:8 }}>Thank you <strong style={{ color:'white' }}>{form.name}</strong>! We've received your enquiry.</p>
                <p style={{ color:'#9ca3af',fontSize:14,marginBottom:24 }}>A confirmation email has been sent to <strong style={{ color:'#34d399' }}>{form.email}</strong>.<br/>Our team will contact you within <strong style={{ color:'white' }}>24 hours</strong>.</p>
                <button onClick={()=>{setSubmitted(false);setForm({name:'',email:'',phone:'',companyName:'',serviceType:'',preferredDate:'',subject:'',message:''})}}
                  style={{ padding:'10px 24px',borderRadius:10,border:'1px solid rgba(16,185,129,0.3)',background:'transparent',color:'#34d399',fontSize:13,fontWeight:600,cursor:'pointer' }}>
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:'flex',flexDirection:'column',gap:18 }}>
                <h3 style={{ fontFamily:'Playfair Display,serif',color:'white',fontSize:18,margin:'0 0 4px' }}>Booking Details</h3>

                {/* Row 1 */}
                <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:18 }} className="form-row">
                  <Field id="name"        label="Full Name"     placeholder="Your full name"       value={form.name}        onChange={handleChange} required/>
                  <Field id="email"       label="Email Address" placeholder="you@company.com"       type="email" value={form.email} onChange={handleChange} required/>
                </div>

                {/* Row 2 */}
                <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:18 }} className="form-row">
                  <Field id="phone"       label="Phone Number"  placeholder="+91 98765 43210"      value={form.phone}       onChange={handleChange} required/>
                  <Field id="companyName" label="Company Name"  placeholder="Your company"         value={form.companyName} onChange={handleChange}/>
                </div>

                {/* Service dropdown */}
                <Field id="serviceType" label="Service Required" value={form.serviceType} onChange={handleChange} required>
                  <option value="" disabled style={{ background:'#0a0f1e' }}>-- Select a Service --</option>
                  {SERVICES.map(s => <option key={s} value={s} style={{ background:'#0a0f1e' }}>{s}</option>)}
                </Field>

                {/* Row 3 */}
                <Field id="subject" label="Subject" placeholder="e.g. ESG Audit" value={form.subject} onChange={handleChange}/>

                {/* Message */}
                <Field id="message" label="Message" placeholder="Tell us about your project, goals, and any specific requirements..." value={form.message} onChange={handleChange} rows={5} required/>

                {/* Error */}
                {error && (
                  <div style={{ background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:10,padding:'12px 16px' }}>
                    <p style={{ color:'#f87171',fontSize:13,margin:0 }}>⚠️ {error}</p>
                  </div>
                )}

                {/* Submit */}
                <button type="submit" disabled={loading} style={{
                  display:'flex',alignItems:'center',justifyContent:'center',gap:8,
                  padding:'14px',borderRadius:12,background:'#10b981',border:'none',
                  color:'white',fontWeight:600,fontSize:14,cursor:loading?'not-allowed':'pointer',
                  boxShadow:'0 8px 24px rgba(16,185,129,0.3)',opacity:loading?0.7:1,
                  fontFamily:'DM Sans,sans-serif',transition:'all 0.2s',
                }}>
                  {loading ? '⏳ Sending...' : <><Send size={15}/>Book Consultation</>}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info Panel */}
          <motion.div initial={{ opacity:0,x:24 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.65,delay:0.15 }} style={{ display:'flex',flexDirection:'column',gap:14 }}>
            {contactInfo.map(info => {
              const Icon = info.icon
              const content = (
                <div style={{ display:'flex',gap:14,alignItems:'flex-start',borderRadius:14,border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.03)',padding:18 }}>
                  <div style={{ width:38,height:38,borderRadius:10,background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                    <Icon size={15} color="#34d399"/>
                  </div>
                  <div>
                    <p style={{ color:'#6b7280',fontSize:10,margin:'0 0 4px',textTransform:'uppercase',letterSpacing:'0.06em' }}>{info.label}</p>
                    <p style={{ color:'#e5e7eb',fontSize:13,lineHeight:1.6,margin:0 }}>{info.value}</p>
                  </div>
                </div>
              )
              return info.href
                ? <a key={info.label} href={info.href} style={{ textDecoration:'none',display:'block' }}>{content}</a>
                : <div key={info.label}>{content}</div>
            })}

            <div style={{ borderRadius:14,border:'1px solid rgba(16,185,129,0.2)',background:'rgba(16,185,129,0.05)',padding:18 }}>
              <p style={{ color:'#6ee7b7',fontSize:13,lineHeight:1.7,margin:0 }}>
                <strong>⚡ Quick response:</strong> All enquiries receive an initial response within 24 business hours. For urgent matters, call us directly.
              </p>
            </div>

            <div style={{ borderRadius:14,border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.03)',padding:18 }}>
              <p style={{ color:'#9ca3af',fontSize:12,fontWeight:500,marginBottom:10 }}>Connect With Us</p>
              <div style={{ display:'flex',gap:8,flexWrap:'wrap' }}>
                {['LinkedIn','Twitter','YouTube'].map(name=>(
                  <a key={name} href="#" style={{ padding:'6px 14px',borderRadius:8,border:'1px solid rgba(255,255,255,0.1)',color:'#9ca3af',fontSize:12,fontWeight:500,textDecoration:'none' }}>{name}</a>
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
        select option { background: #0a0f1e; color: white; }
      `}</style>
    </div>
  )
}