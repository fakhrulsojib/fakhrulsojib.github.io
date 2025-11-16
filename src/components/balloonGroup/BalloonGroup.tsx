import React, { useState, useEffect } from "react";
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

  const [poppedBalloons, setPoppedBallons] = useState<number[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleBalloonClick = (index: number) => {
    if (!poppedBalloons.includes(index)) {
      const audio = new Audio("/pop.mp3");
      audio.play();
      const newPoppedBalloons = [...poppedBalloons, index];
      setPoppedBallons(newPoppedBalloons);

      if (newPoppedBalloons.length === colors.length) {
        setEndTime(Date.now());
      }
    }
  };

  return (
    <div className="balloon-group">
      {colors.map((color, index) => {
        if (poppedBalloons.includes(index)) {
          return null;
        }
        return (
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
            onClick={() => handleBalloonClick(index)}
          />
        );
      })}
      {endTime && startTime && (
        <div className="timer-display">
          Time: {((endTime - startTime) / 1000).toFixed(2)}s
        </div>
      )}
    </div>
  );
};

export default BalloonGroup;
