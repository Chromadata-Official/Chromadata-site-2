import React from 'react';
import { SERVICES, INDUSTRIES } from '../constants';
import { ArrowRight, ChevronRight } from 'lucide-react';

const ServiceGrid: React.FC = () => {
  return (
    <>
    {/* Core Services */}
    <section id="solutions" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 border-l-4 border-cyan-500 pl-6">
            <h2 className="text-sm font-bold text-slate-500 tracking-widest uppercase mb-2">Our Capabilities</h2>
            <h3 className="text-4xl font-bold text-[#000048]">
                Building the digital backbone <br/>of modern enterprise.
            </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group flex flex-col h-full bg-white border border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="mb-4 text-[#000048] group-hover:text-cyan-600 transition-colors">
                    {service.icon}
                </div>
                <h4 className="text-xl font-bold text-[#000048] mb-3 group-hover:text-cyan-700 transition-colors">
                    {service.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-xs font-bold text-[#000048] hover:text-cyan-600 uppercase tracking-wide group/link">
                    Learn More 
                    <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover/link:translate-x-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries - Cognizant Style Horizontal Scroll/Grid */}
    <section id="industries" className="py-24 bg-[#F7F9FC]">
        <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-bold text-[#000048] mb-4">Industries We Serve</h2>
                    <p className="text-slate-600 max-w-2xl text-lg">Deep domain expertise across automotive, entertainment, and logistics.</p>
                </div>
                <a href="#" className="text-cyan-700 font-bold flex items-center hover:underline mt-4 md:mt-0">
                    View all industries <ChevronRight className="w-4 h-4 ml-1" />
                </a>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {INDUSTRIES.map((ind, i) => (
                    <div key={i} className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-cyan-500 group cursor-pointer">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-50 transition-colors">
                             <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-600" />
                        </div>
                        <h3 className="text-xl font-bold text-[#000048] mb-3 group-hover:text-cyan-700">{ind.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{ind.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  );
};

export default ServiceGrid;