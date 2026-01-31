import { test, expect } from '@playwright/test';

test.describe('AppComponent E2E', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200');
  });

  test('should display app title', async ({ page }) => {
    const title = page.getByTestId('title');

    await expect(title).toHaveText('Angular 19 App');
  });

  test('should increment counter when button clicked', async ({ page }) => {
    const counter = page.getByTestId('counter');
    const button = page.getByTestId('increment-btn');

    await expect(counter).toHaveText('0');

    await button.click();

    await expect(counter).toHaveText('1');
  });

});
