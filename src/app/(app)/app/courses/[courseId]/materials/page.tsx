"use client";
import Link from "next/link";
import { materials } from "@data/mock";
import { useParams } from "next/navigation";
import { formatDate } from "@/../lib/format";

function deriveFilters(titles: string[], types: string[]) {
    const weekRegex = /(주차\s*\d{1,2})/;
    const weeks = Array.from(new Set(
        titles.map((t) => (t.match(weekRegex)?.[1] ?? null)).filter(Boolean) as string[]
    ));
    const derivedTopics = Array.from(new Set(
        titles.map((t) => {
            const parts = t.split("—");
            const after = (parts[1] ?? parts[0]).trim();
            return (after.split(" ")[0] || after).trim();
        })
    ));
    return {
        weeks,
        types: Array.from(new Set(types)),
        topics: derivedTopics,
    };
}

// removed local items; use mock data

export default function MaterialsPage() {
    const { courseId } = useParams<{ courseId: string }>();
    const itemsForCourse = materials.filter(m => m.courseId === courseId);
    const derived = deriveFilters(itemsForCourse.map(m => m.title), itemsForCourse.map(m => m.type));
    return (
        <div className="space-y-6">
			<header>
				<h1 className="text-lg sm:text-xl font-semibold text-slate-900">자료</h1>
				<p className="text-sm text-slate-500">필터는 UI만 동작합니다</p>
			</header>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Select label="주차" options={derived.weeks} />
                <Select label="유형" options={derived.types} />
                <Select label="토픽" options={derived.topics} />
			</div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {itemsForCourse.map((it) => (
                    <Link key={it.id} href={`/app/courses/${courseId}/materials/${it.id}`} className="rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="aspect-video rounded-lg bg-slate-100" />
                        <div className="mt-3 text-sm text-slate-900">{it.title}</div>
                        <div className="text-xs text-slate-500">업데이트: {formatDate(it.updatedAt)}</div>
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


