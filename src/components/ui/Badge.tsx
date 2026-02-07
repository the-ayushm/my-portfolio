import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-primary/10 text-primary border border-primary/20": variant === "default",
          "border border-border text-muted-foreground": variant === "outline",
          "bg-secondary text-secondary-foreground": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
