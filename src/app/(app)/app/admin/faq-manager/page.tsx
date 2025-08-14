"use client";
import { faqClusters } from "@data/mock";

export default function Page() {
	const rows = faqClusters.flatMap((c) => c.items.map((i) => ({...i, courseId: c.courseId, category: c.category})));
	return (
		<div className="space-y-4">
			<h1 className="text-lg font-semibold text-slate-900">FAQ Manager</h1>
			<div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
				<table className="w-full text-left text-sm">
					<thead className="bg-slate-50 text-slate-600">
						<tr>
							<th className="px-4 py-2">Title</th>
							<th className="px-4 py-2">Category</th>
							<th className="px-4 py-2">Course</th>
							<th className="px-4 py-2">Views</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((r) => (
							<tr key={r.id} className="border-t">
								<td className="px-4 py-2">{r.title}</td>
								<td className="px-4 py-2">{r.category}</td>
								<td className="px-4 py-2">{r.courseId}</td>
								<td className="px-4 py-2">{r.views}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}


