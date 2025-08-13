"use client";

import { FormEvent, KeyboardEvent, useRef, useState } from "react";

export default function InputBar({ onSend }: { onSend?: (text: string) => void }) {
	const [value, setValue] = useState("");
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);

	const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			submit();
		}
	};

	const submit = () => {
		const text = value.trim();
		if (!text) return;
		onSend?.(text);
		setValue("");
		textareaRef.current?.focus();
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		submit();
	};

	return (
		<form onSubmit={handleSubmit} className="sticky bottom-0 bg-white pt-2">
			<div className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-white p-2">
				<button
					type="button"
					className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
					aria-label="첨부"
				>
					<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
						<path d="M7 13l5-5 5 5v4a4 4 0 11-8 0v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
					</svg>
				</button>
				<label className="sr-only" htmlFor="chat-input">메시지 입력</label>
				<textarea
					ref={textareaRef}
					id="chat-input"
					rows={1}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder="메시지를 입력하세요 (Enter=전송, Shift+Enter=줄바꿈)"
					className="min-h-[2.25rem] max-h-40 w-full resize-none rounded-md px-2 py-1.5 text-sm focus-visible:outline-none"
				/>
				<button type="submit" className="btn btn-primary">
					전송
				</button>
			</div>
		</form>
	);
}


