"use client";

import { useState } from "react";

type Preset = "concept" | "code" | "math";

export default function PresetSwitch({ onChange }: { onChange?: (preset: Preset) => void }) {
	const [preset, setPreset] = useState<Preset>("concept");

	const handleChange = (next: Preset) => {
		setPreset(next);
		onChange?.(next);
	};

	return (
		<div role="tablist" aria-label="프리셋 선택" className="inline-flex rounded-xl border border-slate-200 bg-white p-1">
			<button
				role="tab"
				aria-selected={preset === "concept"}
				onClick={() => handleChange("concept")}
				className={`px-3 py-1.5 rounded-lg text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
					preset === "concept" ? "bg-slate-100 text-slate-900" : "text-slate-600"
				}`}
			>
				개념
			</button>
			<button
				role="tab"
				aria-selected={preset === "code"}
				onClick={() => handleChange("code")}
				className={`px-3 py-1.5 rounded-lg text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
					preset === "code" ? "bg-slate-100 text-slate-900" : "text-slate-600"
				}`}
			>
				코드
			</button>
			<button
				role="tab"
				aria-selected={preset === "math"}
				onClick={() => handleChange("math")}
				className={`px-3 py-1.5 rounded-lg text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
					preset === "math" ? "bg-slate-100 text-slate-900" : "text-slate-600"
				}`}
			>
				수식
			</button>
		</div>
	);
}


