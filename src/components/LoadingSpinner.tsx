import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-lime-400/20 border-t-lime-400 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-lime-400/40 border-t-lime-400/60 rounded-full animate-spin animation-delay-150"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
