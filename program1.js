const getTotalIsles = function (grid) {

  if (!grid || grid.length === 0) return 0;

  let numIslands = 0;

  const rows = grid.length;
  const cols = grid[0].length;

  // Helper function to perform DFS and mark visited landmasses.
  function dfs(row, col) {
      if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 'W') {
          return;
      }

      // Mark the current landmass as water to prevent re-visiting it.
      grid[row][col] = 'W';

      // Explore the neighboring landmasses (up, down, left, right)
      dfs(row - 1, col); // up
      dfs(row + 1, col); // down
      dfs(row, col - 1); // left
      dfs(row, col + 1); // right
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


};

module.exports = getTotalIsles;