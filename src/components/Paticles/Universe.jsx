import React, { useEffect, useRef } from "react";
import "./Universe.css";

const BlackUniverse = () => {
  const universeRef = useRef(null);

  useEffect(() => {
    const universe = universeRef.current;
    for (let i = 0; i < 1000; i++) {
      const star = document.createElement("div");
      star.className = "stars";
      star.style.top = `${Math.random() * 500}vh`;
      star.style.left = `${Math.random() * 500}vw`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.opacity = Math.random();
      universe.appendChild(star);
    }
  }, []);

  return <div className="universe" ref={universeRef}></div>;
};

export default BlackUniverse;
