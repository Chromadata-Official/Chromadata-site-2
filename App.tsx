import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ServiceGrid from './components/ServiceGrid';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <ServiceGrid />
        
        {/* Call to Action Section */}
        <section className="py-24 bg-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your data strategy?</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Join leading global brands like Sony, Google, and major OEMs who trust ChromaData for accuracy, speed, and reliability.
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;