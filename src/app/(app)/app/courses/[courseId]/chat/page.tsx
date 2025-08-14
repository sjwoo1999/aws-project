"use client";

import PresetSwitch from "@components/chat/PresetSwitch";
import TopicChips from "@components/chat/TopicChips";
import ChatStream from "@components/chat/ChatStream";
import InputBar from "@components/chat/InputBar";
import CitationsPanel from "@components/shared/CitationsPanel";
import { useParams } from "next/navigation";
import { courses } from "@data/mock";

export default function ChatPage() {
    const { courseId } = useParams<{ courseId: string }>();
    const topics = ["최근 강의", "실습", "시험 대비", "과제"];
    const course = courses.find((c) => c.id === courseId);

	return (
		<div className="grid grid-cols-1 2xl:grid-cols-[1fr_20rem] gap-4">
			<section className="min-h-[60vh]">
                <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4" aria-labelledby="course-chat-title">
					<div>
                        <h1 id="course-chat-title" className="text-lg sm:text-xl font-semibold text-slate-900">{course ? `과목명: ${course.name}` : "과목 채팅"}</h1>
						<p className="text-sm text-slate-500">과목 컨텍스트에 특화된 Q&A</p>
					</div>
					<div className="flex items-center gap-3">
						<PresetSwitch />
					</div>
				</header>

				<TopicChips topics={topics} />

                <div className="mt-6 space-y-4">
                    <ChatStream courseId={courseId} />
					<InputBar />
				</div>
			</section>

			{/* Desktop citations panel is inside component; here for layout spacing */}
            <CitationsPanel courseId={courseId} />
		</div>
	);
}


