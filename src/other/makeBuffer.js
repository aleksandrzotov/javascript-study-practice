export default() => {
  let text = '';
  const buffer = (...args) => {
    if (args.length === 0) {
      return text;
    }
    text += args[0];
  };
  buffer.clear = function () {
    text = '';
  };
  return buffer;
};
