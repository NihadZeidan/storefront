import { createStore, combineReducers } from "redux";
import CatReducer from "./CategoryStore";
import ProductReducer from "./ProductsStore";

let reducers = combineReducers({ CatReducer, ProductReducer });

const myStore = () => {
  return createStore(reducers);
};

export default myStore();
