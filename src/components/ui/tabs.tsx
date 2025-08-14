"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;
export const TabsList = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List className={cn("inline-flex rounded-xl border border-slate-200 bg-white p-1", className)} {...props} />
);
export const TabsTrigger = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger className={cn("px-3 py-1.5 rounded-lg text-sm data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900 text-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]", className)} {...props} />
);
export const TabsContent = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content className={cn("mt-3", className)} {...props} />
);


