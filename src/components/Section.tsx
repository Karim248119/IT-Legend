import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={cn("md:px-10 px-4 md:py-10 py-5 bg-neutral-50 ", className)}
    >
      {children}
    </section>
  );
}
