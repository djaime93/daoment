import { writable } from 'svelte/store';

const walletStore = writable({
	metamask: undefined,
	account: undefined,
	connected: false
});

export default walletStore;
