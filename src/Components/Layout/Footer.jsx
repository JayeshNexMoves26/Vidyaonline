import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react'
import RevealAnimation from '../animation/RevealAnimation'

const officeLocations = [
  {
    country: 'Noida HQ',
    flag: '🇮🇳',
    address: 'B-25, Sector 56, Noida - 201301, Delhi-NCR, India',
  },
  {
    country: 'Pune Office',
    flag: '🏢',
    address: 'Pune, Maharashtra, India',
  },
]

const footerLinks = {
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Clients', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  services: [
    { label: 'Software Development', href: '#' },
    { label: 'Mobile App Development', href: '#' },
    { label: 'Banking Solutions', href: '#' },
    { label: 'Web Development', href: '#' },
    { label: 'IT Consulting', href: '#' },
    { label: 'View More', href: '#' },
  ],
  solutions: [
    { label: 'Core Banking Systems', href: '#' },
    { label: 'Digital Banking', href: '#' },
    { label: 'Loan Management', href: '#' },
    { label: 'Payment Gateway', href: '#' },
  ],
  clients: [
    { label: 'Government', href: '#' },
    { label: 'Banking & Finance', href: '#' },
    { label: 'Enterprise', href: '#' },
    { label: 'Public Sector', href: '#' },
  ],
  certifications: [
    { label: 'ISO 9001:2015', href: '#' },
    { label: 'CMMI Level 3', href: '#' },
    { label: 'Our Empanelments', href: '#' },
  ],
  resources: [
    { label: 'Support', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ],
}

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-black/95 text-gray-100 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute -bottom-4 w-full left-0 h-1/3 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-purple-600/10 to-transparent blur-3xl">
          <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-footer-left"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-footer-right"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-4 py-20 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 pb-12 border-b border-gray-800">
          <RevealAnimation delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center font-bold text-white">
                  VOL
                </div>
                <h3 className="text-2xl font-bold text-white">Vidya Online</h3>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Premier IT services provider delivering innovative solutions for banking, government, and enterprise organizations across India.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </RevealAnimation>

          {/* Quick Contact */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Headquarters</p>
                    <p className="text-gray-300">Noida, Delhi-NCR, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-300">+91 (Your Phone Number)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-300">info@vidyaonline.in</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Office Locations */}
        <div className="mb-20">
          <RevealAnimation delay={0.4}>
            <h3 className="text-2xl font-bold text-white mb-8">Our Offices</h3>
          </RevealAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {officeLocations.map((office, index) => (
              <RevealAnimation key={index} delay={0.5 + index * 0.1}>
                <div className="border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors duration-300 bg-gray-800/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{office.flag}</span>
                    <h4 className="text-lg font-semibold text-white">{office.country}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{office.address}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-20">
          {/* Our Company */}
          <RevealAnimation delay={0.6}>
            <div>
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Our Company</h5>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Services */}
          <RevealAnimation delay={0.65}>
            <div>
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h5>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Solutions */}
          <RevealAnimation delay={0.7}>
            <div>
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Solutions</h5>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Industries */}
          <RevealAnimation delay={0.75}>
            <div>
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Industries</h5>
              <ul className="space-y-2">
                {footerLinks.clients.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Certifications */}
          <RevealAnimation delay={0.8}>
            <div>
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Certifications</h5>
              <ul className="space-y-2">
                {footerLinks.certifications.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Resources */}
          <RevealAnimation delay={0.85}>
            <div>
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Resources</h5>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>

        {/* Certifications & Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20 pb-12 border-b border-gray-800">
          <RevealAnimation delay={0.9}>
            <div className="border border-gray-700 rounded-xl p-6 bg-gradient-to-br from-blue-900/20 to-transparent">
              <h4 className="text-white font-bold mb-2">ISO Certified</h4>
              <p className="text-gray-400 text-sm">ISO 9001:2015 Certified</p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.95}>
            <div className="border border-gray-700 rounded-xl p-6 bg-gradient-to-br from-blue-900/20 to-transparent">
              <h4 className="text-white font-bold mb-2">CMMI Level 3</h4>
              <p className="text-gray-400 text-sm">Capability Maturity Model Integrated</p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={1.0}>
            <div className="border border-gray-700 rounded-xl p-6 bg-gradient-to-br from-blue-900/20 to-transparent">
              <h4 className="text-white font-bold mb-2">Empanelments</h4>
              <p className="text-gray-400 text-sm">Government & Institutional Partners</p>
            </div>
          </RevealAnimation>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 flex-wrap text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Statutory Information</a>
          </div>
          <p className="text-gray-400 text-sm">
            Copyright © 2026 Vidya Online Services (Pune) Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer