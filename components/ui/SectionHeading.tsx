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
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
          <span className="h-px w-8 bg-text-muted/40" aria-hidden />
          {eyebrow}
        </div>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base text-text-secondary md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
