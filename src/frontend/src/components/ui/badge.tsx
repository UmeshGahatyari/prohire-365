import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-lg border px-2.5 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none transition-all duration-200 overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent text-white",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent text-white",
        outline: "text-foreground border-border/60 bg-card/60",
        accent: "border-transparent text-white",
        success: "border-transparent text-white",
        warning: "border-transparent text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// Gradient styles for special variants
const variantGradients: Record<string, React.CSSProperties> = {
  default: {
    background:
      "linear-gradient(135deg, oklch(0.5 0.16 280), oklch(0.55 0.18 290))",
    boxShadow: "0 2px 8px oklch(0.5 0.16 280 / 0.25)",
  },
  destructive: {
    background:
      "linear-gradient(135deg, oklch(0.55 0.2 28), oklch(0.6 0.18 15))",
    boxShadow: "0 2px 8px oklch(0.55 0.2 28 / 0.25)",
  },
  accent: {
    background:
      "linear-gradient(135deg, oklch(0.65 0.22 190), oklch(0.7 0.2 200))",
    boxShadow: "0 2px 8px oklch(0.65 0.22 190 / 0.3)",
  },
  success: {
    background:
      "linear-gradient(135deg, oklch(0.6 0.2 150), oklch(0.65 0.18 160))",
    boxShadow: "0 2px 8px oklch(0.6 0.2 150 / 0.25)",
  },
  warning: {
    background:
      "linear-gradient(135deg, oklch(0.7 0.16 60), oklch(0.72 0.15 50))",
    boxShadow: "0 2px 8px oklch(0.7 0.16 60 / 0.25)",
  },
};

function Badge({
  className,
  variant,
  asChild = false,
  style,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";
  const gradStyle = variant ? variantGradients[variant] : undefined;

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      style={{ ...gradStyle, ...style }}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
