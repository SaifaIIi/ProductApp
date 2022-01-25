const iniState = {};
const details = (state = iniState, action) => {
  switch (action.type) {
    case "details":
      return action.payload;

    default:
      return state;
  }
};

export default details;
