import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-semibold ring-offset-2 ring-offset-background transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-content-inverse shadow-[var(--shadow-button)] hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-[var(--shadow-button-hover)] active:translate-y-0",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 hover:-translate-y-0.5 active:translate-y-0 shadow-md",
        outline:
          "border-2 border-brand/40 bg-surface text-brand hover:bg-brand/10 hover:border-brand/60 hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-surface-alt text-content border border-border shadow-card hover:bg-surface-subtle hover:-translate-y-0.5 hover:shadow-card-hover active:translate-y-0",
        ghost: "text-content hover:bg-surface-alt hover:text-brand",
        link: "text-brand underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-sm rounded-lg",
        lg: "h-12 px-8 text-base rounded-xl",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
