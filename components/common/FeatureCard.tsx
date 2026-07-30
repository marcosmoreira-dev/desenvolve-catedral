import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-background text-foreground border border-border rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
        {icon}
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
