import { Course, Material, Conversation, Citation, FAQCluster } from "../types/app";

export const courses: Course[] = [
	{ id: "c1", slug: "dl-intro", name: "딥러닝 개론", description: "신경망 기초와 응용" },
	{ id: "c2", slug: "algo-1", name: "알고리즘 1", description: "기본 자료구조와 알고리즘" },
];

export const materials: Material[] = [
	{
		id: "m1",
		courseId: "c1",
		title: "주차 03 — 선형대수 노트",
		type: "note",
		fileName: "week03-notes.pdf",
		url: "/files/week03-notes.pdf",
		thumbnailUrl: "/thumbnails/week03.png",
		updatedAt: new Date().toISOString(),
	},
	{
		id: "m2",
		courseId: "c1",
		title: "주차 04 — 회귀 실습",
		type: "lab",
		fileName: "week04-lab.ipynb",
		url: "/files/week04-lab.ipynb",
		thumbnailUrl: "/thumbnails/week04.png",
		updatedAt: new Date().toISOString(),
	},
];

export const citations: Citation[] = [
	{ id: "ct1", title: "주차 03: 선형대수 — 노트", url: "/files/week03-notes.pdf", materialId: "m1" },
	{ id: "ct2", title: "FAQ: 숙제 2 제출", url: "/faq/submit2" },
];

export const conversations: Conversation[] = [
	{
		id: "conv1",
		courseId: "c1",
		createdAt: new Date().toISOString(),
		messages: [
			{ id: "u1", role: "user", content: "주차 3 핵심 요약", createdAt: new Date().toISOString() },
			{ id: "a1", role: "assistant", content: "벡터공간/기저/차원이 핵심", citations, createdAt: new Date().toISOString() },
		],
	},
];

export const faqClusters: FAQCluster[] = [
	{
		id: "fc1",
		courseId: "c1",
		category: "concept",
		items: [
			{ id: "q1", title: "숙제 2 제출 규칙", summary: "포맷/마감", views: 231, sources: 3 },
			{ id: "q2", title: "행렬 미분 규칙", summary: "기본 규칙", views: 180, sources: 2 },
		],
	},
];


