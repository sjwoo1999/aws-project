"use client";

import { useState } from "react";

export default function TopicChips({ topics = [] as string[], onChange }: { topics?: string[]; onChange?: (selected: string[]) => void }) {
	const [selected, setSelected] = useState<string[]>([]);

	const toggle = (topic: string) => {
		const next = selected.includes(topic)
			? selected.filter((t) => t !== topic)
			: [...selected, topic];
		setSelected(next);
		onChange?.(next);
	};

	return (
		<div className="flex flex-wrap gap-2">
			{topics.map((t) => {
				const active = selected.includes(t);
				return (
					<button
						key={t}
						onClick={() => toggle(t)}
						className={`px-3 py-1.5 rounded-full text-sm border ${
							active ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/5" : "border-slate-200 text-slate-600 bg-white"
						} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]`}
						aria-pressed={active}
					>
						{t}
					</button>
				);
			})}
		</div>
	);
}


