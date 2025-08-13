"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "default" | "secondary" | "outline" | "destructive" | "ghost" | "link";
	size?: "default" | "sm" | "lg" | "icon";
	asChild?: boolean;
};

export function buttonVariants(opts?: { variant?: ButtonProps["variant"]; size?: ButtonProps["size"]; className?: string }) {
	const { variant = "default", size = "default", className } = opts ?? {};
	const base =
		"inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-xl)] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] disabled:pointer-events-none disabled:opacity-50";
	const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
		default: "bg-[var(--color-primary-strong)] text-white hover:brightness-95",
		secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
		outline: "border border-slate-200 bg-transparent hover:bg-slate-50",
		destructive: "bg-red-600 text-white hover:bg-red-700",
		ghost: "hover:bg-slate-100",
		link: "text-[var(--color-primary-strong)] underline-offset-4 hover:underline",
	};
	const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
		default: "h-9 px-4 py-2",
		sm: "h-8 px-3",
		lg: "h-10 px-6",
		icon: "h-9 w-9 p-0",
	};
	return cn(base, variants[variant], sizes[size], className);
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return <Comp ref={ref as any} className={buttonVariants({ variant, size, className })} {...props} />;
	}
);

Button.displayName = "Button";


