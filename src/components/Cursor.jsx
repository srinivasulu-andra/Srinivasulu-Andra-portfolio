import { useState, useEffect } from "react";

export default function Cursor() {

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-5 h-5 border border-purple-500 rounded-full pointer-events-none z-50"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`
      }}
    />
  );
}