'use client';

import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, variant, ...props }: { className?: string; variant?: string; children?: React.ReactNode }) {
    const variants: Record<string, string> = {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "text-foreground",
    }
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variants[variant || "default"] || variants.default,
                className
            )}
            {...props}
        />
    )
}

export { Badge }
