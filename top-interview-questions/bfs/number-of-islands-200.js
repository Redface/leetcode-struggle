/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const bfs = (grid, row, col) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === '0') return;

    grid[row][col] = '0';
    bfs(grid, row + 1, col); // top
    bfs(grid, row, col + 1); // right
    bfs(grid, row - 1, col); // bottom
    bfs(grid, row, col - 1); // left
  }

  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        count++;
        bfs(grid, row, col);
      }
    }
  }
  return count;
};
// [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
