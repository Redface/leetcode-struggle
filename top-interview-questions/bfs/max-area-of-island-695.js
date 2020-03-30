/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0;

  const bfs = (grid, row, col) => {
    if (row < 0 || row >= grid.length ||
      col < 0 || col >= grid[row].length ||
      grid[row][col] === 0
    ) return 0;
    grid[row][col] = 0;
    return 1 + bfs(grid, row -1, col) + bfs(grid, row, col+1) + bfs(grid, row+1,col) + bfs(grid, row, col-1);
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        max = Math.max(max, bfs(grid, row, col));
      }
    }
  }
  return max;
};
