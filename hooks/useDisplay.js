// import packages below
import { useReducer, useCallback } from 'react';

// import helpers below
import isOperatorKey from '@/helpers/is-operator';

// constant variables
const CALCULATE = 'CALCULATE';
const APPEND = 'APPEND';
const DELETE = 'DELETE';
const CLEAR = 'CLEAR';
const ERROR = 'ERROR';

const displayReducer = (state, action) => {
  const len = state.length;
  const data = action.data;
  const first = state[0];
  const last = state[len - 1];
  const secondLast = state[len - 2];
  const numsArr = state.split(/[+\-\%\*\/]/);
  const lastItem = numsArr[numsArr.length - 1];
  const deducted = state.slice(0, len - 1);

  switch (action.type) {
    case CALCULATE:
      try {
        const expression = [];

        for (let k = 0; k < state.length; k++) {
          const lastItemAdded = expression[expression.length - 1];

          if (
            isOperatorKey(state[k]) &&
            state[k] !== '-' &&
            isOperatorKey(lastItemAdded) &&
            lastItemAdded !== '-'
          ) {
            expression.pop();
            expression.push(state[k]);
            continue;
          }

          if (state[k] === '-') {
            expression.push(` ${state[k]}`);
            continue;
          }

          expression.push(state[k]);
        }

        const answer = eval(expression.join('')).toString();
        console.log(`%c Answer: ${answer}`, 'color: green');
        return answer;
      } catch (error) {
        console.log('%c Error: Invalid expression', 'color: red');
        return ERROR;
      }
    case APPEND:
      // detect ERROR
      if (state === ERROR) return action.data;

      // detect zero
      if (first === '0' && len === 1 && data === '0') return '0';
      if (first === '0' && len === 1 && data !== '.') return action.data;

      // detect decimal
      if (data === '.' && lastItem.includes('.')) return state;

      // detect operator
      if (isOperatorKey(last) && isOperatorKey(data) && data !== '-')
        return deducted.concat(data);

      // detect negative
      if (data === '-' && last === '-' && secondLast === '-') return state;

      return state.concat(data);
    case DELETE:
      // error handling
      if (len === 1) return '0';

      return deducted;
    case CLEAR:
      return '0';
    default:
      return state;
  }
};

const useDisplay = () => {
  const [display, dispatchDisplay] = useReducer(displayReducer, '0');

  const calculateHandler = useCallback(() =>
    dispatchDisplay({ type: CALCULATE })
  );

  const addHandler = useCallback((data) =>
    dispatchDisplay({ type: APPEND, data })
  );

  const deleteHandler = useCallback(() => dispatchDisplay({ type: DELETE }));

  const clearHandler = useCallback(() => dispatchDisplay({ type: CLEAR }));

  return { display, calculateHandler, addHandler, deleteHandler, clearHandler };
};

export default useDisplay;
