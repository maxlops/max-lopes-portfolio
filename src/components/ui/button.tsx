import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand-500 text-white hover:bg-brand-700",
        secondary: "border border-border bg-white text-ink hover:bg-slate-50",
        ghost: "text-muted hover:bg-slate-100 hover:text-ink",
        dark: "bg-ink text-white hover:bg-slate-800"
      },
      size: {
        default: "h-11 px-4",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string;
    external?: boolean;
    download?: boolean | string;
  };

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, href, external, download, disabled, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }), disabled && "opacity-50");

    if (href && !disabled) {
      const isExternal = external || href.startsWith("http");
      return (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={classes}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          download={download}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        className={classes}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
