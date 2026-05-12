import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { Search, SlidersHorizontal } from 'lucide-react';
import { properties, getCities } from '../data/properties';

const Communities = () => {
  const [search, setSearch] = useState('');
  const [cityFilter, setCityFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'market-rate' | 'affordable'>('all');
  const [showFilters, setShowFilters] = useState(false);
  const cities = useMemo(() => getCities(), []);

  const filtered = useMemo(() => {
    return properties.filter(p => {
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.city.toLowerCase().includes(search.toLowerCase()) || p.zip.includes(search);
      const matchCity = cityFilter === 'all' || `${p.city}, ${p.state}` === cityFilter;
      const matchType = typeFilter === 'all' || p.type === typeFilter;
      return matchSearch && matchCity && matchType;
    });
  }, [search, cityFilter, typeFilter]);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-2xl mb-12">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Our Portfolio</span>
            <h1 className="text-5xl font-display font-bold text-navy mb-5">Find Your Community</h1>
            <p className="text-navy/50 text-lg font-body">Explore our 25 premium residential communities across the Mid-Atlantic region.</p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-navy/30" />
              <input id="community-search" type="text" placeholder="Search by name, city, or zip..." className="w-full pl-12 pr-4 py-3.5 bg-white border border-navy/10 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all font-body" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="flex items-center px-6 py-3.5 bg-white border border-navy/10 text-sm font-semibold text-navy hover:bg-cream transition-colors">
              <SlidersHorizontal className="size-4 mr-2" /> Filters
            </button>
          </div>

          {showFilters && (
            <div className="bg-white border border-navy/5 p-6 mb-8 grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-navy/40 mb-2 block">City</label>
                <select value={cityFilter} onChange={e => setCityFilter(e.target.value)} className="w-full px-4 py-3 bg-cream border border-navy/10 text-sm font-body">
                  <option value="all">All Cities</option>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-navy/40 mb-2 block">Type</label>
                <select value={typeFilter} onChange={e => setTypeFilter(e.target.value as any)} className="w-full px-4 py-3 bg-cream border border-navy/10 text-sm font-body">
                  <option value="all">All Types</option>
                  <option value="market-rate">Market Rate</option>
                  <option value="affordable">Affordable</option>
                </select>
              </div>
            </div>
          )}

          <p className="text-sm text-navy/40 mb-6 font-body">{filtered.length} {filtered.length === 1 ? 'community' : 'communities'} found</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-navy/30 text-lg font-display">No communities match your search.</p>
              <button onClick={() => { setSearch(''); setCityFilter('all'); setTypeFilter('all'); }} className="mt-4 text-gold font-semibold text-sm hover:underline">Clear filters</button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Communities;