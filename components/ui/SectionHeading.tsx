import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-text",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-6 bg-brand/50" aria-hidden />
          {eyebrow}
        </div>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-fg-primary text-balance md:text-4xl lg:text-[44px] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-base text-fg-secondary text-pretty md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
