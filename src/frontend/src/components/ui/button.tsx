import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-card hover:bg-primary/90 hover:shadow-portal active:scale-[0.98]",
        cta: "text-white shadow-card hover:opacity-90 hover:shadow-portal active:scale-[0.98] border-0",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/85 active:scale-[0.98]",
        outline:
          "border border-border bg-transparent shadow-xs hover:bg-primary/8 hover:border-primary/40 hover:text-primary active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/70 active:scale-[0.98]",
        ghost: "hover:bg-primary/8 hover:text-primary active:scale-[0.98]",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "text-white shadow-portal hover:opacity-95 active:scale-[0.98] border-0",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-lg gap-1.5 px-3 text-xs has-[>svg]:px-2.5",
        lg: "h-11 rounded-xl px-6 text-base has-[>svg]:px-5",
        xl: "h-13 rounded-2xl px-8 text-base has-[>svg]:px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  style,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  // Apply gradient for cta and glow variants
  const gradientStyle: React.CSSProperties =
    variant === "cta"
      ? {
          background:
            "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
          ...(style ?? {}),
        }
      : variant === "glow"
        ? {
            background:
              "linear-gradient(135deg, oklch(0.55 0.18 280) 0%, oklch(0.72 0.22 190) 100%)",
            boxShadow:
              "0 4px 20px oklch(0.72 0.22 190 / 0.35), 0 2px 8px oklch(0 0 0 / 0.2)",
            ...(style ?? {}),
          }
        : (style ?? {});

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={gradientStyle}
      {...props}
    />
  );
}

export { Button, buttonVariants };
