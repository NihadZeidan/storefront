import { createStore, combineReducers } from "redux";
import CatReducer from "./CategoryStore";
import ProductReducer from "./ProductsStore";
import CartReducer from "./CartReducer";

let reducers = combineReducers({
  CatReducer,
  ProductReducer,
  CartReducer,
});

const myStore = () => {
  return createStore(reducers);
};

export default myStore();
