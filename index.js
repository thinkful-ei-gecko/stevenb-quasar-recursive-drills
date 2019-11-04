//1 problem

const sheepCounter = (sheepCount) => {
  if(sheepCount === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }

  console.log(`${sheepCount}: Another sheep jumps over the fence`);
  return sheepCounter(sheepCount - 1);
};

sheepCounter(3);