"use client";
import Link from "next/link";
import { conversations, courses } from "@data/mock";
import { formatDate, trunc } from "@/../lib/format";

export default function Page() {
	const items = conversations.slice().reverse();
	return (
		<div className="space-y-4">
			<h1 className="text-lg font-semibold text-slate-900">최근 대화</h1>
			<ul className="divide-y rounded-2xl border border-slate-200 bg-white">
				{items.map((c) => {
					const course = courses.find((x) => x.id === c.courseId);
					const last = c.messages[c.messages.length - 1];
					return (
						<li key={c.id} className="p-4 flex items-center gap-3">
							<span className="inline-flex text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{course?.name}</span>
							<div className="min-w-0">
								<p className="text-sm text-slate-900">{trunc(last.content, 64)}</p>
								<p className="text-xs text-slate-500">{formatDate(c.createdAt)}</p>
							</div>
							<Link href={`/app/courses/${c.courseId}/chat`} className="ml-auto text-sm text-[var(--color-primary)] hover:underline">열기</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}


