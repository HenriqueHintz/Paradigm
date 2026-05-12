import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, HardHat, Home as HomeIcon, ShieldCheck, ChevronRight, Award, Quote, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetricCard from '../components/MetricCard';
import SectionDivider from '../components/SectionDivider';
import ImmersiveCarousel from '../components/ImmersiveCarousel';
import { clientTestimonials } from '../data/testimonials';
import { awards } from '../data/awards';

const Home = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        {/* Hero — Cinematic */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0f18]">
          <div className="absolute inset-0">
            <img src="/hero-bg.jpeg" alt="Paradigm Development" className="w-full h-full object-cover object-center opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18]/70 via-[#0a0f18]/50 to-[#0a0f18]/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f18]/40 via-transparent to-[#0a0f18]/40" />
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 3.5 }} className="absolute top-28 left-0 right-0 z-10 text-center">
            <span className="inline-block text-[#c9a84c]/60 font-bold tracking-[0.4em] uppercase text-[10px]">30+ Years of Excellence • Mid-Atlantic Region</span>
          </motion.div>
          <div className="relative z-10 text-center px-6">
            <h1 className="font-display font-bold leading-[1] mb-2">
              <span className="block">
                {'Building Value.'.split('').map((char, i) => (
                  <motion.span key={`l1-${i}`} initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)', textShadow: ['0 0 0px rgba(212,175,55,0)', '0 0 40px rgba(212,175,55,0.7)', '0 0 10px rgba(212,175,55,0.2)'] }} transition={{ opacity: { duration: 1.2, delay: 0.5 + i * 0.06, ease: [0.16, 1, 0.3, 1] }, y: { duration: 1.4, delay: 0.5 + i * 0.06, ease: [0.16, 1, 0.3, 1] }, filter: { duration: 1.6, delay: 0.5 + i * 0.06, ease: [0.16, 1, 0.3, 1] }, textShadow: { duration: 2.5, delay: 0.8 + i * 0.06, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse', repeatDelay: 3 } }} className="inline-block text-5xl md:text-7xl lg:text-8xl" style={{ color: '#D4AF37' }}>{char === ' ' ? '\u00A0' : char}</motion.span>
                ))}
              </span>
              <span className="block mt-2 md:mt-4">
                {'Managing Excellence.'.split('').map((char, i) => (
                  <motion.span key={`l2-${i}`} initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)', textShadow: ['0 0 0px rgba(212,175,55,0)', '0 0 30px rgba(212,175,55,0.6)', '0 0 5px rgba(212,175,55,0.1)'] }} transition={{ opacity: { duration: 1.2, delay: 1.6 + i * 0.05, ease: [0.16, 1, 0.3, 1] }, y: { duration: 1.4, delay: 1.6 + i * 0.05, ease: [0.16, 1, 0.3, 1] }, filter: { duration: 1.6, delay: 1.6 + i * 0.05, ease: [0.16, 1, 0.3, 1] }, textShadow: { duration: 2.5, delay: 2.0 + i * 0.05, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse', repeatDelay: 3 } }} className="inline-block text-4xl md:text-6xl lg:text-7xl" style={{ color: '#E7D19B' }}>{char === ' ' ? '\u00A0' : char}</motion.span>
                ))}
              </span>
            </h1>
            <div className="relative mt-10 md:mt-14 flex items-center justify-center">
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.8, delay: 3.2, ease: [0.16, 1, 0.3, 1] }} className="h-px w-48 md:w-72 origin-center" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
              <motion.div initial={{ opacity: 0, scale: 0, rotate: 45 }} animate={{ opacity: 1, scale: 1, rotate: 45 }} transition={{ duration: 0.6, delay: 3.8, ease: [0.16, 1, 0.3, 1] }} className="absolute size-2 bg-gold animate-pulse-glow" />
              <motion.div initial={{ x: '-150px', opacity: 0 }} animate={{ x: '150px', opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 4.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 6 }} className="absolute h-px w-16 md:w-24" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.8), transparent)' }} />
            </div>
            <motion.div animate={{ opacity: [0, 0.12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.2) 0%, transparent 70%)' }} />
          </div>
          {/* Scroll indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5, duration: 1 }} className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <ChevronDown className="size-5 text-white/20" />
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 4.5, ease: [0.16, 1, 0.3, 1] }} className="absolute bottom-16 left-0 right-0 z-10 flex justify-center px-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="bg-gold text-navy px-8 py-4 font-bold flex items-center justify-center hover:bg-white hover:text-navy hover:shadow-glow transition-all duration-500 group text-sm tracking-wide">Explore Our Services <ArrowRight className="ml-2 size-4 group-hover:translate-x-2 transition-transform duration-500" /></Link>
              <Link to="/communities" className="border border-gold/40 text-white px-8 py-4 font-bold hover:bg-gold/10 hover:border-gold hover:shadow-glow-sm transition-all duration-500 text-center text-sm tracking-wide">Find a Community</Link>
            </div>
          </motion.div>
        </section>

        {/* Stats — Borderless with gold dividers */}
        <section className="py-16" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F5F0E8 100%)' }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 relative">
              <MetricCard label="Experience" value="30" suffix="+" description="Years of multidisciplinary expertise in real estate." delay={0.1} />
              {/* Gold vertical dividers */}
              <div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 w-px h-16" style={{ background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
              <MetricCard label="Completed Projects" value="100" suffix="+" description="High-quality residential and mixed-use developments." delay={0.2} />
              <div className="hidden md:block absolute left-2/3 top-1/2 -translate-y-1/2 w-px h-16" style={{ background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
              <MetricCard label="Units Managed" value="10,000" suffix="+" description="Rental units across the Mid-Atlantic region." delay={0.3} />
            </div>
          </div>
        </section>

        {/* Immersive Environment Carousel */}
        <ImmersiveCarousel />

        <SectionDivider variant="diamond" className="bg-cream" />

        {/* Services — Featured card + grid */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 mb-16">
              <div className="w-12 h-px bg-gold/40" />
              <div>
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-navy">Multidisciplinary Excellence</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Featured — Development */}
              <Link to="/services/development" className="relative overflow-hidden group block min-h-[240px]">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Development" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <span className="text-[80px] font-display font-light text-white/5 absolute top-6 right-8 leading-none">01</span>
                  <Building2 className="size-8 text-gold mb-4" />
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Real Estate Development</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-sm">High-density residential projects with innovative financing and smart growth design.</p>
                  <span className="text-xs font-bold tracking-widest uppercase text-gold flex items-center">Explore <ChevronRight className="ml-1 size-3 group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </Link>
              {/* Construction */}
              <Link to="/services/construction" className="bg-white p-6 border border-navy/5 hover:border-gold/40 hover:shadow-glow-sm hover:-translate-y-2 transition-all duration-500 group block relative overflow-hidden">
                <span className="text-[80px] font-display font-light text-navy/[0.03] absolute top-2 right-6 leading-none">02</span>
                <HardHat className="size-7 text-navy group-hover:text-gold transition-colors mb-6" />
                <h3 className="text-xl font-display font-bold text-navy mb-3">Construction</h3>
                <p className="text-navy/50 text-sm leading-relaxed mb-6">Highest quality buildings in the most timely and cost-effective manner.</p>
                <span className="text-xs font-bold tracking-widest uppercase text-navy/30 flex items-center group-hover:text-gold transition-colors">Learn More <ChevronRight className="ml-1 size-3" /></span>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Management */}
              <Link to="/services/management" className="bg-white p-6 border border-navy/5 hover:border-gold/40 hover:shadow-glow-sm hover:-translate-y-2 transition-all duration-500 group block relative overflow-hidden">
                <span className="text-[80px] font-display font-light text-navy/[0.03] absolute top-2 right-6 leading-none">03</span>
                <HomeIcon className="size-7 text-navy group-hover:text-gold transition-colors mb-6" />
                <h3 className="text-xl font-display font-bold text-navy mb-3">Property Management</h3>
                <p className="text-navy/50 text-sm leading-relaxed mb-6">Decades of experience enhancing property value and protecting investment.</p>
                <span className="text-xs font-bold tracking-widest uppercase text-navy/30 flex items-center group-hover:text-gold transition-colors">Learn More <ChevronRight className="ml-1 size-3" /></span>
              </Link>
              {/* Affordable Housing */}
              <Link to="/services/affordable-housing" className="bg-white p-6 border border-navy/5 hover:border-gold/40 hover:shadow-glow-sm hover:-translate-y-2 transition-all duration-500 group block relative overflow-hidden">
                <span className="text-[80px] font-display font-light text-navy/[0.03] absolute top-2 right-6 leading-none">04</span>
                <ShieldCheck className="size-7 text-navy group-hover:text-gold transition-colors mb-6" />
                <h3 className="text-xl font-display font-bold text-navy mb-3">Affordable Housing</h3>
                <p className="text-navy/50 text-sm leading-relaxed mb-6">High-quality housing meeting the needs of residents, owners, and syndicators.</p>
                <span className="text-xs font-bold tracking-widest uppercase text-navy/30 flex items-center group-hover:text-gold transition-colors">Learn More <ChevronRight className="ml-1 size-3" /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Values — Asymmetric layout */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative lg:ml-8">
                <div className="aspect-[5/4] overflow-hidden shadow-[0_30px_80px_-20px_rgba(13,27,42,0.25)]">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" alt="Paradigm Values" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-navy p-8 text-white hidden xl:block max-w-[280px] border-l-2 border-gold">
                  <p className="font-display text-lg italic mb-3 leading-snug">"Hard Work, Integrity, Intelligence, and Value are the pillars of our success."</p>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold">Stanley W. Sloter, CEO</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-10 h-px bg-gold/40" />
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px]">Our Foundation</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-12 leading-tight">Built on<br />Core Values</h2>
                <div className="space-y-10">
                  {[
                    { title: "Hard Work", desc: "A relentless commitment to excellence in every project we undertake." },
                    { title: "Integrity", desc: "Honesty and transparency in all our partnerships and operations." },
                    { title: "Intelligence", desc: "Smart growth design and innovative approaches to complex challenges." },
                    { title: "Value", desc: "Creating lasting worth for our residents, partners, and communities." }
                  ].map((v, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start space-x-6 group">
                      <span className="text-4xl font-display font-light text-navy/[0.07] leading-none group-hover:text-gold/30 transition-colors duration-500 shrink-0">0{i + 1}</span>
                      <div className="border-l border-navy/5 pl-6 group-hover:border-gold/40 transition-colors duration-500">
                        <h4 className="text-lg font-bold text-navy mb-1.5">{v.title}</h4>
                        <p className="text-navy/45 leading-relaxed text-sm">{v.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider variant="diamond" className="bg-white" />

        {/* Testimonials — Featured center card */}
        <section className="py-28 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(30,58,95,1) 0%, #0D1B2A 70%)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-gold/60 font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">What Partners Say</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Trusted Partnerships</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {clientTestimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative p-8 md:p-10 ${i === 1 ? 'bg-white/[0.08] border border-gold/30 md:scale-105 md:py-14 shadow-glow-sm' : 'bg-white/[0.03] border border-white/[0.06] hover:border-gold/20 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-glow-sm'} transition-all duration-500 group`}
                >
                  {/* Decorative quote mark */}
                  <span className="absolute top-4 right-6 text-[100px] font-display font-bold text-white/[0.02] leading-none select-none">"</span>
                  <div className="w-8 h-px bg-gold/40 mb-6" />
                  <p className="text-white/70 text-sm leading-relaxed mb-8 font-body italic relative z-10">"{t.quote}"</p>
                  <div className="w-10 h-px bg-gold/30 mb-4" />
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-gold/50 text-xs mt-1">{t.company}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards — Timeline style */}
        <section className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
              <div className="lg:max-w-sm shrink-0">
                <div className="flex items-center gap-5 mb-4">
                  <div className="w-10 h-px bg-gold/40" />
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px]">Recognition</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-3">Award-Winning Performance</h2>
                <p className="text-navy/40 text-sm">11 industry awards for resident satisfaction and management excellence since 2014.</p>
              </div>
              {/* Timeline */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <div className="absolute top-4 left-0 right-0 h-px bg-navy/5" />
                  <div className="flex justify-between overflow-x-auto gap-8 pb-4">
                    {awards.slice(0, 5).map((a, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center shrink-0"
                      >
                        <div className="size-2 bg-gold rounded-full mb-4 relative z-10 ring-4 ring-cream" />
                        <span className="text-2xl font-display font-bold text-navy mb-1">{a.year}</span>
                        <span className="text-[9px] font-bold tracking-widest uppercase text-navy/40 text-center max-w-[100px]">{a.org}</span>
                        <span className="text-[9px] text-navy/25 text-center max-w-[120px] mt-1">{a.title}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-footer CTA */}
        <section className="py-24 bg-navy relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)' }} />
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <SectionDivider variant="gold-line" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-10 mb-6 leading-tight">Let's Build Something<br />Extraordinary.</h2>
            <p className="text-white/40 mb-10 max-w-lg mx-auto">Partner with Paradigm for your next multifamily residential project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gold text-navy px-10 py-4 font-bold text-sm tracking-wide hover:bg-gold-300 transition-all">Contact Us</Link>
              <Link to="/communities" className="border border-white/15 text-white/70 px-10 py-4 font-bold text-sm tracking-wide hover:text-white hover:border-white/30 transition-all">View Communities</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;