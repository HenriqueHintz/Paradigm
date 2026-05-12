import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import type { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white border border-navy/5 rounded-sm overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(13,27,42,0.12)] transition-all duration-500 group">
      <div className="aspect-[4/3] bg-cream relative overflow-hidden">
        <img src={property.image} alt={property.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-navy">
          {property.city}, {property.state}
        </div>
        <div className={`absolute top-4 left-4 px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${property.type === 'affordable' ? 'bg-gold/90 text-navy' : 'bg-navy/80 text-white'}`}>
          {property.type === 'affordable' ? 'Affordable' : 'Market Rate'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-display font-bold text-navy mb-3 group-hover:text-gold transition-colors">{property.name}</h3>
        <div className="space-y-2 mb-6">
          <div className="flex items-start text-sm text-navy/40">
            <MapPin className="size-4 mr-2 mt-0.5 shrink-0" />
            <span>{property.address}, {property.city}, {property.state} {property.zip}</span>
          </div>
          <div className="flex items-center text-sm text-navy/40">
            <Phone className="size-4 mr-2 shrink-0" />
            <a href={`tel:${property.phone.replace(/[^0-9]/g, '')}`} className="hover:text-gold transition-colors">{property.phone}</a>
          </div>
        </div>
        <div className="flex gap-3">
          <Link to={`/communities/${property.id}`} className="flex-1 border-2 border-gold text-gold text-center py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
            Details
          </Link>
          {property.website && (
            <a href={property.website} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 border border-navy/10 text-xs font-bold tracking-widest uppercase text-navy hover:bg-cream transition-all flex items-center">
              <ExternalLink className="size-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
