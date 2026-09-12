import React from "react";

interface ApertureSVGProps {
  size?: number;
  className?: string;
  strokeColor?: string;
  opacity?: number;
}

export const ApertureSVG: React.FC<ApertureSVGProps> = ({
  size = 280,
  className = "",
  strokeColor = "#E2DACE",
  opacity = 0.55,
}) => {
  const center = size / 2;
  const radii = [
    size * 0.12,
    size * 0.2,
    size * 0.28,
    size * 0.36,
    size * 0.44,
    size * 0.455, // doubled ring
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Concentric optical rings */}
      <circle cx={center} cy={center} r={radii[0]} stroke={strokeColor} strokeWidth="1" />
      <circle cx={center} cy={center} r={radii[1]} stroke={strokeColor} strokeWidth="1" strokeDasharray="3 3" />
      <circle cx={center} cy={center} r={radii[2]} stroke={strokeColor} strokeWidth="1" />
      <circle cx={center} cy={center} r={radii[3]} stroke={strokeColor} strokeWidth="1" strokeDasharray="4 4" />
      <circle cx={center} cy={center} r={radii[4]} stroke={strokeColor} strokeWidth="1" />
      <circle cx={center} cy={center} r={radii[5]} stroke={strokeColor} strokeWidth="0.8" />

      {/* Optical Reticle Alignment Ticks */}
      {/* 12 o'clock tick */}
      <line
        x1={center}
        y1={center - radii[4]}
        x2={center}
        y2={center - radii[4] + 8}
        stroke={strokeColor}
        strokeWidth="1"
      />
      {/* 6 o'clock tick */}
      <line
        x1={center}
        y1={center + radii[4] - 8}
        x2={center}
        y2={center + radii[4]}
        stroke={strokeColor}
        strokeWidth="1"
      />
      {/* 9 o'clock tick */}
      <line
        x1={center - radii[4]}
        y1={center}
        x2={center - radii[4] + 8}
        y2={center}
        stroke={strokeColor}
        strokeWidth="1"
      />
      {/* 3 o'clock tick */}
      <line
        x1={center + radii[4] - 8}
        y1={center}
        x2={center + radii[4]}
        y2={center}
        stroke={strokeColor}
        strokeWidth="1"
      />

      {/* Center optical target micro-marker */}
      <circle cx={center} cy={center} r={2.5} fill={strokeColor} />
    </svg>
  );
};
