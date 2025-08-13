"use client";

import { useSyncExternalStore } from "react";

export type ChatUIState = {
	openCitations: boolean;
};

type ChatStore = {
	getState: () => ChatUIState;
	subscribe: (listener: () => void) => () => void;
	openCitations: () => void;
	closeCitations: () => void;
	toggleCitations: () => void;
};

function createChatStore(): ChatStore {
	let state: ChatUIState = { openCitations: false };
	const listeners = new Set<() => void>();

	const setState = (partial: Partial<ChatUIState>) => {
		state = { ...state, ...partial };
		listeners.forEach((l) => l());
	};

	return {
		getState: () => state,
		subscribe: (listener) => {
			listeners.add(listener);
			return () => listeners.delete(listener);
		},
		openCitations: () => setState({ openCitations: true }),
		closeCitations: () => setState({ openCitations: false }),
		toggleCitations: () => setState({ openCitations: !state.openCitations }),
	};
}

const chatStore = createChatStore();

export function useChatStore() {
	const snapshot = useSyncExternalStore(
		chatStore.subscribe,
		chatStore.getState,
		chatStore.getState
	);
	return Object.assign({}, snapshot, {
		openCitationsPanel: chatStore.openCitations,
		closeCitationsPanel: chatStore.closeCitations,
		toggleCitationsPanel: chatStore.toggleCitations,
	});
}


