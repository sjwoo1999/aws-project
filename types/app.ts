export type ID = string;

export type Role = "user" | "assistant";

export interface Course {
	id: ID;
	slug: string;
	name: string;
	description?: string;
}

export type MaterialType = "note" | "slide" | "lab" | "faq" | "other";

export interface Material {
	id: ID;
	courseId: ID;
	title: string;
	type: MaterialType;
	fileName: string;
	url: string;
	thumbnailUrl?: string;
	updatedAt: string; // ISO
}

export interface Chunk {
	id: ID;
	materialId: ID;
	content: string;
	page?: number;
	startChar?: number;
	endChar?: number;
}

export interface Citation {
	id: ID;
	title: string;
	snippet?: string;
	url?: string;
	materialId?: ID;
}

export interface Message {
	id: ID;
	role: Role;
	content: string;
	citations?: Citation[];
	createdAt: string; // ISO
}

export interface Conversation {
	id: ID;
	courseId: ID;
	messages: Message[];
	createdAt: string; // ISO
}

export interface FAQItemSummary {
	id: ID;
	title: string;
	summary: string;
	views: number;
	sources: number;
}

export interface FAQCluster {
	id: ID;
	courseId: ID;
	category: "concept" | "code" | "math";
	items: FAQItemSummary[];
}

export interface CourseUpdate {
	id: ID;
	courseId: ID;
	date: string; // ISO
	version: string;
	summary: string;
}

export interface SavedItem {
	id: ID;
	courseId: ID;
	kind: "material" | "faq";
	title: string;
	link: string;
}

export interface AdminKPI {
	totalFiles: number;
	totalTokens: number;
	avgLatencyMs: number;
	failures: number;
}

export interface AdminMonthlyCost {
	month: string; // YYYY-MM
	provider: "bedrock" | "openai" | "anthropic" | "others";
	amountUsd: number;
}


