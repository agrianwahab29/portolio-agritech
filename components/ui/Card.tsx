import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
};

export function Card({ children, className, hoverable = true }: CardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6 md:p-8 transition-all duration-300",
        hoverable &&
          "hover:-translate-y-1 hover:shadow-glow-blue",
        className,
      )}
    >
      {children}
    </div>
  );
}
