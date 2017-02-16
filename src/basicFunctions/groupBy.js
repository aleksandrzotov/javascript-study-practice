export default(arr, func) => {
  if (arr.length === 0) {
    return {};
  }
  const map = {};
  arr.forEach((elem) => {
    const key = func(elem);
    if (map[key] === undefined) {
      map[key] = [elem];
    } else {
      map[key].push(elem);
    }
  });
  return map;
};
