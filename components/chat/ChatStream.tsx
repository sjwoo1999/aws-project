"use client";

import { useChatStore } from "../../store/chat";
import { conversations } from "@data/mock";

type Message = {
	id: string;
	role: "user" | "assistant";
	content: string;
};

export default function ChatStream({ courseId }: { courseId?: string }) {
	const { toggleCitationsPanel } = useChatStore();

	const selected = courseId ? conversations.find((c) => c.courseId === courseId) : undefined;
	const messages: Message[] = selected
		? selected.messages.map((m) => ({ id: m.id, role: m.role, content: m.content }))
		: [
			{ id: "m1", role: "user", content: "이 과목 핵심 개념을 요약해줘" },
			{ id: "m2", role: "assistant", content: "핵심 토픽과 예시 중심으로 정리해 드릴게요." },
		];

	return (
		<div className="space-y-4">
			{messages.map((m) => (
				<div key={m.id} className="flex">
					<div className={`max-w-full sm:max-w-3xl rounded-2xl px-4 py-3 border ${m.role === "assistant" ? "bg-white border-slate-200" : "bg-[var(--color-primary)]/5 border-[var(--color-primary)]/20"}`}>
						<p className={m.role === "assistant" ? "text-slate-800" : "text-slate-800"}>{m.content}</p>
						{m.role === "assistant" && (
							<div className="mt-3 flex items-center gap-2">
								<button
									onClick={toggleCitationsPanel}
									className="rounded-md p-1.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
									aria-label="출처 보기"
								>
									<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
										<path d="M4 7h16v12H4z" stroke="currentColor" strokeWidth="2" />
										<path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" />
									</svg>
								</button>
								<button className="rounded-md p-1.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]" aria-label="복사">
									<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
										<path d="M9 9h10v10H9z" stroke="currentColor" strokeWidth="2" />
										<path d="M5 5h10v10" stroke="currentColor" strokeWidth="2" />
									</svg>
								</button>
								<button className="rounded-md p-1.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]" aria-label="북마크">
									<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
										<path d="M6 4h12v16l-6-4-6 4V4z" stroke="currentColor" strokeWidth="2" />
									</svg>
								</button>
								<div className="ml-auto flex items-center gap-1">
									<button className="rounded-md p-1.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]" aria-label="유용함">
										<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
											<path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" />
										</svg>
									</button>
									<button className="rounded-md p-1.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]" aria-label="도움 안됨">
										<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
											<path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="2" />
										</svg>
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
}


