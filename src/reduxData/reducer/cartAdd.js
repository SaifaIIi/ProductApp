const iniVal = [];
const cartAdd = (state = iniVal, action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
      case "remove":
        return action.payload;
      case "addPluse":
        return action.payload;
      case "removeMines":
        return action.payload;
      case "removeAll":
        return action.payload;

    default:
      return state;
  }
};

export default cartAdd;
