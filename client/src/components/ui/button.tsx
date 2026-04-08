import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[0.08em] transition-[transform,box-shadow,background-color,color,border-color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-slate-900/90 bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] text-white shadow-[0_18px_50px_-24px_rgba(15,23,42,0.55)] hover:-translate-y-0.5 hover:border-slate-700 hover:shadow-[0_22px_56px_-24px_rgba(15,23,42,0.62)] active:translate-y-0",
        destructive:
          "border border-red-800/60 bg-red-600 text-white shadow-[0_16px_40px_-24px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 hover:bg-red-500",
        outline:
          "border border-slate-300/80 bg-white/80 text-slate-950 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.22)] hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white",
        secondary:
          "border border-slate-200 bg-slate-100 text-slate-900 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.25)] hover:-translate-y-0.5 hover:bg-slate-200",
        ghost: "border border-transparent hover:bg-accent hover:text-accent-foreground",
        link: "rounded-none border-none px-0 py-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-10 px-5 py-2.5",
        sm: "min-h-9 px-4 text-xs",
        lg: "min-h-12 px-7 text-sm sm:text-[0.95rem]",
        icon: "h-10 w-10 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
