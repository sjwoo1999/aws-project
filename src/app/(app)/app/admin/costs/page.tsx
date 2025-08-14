"use client";
import { adminMonthlyCosts } from "@data/mock";

export default function Page() {
	const rows = adminMonthlyCosts;
	return (
		<div className="space-y-4">
			<h1 className="text-lg font-semibold text-slate-900">Costs</h1>
			<div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
				<table className="w-full text-left text-sm">
					<thead className="bg-slate-50 text-slate-600">
						<tr>
							<th className="px-4 py-2">Month</th>
							<th className="px-4 py-2">Provider</th>
							<th className="px-4 py-2">Amount (USD)</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((r, i) => (
							<tr key={i} className="border-t">
								<td className="px-4 py-2">{r.month}</td>
								<td className="px-4 py-2">{r.provider}</td>
								<td className="px-4 py-2">{r.amountUsd.toFixed(2)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}


