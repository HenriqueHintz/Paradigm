import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { HardHat, Building2, Briefcase, CheckCircle2, ArrowRight, Mail } from 'lucide-react';
import { employeeTestimonials } from '../data/testimonials';

const tracks = [
  { title: "Construction", icon: HardHat, roles: ["Estimating", "Contracts Management", "Project Management", "Warranty", "Construction Technology", "Superintendents", "Skilled Trades", "General Labor"] },
  { title: "Property Management", icon: Building2, roles: ["Property Management", "Leasing", "Accounting", "Affordable Housing Compliance", "Concierge/Front Desk", "Service Manager", "Service Technician", "Porter"] },
  { title: "Corporate Operations", icon: Briefcase, roles: ["Real Estate Development", "Project Management", "Finance", "Accounting", "Property Analysts", "Human Resources", "Information Technology", "Administrative Staff"] },
];

const benefits = ["Medical, Vision & Dental Insurance", "Health Savings Account", "Life and Long-Term Disability", "Paid Time Off", "401(k) with Company Match", "Rental Discounts at Paradigm Locations", "Tuition Assistance"];

const Careers = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="pt-32">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Careers</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-navy mb-8 leading-tight">Build Your Future with Paradigm.</h1>
          <p className="text-lg text-navy/50 leading-relaxed font-body">Join a team of dedicated professionals committed to excellence in real estate development, construction, and management.</p>
        </div>
      </section>

      {/* Tracks */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {tracks.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 border border-navy/5">
              <t.icon className="size-8 text-gold mb-6" />
              <h3 className="text-2xl font-display font-bold text-navy mb-5">{t.title}</h3>
              <ul className="space-y-2">{t.roles.map((r, j) => <li key={j} className="text-sm text-navy/50 flex items-center font-body"><div className="size-1 bg-gold rounded-full mr-3" />{r}</li>)}</ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits + Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold text-navy mb-8">Comprehensive Benefits</h2>
            <div className="space-y-3">{benefits.map((b, i) => <div key={i} className="flex items-center space-x-4 p-4 bg-cream border border-navy/5"><CheckCircle2 className="size-5 text-gold shrink-0" /><span className="text-sm font-body text-navy/70">{b}</span></div>)}</div>
          </div>
          <div className="bg-navy p-10 text-white">
            <h3 className="text-3xl font-display font-bold mb-5">Ready to Join?</h3>
            <p className="text-white/50 mb-8 font-body text-sm leading-relaxed">Our hiring process finds individuals who share our values of Hard Work, Integrity, Intelligence, and Value.</p>
            <div className="space-y-5">
              {["Apply online at paradigmcos.com/join-our-team", "Hiring manager reviews and schedules interview", "Virtual or in-person interview", "Contingent offer + background check + onboarding"].map((s, i) => (
                <div key={i} className="flex items-start space-x-4"><div className="size-8 bg-gold/20 flex items-center justify-center text-xs font-bold text-gold shrink-0">{i + 1}</div><p className="text-sm text-white/60 font-body">{s}</p></div>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              <a href="https://paradigmcos.com/join-our-team" target="_blank" rel="noopener noreferrer" className="block bg-gold text-navy py-3 text-center text-xs font-bold tracking-widest uppercase hover:bg-gold-300 transition-all">View Open Positions <ArrowRight className="inline ml-2 size-4" /></a>
              <a href="mailto:Resumes@Paradigmcos.com" className="flex items-center justify-center text-xs text-white/40 hover:text-gold transition-colors"><Mail className="size-3 mr-2" />Internships: Resumes@Paradigmcos.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-navy mb-8 text-center">What Our Team Says</h2>
          <div className="grid md:grid-cols-3 gap-6">{employeeTestimonials.map((t, i) => <div key={i} className="bg-white p-6 border border-navy/5"><p className="text-navy/50 text-sm italic font-body mb-4">"{t.quote}"</p><p className="text-gold text-xs font-semibold">{t.author}</p></div>)}</div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Careers;