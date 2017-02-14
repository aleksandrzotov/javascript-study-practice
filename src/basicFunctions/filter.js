export default(arr, func) => {
  const iter = (curArr, newArr) => {
    if (curArr.length === 0) {
      return newArr;
    }
    const [head, ...tail] = curArr;
    if (func(head)) {
      return iter(tail, [...newArr, head]);
    }
    return iter(tail, newArr);
  };
  return iter(arr, []);
};
