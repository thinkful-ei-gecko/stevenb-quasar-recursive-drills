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
  if (exponent < 1) {
    console.log('exponent should be >= 0');
    return;
  }

  console.log(i ** exponent);
  powerCalculator(i, exponent - 1);
};

powerCalculator(10, 5);
powerCalculator(10, -2);

//3rd problem