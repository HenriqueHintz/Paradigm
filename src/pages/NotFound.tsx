import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="max-w-md text-center">
        <h1 className="text-9xl font-display font-bold text-navy/5 mb-4">404</h1>
        <h2 className="text-3xl font-display font-bold text-navy mb-6">Page Not Found</h2>
        <p className="text-navy/50 mb-12 leading-relaxed font-body">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="inline-flex items-center bg-navy text-white px-8 py-4 font-bold hover:bg-navy-400 transition-all">
          <ArrowLeft className="mr-2 size-5" /> Return to Homepage
        </Link>
      </div>
    </div>
  );
}