import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-button font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-hero text-brand-contrast font-semibold hover:shadow-glow",
        secondary:
          "glass glass-hover text-fg-primary",
        ghost:
          "text-fg-secondary hover:bg-surface-hover hover:text-fg-primary",
        link: "text-brand-text underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  download?: boolean;
} & VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  variant,
  size,
  href,
  external,
  download,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          download={download}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
