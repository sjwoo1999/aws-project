"use client";

import { DragEvent, useCallback, useRef, useState } from "react";

export default function UploadPane() {
	const [files, setFiles] = useState<File[]>([]);
	const [semester, setSemester] = useState("");
	const [week, setWeek] = useState("");
	const [topic, setTopic] = useState("");
	const dropRef = useRef<HTMLDivElement | null>(null);

	const onFiles = useCallback((incoming: FileList | null) => {
		if (!incoming) return;
		setFiles(Array.from(incoming));
	}, []);

	const onDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		onFiles(e.dataTransfer.files);
	};

	const onDragOver = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	const handleUpload = () => {
		alert(`업로드 더미\n파일 ${files.length}개\n학기:${semester}\n주차:${week}\n토픽:${topic}`);
	};

	return (
		<section className="rounded-2xl border border-slate-200 bg-white p-4">
			<h2 className="text-base font-semibold text-slate-900">파일 업로드</h2>
			<div
				ref={dropRef}
				onDrop={onDrop}
				onDragOver={onDragOver}
				className="mt-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center"
				role="region"
				aria-label="파일 드래그 앤 드롭"
			>
				<p className="text-sm text-slate-600">여기로 파일을 끌어오거나</p>
				<div className="mt-2">
					<label className="btn">
						<input
							type="file"
							multiple
							className="sr-only"
							onChange={(e) => onFiles(e.target.files)}
						/>
						파일 선택
					</label>
				</div>
				{files.length > 0 && (
					<p className="mt-2 text-xs text-slate-500">선택된 파일: {files.map((f) => f.name).join(", ")}</p>
				)}
			</div>

			<form className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3" onSubmit={(e) => e.preventDefault()}>
				<Field label="학기">
					<input value={semester} onChange={(e) => setSemester(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]" />
				</Field>
				<Field label="주차">
					<input value={week} onChange={(e) => setWeek(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]" />
				</Field>
				<Field label="토픽">
					<input value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]" />
				</Field>
			</form>

			<div className="mt-4">
				<button type="button" onClick={handleUpload} className="btn btn-primary">업로드</button>
			</div>
		</section>
	);
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
	return (
		<label className="block text-sm">
			<span className="block text-xs font-medium text-slate-700">{label}</span>
			<div className="mt-1">{children}</div>
		</label>
	);
}


