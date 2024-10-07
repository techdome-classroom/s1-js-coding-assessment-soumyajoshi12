const getTotalIsles = function (grid) {

  if (!grid || grid.length === 0) return 0;

  let numIslands = 0;

  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(row, col) {
      if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 'W') {
          return;
      }

      grid[row][col] = 'W';

      dfs(row - 1, col);
      dfs(row + 1, col); 
      dfs(row, col - 1); 
      dfs(row, col + 1); 
  }

  // Iterate over every cell in the grid
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          // When we encounter an unvisited landmass, it means we've found a new island.
          if (grid[i][j] === 'L') {
              numIslands += 1;
              // Perform DFS to mark the entire island as visited.
              dfs(i, j);
          }
      }
  }

  return numIslands;
}

module.exports = getTotalIsles;