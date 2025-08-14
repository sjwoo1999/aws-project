"use client";
import Link from "next/link";
import { saved, courses } from "@data/mock";

export default function Page() {
	return (
		<div className="space-y-4">
			<h1 className="text-lg font-semibold text-slate-900">저장됨</h1>
			<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
				{saved.map((s) => {
					const course = courses.find((c) => c.id === s.courseId);
					return (
						<li key={s.id} className="rounded-2xl border border-slate-200 bg-white p-4">
							<p className="text-sm text-slate-900">{s.title}</p>
							<p className="text-xs text-slate-500 mt-1">{course?.name} · {s.kind}</p>
							<Link href={s.link} className="mt-3 inline-block text-sm text-[var(--color-primary)] hover:underline">열기</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}


