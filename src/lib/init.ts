export interface ModuleAPI {
	apiBaseUrl: string;
	ollamaBaseUrl: string;
	workspaceId: string;
}

export function initModule(container: HTMLElement, api: ModuleAPI): void {
	console.log('Module initialized:', container, api);
}

export const contract = {
	name: 'sp-ui-module',
	version: '0.1.0',
	moduleType: 'module',
	init: initModule,
	components: {},
};
