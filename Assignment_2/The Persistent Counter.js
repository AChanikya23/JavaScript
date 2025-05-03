function createCounter() {
  let count = 0;
  function incrementCounter() {
  count++;
  return count;
  }
  return incrementCounter;
  }
  const counterA = createCounter();
  console.log(counterA()); 
  console.log(counterA()); 
  const counterB = createCounter();
  console.log(counterB());