import React from "react";
import { useTilt } from "../../hooks/useTilt";
import "./TiltCard.css";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  maxTilt = 12,
}) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt({ maxTilt });

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tilt-spotlight" />
      {children}
    </div>
  );
};

export default TiltCard;
