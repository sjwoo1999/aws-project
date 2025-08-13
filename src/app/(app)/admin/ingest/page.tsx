import UploadPane from "../../../../../components/admin/UploadPane";
import IndexStatus from "../../../../../components/admin/IndexStatus";

export default function IngestPage() {
	return (
		<div className="space-y-6">
			<header>
				<h1 className="text-lg sm:text-xl font-semibold text-slate-900">Admin · Ingest</h1>
				<p className="text-sm text-slate-500">파일 업로드와 인덱싱 상태를 확인합니다</p>
			</header>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<UploadPane />
				<IndexStatus />
			</div>
		</div>
	);
}


