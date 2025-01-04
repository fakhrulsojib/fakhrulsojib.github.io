import React from "react";
import "./BalloonGroup.css";

const BalloonGroup: React.FC = () => {
  const balloonPositions = [
    { top: "15%", left: "40%" },
    { top: "10%", left: "30%" },
    { top: "25%", left: "50%" },
    { top: "5%", left: "55%" },
    { top: "30%", left: "35%" },
    { top: "20%", left: "60%" },
    { top: "35%", left: "45%" },
  ];

  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEEAD",
    "#FF6F61",
    "#FFD700",
  ];

  return (
    <div className="balloon-group">
      {colors.map((color, index) => (
        <div
          key={index}
          className="balloon"
          style={
            {
              "--color": color,
              "--i": index,
              top: balloonPositions[index].top,
              left: balloonPositions[index].left,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default BalloonGroup;
