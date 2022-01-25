const iniState = [];
const addItem = (state = iniState, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
   
    default:
      return state;
  }
};

export default addItem;
