import addItem from "./addItem";
import details from "./details";
import cartAdd from "./cartAdd";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
  addItem,
  details,
  cartAdd,
});

export default rootReducer;
