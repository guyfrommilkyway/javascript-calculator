const isOperatorKey = (char) => {
  const operatorArray = ['+', '-', '*', '/', '%'];
  const isOperatorKey = operatorArray.includes(char);

  return isOperatorKey ? true : false;
};

export default isOperatorKey;
