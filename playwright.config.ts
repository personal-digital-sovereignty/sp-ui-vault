import type { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
	webServer: { command: 'npm run build && npm run preview', port: 4173 },
	testDir: 'tests/e2e',
	projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
};
export default config;
