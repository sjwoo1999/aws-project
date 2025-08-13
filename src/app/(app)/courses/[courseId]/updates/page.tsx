export default function UpdatesPage() {
	return (
		<div className="space-y-6">
			<header>
				<h1 className="text-lg sm:text-xl font-semibold text-slate-900">업데이트 로그</h1>
				<p className="text-sm text-slate-500">학기별/버전별 변경사항 요약</p>
			</header>
			<div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
				<table className="w-full text-left text-sm">
					<thead className="bg-slate-50 text-slate-600">
						<tr>
							<th className="px-4 py-2">날짜</th>
							<th className="px-4 py-2">버전</th>
							<th className="px-4 py-2">내용</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-t">
							<td className="px-4 py-2">2025-03-12</td>
							<td className="px-4 py-2">v1.2</td>
							<td className="px-4 py-2">주차 4 자료 업데이트 및 FAQ 추가</td>
						</tr>
						<tr className="border-t">
							<td className="px-4 py-2">2025-03-05</td>
							<td className="px-4 py-2">v1.1</td>
							<td className="px-4 py-2">주차 3 노트 교정</td>
						</tr>
						<tr className="border-t">
							<td className="px-4 py-2">2025-02-28</td>
							<td className="px-4 py-2">v1.0</td>
							<td className="px-4 py-2">초기 배포</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}


