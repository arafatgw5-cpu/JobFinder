import React from 'react';

const CTASection = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center justify-center font-sans">
      
      {/* --- Background Effects (Glowing Dome & Grid) --- */}
      <div className="absolute inset-0 flex justify-center pointer-events-none overflow-hidden">
        {/* Circular dome shape that creates the curve at the top */}
        <div
          className="relative mt-[-20%] md:mt-[-10%] w-[150%] md:w-[120%] max-w-[1400px] aspect-square rounded-full border border-white/5 overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 50% 15%, rgba(67, 56, 202, 0.4) 0%, rgba(17, 24, 39, 0.8) 40%, rgba(0, 0, 0, 1) 70%)',
          }}
        >
          {/* Wireframe Grid using CSS Background Patterns and 3D Transforms */}
          <div
            className="absolute inset-0 w-full h-full opacity-[0.15]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              transform: 'perspective(800px) rotateX(65deg) scale(2.5)',
              transformOrigin: 'top center',
            }}
          />
        </div>
      </div>

      {/* --- Foreground Content --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl mx-auto mt-10 md:mt-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5 leading-tight">
          Your next role is <br className="hidden sm:block" />
          already looking for you
        </h2>
        
        <p className="text-[#a1a1aa] text-sm md:text-base mb-8 max-w-2xl mx-auto">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200">
            Create a free account
          </button>
          
          <button className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white bg-[#0a0a0b] border border-gray-700/80 rounded-lg hover:bg-gray-800 transition-colors duration-200">
            View pricing
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default CTASection;