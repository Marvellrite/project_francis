type stateType = {
  activeArray: {
    position: number;
    active: boolean;
  }[];
};

type actionType = {
  type: string;
  payload: number;
};

const reducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case "make_active": {
      //   const position = action.payload as number;
      let activeArray = state.activeArray;

      activeArray = activeArray.map((active) => {
        if (active.position == action.payload) {
          return { position: active.position, active: true };
        }
        return { ...active, active: false };
      });
      state = { ...state, activeArray: activeArray };
      return state;
      break;
    }
    case "unmake_active": {
      //   const position = action.payload as number;
      let activeArray = state.activeArray;

      activeArray = activeArray.map((active) => {
        return { ...active, active: false };
      });
      state = { ...state, activeArray: activeArray };
      return state;
      break;
    }

    default:
      return state;
  }
};

export default reducer;
