"use client";
import { updates } from "@data/mock";
import { useParams } from "next/navigation";
import { formatDate } from "@/../lib/format";

export default function UpdatesPage() {
    const { courseId } = useParams<{ courseId: string }>();
    const rows = updates.filter(u => u.courseId === courseId);
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
                        {rows.map(r => (
                            <tr key={r.id} className="border-t">
                                <td className="px-4 py-2">{formatDate(r.date)}</td>
                                <td className="px-4 py-2">{r.version}</td>
                                <td className="px-4 py-2">{r.summary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


