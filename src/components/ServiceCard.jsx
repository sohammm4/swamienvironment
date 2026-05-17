// src/components/ServiceCard.jsx
import React from 'react'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'

const colorMap = {
  emerald: { bg:'rgba(16,185,129,0.1)',  border:'rgba(16,185,129,0.25)', icon:'#10b981' },
  teal:    { bg:'rgba(20,184,166,0.1)',  border:'rgba(20,184,166,0.25)', icon:'#2dd4bf' },
  blue:    { bg:'rgba(59,130,246,0.1)',  border:'rgba(59,130,246,0.25)', icon:'#60a5fa' },
  amber:   { bg:'rgba(245,158,11,0.1)',  border:'rgba(245,158,11,0.25)', icon:'#fbbf24' },
  sky:     { bg:'rgba(14,165,233,0.1)',  border:'rgba(14,165,233,0.25)', icon:'#38bdf8' },
  violet:  { bg:'rgba(139,92,246,0.1)', border:'rgba(139,92,246,0.25)', icon:'#a78bfa' },
  red:     { bg:'rgba(239,68,68,0.1)',   border:'rgba(239,68,68,0.25)',  icon:'#f87171' },
}

export default function ServiceCard({ iconName, title, description, color='emerald', delay=0, dark=true }) {
  const c = colorMap[color] || colorMap.emerald
  const Icon = LucideIcons[iconName] || LucideIcons.Leaf
  const [hovered, setHovered] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity:0, y:24 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:'-60px' }}
      transition={{ duration:0.55, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        border: `1px solid ${hovered ? c.border : dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'}`,
        background: hovered
          ? (dark ? c.bg : c.bg)
          : (dark ? 'rgba(255,255,255,0.03)' : 'white'),
        padding: 24,
        cursor: 'default',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 16px 40px ${c.icon}22`
          : dark ? '0 2px 8px rgba(0,0,0,0.2)' : '0 2px 12px rgba(0,0,0,0.06)',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{
        width:46, height:46, borderRadius:12, background:c.bg,
        display:'flex', alignItems:'center', justifyContent:'center',
        marginBottom:16,
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s',
      }}>
        <Icon size={21} color={c.icon} strokeWidth={1.8}/>
      </div>
      <h3 style={{
        fontFamily:'Playfair Display,serif', fontWeight:600,
        color: dark ? 'white' : '#111827',
        fontSize:15, marginBottom:10, lineHeight:1.3,
      }}>{title}</h3>
      <p style={{
        color: dark ? '#9ca3af' : '#6b7280',
        fontSize:13, lineHeight:1.7, margin:0,
      }}>{description}</p>
    </motion.div>
  )
}