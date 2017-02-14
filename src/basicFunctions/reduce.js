export default(acc, arr, func) => {
  const iter = (curArr, acc) => {
    if (curArr.length === 0) {
      return acc;
    }
    const [head, ...tail] = curArr;
    return iter(tail, func(acc, head));
  };
  return iter(arr, acc);
};
