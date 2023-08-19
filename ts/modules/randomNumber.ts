const randomNumber = (limit: number) => {
  const result = Math.round(Math.random() * limit);
  return result;
};

export default randomNumber;
