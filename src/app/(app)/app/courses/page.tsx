import Link from "next/link";
import { courses } from "@data/mock";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Page() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
			{courses.map((c) => (
				<Link key={c.id} href={`/app/courses/${c.id}`}>
					<Card className="h-full">
						<CardHeader>
							<h3 className="text-base font-semibold text-slate-900">{c.name}</h3>
							<p className="mt-1 text-sm text-slate-600">{c.description}</p>
						</CardHeader>
						<CardContent className="text-sm text-slate-700">최근 업데이트된 자료를 확인해보세요.</CardContent>
					</Card>
				</Link>
			))}
		</div>
	);
}


