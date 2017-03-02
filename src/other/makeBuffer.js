export default() => {
  let text = '';
  return (...args) => {
    if (args.length === 0) {
      return text;
    }
    text += args[0];
  };
};
