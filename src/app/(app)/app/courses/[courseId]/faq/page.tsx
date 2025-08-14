"use client";
import Link from "next/link";
import { useState } from "react";

type Tab = "concept" | "code" | "math";

const items = [
	{ id: "q1", title: "숙제 2 제출 규칙", summary: "제출 포맷과 마감 관련 안내", views: 231, sources: 3 },
	{ id: "q2", title: "행렬 미분 규칙", summary: "기본 미분 규칙과 예시", views: 180, sources: 2 },
	{ id: "q3", title: "PyTorch 텐서 브로드캐스팅", summary: "브로드캐스팅 규칙 설명", views: 90, sources: 1 },
];

export default function FAQPage() {
	const [tab, setTab] = useState<Tab>("concept");
	const [sort, setSort] = useState("views");

	return (
		<div className="space-y-6">
			<header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
				<h1 className="text-lg sm:text-xl font-semibold text-slate-900">FAQ</h1>
				<div className="flex items-center gap-3">
					<Tabs value={tab} onChange={setTab} />
					<label className="inline-flex items-center gap-2 text-sm">
						<span className="text-slate-600">정렬</span>
						<select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]">
							<option value="views">조회수</option>
							<option value="latest">최신</option>
						</select>
					</label>
				</div>
			</header>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{items.map((it) => (
					<Link key={it.id} href={`/app/courses/123/faq/${it.id}`} className="rounded-2xl border border-slate-200 bg-white p-4">
						<h3 className="text-sm font-semibold text-slate-900">{it.title}</h3>
						<p className="mt-1 text-sm text-slate-600">{it.summary}</p>
						<div className="mt-3 text-xs text-slate-500">조회수 {it.views} · 출처 {it.sources}</div>
					</Link>
				))}
			</div>
		</div>
	);
}

function Tabs({ value, onChange }: { value: Tab; onChange: (v: Tab) => void }) {
	return (
		<div role="tablist" aria-label="FAQ 타입" className="inline-flex rounded-xl border border-slate-200 bg-white p-1">
			{([
				{ key: "concept", label: "개념" },
				{ key: "code", label: "코드" },
				{ key: "math", label: "수식" },
			] as const).map((t) => (
				<button
					key={t.key}
					role="tab"
					aria-selected={value === t.key}
					onClick={() => onChange(t.key)}
					className={`px-3 py-1.5 rounded-lg text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
						value === t.key ? "bg-slate-100 text-slate-900" : "text-slate-600"
					}`}
				>
					{t.label}
				</button>
			))}
		</div>
	);
}


