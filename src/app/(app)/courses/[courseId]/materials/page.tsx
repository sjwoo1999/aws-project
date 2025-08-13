import Link from "next/link";

const filters = {
	weeks: ["주차 01", "주차 02", "주차 03", "주차 04"],
	types: ["노트", "슬라이드", "실습", "FAQ"],
	topics: ["선형대수", "회귀", "최적화"],
};

const items = [
	{ id: "f1", name: "주차 03 — 선형대수 노트.pdf", updated: "2일 전" },
	{ id: "f2", name: "주차 04 — 회귀 실습.ipynb", updated: "1일 전" },
	{ id: "f3", name: "주차 04 — 슬라이드.pdf", updated: "오늘" },
];

export default function MaterialsPage() {
	return (
		<div className="space-y-6">
			<header>
				<h1 className="text-lg sm:text-xl font-semibold text-slate-900">자료</h1>
				<p className="text-sm text-slate-500">필터는 UI만 동작합니다</p>
			</header>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
				<Select label="주차" options={filters.weeks} />
				<Select label="유형" options={filters.types} />
				<Select label="토픽" options={filters.topics} />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{items.map((it) => (
					<Link key={it.id} href={`/app/courses/123/materials/${it.id}`} className="rounded-2xl border border-slate-200 bg-white p-4">
						<div className="aspect-video rounded-lg bg-slate-100" />
						<div className="mt-3 text-sm text-slate-900">{it.name}</div>
						<div className="text-xs text-slate-500">업데이트: {it.updated}</div>
					</Link>
				))}
			</div>
		</div>
	);
}

function Select({ label, options }: { label: string; options: string[] }) {
	return (
		<label className="block">
			<span className="block text-xs font-medium text-slate-700">{label}</span>
			<select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]">
				{options.map((o) => (
					<option key={o}>{o}</option>
				))}
			</select>
		</label>
	);
}


