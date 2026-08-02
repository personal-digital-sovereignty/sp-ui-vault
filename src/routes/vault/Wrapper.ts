import { mount, unmount } from 'svelte';
import VaultPage from './+page.svelte';

export const mountVault = (target: HTMLElement, props: any) => {
	const component = mount(VaultPage, {
		target,
		props
	});
	return component;
};

export const unmountVault = (component: any) => {
	if (component) {
		unmount(component);
	}
};
