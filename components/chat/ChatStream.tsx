"use client";

import { useChatStore } from "../../store/chat";

type Message = {
	id: string;
	role: "user" | "assistant";
	content: string;
};

const DUMMY: Message[] = [
	{ id: "m1", role: "user", content: "주차 3 선형대수 핵심 개념을 요약해줘" },
	{
		id: "m2",
		role: "assistant",
		content:
			"선형대수 주차 3의 핵심은 벡터공간, 선형결합, 기저와 차원입니다. 예시와 함께 간단히 설명드릴게요.",
	},
	{
		id: "m3",
		role: "assistant",
		content: "A x = b 형태의 해 존재성과 기저 변경의 의미도 다룹니다.",
	},
];

export default function ChatStream() {
	const { toggleCitationsPanel } = useChatStore();

	return (
		<div className="space-y-4">
			{DUMMY.map((m) => (
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


