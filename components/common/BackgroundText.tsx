import React from "react";

interface BackgroundTextProps {
  text?: string;
  className?: string;
}

export function BackgroundText({
  text = "VÍDEO",
  className = "",
}: BackgroundTextProps) {
  return (
    <div
      className={`absolute flex items-center justify-center pointer-events-none select-none z-0 ${className}`}
    >
      <span className="font-black tracking-widest text-primary">{text}</span>
    </div>
  );
}
