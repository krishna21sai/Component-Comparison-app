
import React from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";

interface SandboxPreviewProps {
  code: string;
  library: string;
}

const SHADCN_UTILS = `import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

const SHADCN_CARD = `'use client';
import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-xl border bg-card text-card-foreground shadow", className)} {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`;

const SHADCN_BUTTON = `'use client';
import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }`;

const SHADCN_INPUT = `'use client';
import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }`;

const SHADCN_BADGE = `'use client';
import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80", className)} {...props} />
  )
})
Badge.displayName = "Badge"

export { Badge }`;

const SHADCN_AVATAR = `'use client';
import * as React from "react"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props} />
))
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <img ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
))
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)} {...props} />
))
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback }`;

const SHADCN_LABEL = `'use client';
import * as React from "react"
import { cn } from "@/lib/utils"

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }`;

const SHADCN_CHECKBOX = `'use client';
import * as React from "react"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <input
    type="checkbox"
    ref={ref}
    className={cn(
      "peek-h-4 peek-w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  />
))
Checkbox.displayName = "Checkbox"

export { Checkbox }`;

const SHADCN_SWITCH = `'use client';
import * as React from "react"
import { cn } from "@/lib/utils"

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <button
    role="switch"
    type="button"
    ref={ref}
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-input data-[state=checked]:bg-primary",
      className
    )}
    {...props}
  >
    <span
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </button>
))
Switch.displayName = "Switch"

export { Switch }`;

const SHADCN_SEPARATOR = `'use client';
import * as React from "react"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef(({ className, orientation = "horizontal", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    {...props}
  />
))
Separator.displayName = "Separator"

export { Separator }`;

const SHADCN_TEXTAREA = `'use client';
import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }`;

const SHADCN_SKELETON = `import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }`;


export default function SandboxPreview({ code, library }: SandboxPreviewProps) {

  const getDependencies = (lib: string) => {
    const common = {
      "lucide-react": "latest",
      "clsx": "latest",
      "tailwind-merge": "latest",
    };

    switch (lib) {
      case 'mui':
        return {
          ...common,
          "@mui/material": "latest",
          "@mui/icons-material": "latest",
          "@emotion/react": "latest",
          "@emotion/styled": "latest",
        };
      case 'antd':
        return {
          ...common,
          "antd": "5.13.2",
          "@ant-design/icons": "latest",
          "dayjs": "latest",
          "rc-picker": "latest",
          "rc-util": "latest",
          "@rc-component/picker": "latest",
          "moment": "latest",
        };
      case 'chakra':
        return {
          ...common,
          "@chakra-ui/react": "latest", // Restore v3 for generated code compatibility
          "@emotion/react": "^11.11.0",
          "@emotion/styled": "^11.11.0",
          "framer-motion": "^10.16.4",
          "react-icons": "latest",
        };
      case 'shadcn':
      default:
        return common;
    }
  };

  const css = `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
}

.bg-background { background-color: white; }
.text-foreground { color: black; }
.border { border: 1px solid #e2e8f0; }
.rounded-xl { border-radius: 0.75rem; }
.shadow { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }
.p-6 { padding: 1.5rem; }
  `;

  return (
    <SandpackProvider
      template="react-ts"
      theme={monokaiPro}
      files={{
        "/App.tsx": library === 'chakra'
          ? `import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
               import GeneratedComponent from './GeneratedComponent';
               
               export default function App() {
                   return (
                       <ChakraProvider value={defaultSystem}>
                           <div style={{ padding: '0', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                               <GeneratedComponent />
                           </div>
                       </ChakraProvider>
                   );
               }`
          : `import GeneratedComponent from './GeneratedComponent';
               
               export default function App() {
                   return (
                       <div style={{ padding: '0', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                           <GeneratedComponent />
                       </div>
                   );
               }`,
        "/GeneratedComponent.tsx": code,
        "/lib/utils.ts": SHADCN_UTILS,
        "/components/ui/card.tsx": SHADCN_CARD,
        "/components/ui/button.tsx": SHADCN_BUTTON,
        "/components/ui/input.tsx": SHADCN_INPUT,
        "/components/ui/badge.tsx": SHADCN_BADGE,
        "/components/ui/avatar.tsx": SHADCN_AVATAR,
        "/components/ui/label.tsx": SHADCN_LABEL,
        "/components/ui/checkbox.tsx": SHADCN_CHECKBOX,
        "/components/ui/switch.tsx": SHADCN_SWITCH,
        "/components/ui/separator.tsx": SHADCN_SEPARATOR,
        "/components/ui/textarea.tsx": SHADCN_TEXTAREA,
        "/components/ui/skeleton.tsx": SHADCN_SKELETON,
        "/tsconfig.json": JSON.stringify({
          compilerOptions: {
            baseUrl: ".",
            paths: {
              "@/*": ["./*"],
            },
          },
        }, null, 2),
        "/styles.css": css,
      }}
      customSetup={{
        dependencies: getDependencies(library),
      }}
      options={{
        externalResources: ["https://cdn.tailwindcss.com"],
      }}
    >
      <SandpackLayout style={{ height: "500px", width: "500px", borderRadius: "4px" }}>
        {/* <SandpackFileExplorer /> */}
        <SandpackPreview style={{ height: "100%" }} showRefreshButton={false} showOpenInCodeSandbox={false} />
      </SandpackLayout>
    </SandpackProvider>
  );
}
