import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="bg-cyan-600 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-cyan-500/50">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{stat.value}</span>
              <span className="text-cyan-100 text-sm font-semibold uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;