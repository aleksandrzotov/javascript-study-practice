export default(...args) => {
  if (args.length === 0) {
    return [];
  }
  const minLength = Math.min(...args.map(item => item.length));
  const alignedArgs = args.map(item => item.slice(0, minLength));
  return alignedArgs[0].map((item, index) => [...args.map(elem => elem[index])]);
};
