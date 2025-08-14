"use client";
import { useState } from "react";

export default function Page() {
	const [emailNoti, setEmailNoti] = useState(true);
	const [pushNoti, setPushNoti] = useState(false);
	return (
		<div className="space-y-4">
			<h1 className="text-lg font-semibold text-slate-900">설정</h1>
			<div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
				<label className="flex items-center gap-3 text-sm">
					<input type="checkbox" checked={emailNoti} onChange={(e) => setEmailNoti(e.target.checked)} className="h-4 w-4" />
					이메일 알림 받기
				</label>
				<label className="flex items-center gap-3 text-sm">
					<input type="checkbox" checked={pushNoti} onChange={(e) => setPushNoti(e.target.checked)} className="h-4 w-4" />
					푸시 알림 받기
				</label>
			</div>
		</div>
	);
}


