import { Course, Material, Conversation, Citation, FAQCluster, CourseUpdate, SavedItem, AdminKPI, AdminMonthlyCost } from "../types/app";

export const courses: Course[] = [
	{ id: "c-algo", slug: "algorithms", name: "알고리즘", description: "알고리즘 설계와 분석" },
	{ id: "c-net", slug: "computer-networks", name: "컴퓨터네트워크", description: "계층과 프로토콜" },
	{ id: "c-ds", slug: "data-structures", name: "자료구조", description: "기본 자료구조와 응용" },
	{ id: "c-os", slug: "operating-systems", name: "운영체제", description: "프로세스/메모리/파일 시스템" },
	{ id: "c-ai", slug: "artificial-intelligence", name: "인공지능", description: "지식표현/추론/학습 개요" },
	{ id: "c-cc", slug: "compilers", name: "컴파일러", description: "어휘/구문/의미 분석과 코드 생성" },
];

export const materials: Material[] = [
	{ id: "m-algo-1", courseId: "c-algo", title: "주차 01 — 분할정복 노트", type: "note", fileName: "w01-divide-and-conquer.pdf", url: "/files/w01-dac.pdf", thumbnailUrl: "/thumbnails/w01.png", updatedAt: new Date().toISOString() },
	{ id: "m-algo-2", courseId: "c-algo", title: "주차 02 — 탐욕법 슬라이드", type: "slide", fileName: "w02-greedy.pdf", url: "/files/w02-greedy.pdf", thumbnailUrl: "/thumbnails/w02.png", updatedAt: new Date().toISOString() },

	{ id: "m-ds-1", courseId: "c-ds", title: "주차 01 — 배열/리스트 노트", type: "note", fileName: "w01-array-list.pdf", url: "/files/w01-array.pdf", thumbnailUrl: "/thumbnails/w01.png", updatedAt: new Date().toISOString() },
	{ id: "m-ds-2", courseId: "c-ds", title: "주차 02 — 해시 슬라이드", type: "slide", fileName: "w02-hash.pdf", url: "/files/w02-hash.pdf", thumbnailUrl: "/thumbnails/w02.png", updatedAt: new Date().toISOString() },

	{ id: "m-net-1", courseId: "c-net", title: "주차 01 — TCP/IP 개요", type: "slide", fileName: "w01-tcpip.pdf", url: "/files/w01-tcpip.pdf", thumbnailUrl: "/thumbnails/w01.png", updatedAt: new Date().toISOString() },
	{ id: "m-net-2", courseId: "c-net", title: "주차 02 — 라우팅 실습", type: "lab", fileName: "w02-routing.ipynb", url: "/files/w02-routing.ipynb", thumbnailUrl: "/thumbnails/w02.png", updatedAt: new Date().toISOString() },

	{ id: "m-os-1", courseId: "c-os", title: "주차 01 — 프로세스/스레드 노트", type: "note", fileName: "w01-process-thread.pdf", url: "/files/w01-pt.pdf", thumbnailUrl: "/thumbnails/w01.png", updatedAt: new Date().toISOString() },
	{ id: "m-os-2", courseId: "c-os", title: "주차 02 — 스케줄링 슬라이드", type: "slide", fileName: "w02-scheduling.pdf", url: "/files/w02-scheduling.pdf", thumbnailUrl: "/thumbnails/w02.png", updatedAt: new Date().toISOString() },

	{ id: "m-ai-1", courseId: "c-ai", title: "주차 01 — 탐색 알고리즘 노트", type: "note", fileName: "w01-search.pdf", url: "/files/w01-search.pdf", thumbnailUrl: "/thumbnails/w01.png", updatedAt: new Date().toISOString() },
	{ id: "m-ai-2", courseId: "c-ai", title: "주차 02 — 확률과 베이지안", type: "slide", fileName: "w02-bayes.pdf", url: "/files/w02-bayes.pdf", thumbnailUrl: "/thumbnails/w02.png", updatedAt: new Date().toISOString() },

	{ id: "m-cc-1", courseId: "c-cc", title: "주차 01 — 어휘/구문 분석", type: "note", fileName: "w01-lexer-parser.pdf", url: "/files/w01-lexer-parser.pdf", thumbnailUrl: "/thumbnails/w01.png", updatedAt: new Date().toISOString() },
	{ id: "m-cc-2", courseId: "c-cc", title: "주차 02 — 중간표현/IR", type: "slide", fileName: "w02-ir.pdf", url: "/files/w02-ir.pdf", thumbnailUrl: "/thumbnails/w02.png", updatedAt: new Date().toISOString() },
];

export const citations: Citation[] = [
	{ id: "ct-algo-1", title: "분할정복 노트", url: "/files/w01-dac.pdf", materialId: "m-algo-1" },
	{ id: "ct-ds-1", title: "배열/리스트 노트", url: "/files/w01-array.pdf", materialId: "m-ds-1" },
	{ id: "ct-net-1", title: "TCP/IP 개요", url: "/files/w01-tcpip.pdf", materialId: "m-net-1" },
	{ id: "ct-ai-1", title: "탐색 알고리즘 노트", url: "/files/w01-search.pdf", materialId: "m-ai-1" },
	{ id: "ct-cc-1", title: "어휘/구문 분석 노트", url: "/files/w01-lexer-parser.pdf", materialId: "m-cc-1" },
];

export const conversations: Conversation[] = [
	{
		id: "conv-algo-1",
		courseId: "c-algo",
		createdAt: new Date().toISOString(),
		messages: [
			{ id: "u1", role: "user", content: "분할정복 핵심만 알려줘", createdAt: new Date().toISOString() },
			{ id: "a1", role: "assistant", content: "문제를 작은 하위 문제로 나눠 병합합니다.", citations: [citations[0]], createdAt: new Date().toISOString() },
		],
	},
	{
		id: "conv-ds-1",
		courseId: "c-ds",
		createdAt: new Date().toISOString(),
		messages: [
			{ id: "u2", role: "user", content: "배열과 리스트 차이?", createdAt: new Date().toISOString() },
			{ id: "a2", role: "assistant", content: "연속/비연속, 접근/삽입 삭제 특성이 다릅니다.", citations: [citations[1]], createdAt: new Date().toISOString() },
		],
	},
	{
		id: "conv-ai-1",
		courseId: "c-ai",
		createdAt: new Date().toISOString(),
		messages: [
			{ id: "u3", role: "user", content: "A*랑 BFS 차이?", createdAt: new Date().toISOString() },
			{ id: "a3", role: "assistant", content: "A*는 휴리스틱을 사용해 탐색을 가속합니다.", citations: [citations[3]], createdAt: new Date().toISOString() },
		],
	},
	{
		id: "conv-cc-1",
		courseId: "c-cc",
		createdAt: new Date().toISOString(),
		messages: [
			{ id: "u4", role: "user", content: "LL(1)과 LR(1) 차이?", createdAt: new Date().toISOString() },
			{ id: "a4", role: "assistant", content: "탑다운/바텀업 파싱 전략의 차이입니다.", citations: [citations[4]], createdAt: new Date().toISOString() },
		],
	},
];

export const faqClusters: FAQCluster[] = [
	{
		id: "fc-algo-concept",
		courseId: "c-algo",
		category: "concept",
		items: [
			{ id: "q-algo-1", title: "탐욕 vs 분할정복", summary: "선택 기준 vs 분해/정복", views: 531, sources: 3 },
			{ id: "q-algo-2", title: "빅오 표기법 요약", summary: "성능 분석 기본", views: 410, sources: 2 },
		],
	},
	{
		id: "fc-ds-concept",
		courseId: "c-ds",
		category: "concept",
		items: [
			{ id: "q-ds-1", title: "배열 vs 연결리스트", summary: "접근/삽입 삭제 비교", views: 620, sources: 2 },
			{ id: "q-ds-2", title: "해시 충돌 처리", summary: "체이닝/오픈어드레싱", views: 280, sources: 1 },
		],
	},
	{
		id: "fc-os-code",
		courseId: "c-os",
		category: "code",
		items: [
			{ id: "q-os-1", title: "스케줄러 구현 팁", summary: "큐/우선순위", views: 120, sources: 1 },
		],
	},
	{
		id: "fc-ai-concept",
		courseId: "c-ai",
		category: "concept",
		items: [
			{ id: "q-ai-1", title: "BFS/DFS/A* 비교", summary: "완전성/최적성/시간복잡도", views: 345, sources: 2 },
			{ id: "q-ai-2", title: "베이즈 정리 직관", summary: "사후확률 업데이트", views: 210, sources: 2 },
		],
	},
	{
		id: "fc-cc-concept",
		courseId: "c-cc",
		category: "concept",
		items: [
			{ id: "q-cc-1", title: "파싱 기법 비교", summary: "LL/LR의 차이", views: 198, sources: 1 },
			{ id: "q-cc-2", title: "IR의 역할", summary: "최적화/타깃 독립성", views: 156, sources: 1 },
		],
	},
];

export const updates: CourseUpdate[] = [
	{ id: "u-algo-1", courseId: "c-algo", date: new Date().toISOString(), version: "v1.2", summary: "탐욕법 슬라이드 보완" },
	{ id: "u-ds-1", courseId: "c-ds", date: new Date().toISOString(), version: "v1.1", summary: "해시 슬라이드 오탈자 수정" },
	{ id: "u-os-1", courseId: "c-os", date: new Date().toISOString(), version: "v1.0", summary: "초기 배포" },
];

export const saved: SavedItem[] = [
	{ id: "s1", courseId: "c-algo", kind: "material", title: "분할정복 노트", link: "/app/courses/c-algo/materials/m-algo-1" },
	{ id: "s2", courseId: "c-ds", kind: "faq", title: "배열 vs 연결리스트", link: "/app/courses/c-ds/faq/q-ds-1" },
];

export const adminKPI: AdminKPI = {
	totalFiles: 128,
	totalTokens: 1_250_000,
	avgLatencyMs: 730,
	failures: 2,
};

export const adminMonthlyCosts: AdminMonthlyCost[] = [
	{ month: "2025-02", provider: "bedrock", amountUsd: 42.5 },
	{ month: "2025-02", provider: "openai", amountUsd: 68.2 },
	{ month: "2025-02", provider: "anthropic", amountUsd: 31.8 },
	{ month: "2025-02", provider: "others", amountUsd: 10.0 },
];


