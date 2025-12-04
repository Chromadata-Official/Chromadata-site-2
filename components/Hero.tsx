import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-[#000048]">
      {/* Background Image with Cognizant-style overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop")', 
        }}
      >
        <div className="absolute inset-0 bg-[#000048]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#000048] via-[#000048]/90 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-white mt-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 text-cyan-400 mb-6 font-semibold tracking-wide text-sm uppercase">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span>AI-Powered Enterprise Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
            Orchestrating <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              AI-Driven Data
            </span> <br/>
            across industries.
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
            Empowering global enterprises with mission-critical data intelligence. From automotive precision to music entertainment and material handling, we partner with industry leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              Explore Our Expertise
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center px-8 py-4 border-l-2 border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
              Strategic Partners
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Partner Logos - Subtle but Flamboyant Glassmorphism Bar */}
          <div className="relative group max-w-4xl">
             <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             
             <div className="relative border-t border-white/10 pt-8 backdrop-blur-sm rounded-xl transition-all duration-500">
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em] mb-6 opacity-80">Trusted Ecosystem</p>
                <div className="flex flex-wrap items-center gap-10 md:gap-14 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    
                    {/* Sony Wordmark */}
                    <div className="h-4 md:h-5 w-auto hover:text-white transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-default">
                        <svg viewBox="0 0 100 18" className="h-full w-auto fill-current text-white">
                           <path d="M22.2,4.8c-2.4,0-4.3,1.8-4.3,4.2c0,2.3,1.9,4.2,4.3,4.2c2.4,0,4.3-1.8,4.3-4.2C26.5,6.6,24.6,4.8,22.2,4.8z M35.3,1.5 h-1.7l-4,9.6l-3.9-9.6H24v11.7h2.2V6.6l3.6,8.8h1.8l3.7-8.8v6.5h2.2V1.5z M43.4,1.5l-5.3,7.6L36.3,1.5h-2.5l6.5,9.2v2.5h2.2v-2.5 l6.4-9.2H43.4z"/>
                           <path d="M12.9,3.7C11.8,3,10,2,7.7,2C3.5,2,1,4.3,1,7.2c0,2,1.3,3.3,3.9,4.3l1.8,0.7C8.4,12.8,9,13,9,13.8c0,1-1,1.5-2.6,1.5 c-1.3,0-3-0.5-4.3-1.3l-0.9,1.8c1.5,0.9,3.5,1.5,5.2,1.5c4.7,0,7.2-2.3,7.2-5.4c0-2-1.3-3.3-3.8-4.3l-1.8-0.7c-1.6-0.6-2.2-0.8-2.2-1.6 c0-0.9,0.9-1.3,2.2-1.3c1.1,0,2.6,0.4,3.7,1L12.9,3.7z"/>
                        </svg>
                    </div>

                    {/* Google Wordmark */}
                    <div className="h-6 md:h-7 w-auto hover:text-white transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-default">
                        <svg viewBox="0 0 75 24" className="h-full w-auto fill-current text-white">
                            <path d="M9.8,20.5c-5.6,0-10.2-4.6-10.2-10.2C-0.4,4.6,4.2,0,9.8,0c2.7,0,5.2,1,7.1,2.8L15,4.8c-1.3-1.2-3.1-2-5.2-2 c-4,0-7.2,3.3-7.2,7.4s3.3,7.4,7.2,7.4c2.8,0,4.6-1.2,5.6-2.2c0.9-0.9,1.5-2.1,1.6-4h-7.2V8.6h10.2c0.1,0.5,0.2,1.1,0.2,1.8 c0,2.1-0.6,4.8-2.5,6.7c-1.9,1.9-4.3,3-7.2,3.4L9.8,20.5L9.8,20.5z M31.2,6.9c-4,0-7.2,3-7.2,6.9s3.2,6.9,7.2,6.9s7.2-3,7.2-6.9 S35.2,6.9,31.2,6.9z M31.2,18c-2.2,0-4.1-1.7-4.1-4.2s1.8-4.2,4.1-4.2s4.1,1.7,4.1,4.2S33.4,18,31.2,18z M46.7,6.9 c-4,0-7.2,3-7.2,6.9s3.2,6.9,7.2,6.9c4,0,7.2-3,7.2-6.9S50.7,6.9,46.7,6.9z M46.7,18c-2.2,0-4.1-1.7-4.1-4.2s1.8-4.2,4.1-4.2 c2.3,0,4.1,1.7,4.1,4.2S49,18,46.7,18z M61.6,6.9c-3.8,0-6.9,3-6.9,6.9c0,4.1,3.4,7,7.2,7c1.7,0,3.3-0.7,4.1-1.6l0.1,0.9h6.3 V7.2h-3v1.3C68.6,7.6,67.3,6.9,61.6,6.9z M62.2,18c-2.2,0-4-1.8-4-4.2c0-2.3,1.7-4.2,4-4.2c2.1,0,3.9,1.8,3.9,4.2 C66.1,16.2,64.4,18,62.2,18z M5.5,23.5"/>
                            <polygon points="73.8,1.4 73.8,20.1 77,20.1 77,1.4 "/>
                        </svg>
                    </div>
                    
                    {/* Microsoft Wordmark */}
                    <div className="h-5 md:h-6 w-auto hover:text-white transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-default">
                        <svg viewBox="0 0 110 23" className="h-full w-auto fill-current text-white">
                           <rect x="0" y="0" width="10" height="10" />
                           <rect x="11.5" y="0" width="10" height="10" />
                           <rect x="0" y="11.5" width="10" height="10" />
                           <rect x="11.5" y="11.5" width="10" height="10" />
                           <path d="M30.4,4.2h3.3l4.5,13.6l4.5-13.6h3.3v17.2h-3.1V8.6l-3.9,12.8h-1.6L33.5,8.6v12.8h-3.1V4.2z M49.5,5.6v-1.4h3.1 v1.4H49.5z M49.5,8.4h3.1v13h-3.1V8.4z M61.6,21.6c-3.5,0-5.8-2.5-5.8-6.1c0-3.7,2.4-6.3,6-6.3c3,0,4.6,1.5,5.3,3.3l-2.8,1.2 c-0.4-0.9-1.2-1.6-2.5-1.6c-1.8,0-2.8,1.4-2.8,3.4c0,2.1,1.1,3.4,2.9,3.4c1.3,0,2.1-0.7,2.5-1.7l2.8,1.1 C66.2,20.2,64.4,21.6,61.6,21.6z M70.3,8.4h3v2.2c0.5-1.4,1.7-2.3,3.1-2.3c0.2,0,0.4,0,0.6,0.1v3c-0.3-0.1-0.6-0.1-0.9-0.1 c-1.7,0-2.8,1.2-2.8,3.5v6.6h-3V8.4z M83.2,21.6c-3.6,0-6-2.6-6-6.2s2.5-6.2,6-6.2c3.5,0,6,2.6,6,6.2S86.8,21.6,83.2,21.6z  M83.2,19c1.9,0,2.9-1.5,2.9-3.6c0-2.1-1-3.6-2.9-3.6c-1.9,0-2.9,1.5-2.9,3.6C80.3,17.5,81.3,19,83.2,19z M97.1,17.5 c0,1.2-0.9,1.7-2.2,1.7c-1.1,0-1.9-0.4-2.4-1.1l-2.4,1.5c1.1,1.5,2.8,2.2,4.8,2.2c3.1,0,5.3-1.6,5.3-4.5V11h-3V17.5z M92.5,9.6 c0.9-0.8,2.3-1.2,3.8-1.2c2.1,0,3.7,0.8,4.6,2.1l-2.2,1.6c-0.6-0.7-1.3-1-2.4-1c-0.9,0-1.6,0.3-1.9,0.8c-0.3,0.4-0.1,0.8,0.7,1.1 l1.5,0.5c2.9,0.9,4.2,2,4.2,4.2c0,2.7-2.1,4.1-5.1,4.1c-2.6,0-4.3-0.9-5.4-2.3l2.3-1.6c0.8,0.9,1.8,1.4,3.1,1.4 c1.1,0,1.9-0.4,1.9-1.1c0-0.5-0.3-0.9-1.5-1.2l-1.6-0.5C92.9,15.3,91.3,13.9,91.3,11.7C91.3,10.7,91.8,10,92.5,9.6z M108.6,8.4v2.7 h-1.9v5.3c0,0.9,0.2,1.3,0.9,1.3c0.3,0,0.6,0,0.8-0.1l0.3,2.5c-0.6,0.2-1.4,0.3-2.2,0.3c-2.4,0-3.1-1.2-3.1-3.6v-5.7h-1.3V8.4h1.3 V5.3l3.2-0.9v4h1.9z"/>
                        </svg>
                    </div>

                    {/* Tableau Wordmark */}
                    <div className="h-6 md:h-7 w-auto hover:text-white transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-default">
                         <svg viewBox="0 0 100 24" className="h-full w-auto fill-current text-white">
                            <path d="M12,0h3v9h9v3h-9v9h-3v-9H3V9h9V0z M35,16.5h-2v1.5c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5v-1.5h-2v1.5 c0,2,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5V16.5z M45,16.5h-2v1.5c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5v-1.5h-2v1.5 c0,2,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5V16.5z M25,16.5h-2v1.5c0,0.8-0.7,1.5-1.5,1.5S20,18.8,20,18v-1.5h-2V18c0,2,1.6,3.5,3.5,3.5 s3.5-1.6,3.5-3.5V16.5z M35,6.5h-2V8c0,0.8-0.7,1.5-1.5,1.5S30,8.8,30,8V6.5h-2V8c0,2,1.6,3.5,3.5,3.5S35,10,35,8V6.5z"/>
                            <text x="50" y="20" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold" className="fill-current text-white tracking-tight">tableau</text>
                        </svg>
                    </div>

                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Decorative accent bar typical of enterprise sites */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
    </section>
  );
};

export default Hero;