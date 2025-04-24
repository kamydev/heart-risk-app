import React from "react";

interface RiskLevelIndicatorProps {
  type: "low" | "moderate" | "high";
  label: string;
}

const RiskLevelIndicator: React.FC<RiskLevelIndicatorProps> = ({ type, label }) => {
  const getColor = () => {
    switch (type) {
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

  return (
    <div className="flex items-center">
      <span 
        className="w-3 h-3 rounded-full mr-2" 
        style={{ backgroundColor: getColor() }}
      />
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );
};

export default RiskLevelIndicator;
