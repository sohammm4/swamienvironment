// src/pages/AboutPage.jsx
// ─────────────────────────────────────────────────────────────────
// Dedicated About page with extended company info, values, and team.
// ─────────────────────────────────────────────────────────────────

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Users, Award, Globe, Heart } from 'lucide-react'
import About from '../components/About'

const values = [
  { icon: Globe,        title: 'Environmental Integrity', desc: 'We hold science above opinion — every recommendation is evidence-based and independently verifiable.' },
  { icon: Users,        title: 'Stakeholder Inclusion',   desc: 'True sustainability accounts for all voices, from local communities to global investors.' },
  { icon: Award,        title: 'Excellence & Rigor',      desc: 'We set high standards for ourselves — ISO-certified, internationally benchmarked, and continuously improving.' },
  { icon: Heart,        title: 'Long-term Thinking',      desc: 'We optimise for decades, not quarters — building sustainable businesses that stand the test of time.' },
]

const team = [
  { name: 'Dr. Anil Swami',     role: 'Founder & CEO',               initials: 'AS', color: '#10b981' },
  { name: 'Priya Bhatt',        role: 'Head of ESG Strategy',         initials: 'PB', color: '#38bdf8' },
  { name: 'Rohit Mehta',        role: 'Chief Environmental Scientist', initials: 'RM', color: '#a78bfa' },
  { name: 'Sunita Rangarajan',  role: 'Digital & Analytics Lead',     initials: 'SR', color: '#f59e0b' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Page header ── */}
      <div className="bg-navy-900 noise-overlay pt-32 pb-16" style={{ background: '#0a0f1e' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-body text-xs font-semibold tracking-widest uppercase mb-4">
            About Us
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            15 Years of{' '}
            <span className="text-gradient">Environmental Leadership</span>
          </h1>
          <p className="font-body text-gray-400 text-lg max-w-2xl mx-auto">
            We are scientists, strategists, and sustainability advocates — united by a commitment
            to a healthier planet and more responsible business.
          </p>
        </motion.div>
      </div>

      {/* ── Reuse About component ── */}
      <About />

      {/* ── Our Values ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="font-body text-gray-500 text-base max-w-xl mx-auto">
              These principles guide every engagement, every recommendation, and every team decision.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="rounded-2xl bg-white border border-gray-100 p-6 hover:border-emerald-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{v.title}</h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="font-body text-gray-500 text-base max-w-xl mx-auto">
              Decades of combined expertise in environmental science, ESG strategy, and sustainable development.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Avatar placeholder */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform"
                  style={{ background: `linear-gradient(135deg, ${member.color}33, ${member.color}66)`, border: `2px solid ${member.color}44`, color: member.color }}
                >
                  {member.initials}
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-base mb-1">{member.name}</h3>
                <p className="font-body text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="section-padding" style={{ background: '#0a0f1e' }}>
        <div className="container-max text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Certifications & Affiliations</h2>
          <p className="font-body text-gray-500 text-sm mb-10">
            Recognized by leading national and international bodies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'ISO 14001 Certified', 'GRI Certified Partner', 'TCFD Supporter',
              'MoEFCC Approved', 'SEBI BRSR Expert', 'UN Global Compact Signatory',
            ].map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:border-emerald-500/30 transition-colors"
              >
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span className="font-body text-gray-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}