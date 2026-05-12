import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import TeamModal from '../components/TeamModal';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import { founders, constructionTeam, developmentTeam, managementTeam, team } from '../data/team';
import { employeeTestimonials } from '../data/testimonials';
import type { TeamMember } from '../data/team';

const About = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const sections = [
    { title: "Founders & C-Suite", members: founders },
    { title: "Construction Team", members: constructionTeam },
    { title: "Development Team", members: developmentTeam },
    { title: "Property Management Team", members: managementTeam },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        {/* Intro */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block">About Paradigm</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-navy mb-8 leading-tight">A Legacy of Integrity and Innovation.</h1>
            <p className="text-lg text-navy/50 leading-relaxed mb-10 font-body">Headquartered in Arlington, Virginia, Paradigm Companies is the real estate services partner for multifamily residential development in the Mid-Atlantic region. Since 1991, we have grown from a focused construction firm into a comprehensive real estate services powerhouse.</p>
            <div className="grid sm:grid-cols-2 gap-6 border-t border-navy/5 pt-10">
              <div className="flex items-start space-x-4"><MapPin className="size-5 text-gold mt-1" /><div><h4 className="font-bold text-navy mb-1">Headquarters</h4><p className="text-sm text-navy/50">1515 North Courthouse Rd #600<br />Arlington, VA 22201</p></div></div>
              <div className="flex items-start space-x-4"><Phone className="size-5 text-gold mt-1" /><div><h4 className="font-bold text-navy mb-1">Contact</h4><p className="text-sm text-navy/50">571-684-6541<br />info@paradigmcos.com</p></div></div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-navy mb-6">Our History</h2>
              <p className="text-navy/50 leading-relaxed mb-8 font-body">Since our inception in November 1991, Paradigm has grown from a focused construction firm into a comprehensive real estate services powerhouse. Our multidisciplinary approach allows us to control quality and value at every stage of the property lifecycle.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white border border-navy/5"><p className="text-3xl font-display font-bold text-navy mb-1">1991</p><p className="text-[10px] font-bold tracking-widest uppercase text-gold">Founded</p></div>
                <div className="p-6 bg-white border border-navy/5"><p className="text-3xl font-display font-bold text-navy mb-1">400+</p><p className="text-[10px] font-bold tracking-widest uppercase text-gold">Employees</p></div>
              </div>
            </div>
            <div className="aspect-video bg-cream-300 overflow-hidden"><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2069" alt="Paradigm Office" className="w-full h-full object-cover" /></div>
          </div>
        </section>

        {/* Leadership */}
        {sections.map((section, si) => (
          <section key={si} className={`py-20 ${si % 2 === 0 ? 'bg-white' : 'bg-cream'}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-12">
                <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Leadership</span>
                <h2 className="text-3xl font-display font-bold text-navy">{section.title}</h2>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {section.members.map((member, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <TeamCard member={member} onSelect={setSelectedMember} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Employee Testimonials */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">What Our Team Says</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {employeeTestimonials.map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8">
                  <p className="text-white/60 text-sm leading-relaxed mb-6 italic font-body">"{t.quote}"</p>
                  <p className="text-gold text-xs font-semibold">{t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <TeamModal member={selectedMember} members={team} onClose={() => { setSelectedMember(null); window.location.hash = ''; }} onNavigate={setSelectedMember} />
    </div>
  );
};

export default About;