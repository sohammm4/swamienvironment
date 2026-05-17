// src/pages/Home.jsx
import React from 'react'
import Hero          from '../components/Hero'
import Services      from '../components/Services'
import SafetyServices from '../components/SafetyServices'
import About         from '../components/About'
import Dashboard     from '../components/Dashboard'
import CaseStudies   from '../components/CaseStudies'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SafetyServices />
      <About />
      <Dashboard />
      <CaseStudies />
    </>
  )
}