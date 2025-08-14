"use client";

import PresetSwitch from "@components/chat/PresetSwitch";
import TopicChips from "@components/chat/TopicChips";
import ChatStream from "@components/chat/ChatStream";
import InputBar from "@components/chat/InputBar";
import CitationsPanel from "@components/shared/CitationsPanel";

export default function ChatPage() {
	const topics = ["주차 01", "주차 02", "주차 03", "기말 대비", "과제 2"];

	return (
		<div className="grid grid-cols-1 2xl:grid-cols-[1fr_20rem] gap-4">
			<section className="min-h-[60vh]">
				<header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
					<div>
						<h1 className="text-lg sm:text-xl font-semibold text-slate-900">과목명: 딥러닝 개론</h1>
						<p className="text-sm text-slate-500">과목 컨텍스트에 특화된 Q&A</p>
					</div>
					<div className="flex items-center gap-3">
						<PresetSwitch />
					</div>
				</header>

				<TopicChips topics={topics} />

				<div className="mt-6 space-y-4">
					<ChatStream />
					<InputBar />
				</div>
			</section>

			{/* Desktop citations panel is inside component; here for layout spacing */}
			<CitationsPanel />
		</div>
	);
}


