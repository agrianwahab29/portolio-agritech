import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border font-medium",
  {
    variants: {
      variant: {
        tech: "border-brand/25 bg-brand/[0.06] text-brand-text font-mono",
        category: "border-line bg-surface text-fg-secondary",
        year: "border-transparent bg-transparent text-fg-muted",
        ok: "border-ok/30 bg-ok/10 text-ok",
        warn: "border-warn/30 bg-warn/10 text-warn",
        info: "border-info/30 bg-info/10 text-info",
        muted: "border-line bg-surface text-fg-muted",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[11px]",
        md: "px-3 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "category",
      size: "md",
    },
  },
);

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof badgeVariants>;

export function Badge({ children, className, variant, size }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>
      {children}
    </span>
  );
}

// Map publication/project status string to badge variant
export function statusVariant(
  status: string,
): "ok" | "warn" | "info" | "muted" {
  const s = status.toLowerCase();
  if (s === "published") return "ok";
  if (s === "accepted" || s === "in press" || s === "in-press") return "warn";
  if (s === "completed" || s === "case study") return "info";
  return "muted";
}
