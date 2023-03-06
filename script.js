const maze = document.getElementById('maze');
const startBtn = document.getElementById('start-btn');
let cells = [];
let startCell;
let endCell;

// Function to generate a new maze
function generateMaze() {
  console.log('Generating maze...');

  // Clear the maze
  maze.innerHTML = '';

  // Create the cells array
  cells = [];

  // Create the grid of cells
  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      row.push(cell);
      maze.appendChild(cell);
    }
    cells.push(row);
  }

  // Set the starting and ending cells
  startCell = cells[0][0];
  startCell.classList.add('start');
  endCell = cells[9][9];
  endCell.classList.add('end');

  console.log('Maze generated!');
}
function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function handleInput(event) {
    const cell = event.target;
    if (cell === endCell) {
      const email = prompt('Congratulations! Enter your email address to receive your prize:');
      // TODO: Send email to the winner
    } else if (!cell.classList.contains('wall')) {
      if (cell === startCell || cell.classList.contains('visited')) {
        // Player is trying to move to their current position or a visited cell
        return;
      }
      const currentRow = cells.findIndex(row => row.includes(cell));
      const currentCol = cells[currentRow].findIndex(col => col === cell);
      const lastVisited = document.querySelector('.visited');
      const lastRow = cells.findIndex(row => row.includes(lastVisited));
      const lastCol = cells[lastRow].findIndex(col => col === lastVisited);
      if (
        (currentRow === lastRow && Math.abs(currentCol - lastCol) === 1) ||
        (currentCol === lastCol && Math.abs(currentRow - lastRow) === 1)
      ) {
        // Move the player to the new cell
        cell.classList.add('visited');
        lastVisited.classList.remove('visited');
      }
    }
  }

// Event listener for the start button
startBtn.addEventListener('click', function() {
  console.log('Start button clicked!');
  generateMaze();
});

// Event listener for user input
maze.addEventListener('click', handleInput);
