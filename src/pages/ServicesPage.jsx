// src/pages/ServicesPage.jsx
// ─────────────────────────────────────────────────────────────────
// Dedicated services page showing all categories + cards.
// ─────────────────────────────────────────────────────────────────

import React from 'react'
import { motion } from 'framer-motion'
import { serviceCategories } from '../data/servicesData'
import ServiceCard from '../components/ServiceCard'
import * as LucideIcons from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-navy-900 noise-overlay pt-24 pb-20" style={{ background: '#0a0f1e' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Hero header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-body text-xs font-semibold tracking-widest uppercase mb-4">
            Services
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Our Complete{' '}
            <span className="text-gradient">Service Portfolio</span>
          </h1>
          <p className="font-body text-gray-400 text-lg max-w-2xl mx-auto">
            Across ESG, environmental science, water & waste management, climate strategy,
            and digital sustainability — we have you covered end to end.
          </p>
        </motion.div>

        {/* Each category section */}
        {serviceCategories.map((cat, catIdx) => {
          const CatIcon = LucideIcons[cat.icon] || LucideIcons.Leaf
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mb-14"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                  <CatIcon size={18} className="text-emerald-400" />
                </div>
                <h2 className="font-display text-xl font-bold text-white">{cat.category}</h2>
                <div className="flex-1 h-px bg-white/8 ml-2" />
                <span className="font-body text-gray-600 text-xs">{cat.services.length} services</span>
              </div>

              {/* Service cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.services.map((svc, i) => (
                  <ServiceCard
                    key={svc.id}
                    iconName={svc.icon}
                    title={svc.title}
                    description={svc.description}
                    color={cat.color}
                    delay={i * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          )
        })}

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-4 rounded-2xl p-8 sm:p-12 text-center border border-emerald-500/20 bg-gradient-to-br from-emerald-900/20 to-navy-800/40"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Not Sure Which Service Fits?
          </h3>
          <p className="font-body text-gray-400 text-base mb-6 max-w-lg mx-auto">
            Our consultants will help you identify the right combination of services for your sustainability goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-body font-semibold transition-all duration-200 shadow-xl shadow-emerald-500/25 hover:-translate-y-0.5"
          >
            Book a Free Consultation
          </a>
        </motion.div>
      </div>
    </div>
  )
}