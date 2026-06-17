import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: "sm" | "md" | "lg";
  bleed?: boolean;
  "aria-label"?: string;
};

const sizeMap = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20 lg:py-24",
  lg: "py-20 md:py-28 lg:py-32",
} as const;

export const Section = forwardRef<HTMLElement, SectionProps>(
  function Section(
    {
      children,
      className,
      id,
      size = "md",
      bleed = false,
      ...rest
    },
    ref,
  ) {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          sizeMap[size],
          bleed ? "" : "relative",
          className,
        )}
        {...rest}
      >
        {children}
      </section>
    );
  },
);
