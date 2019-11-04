/* eslint-disable strict */
//1st problem

const sheepCounter = (sheepCount) => {
  if (sheepCount === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }

  console.log(`${sheepCount}: Another sheep jumps over the fence`);
  return sheepCounter(sheepCount - 1);
};

//sheepCounter(3);

//2nd problem

const powerCalculator = (i, exponent) => {
  if (exponent === 0) {
    return 1;
  }
  if (exponent < 0) {
    return 'exponent should be >= 0';
  }

  return i * powerCalculator(i, exponent - 1);
};

//const powerAnswer = powerCalculator(10, 2);
//console.log(powerAnswer);
//const noAnswer = powerCalculator(10, -2);
//console.log(noAnswer);

//3rd problem

const reverseString = (string) => {
  if (!string.length) {
    return '';
  }

  return string[string.length - 1] + reverseString(string.slice(0, string.length - 1));
};

//const reverseStringAnswer = reverseString('elephant');
//console.log(reverseStringAnswer);

//4th problem
function triangularNumber(n) {
  if (n === 1)
    return n;

  return n + triangularNumber(n - 1);
}

/* console.log(`triangularNumber: ${triangularNumber(3)}`);
console.log(`triangularNumber: ${triangularNumber(4)}`);
console.log(`triangularNumber: ${triangularNumber(5)}`);
console.log(`triangularNumber: ${triangularNumber(6)}`);
console.log(`triangularNumber: ${triangularNumber(7)}`);
console.log(`triangularNumber: ${triangularNumber(8)}`); */

// 5. string splitter
function stringSplitter(string, separator) {
  let index = string.indexOf(separator);

  if (index === -1)
    return [string];
  
  return [string.slice(0,index)].concat(
    stringSplitter(
      string.slice(index + separator.length), separator));
}

//console.log(stringSplitter('20/20/2020', 's'));

// 6. fibonacci
function fibonacci(num) {
  if (num===0)
    return 'pick a number greater than or equal to 1'

  if(num<=2)
    return 1;

  return fibonacci(num - 1) + fibonacci(num-2);
}

// 7. factorial
function factorial(num) {
  if(num===0) 
    return 1;
  if(num===1)
    return 1;
  return num * factorial(num-1);
}


// 8. maze

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let myLargeMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const maze = (x = 0, y = 0, mazeArr) => {
  const rows = mazeArr.length -1;
  const columns = mazeArr[0].length -1;

  if (x < 0 || x > columns || y < 0 || y > rows)
    return 'Please use a x and y value >= 0';
  
  if (mazeArr[y][x] === 'e')
    return ` Yay! Reached the goal at ${x}:${y}`;

  if(mazeArr[y][x + 1] !== '*' && x < columns){
    mazeArr[y][x] = '*';
    return 'R' + maze(x+1, y, mazeArr);
  }

  if(mazeArr[y][x - 1] !== '*' && x >= 0){
    mazeArr[y][x] = '*';
    return 'L' + maze(x-1, y, mazeArr);
  }

  if(mazeArr[y + 1][x] !== '*' && y < rows){
    mazeArr[y][x] = '*';
    return 'D' + maze(x, y+1, mazeArr);
  }

  if(mazeArr[y - 1][x] !== '*' && y >= 0){
    mazeArr[y][x] = '*';
    return 'U' + maze(x, y-1, mazeArr);
  }
};

//console.log(maze(0, 0, mySmallMaze));
//console.log(maze(0, 0, myLargeMaze));

// 9. Maze continued...

/* const allExitsMaze = (x, y, solves = 0, mazeArr) => {
  const rows = mazeArr.length -1;
  const columns = mazeArr[0].length -1;

  if (x < 0 || x > columns || y < 0 || y > rows)
    return 'Please use a x and y value >= 0';

  if (mazeArr[y][x] === 'e')
    return ` Yay! Reached the goal at ${x}:${y}`;

  if(mazeArr[y][x + 1] === ' ' && x < columns){
    mazeArr[y][x] = `${solves}`;
    return 'R' + allExitsMaze(x+1, y, mazeArr);
  }

  if(mazeArr[y + 1][x] === ' ' && y < rows){
    mazeArr[y][x] = `${solves}`;
    return 'D' + allExitsMaze(x, y+1, mazeArr);
  }

  if(mazeArr[y][x - 1] === ' ' && x >= 0){
    mazeArr[y][x] = `${solves}`;
    return 'L' + allExitsMaze(x-1, y, mazeArr);
  }

  if(mazeArr[y - 1][x] === ' ' && y >= 0){
    mazeArr[y][x] = `${solves}`;
    return 'U' + allExitsMaze(x, y-1, mazeArr);
  }
}; */

const allExitsMaze = (mazeArr, position = 0, row, column, direction = 'S', path) => {
  if (column < 0 || row < 0)
    return 'Out of bounds!';

  if (column >= mazeArr[0].length || row >= mazeArr.length)
    return 'Out of bounds!';

  path[position] = direction;
  position++;

  if (mazeArr[row][column] === 'e'){
    //console.log(`${path}`);
    printer(path, 1, position - 1);
    return;
  }

  if (mazeArr[row][column] === ' ') {
    mazeArr[row][column] = 's';
    allExitsMaze(mazeArr, position, row, column - 1, 'L', path);
    allExitsMaze(mazeArr, position, row - 1, column, 'U', path);
    allExitsMaze(mazeArr, position, row, column + 1, 'R', path);
    allExitsMaze(mazeArr, position, row + 1, column, 'D', path);
    mazeArr[row][column] = ' ';
  }
  position = position - 1;
}

const printer = (path, startPos, endPos) => {
  console.log('Found path: ');
  console.log(`${path}`);
}
//allExitsMaze(mySmallMaze);
console.log(allExitsMaze(myLargeMaze, 0, 0, 0, '', []));