"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionCard from "@components/shared/SectionCard";
import { courses, materials, faqClusters } from "@data/mock";
import { formatDate } from "@/../lib/format";
import { notFound, useParams } from "next/navigation";

export default function CourseOverviewPage() {
    const { courseId } = useParams<{ courseId: string }>();
    const course = courses.find((c) => c.id === courseId);
	if (!course) return notFound();

    const mats = materials.filter((m) => m.courseId === course.id).slice(0, 3);
    const faq = faqClusters.find((f) => f.courseId === course.id)?.items.slice(0, 3) ?? [];

	return (
		<div className="space-y-6">
			<header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
				<div>
					<h1 className="text-lg sm:text-xl font-semibold text-slate-900">{course.name}</h1>
					<p className="text-sm text-slate-500">과목 허브 — 공지, 자료, FAQ, 업데이트</p>
				</div>
				<div className="flex gap-2">
                    <Button asChild><Link href={`/app/courses/${course.id}/chat`}>질문하기</Link></Button>
                    <Button variant="outline" asChild><Link href={`/app/courses/${course.id}/materials`}>자료 열기</Link></Button>
                    <Button variant="outline" asChild><Link href={`/app/courses/${course.id}/faq`}>FAQ 보기</Link></Button>
				</div>
			</header>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				<SectionCard title="최근 공지" subtitle="최신 공지 사항">
					<ul className="list-disc pl-5 space-y-1">
						{mats.map((m) => (
							<li key={m.id}>{m.title} · {formatDate(m.updatedAt)}</li>
						))}
					</ul>
				</SectionCard>
				<SectionCard
					title="주요 자료"
					subtitle="강의노트/실습노트"
					cta={<Link href={`/app/courses/${course.id}/materials`} className="btn">전체 보기</Link>}
				>
					<ul className="space-y-1">
						{mats.map((m) => (
							<li key={m.id}>{m.title}</li>
						))}
					</ul>
				</SectionCard>
				<SectionCard
					title="주요 FAQ"
					subtitle="자주 묻는 질문"
					cta={<Link href={`/app/courses/${course.id}/faq`} className="btn">전체 보기</Link>}
				>
					<ul className="space-y-1">
						{faq.map((q) => (
							<li key={q.id}>{q.title} · 조회수 {q.views}</li>
						))}
					</ul>
				</SectionCard>
			</div>
		</div>
	);
}


