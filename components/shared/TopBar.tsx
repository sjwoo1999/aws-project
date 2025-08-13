"use client";

import Link from "next/link";
import { useUIStore } from "../../store/ui";
import { useCallback, useRef } from "react";

export default function TopBar() {
	const { openDrawer, toggleDrawer } = useUIStore();
	const menuButtonRef = useRef<HTMLButtonElement | null>(null);

	const handleMenuClick = useCallback(() => {
		toggleDrawer();
	}, [toggleDrawer]);

	return (
		<header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-3">
				<div className="flex items-center gap-2">
					<button
						ref={menuButtonRef}
						onClick={handleMenuClick}
						className="js-hamburger inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] lg:hidden"
						aria-label="메뉴 열기"
						aria-controls="app-drawer"
						aria-expanded={openDrawer}
					>
						<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" className="pointer-events-none">
							<path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
						</svg>
					</button>
					<Link href="/app" className="flex items-center gap-2" aria-label="Majorbot 홈">
						<div className="h-6 w-6 rounded-lg bg-[var(--color-primary)]" />
						<span className="text-sm font-semibold text-slate-900">Majorbot</span>
					</Link>
				</div>
				<div className="flex-1 flex justify-center">
					<label className="relative w-full max-w-xl">
						<span className="sr-only">전역 검색</span>
						<input
							type="search"
							placeholder="과목, 자료, FAQ 검색"
							className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
							inputMode="search"
							aria-label="전역 검색"
						/>
					</label>
				</div>
				<div className="flex items-center">
					<button
						className="h-8 w-8 rounded-full bg-slate-300/80 border border-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
						aria-label="계정 메뉴"
					/>
				</div>
			</div>
		</header>
	);
}


