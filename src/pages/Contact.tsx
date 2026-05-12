import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Inquiry', resident: 'No', hearAbout: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) { toast.error('Please fill in all required fields.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { toast.error('Please enter a valid email.'); return; }
    if (form.message.length > 250) { toast.error('Message must be 250 characters or less.'); return; }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Message sent successfully! We will be in touch soon.');
    setForm({ name: '', email: '', phone: '', subject: 'General Inquiry', resident: 'No', hearAbout: '', message: '' });
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Contact Us</span>
              <h1 className="text-5xl font-display font-bold text-navy mb-6">Get in Touch.</h1>
              <p className="text-navy/50 leading-relaxed mb-10 font-body">Whether you are a prospective resident, a potential partner, or looking to join our team, we are here to help.</p>
              <div className="space-y-8">
                {[
                  { icon: MapPin, label: "Headquarters", text: "1515 North Courthouse Rd #600\nArlington, VA 22201" },
                  { icon: Phone, label: "Phone", text: "571-684-6541" },
                  { icon: Mail, label: "Email", text: "info@paradigmcos.com" },
                  { icon: Clock, label: "Business Hours", text: "Monday – Friday: 9:00 AM – 5:00 PM" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-5">
                    <div className="size-11 bg-white border border-navy/5 flex items-center justify-center shrink-0"><item.icon className="size-5 text-gold" /></div>
                    <div><h4 className="font-bold text-navy mb-1 text-sm">{item.label}</h4><p className="text-sm text-navy/50 whitespace-pre-line">{item.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 border-t-2 border-gold shadow-[0_20px_60px_-15px_rgba(13,27,42,0.12)]" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #FDFCFA 100%)' }}>
              <h3 className="text-2xl font-display font-bold text-navy mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="text-[10px] font-bold tracking-[0.15em] uppercase text-navy/30 mb-1.5 block">Name *</label><input name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 bg-cream border border-navy/5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/30" /></div>
                  <div><label className="text-[10px] font-bold tracking-[0.15em] uppercase text-navy/30 mb-1.5 block">Email *</label><input name="email" type="email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 bg-cream border border-navy/5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/30" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="text-[10px] font-bold tracking-[0.15em] uppercase text-navy/30 mb-1.5 block">Phone</label><input name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 bg-cream border border-navy/5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/30" /></div>
                  <div><label className="text-[10px] font-bold tracking-[0.15em] uppercase text-navy/30 mb-1.5 block">Current Resident?</label><select name="resident" value={form.resident} onChange={handleChange} className="w-full px-4 py-3 bg-cream border border-navy/5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/30"><option>No</option><option>Yes</option></select></div>
                </div>
                <div><label className="text-[10px] font-bold tracking-[0.15em] uppercase text-navy/30 mb-1.5 block">Subject</label><select name="subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-3 bg-cream border border-navy/5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/30"><option>General Inquiry</option><option>Construction</option><option>Real Estate Development</option><option>Property Management</option><option>Careers</option></select></div>
                <div><label className="text-[10px] font-bold tracking-[0.15em] uppercase text-navy/30 mb-1.5 block">Message * <span className="text-navy/20">({form.message.length}/250)</span></label><textarea name="message" rows={4} maxLength={250} value={form.message} onChange={handleChange} className="w-full px-4 py-3 bg-cream border border-navy/5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/30 resize-none" /></div>
                <button type="submit" disabled={submitting} className="w-full bg-gold text-navy py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-gold-300 transition-all disabled:opacity-50">{submitting ? 'Sending...' : 'Send Message'}</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;