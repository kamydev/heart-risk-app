import React from "react";

interface CircularProgressProps {
  percentage: number;
  size?: number;
  thickness?: number;
  riskLevel: "low" | "moderate" | "high";
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 200,
  thickness = 20,
  riskLevel,
}) => {
  // Determine color based on risk level
  const getColor = () => {
    switch (riskLevel) {
      case "low":
        return "#4ade80"; // green
      case "moderate":
        return "#facc15"; // yellow
      case "high":
        return "#ef4444"; // red
      default:
        return "#4ade80";
    }
  };

  const getRiskText = () => {
    switch (riskLevel) {
      case "low":
        return "Low Risk";
      case "moderate":
        return "Moderate Risk";
      case "high":
        return "High Risk";
      default:
        return "Low Risk";
    }
  };

  const color = getColor();
  const innerSize = size - thickness * 2;

  // Calculate dashboard styles
  const dashArray = Math.PI * size;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Background circle */}
      <div 
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: "#f3f4f6", // Light gray background
        }}
      />
      
      {/* Progress circle SVG */}
      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: 'rotate(-90deg)' }}
        className="absolute"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - thickness / 2}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      
      {/* Inner white circle */}
      <div 
        className="absolute rounded-full bg-white"
        style={{
          width: innerSize,
          height: innerSize,
        }}
      />
      
      {/* Content */}
      <div className="flex flex-col items-center justify-center z-10">
        <span className="text-4xl font-semibold text-gray-900">{percentage}%</span>
        <span className="text-sm text-gray-600 mt-1">{getRiskText()}</span>
      </div>
    </div>
  );
};

export default CircularProgress;
