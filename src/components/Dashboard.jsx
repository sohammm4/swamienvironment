// src/components/Dashboard.jsx
// ─────────────────────────────────────────────────────────────────
// Fake ESG analytics dashboard UI section.
// Shows carbon chart, ESG score ring, water stats, and KPI cards.
// ─────────────────────────────────────────────────────────────────

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  TrendingDown, TrendingUp, Droplets, Leaf,
  Zap, AlertCircle, CheckCircle2, BarChart3
} from 'lucide-react'

/* ── Monthly carbon data (tonnes CO2e) ── */
const carbonData = [
  { month: 'Jul', val: 340 },
  { month: 'Aug', val: 310 },
  { month: 'Sep', val: 295 },
  { month: 'Oct', val: 270 },
  { month: 'Nov', val: 250 },
  { month: 'Dec', val: 220 },
  { month: 'Jan', val: 200 },
]

/* ── KPI cards ── */
const kpis = [
  { icon: TrendingDown, label: 'Carbon Emissions',  value: '200 t',  change: '-41%',  up: false, color: 'emerald' },
  { icon: Droplets,     label: 'Water Usage',        value: '1.2M L', change: '-18%',  up: false, color: 'blue' },
  { icon: Zap,          label: 'Renewable Energy',   value: '68%',    change: '+12%',  up: true,  color: 'amber' },
  { icon: Leaf,         label: 'Waste Recycled',     value: '89%',    change: '+7%',   up: true,  color: 'teal' },
]

/* ── ESG pillar scores ── */
const esgPillars = [
  { label: 'Environmental', score: 84, color: '#10b981' },
  { label: 'Social',        score: 79, color: '#38bdf8' },
  { label: 'Governance',    score: 91, color: '#a78bfa' },
]

/* ── Bar chart component ── */
function BarChart({ data }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)
  const maxVal = Math.max(...data.map((d) => d.val))

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.4 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex items-end gap-2 h-40">
      {data.map((d, i) => (
        <div key={d.month} className="flex-1 flex flex-col items-center gap-1.5">
          <motion.div
            className="w-full rounded-t-lg bg-gradient-to-t from-emerald-600 to-emerald-400 relative group"
            initial={{ height: 0 }}
            animate={animated ? { height: `${(d.val / maxVal) * 100}%` } : { height: 0 }}
            transition={{ duration: 0.8, delay: i * 0.07, ease: 'easeOut' }}
          >
            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-navy-900 text-white text-xs px-2 py-1 rounded font-body opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
              {d.val}t
            </div>
          </motion.div>
          <span className="font-body text-gray-500 text-xs">{d.month}</span>
        </div>
      ))}
    </div>
  )
}

/* ── Circular progress ring ── */
function ScoreRing({ score, label, color, size = 100 }) {
  const r = (size - 12) / 2
  const circ = 2 * Math.PI * r
  const [drawn, setDrawn] = useState(0)

  return (
    <div className="relative flex flex-col items-center gap-2">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="#1e293b" strokeWidth={10} fill="none" />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r}
          stroke={color} strokeWidth={10} fill="none"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ - (score / 100) * circ }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display font-bold text-white text-xl">{score}</span>
        <span className="font-body text-gray-500 text-xs">/ 100</span>
      </div>
      <span className="font-body text-gray-400 text-xs text-center">{label}</span>
    </div>
  )
}

export default function Dashboard() {
  return (
    <section className="section-padding bg-navy-800 noise-overlay" id="dashboard" style={{ background: '#0d1526' }}>
      <div className="container-max relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-body text-xs font-semibold tracking-widest uppercase mb-4">
            <BarChart3 size={12} />
            Live ESG Analytics
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Real-Time{' '}
            <span className="text-gradient">Sustainability</span> Dashboard
          </h2>
          <p className="font-body text-gray-400 text-base max-w-xl mx-auto">
            Monitor your ESG performance across all pillars with our intelligent analytics platform.
          </p>
        </motion.div>

        {/* ── Dashboard shell ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl border border-white/8 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/6 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-amber-400/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              <span className="font-body text-gray-500 text-xs ml-2">Swamienvironment ESG Platform — FY 2024–25</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-body text-emerald-400 text-xs">Live</span>
            </div>
          </div>

          <div className="p-6 grid lg:grid-cols-3 gap-6">

            {/* ── Left: Carbon chart + KPIs ── */}
            <div className="lg:col-span-2 space-y-5">

              {/* KPI cards row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {kpis.map((kpi, i) => {
                  const Icon = kpi.icon
                  const colorClasses = {
                    emerald: 'bg-emerald-500/10 text-emerald-400',
                    blue: 'bg-blue-500/10 text-blue-400',
                    amber: 'bg-amber-500/10 text-amber-400',
                    teal: 'bg-teal-500/10 text-teal-400',
                  }
                  return (
                    <motion.div
                      key={kpi.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="rounded-xl p-4 border border-white/6 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-lg ${colorClasses[kpi.color]} flex items-center justify-center mb-2`}>
                        <Icon size={15} />
                      </div>
                      <p className="font-display font-bold text-white text-lg leading-none">{kpi.value}</p>
                      <p className="font-body text-gray-500 text-xs mt-0.5">{kpi.label}</p>
                      <div className={`flex items-center gap-1 mt-1.5 ${kpi.up ? 'text-emerald-400' : 'text-emerald-400'}`}>
                        {kpi.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                        <span className="font-body text-xs font-medium">{kpi.change} YoY</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Carbon emissions bar chart */}
              <div className="rounded-xl border border-white/6 bg-white/[0.02] p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-body font-semibold text-white text-sm">Carbon Emissions Trend</h3>
                    <p className="font-body text-gray-500 text-xs mt-0.5">Monthly CO₂e (tonnes) — Jul 2024 to Jan 2025</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-body text-xs font-semibold">
                    <TrendingDown size={13} /> −41% Total
                  </span>
                </div>
                <BarChart data={carbonData} />
              </div>

              {/* Water usage progress bars */}
              <div className="rounded-xl border border-white/6 bg-white/[0.02] p-5">
                <h3 className="font-body font-semibold text-white text-sm mb-4">Water Consumption by Unit</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Manufacturing Plant A', pct: 55, color: '#38bdf8' },
                    { label: 'Corporate Office',       pct: 12, color: '#34d399' },
                    { label: 'R&D Facility',           pct: 28, color: '#a78bfa' },
                    { label: 'Logistics Hub',          pct: 5,  color: '#fb923c' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-body text-gray-400 text-xs">{item.label}</span>
                        <span className="font-body text-white text-xs font-semibold">{item.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/8">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: item.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: ESG scores + alerts ── */}
            <div className="space-y-5">

              {/* Overall ESG score */}
              <div className="rounded-xl border border-white/6 bg-white/[0.02] p-5 text-center">
                <h3 className="font-body font-semibold text-white text-sm mb-1">Overall ESG Score</h3>
                <p className="font-body text-gray-500 text-xs mb-5">Based on 45+ metrics</p>
                <div className="flex justify-center mb-4">
                  <ScoreRing score={85} label="ESG Rating" color="#10b981" size={120} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/20">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span className="font-body text-emerald-400 text-xs font-medium">AA Grade — Strong</span>
                </div>
              </div>

              {/* Pillar scores */}
              <div className="rounded-xl border border-white/6 bg-white/[0.02] p-5">
                <h3 className="font-body font-semibold text-white text-sm mb-4">Pillar Breakdown</h3>
                <div className="flex justify-around">
                  {esgPillars.map((p) => (
                    <ScoreRing key={p.label} score={p.score} label={p.label} color={p.color} size={80} />
                  ))}
                </div>
              </div>

              {/* Alerts */}
              <div className="rounded-xl border border-white/6 bg-white/[0.02] p-5">
                <h3 className="font-body font-semibold text-white text-sm mb-3">Notifications</h3>
                <div className="space-y-2.5">
                  {[
                    { type: 'success', msg: 'Q3 ESG report submitted successfully.' },
                    { type: 'success', msg: 'Carbon target for Jan achieved.' },
                    { type: 'warn',    msg: 'Supplier audit due in 14 days.' },
                    { type: 'info',    msg: 'New SEBI BRSR update available.' },
                  ].map((a, i) => (
                    <div key={i} className={`flex items-start gap-2.5 text-xs font-body p-2.5 rounded-lg ${
                      a.type === 'success' ? 'bg-emerald-500/10 text-emerald-300' :
                      a.type === 'warn'    ? 'bg-amber-500/10 text-amber-300' :
                                            'bg-blue-500/10 text-blue-300'
                    }`}>
                      {a.type === 'success'
                        ? <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" />
                        : <AlertCircle  size={13} className="flex-shrink-0 mt-0.5" />}
                      {a.msg}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}