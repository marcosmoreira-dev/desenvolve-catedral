import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="bg-muted/50 border border-border rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:bg-muted transition-colors">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
        {icon}
      </div>
      <h3 className="text-4xl font-black text-foreground">{value}</h3>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
}
