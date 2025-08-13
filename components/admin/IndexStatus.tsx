"use client";

type FileProgress = {
	name: string;
	progress: number; // 0-100
	status: "pending" | "processing" | "done" | "failed";
};

const files: FileProgress[] = [
	{ name: "week03-notes.pdf", progress: 100, status: "done" },
	{ name: "week04-lab.ipynb", progress: 65, status: "processing" },
	{ name: "faq-update.md", progress: 0, status: "failed" },
];

export default function IndexStatus() {
	const retry = (name: string) => {
		alert(`재시도 더미: ${name}`);
	};

	return (
		<section className="rounded-2xl border border-slate-200 bg-white p-4">
			<h2 className="text-base font-semibold text-slate-900">인덱싱 상태</h2>
			<ul className="mt-3 space-y-3">
				{files.map((f) => (
					<li key={f.name} className="">
						<div className="flex items-center justify-between">
							<span className="text-sm text-slate-800">{f.name}</span>
							<span className="text-xs text-slate-500">{f.status}</span>
						</div>
						<div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-100">
							<div
								className={`h-full ${
									f.status === "failed"
										? "bg-red-400"
										: f.status === "done"
										? "bg-emerald-500"
										: "bg-[var(--color-primary)]"
								}`}
								style={{ width: `${f.progress}%` }}
							/>
						</div>
						{f.status === "failed" && (
							<div className="mt-2 flex items-center justify-between text-xs">
								<p className="text-red-600">실패: 토큰 길이 초과(샘플)</p>
								<button onClick={() => retry(f.name)} className="rounded-md px-2 py-1 bg-red-50 text-red-700 hover:bg-red-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
									재시도
								</button>
							</div>
						)}
					</li>
				))}
			</ul>
		</section>
	);
}


