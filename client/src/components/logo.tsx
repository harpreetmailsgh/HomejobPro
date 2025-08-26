
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-8 w-auto", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* SVG Logo Icon */}
      <svg 
        viewBox="0 0 48 48" 
        className="h-8 w-8 mr-2"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* House Shape */}
        <path
          d="M24 4L8 16V40C8 42.2091 9.79086 44 12 44H36C38.2091 44 40 42.2091 40 40V16L24 4Z"
          fill="#3B82F6"
          stroke="#1E40AF"
          strokeWidth="1.5"
        />
        
        {/* Roof */}
        <path
          d="M6 18L24 2L42 18"
          stroke="#1E40AF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Door */}
        <rect
          x="20"
          y="32"
          width="8"
          height="12"
          fill="#FFFFFF"
          stroke="#1E40AF"
          strokeWidth="1"
        />
        
        {/* Door Handle */}
        <circle
          cx="26"
          cy="38"
          r="1"
          fill="#1E40AF"
        />
        
        {/* Windows */}
        <rect
          x="14"
          y="22"
          width="6"
          height="6"
          fill="#FFFFFF"
          stroke="#1E40AF"
          strokeWidth="1"
        />
        <rect
          x="28"
          y="22"
          width="6"
          height="6"
          fill="#FFFFFF"
          stroke="#1E40AF"
          strokeWidth="1"
        />
        
        {/* Tool - Wrench overlay */}
        <path
          d="M32 32L36 28C36.5523 27.4477 37.4477 27.4477 38 28C38.5523 28.5523 38.5523 29.4477 38 30L34 34L32 32Z"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="1"
        />
        <path
          d="M30 34L32 32L34 34L32 36L30 34Z"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="1"
        />
      </svg>
      
      {/* Brand Text */}
      {showText && (
        <span className="text-2xl font-bold text-blue-600">
          Home<span className="text-orange-500">Jobs</span>Pro
        </span>
      )}
    </div>
  );
}
