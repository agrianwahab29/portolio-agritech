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
        "glass rounded-card p-6 md:p-7",
        hoverable && "glass-hover hover:-translate-y-1 hover:shadow-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}
