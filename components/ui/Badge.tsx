import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors",
  {
    variants: {
      variant: {
        tech: "border-accent-blue/30 bg-accent-blue/5 text-accent-blue font-mono",
        category:
          "border-white/10 bg-white/5 text-text-secondary",
        year: "border-transparent bg-transparent text-text-muted",
        status: "border-current",
      },
      status: {
        none: "",
        published: "text-status-published bg-status-published/10",
        "in-press": "text-status-in-press bg-status-in-press/10",
        completed: "text-status-completed bg-status-completed/10",
        archived: "text-status-archived bg-status-archived/10",
        accepted: "text-status-in-press bg-status-in-press/10",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[11px]",
        md: "px-3 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "category",
      status: "none",
      size: "md",
    },
  },
);

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof badgeVariants>;

export function Badge({
  children,
  className,
  variant,
  status,
  size,
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, status, size }), className)}
    >
      {children}
    </span>
  );
}
