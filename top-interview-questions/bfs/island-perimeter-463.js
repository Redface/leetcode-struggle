/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  const bfs = (row, col) => {
    if (row < 0 || row >= grid.length ||
      col < 0 || col >= grid[row].length ||
      grid[row][col] === 0) {
      return 1;
    }
    if (grid[row][col] === -1) return 0;
    grid[row][col] = -1;
    return bfs(row - 1, col) + bfs(row, col + 1) + bfs(row + 1, col) + bfs(row, col - 1);
  };
  let perimeter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        perimeter += bfs(row, col);
      }
    }
  }
  return perimeter;
};
