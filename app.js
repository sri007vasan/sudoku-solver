document.addEventListener('DOMContentLoaded', () => {
  const solveBtn = document.getElementById('solveBtn');
  solveBtn.addEventListener('click', () => {
    const board = [];
    for (let r = 0; r < 9; r++) {
      const row = [];
      for (let c = 0; c < 9; c++) {
        const val = document.querySelector(`[data-testid="cell-${r}-${c}"]`).value;
        row.push(val ? parseInt(val, 10) : 0);
      }
      board.push(row);
    }
    if (solveSudoku(board)) {
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          document.querySelector(`[data-testid="cell-${r}-${c}"]`).value = board[r][c];
        }
      }
    } else {
      alert('No solution found.');
    }
  });
});

function solveSudoku(board) {
  const empty = findEmpty(board);
  if (!empty) return true;
  const [r, c] = empty;
  for (let num = 1; num <= 9; num++) {
    if (isValid(board, r, c, num)) {
      board[r][c] = num;
      if (solveSudoku(board)) return true;
      board[r][c] = 0;
    }
  }
  return false;
}

function findEmpty(board) {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === 0) return [r, c];
    }
  }
  return null;
}

function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) return false;
  }
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let r = startRow; r < startRow + 3; r++) {
    for (let c = startCol; c < startCol + 3; c++) {
      if (board[r][c] === num) return false;
    }
  }
  return true;
}
