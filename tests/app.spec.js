import { test, expect } from '@playwright/test';

test.describe('Sudoku Solver', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('solves a known puzzle', async ({ page }) => {
    // Fill a simple puzzle (hardcoded)
    const puzzle = [
      [5,3,0,0,7,0,0,0,0],
      [6,0,0,1,9,5,0,0,0],
      [0,9,8,0,0,0,0,6,0],
      [8,0,0,0,6,0,0,0,3],
      [4,0,0,8,0,3,0,0,1],
      [7,0,0,0,2,0,0,0,6],
      [0,6,0,0,0,0,2,8,0],
      [0,0,0,4,1,9,0,0,5],
      [0,0,0,0,8,0,0,7,9]
    ];
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const val = puzzle[r][c];
        if (val) {
          await page.getByTestId(`cell-${r}-${c}`).fill(String(val));
        }
      }
    }
    await page.getByTestId('solve-btn').click();
    // Verify a few solved cells
    await expect(page.getByTestId('cell-0-2')).toHaveValue('4');
    await expect(page.getByTestId('cell-4-4')).toHaveValue('5');
    await expect(page.getByTestId('cell-8-8')).toHaveValue('9');
  });
});

test('page loads without console errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto('/');
  await expect(page.locator('body')).toBeVisible();
  expect(errors).toEqual([]);
});
