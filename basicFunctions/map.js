export default(arr, func) => {
  const iter = (curArr, newArr) => {
    if (curArr.length === 0) {
      return newArr;
    }
    const [head, ...tail] = curArr;
    return iter(tail, [...newArr, func(head)]);
  };
  return iter(arr, []);
};
