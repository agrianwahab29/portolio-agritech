import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow";
};

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 lg:px-8",
        size === "default" ? "max-w-content" : "max-w-prose",
        className,
      )}
    >
      {children}
    </div>
  );
}
