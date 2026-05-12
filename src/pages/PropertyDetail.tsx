import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { getPropertyById, properties } from '../data/properties';
import { MapPin, Phone, ExternalLink, ArrowLeft, Building2, PawPrint, Train, Calendar } from 'lucide-react';

const amenities = {
  building: ["Rooftop Deck", "Fitness Center", "Concierge", "Package Lockers", "EV Charging"],
  unit: ["In-Unit Washer/Dryer", "Quartz Countertops", "Floor-to-Ceiling Windows", "Smart Thermostat"],
  community: ["Pet-Friendly", "Bike Storage", "Co-Working Lounge", "Guest Suite"],
};

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = id ? getPropertyById(parseInt(id)) : undefined;

  if (!property) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-display font-bold text-navy/10 mb-4">404</h1>
          <p className="text-navy/50 mb-6">Property not found.</p>
          <Link to="/communities" className="text-gold font-semibold hover:underline">← Back to Communities</Link>
        </div>
      </div>
    );
  }

  const related = properties.filter(p => p.id !== property.id && p.state === property.state && p.city === property.city).slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-navy">
        <img src={property.image} alt={property.name} className="absolute inset-0 w-full h-full object-cover opacity-50 animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <Link to="/communities" className="inline-flex items-center text-white/50 hover:text-gold text-sm mb-6 transition-colors"><ArrowLeft className="size-4 mr-2" /> All Communities</Link>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className={`inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase mb-4 ${property.type === 'affordable' ? 'bg-gold text-navy' : 'bg-white/10 text-white'}`}>{property.type === 'affordable' ? 'Affordable' : 'Market Rate'}</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">{property.name}</h1>
              <p className="text-white/50 text-lg font-body">{property.city}, {property.state}</p>
            </div>
            <div className="flex gap-3">
              {property.website && <a href={property.website} target="_blank" rel="noopener noreferrer" className="bg-gold text-navy px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-gold-300 transition-all flex items-center">Visit Website <ExternalLink className="ml-2 size-3" /></a>}
              <a href={`tel:${property.phone.replace(/[^0-9]/g, '')}`} className="bg-white/10 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white/20 transition-all flex items-center"><Phone className="mr-2 size-3" /> Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-8 items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-navy/50"><MapPin className="size-4 text-gold" />{property.address}, {property.city}, {property.state} {property.zip}</div>
          <div className="flex items-center gap-2 text-sm text-navy/50"><Phone className="size-4 text-gold" />{property.phone}</div>
          <div className="flex items-center gap-2 text-sm text-navy/50"><PawPrint className="size-4 text-gold" />Pet Friendly</div>
          <div className="flex items-center gap-2 text-sm text-navy/50"><Train className="size-4 text-gold" />Near Metro</div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-navy mb-10">Amenities & Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(amenities).map(([cat, items]) => (
              <div key={cat} className="bg-white p-8 border border-navy/5">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gold mb-6 capitalize">{cat}</h3>
                <ul className="space-y-3">{items.map((item, i) => <li key={i} className="text-sm text-navy/60 flex items-center font-body"><div className="size-1.5 bg-gold rounded-full mr-3" />{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Schedule a Tour</h2>
          <p className="text-white/50 font-body mb-8">Contact us to learn more about {property.name} or schedule a visit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${property.phone.replace(/[^0-9]/g, '')}`} className="bg-gold text-navy px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gold-300 transition-all flex items-center justify-center"><Phone className="mr-2 size-4" /> {property.phone}</a>
            <Link to="/contact" className="border border-white/20 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-all flex items-center justify-center"><Calendar className="mr-2 size-4" /> Request Info</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-display font-bold text-navy mb-8">Nearby Communities</h2>
            <div className="grid md:grid-cols-3 gap-6">{related.map(p => <PropertyCard key={p.id} property={p} />)}</div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default PropertyDetail;
