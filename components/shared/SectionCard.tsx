import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type SectionCardProps = {
	title: string;
	subtitle?: string;
	cta?: ReactNode;
	children?: ReactNode;
};

export default function SectionCard({ title, subtitle, cta, children }: SectionCardProps) {
	return (
		<Card>
			<CardHeader className="flex items-start justify-between gap-3">
				<div>
					<h3 className="text-base font-semibold text-slate-900">{title}</h3>
					{subtitle ? (
						<p className="mt-1 text-sm text-slate-600">{subtitle}</p>
					) : null}
				</div>
				{cta ? <div className="flex-shrink-0">{cta}</div> : null}
			</CardHeader>
			{children ? <CardContent className="text-sm text-slate-700">{children}</CardContent> : null}
		</Card>
	);
}


