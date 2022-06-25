import { ACTION_TYPES } from "./actionTypes";

export const reducer = (prevState, action) => {
  console.log(prevState, action);

  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      return { ...prevState, count: prevState.count + 1 };
    }

    case ACTION_TYPES.DECRAMENT: {
      return { ...prevState, count: prevState.count - 1 };
    }

    default: {
      return prevState;
    }
  }
};
