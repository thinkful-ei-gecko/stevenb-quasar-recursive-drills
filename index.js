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

const reverseStringAnswer = reverseString('elephant');
console.log(reverseStringAnswer);

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

console.log(stringSplitter('20/20/2020', 's'));

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

// function maze()
