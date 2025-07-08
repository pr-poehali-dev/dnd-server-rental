import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface DarkFantasyButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const DarkFantasyButton = forwardRef<HTMLButtonElement, DarkFantasyButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const baseStyles = `
      relative inline-flex items-center justify-center
      font-serif font-bold transition-all duration-200
      border-2 rounded-none
      before:absolute before:inset-0 before:border-2 before:border-shadow-600
      before:transform before:translate-x-1 before:translate-y-1 before:transition-transform
      hover:before:translate-x-0 hover:before:translate-y-0
      active:before:translate-x-2 active:before:translate-y-2
      focus:outline-none focus:ring-2 focus:ring-blood-500 focus:ring-offset-2 focus:ring-offset-darkstone-900
      disabled:opacity-50 disabled:cursor-not-allowed
      text-shadow-sm
    `;

    const variants = {
      primary: `
        bg-blood-700 border-blood-600 text-parchment-500
        hover:bg-blood-600 hover:border-blood-500
        active:bg-blood-800
        before:bg-shadow-800 before:border-shadow-600
      `,
      secondary: `
        bg-darkstone-700 border-darkstone-600 text-parchment-500
        hover:bg-darkstone-600 hover:border-darkstone-500
        active:bg-darkstone-800
        before:bg-shadow-800 before:border-shadow-600
      `,
      outline: `
        bg-transparent border-blood-700 text-blood-700
        hover:bg-blood-700 hover:text-parchment-500
        active:bg-blood-800
        before:bg-shadow-800 before:border-shadow-600
      `,
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

DarkFantasyButton.displayName = "DarkFantasyButton";

export { DarkFantasyButton };
