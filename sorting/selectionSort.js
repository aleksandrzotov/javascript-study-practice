export default(arr) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let indexOfMin = i;
    for (let j = i; j < arr.length; j += 1) {
      if (arr[indexOfMin] > arr[j]) {
        indexOfMin = j;
      }
    }
    const storage = arr[i];
    arr[i] = arr[indexOfMin];
    arr[indexOfMin] = storage;
  }
  return arr;
};
