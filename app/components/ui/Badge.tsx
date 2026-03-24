import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium", className)}>
      {children}
    </span>
  );
}
