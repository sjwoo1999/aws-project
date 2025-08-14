"use client";
import { adminKPI } from "@data/mock";

export default function Page() {
	return (
		<div className="space-y-4">
			<h1 className="text-lg font-semibold text-slate-900">Analytics</h1>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
				<div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm">
					<p className="text-slate-500">Files</p>
					<p className="mt-1 text-slate-900 font-semibold">{adminKPI.totalFiles}</p>
				</div>
				<div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm">
					<p className="text-slate-500">Tokens</p>
					<p className="mt-1 text-slate-900 font-semibold">{adminKPI.totalTokens.toLocaleString()}</p>
				</div>
				<div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm">
					<p className="text-slate-500">Avg Latency</p>
					<p className="mt-1 text-slate-900 font-semibold">{adminKPI.avgLatencyMs} ms</p>
				</div>
				<div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm">
					<p className="text-slate-500">Failures</p>
					<p className="mt-1 text-slate-900 font-semibold">{adminKPI.failures}</p>
				</div>
			</div>
		</div>
	);
}


