import React, { useState } from "react";
import "./App.css";

function Bgchanger() {

    
  const [background, setBackground] = useState("white");

  const colors = [
    "#ef4444", // red
    "#f97316", // orange
    "#f59e0b", // amber
    "#eab308", // yellow
    "#84cc16", // lime
    "#22c55e", // green
    "#10b981", // emerald
    "#14b8a6", // teal
    "#06b6d4", // cyan
    "#0ea5e9", // sky
    "#3b82f6", // blue
    "#6366f1", // indigo
    "#8b5cf6", // violet
    "#a855f7", // purple
    "#d946ef", // fuchsia
    "#ec4899", // pink
    "#f43f5e", // rose
    "#64748b", // slate
    "#78716c", // stone
    "#737373", // neutral
  ];

  const gradients = [
    "linear-gradient(to right, red, orange)",
    "linear-gradient(to right, blue, cyan)",
    "linear-gradient(to right, purple, pink)",
    "linear-gradient(to right, green, lime)",
    "linear-gradient(to right, black, gray)",
    "linear-gradient(to right, indigo, violet)",
  ];

  return (

    <div
      className="w-full h-screen flex flex-col justify-end items-center"
      style={{ background }}
    >
     
      {/* Reset Button */}
     
      <button
        className="mb-8 px-4 py-2 border rounded-lg bg-white"
        onClick={() => setBackground("white")}
      >
        Reset
      </button>

      {/* Solid Colors */}
      <div className="flex gap-3 flex-wrap justify-center m-4">
       
        {colors.map((color, index) => (
          <button
            key={index}
            className="w-10 h-10 rounded-2xl border"
            style={{ backgroundColor: color }}
            onClick={() => setBackground(color)}
          />
        ))}
        
      </div>

      {/* Gradient Colors */}
      <div className="flex gap-3 flex-wrap justify-center mb-12">
        {gradients.map((gradient, index) => (
          <button
            key={index}
            className="w-10 h-10 rounded-2xl border"
            style={{ background: gradient }}
            onClick={() => setBackground(gradient)}
          />
        ))}
      </div>
    </div>
  );
}

export default Bgchanger;