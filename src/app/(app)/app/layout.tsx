"use client";

import TopBar from "@components/shared/TopBar";
import AppSidebar from "@components/shared/AppSidebar";
import { useEffect, useRef } from "react";
import { useUIStore } from "@store/ui";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-dvh">
			<TopBar />
			<div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[18rem_1fr]">
				<aside className="hidden lg:block sticky top-14 h-[calc(100dvh-56px)]">
					<AppSidebar />
				</aside>
				<MainWithDrawer>{children}</MainWithDrawer>
			</div>
		</div>
	);
}

function MainWithDrawer({ children }: { children: React.ReactNode }) {
	const { openDrawer, closeDrawer } = useUIStore();
	const dialogRef = useRef<HTMLDivElement | null>(null);

	// Focus-trap when drawer is open
	useEffect(() => {
		if (!openDrawer) return;
		const dialog = dialogRef.current;
		if (!dialog) return;

		const previouslyFocused = document.activeElement as HTMLElement | null;
		const focusable = dialog.querySelectorAll<HTMLElement>(
			"a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])"
		);
		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		first?.focus();

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				e.preventDefault();
				closeDrawer();
			}
			if (e.key === "Tab" && focusable.length > 0) {
				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last?.focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first?.focus();
				}
			}
		};

		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			// Try to restore focus to hamburger button
			const hamburger = document.querySelector<HTMLButtonElement>(".js-hamburger");
			hamburger?.focus();
			previouslyFocused?.blur?.();
		};
	}, [openDrawer, closeDrawer]);

	return (
		<main className="min-h-[calc(100dvh-56px)] px-4 sm:px-6 lg:px-8 py-6">
			{children}
			{/* Mobile Drawer */}
				{openDrawer && (
					<div id="app-drawer" className="fixed inset-0 z-50 lg:hidden" aria-hidden={!openDrawer}>
					<div
						className="absolute inset-0 bg-black/40"
						onClick={closeDrawer}
						aria-hidden="true"
					/>
						<div
						ref={dialogRef}
						role="dialog"
						aria-modal="true"
						aria-labelledby="app-drawer-title"
						className="absolute inset-y-0 left-0 w-80 max-w-[85%] bg-white shadow-xl outline-none"
						tabIndex={-1}
					>
						<h2 id="app-drawer-title" className="sr-only">
							사이드바 메뉴
						</h2>
						<div className="h-14 border-b border-slate-200 flex items-center justify-between px-3">
							<span className="text-sm font-medium">메뉴</span>
							<button
								onClick={closeDrawer}
								className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
								aria-label="메뉴 닫기"
							>
								<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
									<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
								</svg>
							</button>
						</div>
						<div className="h-[calc(100%-56px)] overflow-y-auto">
							<AppSidebar />
						</div>
					</div>
				</div>
			)}
		</main>
	);
}


