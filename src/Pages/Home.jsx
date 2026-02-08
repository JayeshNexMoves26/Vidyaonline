import {   HeroSection,Expertise, ExperienceSection,TestimonialsOverview, AIAgent, Steps, Integration, FAQ } from "../Components";
import React from 'react'

function Home() {
  return (
    <div>       
        <HeroSection />
        <Steps />
        <AIAgent />
        <ExperienceSection />
        <Integration />
        <Expertise />
        <TestimonialsOverview />
        <FAQ />
    </div>
  )
}

export default Home