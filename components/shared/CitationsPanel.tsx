"use client";

import { useChatStore } from "../../store/chat";
import { useEffect, useRef } from "react";

export default function CitationsPanel() {
	const { openCitations, closeCitationsPanel } = useChatStore();
	const sheetRef = useRef<HTMLDivElement | null>(null);

	// Focus management and close on ESC in sheet mode
	useEffect(() => {
		if (!openCitations) return;
		const el = sheetRef.current;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeCitationsPanel();
			if (e.key === "Tab" && el) {
				const focusable = el.querySelectorAll<HTMLElement>(
					"a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])"
				);
				if (focusable.length === 0) return;
				const first = focusable[0];
				const last = focusable[focusable.length - 1];
				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last?.focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first?.focus();
				}
			}
		};
		document.addEventListener("keydown", onKey);
		// Set initial focus
		setTimeout(() => {
			const firstButton = el?.querySelector<HTMLElement>("button, a");
			firstButton?.focus();
		}, 0);
		return () => document.removeEventListener("keydown", onKey);
	}, [openCitations, closeCitationsPanel]);

	return (
		<>
			{/* Desktop side panel */}
			<aside className="hidden lg:block w-80 border-l border-slate-200 bg-white p-4">
				<h3 className="text-sm font-semibold text-slate-900">출처</h3>
				<ul className="mt-3 space-y-2 text-sm text-slate-700">
					<li>주차 03: 선형대수 — 강의노트.pdf</li>
					<li>FAQ: 숙제 2 제출 방식</li>
				</ul>
			</aside>

			{/* Mobile bottom sheet */}
			{openCitations && (
				<div className="fixed inset-0 z-50 lg:hidden">
					<div className="absolute inset-0 bg-black/40" onClick={closeCitationsPanel} aria-hidden="true" />
					<div
						ref={sheetRef}
						role="dialog"
						aria-modal="true"
						aria-labelledby="citations-title"
						className="absolute inset-x-0 bottom-0 bg-white rounded-t-2xl shadow-2xl p-4 max-h-[75vh] overflow-y-auto"
					>
						<div className="flex items-center justify-between">
							<h3 id="citations-title" className="text-sm font-semibold text-slate-900">출처</h3>
							<button
								onClick={closeCitationsPanel}
								className="rounded-md p-2 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
								aria-label="출처 닫기"
							>
								<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
									<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
								</svg>
							</button>
						</div>
						<ul className="mt-3 space-y-2 text-sm text-slate-700">
							<li>주차 03: 선형대수 — 강의노트.pdf</li>
							<li>FAQ: 숙제 2 제출 방식</li>
						</ul>
					</div>
				</div>
			)}
		</>
	);
}


