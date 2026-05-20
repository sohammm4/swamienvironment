// src/pages/Home.jsx
import React from 'react'
import Hero           from '../components/Hero'
import Services       from '../components/Services'
import SafetyServices from '../components/SafetyServices'
import AboutSwami     from '../components/AboutSwami'
import WhyChooseUs    from '../components/WhyChooseUs'
import About          from '../components/About'
import Dashboard      from '../components/Dashboard'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SafetyServices />
      <AboutSwami />
      <WhyChooseUs />
      <About />
      <Dashboard />
    </>
  )
}