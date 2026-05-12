import React, { Suspense, lazy } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./src/pages/Home.tsx'));
const About = lazy(() => import('./src/pages/About.tsx'));
const Communities = lazy(() => import('./src/pages/Communities.tsx'));
const PropertyDetail = lazy(() => import('./src/pages/PropertyDetail.tsx'));
const DivisionPage = lazy(() => import('./src/pages/DivisionPage.tsx'));
const Careers = lazy(() => import('./src/pages/Careers.tsx'));
const Contact = lazy(() => import('./src/pages/Contact.tsx'));
const NotFound = lazy(() => import('./src/pages/NotFound.tsx'));

const App: React.FC = () => {
  return (
    <Theme appearance="light" accentColor="amber" radius="none">
      <Router>
        <Suspense fallback={
          <div className="h-screen w-screen flex items-center justify-center bg-cream">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-3 border-navy/10 border-t-gold rounded-full animate-spin" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-navy/30">Paradigm</span>
            </div>
          </div>
        }>
          <main className="min-h-screen font-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/communities/:id" element={<PropertyDetail />} />
              <Route path="/services/:slug" element={<DivisionPage />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover theme="light" />
          </main>
        </Suspense>
      </Router>
    </Theme>
  );
}

export default App;