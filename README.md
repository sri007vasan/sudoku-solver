# Sudoku Solver

A simple static web app that solves 9×9 Sudoku puzzles.  
Enter numbers (1‑9) into the grid, leave blanks for empty cells, and click **Solve** to see the completed puzzle.

## Features

- Pure HTML/CSS/JavaScript – no build step or server code.
- Responsive layout that works on mobile (≥360 px) and desktop.
- Accessible: labeled inputs, visible focus states, keyboard‑friendly.
- Uses a backtracking algorithm to solve puzzles instantly.

## Run locally

```bash
npx http-server .
```

Open `http://localhost:8080` (or the port shown) in your browser.

## Run tests

```bash
npm install
npx playwright install chromium
npm test
```

The Playwright tests verify that the solver works on a known puzzle and that the page loads without console errors.

--- 
Enjoy solving Sudoku puzzles!
