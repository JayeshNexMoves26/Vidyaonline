import {   HeroSection,Expertise, CaseStudies, ExperienceSection,TestimonialsOverview, AIAgent, Steps, Integration, FAQ, CTA, Sectors } from "../Components";
import React from 'react'

function Home() {
  return (
    <div>       
        <HeroSection />
        <Steps />
        <AIAgent />
        <ExperienceSection />
        <CaseStudies />
        <Integration />
        <Expertise />
        <Sectors />
        <CTA />
        <TestimonialsOverview />
        <FAQ />
    </div>
  )
}

export default Home