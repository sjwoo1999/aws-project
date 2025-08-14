import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionCard from "@components/shared/SectionCard";

export default function CourseOverviewPage() {
	return (
		<div className="space-y-6">
			<header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
				<div>
					<h1 className="text-lg sm:text-xl font-semibold text-slate-900">딥러닝 개론</h1>
					<p className="text-sm text-slate-500">과목 허브 — 공지, 자료, FAQ, 업데이트</p>
				</div>
				<div className="flex gap-2">
					<Button asChild><Link href="/app/courses/123/chat">질문하기</Link></Button>
					<Button variant="outline" asChild><Link href="/app/courses/123/materials">자료 열기</Link></Button>
					<Button variant="outline" asChild><Link href="/app/courses/123/faq">FAQ 보기</Link></Button>
				</div>
			</header>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				<SectionCard title="최근 공지" subtitle="최신 공지 사항">
					<ul className="list-disc pl-5 space-y-1">
						<li>[과제2] 제출 마감 연장 안내</li>
						<li>[정정] 주차 4 실습 자료 업데이트</li>
					</ul>
				</SectionCard>
				<SectionCard
					title="주요 자료"
					subtitle="강의노트/실습노트"
					cta={<Link href="/app/courses/123/materials" className="btn">전체 보기</Link>}
				>
					<ul className="space-y-1">
						<li>주차 03 — 선형대수 노트.pdf</li>
						<li>주차 04 — 회귀 실습.ipynb</li>
					</ul>
				</SectionCard>
				<SectionCard
					title="주요 FAQ"
					subtitle="자주 묻는 질문"
					cta={<Link href="/app/courses/123/faq" className="btn">전체 보기</Link>}
				>
					<ul className="space-y-1">
						<li>숙제 2 제출 규칙은?</li>
						<li>시험 범위는 어디까지인가요?</li>
					</ul>
				</SectionCard>
			</div>
		</div>
	);
}


