// src/data/servicesData.js

export const serviceCategories = [
  {
    id: 'esg',
    category: 'ESG Services',
    color: 'emerald',
    icon: 'BarChart3',
    services: [
      { id:'esg-consulting',       title:'ESG Consulting',        description:'End-to-end advisory on embedding Environmental, Social, and Governance principles into your business strategy and operations.', icon:'Briefcase' },
      { id:'esg-reporting',        title:'ESG Reporting',         description:'Comprehensive ESG disclosure frameworks aligned with GRI, SASB, TCFD, and regulatory requirements.', icon:'FileText' },
      { id:'esg-compliance',       title:'ESG Compliance',        description:'Navigate complex ESG regulations and ensure your business meets local and international compliance standards.', icon:'ShieldCheck' },
      { id:'sustainability-strategy', title:'Sustainability Strategy', description:'Long-term sustainability roadmaps that align business growth with responsible environmental and social impact.', icon:'Target' },
    ],
  },
  {
    id: 'safety',
    category: 'Safety Services',
    color: 'red',
    icon: 'HardHat',
    services: [
      { id:'project-manpower',     title:'Project Manpower Consultant', description:'Supply of qualified safety officers, supervisors, and manpower for project sites and industrial facilities.', icon:'Users' },
      { id:'safety-external-audit',title:'Safety External Audit',  description:'Independent third-party safety audits to assess compliance with national and international safety standards.', icon:'ClipboardCheck' },
      { id:'corporate-safety-training', title:'Corporate Safety Trainings', description:'Customized safety training programs for corporate teams covering hazard identification, emergency response, and safe work practices.', icon:'GraduationCap' },
      { id:'safety-inspection',    title:'Safety Inspection',     description:'Systematic on-site safety inspections to identify risks, unsafe acts, and non-compliances before incidents occur.', icon:'Search' },
      { id:'fire-safety-audit',    title:'Fire Safety Audit & Trainings', description:'Comprehensive fire risk assessments, fire safety audits, and hands-on fire fighting training for all staff levels.', icon:'Flame' },
      { id:'iso-implementation',   title:'ISO Implementation',    description:'End-to-end support for ISO 45001, ISO 14001, and ISO 9001 implementation, documentation, and certification.', icon:'Award' },
      { id:'safety-equipment',     title:'Safety Equipment Supply', description:'Supply of certified PPE, fire safety equipment, first aid kits, and industrial safety gear from trusted manufacturers.', icon:'Shield' },
      { id:'fire-extinguisher',    title:'Fire Extinguisher Refilling', description:'Periodic inspection, maintenance, testing, and refilling of all types of fire extinguishers at your facility.', icon:'Zap' },
      { id:'web-development',      title:'Web Development',       description:'Professional website design and development for safety, ESG, and environmental service businesses.', icon:'Monitor' },
      { id:'safety-signages',      title:'Safety Signages & Poster Design', description:'Design and supply of compliant safety signages, cautionary boards, emergency exit signs, and awareness posters.', icon:'AlertTriangle' },
    ],
  },
  {
    id: 'environmental',
    category: 'Environmental Services',
    color: 'teal',
    icon: 'Leaf',
    services: [
      { id:'eia',          title:'Environmental Impact Assessment', description:'Rigorous EIA studies to identify, predict, and evaluate environmental effects of proposed projects.', icon:'Search' },
      { id:'air-quality',  title:'Air Quality Monitoring',  description:'Real-time and periodic monitoring of air pollutants to ensure compliance and protect community health.', icon:'Wind' },
      { id:'env-audits',   title:'Environmental Audits',    description:'Systematic, documented verification of environmental performance against legal and internal requirements.', icon:'ClipboardCheck' },
      { id:'site-assessment', title:'Site Assessment',      description:'Phase I and Phase II site assessments for contamination identification, risk evaluation, and remediation planning.', icon:'MapPin' },
    ],
  },
  {
    id: 'water',
    category: 'Water Management',
    color: 'blue',
    icon: 'Droplets',
    services: [
      { id:'wastewater',        title:'Wastewater Management',  description:'Design and implementation of efficient wastewater treatment systems for industrial and municipal applications.', icon:'Filter' },
      { id:'water-conservation', title:'Water Conservation',   description:'Strategic programs to reduce water consumption and minimize freshwater dependency across operations.', icon:'Droplet' },
      { id:'smart-water',       title:'Smart Water Systems',   description:'IoT-enabled water monitoring and management solutions for real-time data and intelligent resource control.', icon:'Wifi' },
    ],
  },
  {
    id: 'waste',
    category: 'Waste Management',
    color: 'amber',
    icon: 'Recycle',
    services: [
      { id:'recycling',       title:'Recycling Solutions',         description:'Tailored recycling programs and infrastructure that divert waste from landfills and recover valuable materials.', icon:'RefreshCw' },
      { id:'industrial-waste', title:'Industrial Waste Management', description:'Safe handling, treatment, and disposal of hazardous and non-hazardous industrial waste streams.', icon:'Factory' },
      { id:'circular-economy', title:'Circular Economy Solutions',  description:'Business model redesign to eliminate waste and keep materials in use through circular economy principles.', icon:'RotateCcw' },
    ],
  },
  {
    id: 'climate',
    category: 'Climate & Sustainability',
    color: 'sky',
    icon: 'Globe',
    services: [
      { id:'net-zero',        title:'Net Zero Strategy',          description:'Science-based pathways to achieve net-zero carbon emissions aligned with global climate commitments.', icon:'TrendingDown' },
      { id:'carbon-footprint', title:'Carbon Footprint Analysis', description:'Scope 1, 2, and 3 greenhouse gas inventories with actionable reduction recommendations.', icon:'Activity' },
      { id:'renewable-energy', title:'Renewable Energy Consulting', description:'Feasibility studies, technology selection, and project management for solar, wind, and other clean energy solutions.', icon:'Sun' },
    ],
  },
  {
    id: 'digital',
    category: 'Digital ESG Solutions',
    color: 'violet',
    icon: 'Monitor',
    services: [
      { id:'esg-dashboard',         title:'ESG Dashboard',           description:'Real-time ESG performance dashboards that consolidate metrics across environmental, social, and governance pillars.', icon:'LayoutDashboard' },
      { id:'carbon-tracking',       title:'Carbon Tracking',         description:'Automated carbon accounting platforms with live emission tracking, reporting, and offset management.', icon:'LineChart' },
      { id:'sustainability-analytics', title:'Sustainability Analytics', description:'AI-powered analytics to benchmark sustainability performance and forecast future impact scenarios.', icon:'BarChart2' },
    ],
  },
]

export const allServices = serviceCategories.flatMap(cat =>
  cat.services.map(s => ({ ...s, category: cat.category, categoryId: cat.id }))
)