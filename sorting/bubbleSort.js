export default(arr) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let storage;
    for (let j = 0; j < arr.length - 1; j += 1) {
      storage = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = storage;
      }
    }
  }
  return arr;
};
