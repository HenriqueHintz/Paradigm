import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import TeamModal from '../components/TeamModal';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Zap, BarChart3, Layers, Search, HardHat, Building2, Home, Award } from 'lucide-react';
import { getDivisionMembers, team } from '../data/team';
import { awards } from '../data/awards';
import { featuredProperties } from '../data/properties';
import type { TeamMember } from '../data/team';

const divisions: Record<string, any> = {
  development: {
    title: "Real Estate Development", subtitle: "Paradigm Development Company", tagline: "Creating Value Through Visionary Development",
    stat: "3,000+", statLabel: "apartments in ground-up high-rise development",
    description: "Paradigm Development Company focuses on high-density residential projects with innovative approaches to financing, smart growth design, green technology, and mixed-income housing integration.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
    capabilities: [
      { icon: Search, name: "Site Acquisition" }, { icon: Layers, name: "Entitlements" }, { icon: BarChart3, name: "Financing" },
      { icon: Home, name: "Mixed-Income Design" }, { icon: Zap, name: "Green Technology" }, { icon: Target, name: "Smart Growth" },
    ],
    teamDivision: 'development' as const,
    caseStudies: ["Riverfront Phase 1 & 2", "Meridian at Ballston Commons", "360 H Street"],
  },
  construction: {
    title: "Construction", subtitle: "Paradigm Contractors", tagline: "Building Excellence, Delivering Quality",
    stat: "8,000+", statLabel: "multifamily units overseen",
    description: "Paradigm Contractors builds the highest quality buildings in the most timely and cost-effective manner. Consistently recognized as among the best builders in the Mid-Atlantic region.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070",
    capabilities: [
      { icon: Search, name: "Pre-Construction" }, { icon: Target, name: "Value Engineering" }, { icon: BarChart3, name: "Project Management" },
      { icon: ShieldCheck, name: "Quality Control" }, { icon: HardHat, name: "Warranty" }, { icon: Layers, name: "Scheduling" },
    ],
    teamDivision: 'construction' as const,
    caseStudies: ["Residences at Government Center", "Parc Meridian", "Meridian at Courthouse Commons"],
  },
  management: {
    title: "Property Management", subtitle: "Paradigm Property Management", tagline: "Maximizing Value, Enriching Lives",
    stat: "10,000+", statLabel: "units managed · 400+ employees",
    description: "Paradigm Management Company has decades of experience managing multifamily, mixed income, and 100% affordable housing. Their expertise enhances property value and leads the market.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2070",
    capabilities: [
      { icon: Target, name: "Lease-Up Strategy" }, { icon: BarChart3, name: "Revenue Optimization" }, { icon: ShieldCheck, name: "Affordable Compliance" },
      { icon: Building2, name: "Resident Experience" }, { icon: HardHat, name: "Maintenance Ops" }, { icon: Zap, name: "Marketing" },
    ],
    teamDivision: 'management' as const,
    caseStudies: ["Portfolio-wide Performance", "Affordable Housing Compliance", "Award-Winning Satisfaction"],
  },
  'affordable-housing': {
    title: "Affordable Housing", subtitle: "Paradigm Management", tagline: "Quality Housing for Every Community",
    stat: "100%", statLabel: "commitment to affordable compliance",
    description: "Paradigm Management is committed to providing high-quality affordable housing that meets the needs of residents, owners, and tax credit syndicators.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=2070",
    capabilities: [
      { icon: ShieldCheck, name: "LIHTC Compliance" }, { icon: Target, name: "Resident Services" }, { icon: BarChart3, name: "Financial Reporting" },
      { icon: Building2, name: "Property Upkeep" }, { icon: Layers, name: "Fair Housing" }, { icon: Home, name: "Community Building" },
    ],
    teamDivision: 'management' as const,
    caseStudies: ["Creekside Village", "Carlyle Place", "Evans Ridge"],
  },
};

const DivisionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const div = slug ? divisions[slug] : null;
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  if (!div) return <div className="min-h-screen flex items-center justify-center bg-cream"><p className="text-navy/30 font-display text-2xl">Division not found.</p></div>;

  const members = getDivisionMembers(div.teamDivision);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden bg-navy">
        <img src={div.image} alt={div.title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">{div.subtitle}</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">{div.tagline}</h1>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-cream p-8 border border-navy/5 mb-8 inline-block"><span className="text-5xl font-display font-bold text-navy">{div.stat}</span><p className="text-xs font-bold tracking-widest uppercase text-gold mt-2">{div.statLabel}</p></div>
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-navy mb-5">{div.title}</h2>
            <p className="text-navy/50 leading-relaxed font-body">{div.description}</p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-navy mb-10">Key Capabilities</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {div.capabilities.map((c: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white p-6 border border-navy/5 flex items-center gap-4">
                <div className="size-10 bg-cream flex items-center justify-center shrink-0"><c.icon className="size-5 text-gold" /></div>
                <span className="font-semibold text-navy text-sm">{c.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-navy mb-10">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {div.caseStudies.map((name: string, i: number) => {
              const prop = featuredProperties[i % featuredProperties.length];
              return (
                <div key={i} className="bg-cream border border-navy/5 overflow-hidden group">
                  <div className="aspect-video overflow-hidden"><img src={prop?.image || div.image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
                  <div className="p-6"><h3 className="font-display font-bold text-navy text-lg">{name}</h3><p className="text-navy/40 text-xs mt-1">Mid-Atlantic Region</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-navy mb-10">Division Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {members.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <TeamCard member={m} onSelect={setSelectedMember} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-10">
          {awards.slice(0, 3).map((a, i) => (
            <div key={i} className="text-center"><Award className="size-8 text-gold mx-auto mb-2" /><p className="text-[10px] font-bold tracking-widest uppercase text-white">{a.org} {a.year}</p><p className="text-[10px] text-white/40">{a.title}</p></div>
          ))}
        </div>
      </section>

      <Footer />
      <TeamModal member={selectedMember} members={members} onClose={() => { setSelectedMember(null); window.location.hash = ''; }} onNavigate={setSelectedMember} />
    </div>
  );
};

export default DivisionPage;
