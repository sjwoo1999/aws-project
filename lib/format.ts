export function formatDate(date: string | number | Date): string {
	const d = new Date(date);
	if (Number.isNaN(d.getTime())) return "";
	return new Intl.DateTimeFormat("ko-KR", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	}).format(d);
}

export function formatBytes(bytes: number): string {
	if (bytes === 0) return "0 B";
	const k = 1024;
	const sizes = ["B", "KB", "MB", "GB", "TB"];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	const value = bytes / Math.pow(k, i);
	return `${value.toFixed(value >= 10 || i === 0 ? 0 : 1)} ${sizes[i]}`;
}

export function trunc(text: string, max = 80): string {
	if (text.length <= max) return text;
	return text.slice(0, Math.max(0, max - 1)) + "…";
}


