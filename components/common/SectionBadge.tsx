import React from "react";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return (
    <div className={`flex justify-center mb-12 md:mb-16 ${className}`}>
      <div className="bg-muted text-muted-foreground px-6 py-2 rounded-full text-sm font-medium shadow-sm border border-border/50">
        {children}
      </div>
    </div>
  );
}
