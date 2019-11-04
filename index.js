//1st problem

const sheepCounter = (sheepCount) => {
  if(sheepCount === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }

  console.log(`${sheepCount}: Another sheep jumps over the fence`);
  return sheepCounter(sheepCount - 1);
};

//sheepCounter(3);

//2nd problem

const powerCalculator = (i, exponent) => {
  if (exponent <= 0) {
    console.log('exponent should be >= 0');
    return;
  }
  
  return i * powerCalculator(i, exponent - 1);
};

//powerCalculator(10, 2);
//powerCalculator(10, -2);

//3rd problem

const reverseString = (string) => {
  if (!string.length) {
    return '';
  }

  const newString = string[string.length - 1]  + reverseString(string.slice(0, string.length));
  console.log(newString);
}

//reverseString('elephant');