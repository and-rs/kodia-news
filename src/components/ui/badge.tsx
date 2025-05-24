import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      color: {
        default: "",
        red: "bg-red-400/20 border-red-600 text-red-700 dark:text-red-300",
        gray: "bg-gray-400/20 border-gray-600 text-gray-700 dark:text-gray-300",
        blue: "bg-blue-400/20 border-blue-600 text-blue-700 dark:text-blue-300",
        green:
          "bg-green-400/20 border-lime-600 text-green-700 dark:text-green-300",
        yellow:
          "bg-yellow-400/20 border-yellow-600 text-yellow-700 dark:text-yellow-300",
        purple:
          "bg-purple-400/20 border-purple-600 text-purple-700 dark:text-purple-300",
      },
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        tag: "text-xs h-fit font-mono",
      },
    },
    defaultVariants: {
      variant: "default",
      color: "default",
    },
  },
)

function Badge({
  className,
  variant,
  color,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, color }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
