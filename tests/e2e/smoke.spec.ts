import { test, expect } from '@playwright/test';
test.describe('sp-ui-vault', () => {
	test('vault page loads', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('body')).toBeVisible();
	});
	test('vault route accessible', async ({ page }) => {
		await page.goto('/vault');
		await expect(page.locator('body')).toBeVisible();
	});
});
