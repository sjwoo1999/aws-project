"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
	label: string;
	href: string;
};

const navItems: NavItem[] = [
	{ label: "Courses", href: "/app/courses" },
	{ label: "History", href: "/app/account/history" },
	{ label: "FAQ", href: "/app/faq" },
];

export default function AppSidebar() {
	const pathname = usePathname();

	return (
		<nav
			id="app-sidebar"
			aria-label="주요 메뉴"
			className="h-full w-72 xl:w-80 border-r border-slate-200 bg-white"
		>
			<ul className="p-4 space-y-1">
				{navItems.map((item) => {
					const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
					return (
						<li key={item.href}>
							<Link
								href={item.href}
								className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 ${
									isActive ? "bg-slate-100 text-slate-900" : "text-slate-600"
								}`}
								aria-current={isActive ? "page" : undefined}
							>
								<span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
								<span>{item.label}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}


