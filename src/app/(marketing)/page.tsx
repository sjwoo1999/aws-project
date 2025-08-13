export default function Page() {
	return (
		<main className="mx-auto max-w-5xl px-6 sm:px-10 py-16 sm:py-24">
			<section className="text-center">
				<h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900">
					Majorbot
				</h1>
				<p className="mt-4 text-base sm:text-lg text-slate-600">
					AI 전공 Q&A 챗봇 — 과목 컨텍스트에 특화된 대화형 조교로, 강의자료와 FAQ를 기반으로
					정확한 답변을 제공합니다.
				</p>
				<div className="mt-8 flex justify-center">
					<a href="/app" className="btn btn-primary">
						앱 열기
					</a>
				</div>
			</section>
		</main>
	);
}
