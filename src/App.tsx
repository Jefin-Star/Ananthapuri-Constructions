/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { CostEstimator } from './components/CostEstimator.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppFloatingWidget } from './components/WhatsAppFloatingWidget.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d11] text-[#e5e7eb] flex flex-col selection:bg-[#c5a880] selection:text-slate-950 font-sans">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Us & Engineering Leadership */}
        <AboutSection />

        {/* Services Offered */}
        <ServicesSection />

        {/* Portfolio Showcase */}
        <PortfolioSection />

        {/* Interactive Construction Cost & Timeline Estimator */}
        <CostEstimator />

        {/* Proof of Impact & FAQs */}
        <TestimonialsSection />

        {/* Direct Contact & WhatsApp Consultation Line */}
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* WhatsApp Quick Connect Floating Desk */}
      <WhatsAppFloatingWidget />
    </div>
  );
}
