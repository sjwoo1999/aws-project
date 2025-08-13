"use client";

import { useSyncExternalStore } from "react";

type UIState = {
	openDrawer: boolean;
};

type UIStore = {
	getState: () => UIState;
	subscribe: (listener: () => void) => () => void;
	openDrawer: () => void;
	closeDrawer: () => void;
	toggleDrawer: () => void;
};

function createUIStore(): UIStore {
	let state: UIState = { openDrawer: false };
	const listeners = new Set<() => void>();

	const setState = (partial: Partial<UIState>) => {
		state = { ...state, ...partial };
		listeners.forEach((l) => l());
	};

	return {
		getState: () => state,
		subscribe: (listener) => {
			listeners.add(listener);
			return () => listeners.delete(listener);
		},
		openDrawer: () => setState({ openDrawer: true }),
		closeDrawer: () => setState({ openDrawer: false }),
		toggleDrawer: () => setState({ openDrawer: !state.openDrawer }),
	};
}

const uiStore = createUIStore();

export function useUIStore() {
	const snapshot = useSyncExternalStore(uiStore.subscribe, uiStore.getState, uiStore.getState);
	return Object.assign({}, snapshot, {
		openDrawer: uiStore.openDrawer,
		closeDrawer: uiStore.closeDrawer,
		toggleDrawer: uiStore.toggleDrawer,
	});
}


