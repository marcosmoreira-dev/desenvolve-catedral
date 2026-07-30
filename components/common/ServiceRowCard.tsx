import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceRowCardProps {
  title: string;
  description: string;
  href: string;
}

export function ServiceRowCard({
  title,
  description,
  href,
}: ServiceRowCardProps) {
  return (
    <div className="group bg-muted/20 hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-border rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-primary group-hover:text-foreground transition-colors">
          {title}
        </h3>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-semibold hover:text-primary transition-colors"
        >
          Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
      <div className="md:w-1/2">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
